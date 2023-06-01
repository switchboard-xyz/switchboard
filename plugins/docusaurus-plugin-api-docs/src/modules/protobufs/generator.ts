import type {
  ParsedProtobufMessage,
  ProtobufVersionMetadata,
  Protobufs,
  ProtobufJson,
  Message,
  ParsedProtobufEnum,
} from "./types";
import {
  Generator,
  type GeneratorContext,
  type GeneratorType,
  type VersionMetadata,
} from "../../types";
import path from "path";
import fs from "fs";

import logger from "@docusaurus/logger";
import { normalizeUrl } from "@docusaurus/utils";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
import type { RouteConfig } from "@docusaurus/types";
import { capitalizeWords, getComponentPath } from "../../utils";

const DISABLED_TASK_TYPES = [
  "HistoryFunctionTask",
  "MangoPerpMarketTask",
  "PerpMarketTask",
  "VwapTask",
];

export class ProtobufGenerator extends Generator<ProtobufVersionMetadata> {
  type: GeneratorType = "protos";

  constructor(
    context: GeneratorContext,
    readonly loadedVersions: ProtobufVersionMetadata[],
    readonly protobufs: Protobufs
  ) {
    super(context);
  }

  public static async load(
    context: GeneratorContext,
    versionsMetadata: VersionMetadata[]
  ): Promise<ProtobufGenerator> {
    const jsonProtoPath = path.join(
      context.siteDir,
      context.options.protobufJson ?? "protos.json"
    );
    const json: ProtobufJson = fs.existsSync(jsonProtoPath)
      ? JSON.parse(fs.readFileSync(jsonProtoPath, "utf-8"))
      : { files: [] };

    logger.info(`Found ${json.files.length} proto files`);

    const tasks: ParsedProtobufMessage[] = [];
    let oracleJob: ParsedProtobufMessage | undefined = undefined;
    let oracleJobTask: ParsedProtobufMessage | undefined = undefined;
    const links = new Map<string, string>();
    for (const file of json.files) {
      const jobProtoIdx = file.messages.findIndex(
        (m) => m.name === "OracleJob"
      );
      if (jobProtoIdx !== -1) {
        oracleJob = parseTask(file.messages[jobProtoIdx]);
        links.set(oracleJob.name, oracleJob.permalink);
      }
      const taskProtoIdx = file.messages.findIndex((m) => m.name === "Task");
      if (taskProtoIdx !== -1) {
        oracleJobTask = parseTask(file.messages[taskProtoIdx]);
        links.set(oracleJobTask.name, oracleJobTask.permalink);
      }

      const messages: ParsedProtobufMessage[] = file.messages
        .filter(
          (m) =>
            m.name.endsWith("Task") &&
            m.name !== "Task" &&
            !DISABLED_TASK_TYPES.includes(m.name)
        )
        .map((m) => {
          const message = parseTask(m);
          links.set(message.name, message.permalink);
          return message;
        });

      tasks.push(...messages);
    }

    if (!oracleJob || !oracleJobTask) {
      throw new Error(
        `Failed to find OracleJob or OracleJob.iTask message in protobuf files`
      );
    }

    // need to loop through again and find any messages
    for (const file of json.files) {
      const remainingMessages = file.messages.filter((m) => !links.has(m.name));
      for (const message of remainingMessages) {
        // console.log(JSON.stringify(message, undefined, 2));

        const parts = message.longName.split(".");
        if (parts.length < 2) {
          continue;
        }
        const task = parts.slice(-2)[0];
        if (!links.has(task)) {
          continue;
        }
        const taskIdx = tasks.findIndex((t) => t.name === task);
        if (taskIdx === -1) {
          continue;
        }

        const messageId = taskNameToId(message.name);
        const messagePermalink = normalizeUrl([
          tasks[taskIdx].permalink,
          "#" + messageId,
        ]);

        // update the tasks submessages
        tasks[taskIdx] = {
          ...tasks[taskIdx],
          messages: (
            (tasks[taskIdx].messages ?? []) as ParsedProtobufMessage[]
          ).concat({
            ...message,
            id: messageId,
            permalink: messagePermalink,
          }),
        };

        links.set(message.name, messagePermalink);
      }

      for (const e of file.enums) {
        const parts = e.longName.split(".");
        if (parts.length < 2) {
          continue;
        }
        const task = parts.slice(-2)[0];
        if (!links.has(task)) {
          continue;
        }
        const taskIdx = tasks.findIndex((t) => t.name === task);
        if (taskIdx === -1) {
          continue;
        }

        const messageId = taskNameToId(e.name);
        const messagePermalink = normalizeUrl([
          tasks[taskIdx].permalink,
          "#" + messageId,
        ]);

        // update the tasks submessages
        tasks[taskIdx] = {
          ...tasks[taskIdx],
          enums: ((tasks[taskIdx].enums ?? []) as ParsedProtobufEnum[]).concat({
            ...e,
            id: messageId,
            permalink: messagePermalink,
          }),
        };

        links.set(e.name, messagePermalink);
      }
    }

    const protobufs: Protobufs = {
      json,
      tasks: tasks.map((t) => addHyperlinks(t, links)),
      oracleJob: addHyperlinks(oracleJob, links),
      oracleJobTask: addHyperlinks(oracleJobTask, links),
    };

    // load examples
    // const examplesDir = normalizeUrl([
    //   context.siteDir,
    //   context.options.protoExamples?.examplesDir ?? "api/protos/examples",
    // ]);

    // const items: PropSidebarItem[] = [];

    // if (fs.existsSync(examplesDir)) {
    //   for (const item of context.options.protoExamples?.items ?? []) {

    //   }
    // }

    logger.info(`Found ${protobufs.tasks.length} OracleJob tasks`);

    const protobufGenerator = new ProtobufGenerator(
      context,
      versionsMetadata.map((v): ProtobufVersionMetadata => {
        return {
          ...v,
          protobufs,
        };
      }),
      protobufs
    );
    return protobufGenerator;
  }

