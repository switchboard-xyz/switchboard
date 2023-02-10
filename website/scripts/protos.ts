#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

import path from "path";
import fs from "fs";
import chalk from "chalk";
import shell from "shelljs";
import { execSync } from "child_process";

const projectRoot = path.join(__dirname, "..", "..");
const protosPath = path.join(projectRoot, "javascript", "common", "protos");
const protosRelativePath = path.relative(process.cwd(), protosPath);
const jsonProtosPath = path.join(process.cwd(), "oracle_job_protos.json");

type EnumProto = {
  name: string;
  longName: string;
  fullName: string;
  description: string;
  values: Array<{ name: string; number: string; description: string }>;
};
type ExtensionProto = {};
type MessageProto = {
  name: string;
  longName: string;
  fullName: string;
  description: string;
  hasExtensions: boolean;
  hasFields: boolean;
  hasOneofs: boolean;
  extensions: Array<any>;
  fields: Array<{
    name: string;
    description: string;
    label: string;
    type: string;
    longType: string;
    fullType: string;
    ismap: boolean;
    isoneof: boolean;
    oneofdecl: string;
    defaultValue: string;
  }>;
};
type ServiceProto = {};
type FileProto = {
  name: string;
  description: string;
  package: string;
  hasEnums: boolean;
  hasExtensions: boolean;
  hasMessages: boolean;
  hasServices: boolean;
  enums: Array<EnumProto>;
  extensions: Array<ExtensionProto>;
  messages: Array<MessageProto>;
  services: Array<ServiceProto>;
};

(() => {
  console.log(chalk.green(`Generating protos`));

  if (
    shell.exec(
      `protoc --proto_path=${protosRelativePath} --doc_out=./ --doc_opt=json,oracle_job_protos.json ${protosRelativePath}/job_schemas.proto`
    ).code !== 0
  ) {
    shell.echo(`Error: Typedoc failed to generate JSON file`);
    shell.exit(1);
  }

  const protos: { files: Array<FileProto>; scalarValueTypes: Array<any> } =
    JSON.parse(fs.readFileSync(jsonProtosPath, "utf-8"));

  const jobProtos = protos.files.find((f) => f.name === "job_schemas.proto");
  if (!jobProtos) {
    throw new Error(`Failed to find job_schemas.proto`);
  }

  let oracleJobProto: FileProto;
  const messageMap: Map<string, FileProto> = new Map();

  for (const message of jobProtos.messages) {
    if (message.longName === message.name) {
      oracleJobProto = {
        name: message.name,
        description: message.description,
        package: message.name,
        hasEnums: false,
        hasExtensions: false,
        hasMessages: true,
        hasServices: false,
        enums: [],
        extensions: [],
        messages: [message],
        services: [],
      };
      continue;
    }

    if (message.longName === "OracleJob.Task") {
      oracleJobProto = {
        ...oracleJobProto,
        messages: [...oracleJobProto.messages, message],
      };
      continue;
    }

    const parts = message.longName.split(".");
    if (parts[0] === "OracleJob" && parts.length === 2) {
      // is a task
      const messageEnums = jobProtos.enums.filter((e) =>
        e.longName.startsWith(message.longName)
      );

      const newMessage: FileProto = {
        name: message.name,
        description: message.description,
        package: message.name,
        hasEnums: messageEnums.length ? true : false,
        hasExtensions: false,
        hasMessages: true,
        hasServices: false,
        enums: messageEnums,
        extensions: [],
        messages: [message],
        services: [],
      };

      messageMap.set(message.name, newMessage);
    } else {
      // not a task, need to add to a previous task (luckily theyre in alphabetical order)

      const task = parts[1];
      const taskMessage = messageMap.get(task);
      if (!taskMessage) {
        console.log(`Failed to find task for ${message.name}`);
        continue;
      }

      messageMap.set(task, {
        ...taskMessage,
        messages: [...taskMessage.messages, message],
      });
    }
  }

  fs.writeFileSync(
    jsonProtosPath,
    JSON.stringify(
      {
        files: [oracleJobProto, ...Array.from(messageMap.values())],
        scalarValueTypes: protos.scalarValueTypes,
      },
      undefined,
      2
    ).replace(/OracleJob\./g, "")
  );

  execSync(`npx docusaurus generate-proto-docs`);

  // why does this keep getting reverted
  fs.writeFileSync(
    "sidebarsProtodocs.js",
    fs
      .readFileSync("sidebarsProtodocs.js", "utf8")
      .replace(
        `"protodocs":[{"type":"category","label":"Files","items":[{"type":"doc","id":"OracleJob"},`,
        `"protodocs":[{"type":"doc","id":"OracleJob"},{"type":"category","label":"Tasks","items":[`
      )
  );

  // const jobProtos =
})();