  async fetchSidebarItems(): Promise<Record<string, PropSidebarItem[]>> {
    const ver: Record<string, PropSidebarItem[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        const sidebarItems: PropSidebarItem[] = [
          {
            type: "link",
            label: "OracleJob",
            href: normalizeUrl([v.versionPath, "protos", "OracleJob"]),
          },
          {
            type: "category",
            label: "Task",
            collapsed: true,
            collapsible: true,
            href: normalizeUrl([v.versionPath, "protos", "Task"]),
            items: this.protobufs.tasks.map((task): PropSidebarItem => {
              return {
                type: "link",
                label: capitalizeWords(task.name),
                href: normalizeUrl([v.versionPath, task.permalink]),
              };
            }),
          },
        ];

        return [v.versionName, sidebarItems];
      })
    );

    return ver;
  }

  createRoute(
    proto: ParsedProtobufMessage,
    modules?: Record<string, string>
  ): RouteConfig {
    return {
      path: proto.permalink,
      exact: true,
      component: getComponentPath("ProtoPage"),
      modules,
      sidebar: "api",
      // Map the ID here instead of creating a JSON data file,
      // otherwise this will create thousands of files!
      id: proto.id,
    };
  }

  async fetchRoutes(): Promise<Record<string, RouteConfig[]>> {
    // TODO: Add OracleJob / Overview route
    const routes: Record<string, RouteConfig[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        const taskRoutes = [
          ...(v.protobufs?.tasks ?? [])
            .concat(this.protobufs.oracleJobTask)
            .map((message) => {
              return this.createRoute({
                ...message,
                name: capitalizeWords(message.name),
                permalink: normalizeUrl([v.versionPath, message.permalink]),
              });
            }),
        ];

        return [v.versionName, taskRoutes];
      })
    );
    return routes;
  }
}

export function taskNameToId(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // Convert TitleCase to kebab-case
    .toLowerCase(); // Convert all to lowercase
}

function snakeToCamel(s: string): string {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

const parseTask = (message: Message, protobufExamplesDir?: string) => {
  // TODO: Load examples from a pre-defined directory
  return {
    ...message,
    name: capitalizeWords(message.name),
    id: taskNameToId(message.name),
    permalink: normalizeUrl(["protos", message.name]),
    fields: message.fields.map((f) => {
      return { ...f, name: snakeToCamel(f.name) };
    }),
  };
};

function addHyperlinks(
  message: ParsedProtobufMessage,
  links: Map<string, string>
): ParsedProtobufMessage {
  return {
    ...message,
    name: snakeToCamel(message.name),
    fields: message.fields.map((f) => {
      return {
        ...f,
        name: snakeToCamel(f.name),
        type: links.has(f.type)
          ? `[${
              f.label === "repeated" ? `${f.type}[]` : f.type
            }](/api/${links.get(f.type)!})`
          : f.type,
      };
    }),

    messages: message.messages?.map((m) => addHyperlinks(m, links)),
    enums: message.enums?.map((e) => {
      return {
        ...e,
        name: snakeToCamel(e.name),
      };
    }),
  };
}
