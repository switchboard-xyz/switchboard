import type { CliVersionMetadata, ParsedCommand } from "./types";
import {
  Generator,
  type GeneratorContext,
  type GeneratorType,
  type VersionMetadata,
} from "../../types";
import path from "path";
import { convertToCommands, readCliCommands } from "./utils";
import logger from "@docusaurus/logger";
import { normalizeUrl } from "@docusaurus/utils";
import type { PropSidebarItem } from "@docusaurus/plugin-content-docs";
import type { RouteConfig } from "@docusaurus/types";
import { capitalizeWords, getComponentPath } from "../../utils";

export class OclifGenerator extends Generator<CliVersionMetadata> {
  type: GeneratorType = "oclif";

  constructor(
    context: GeneratorContext,
    readonly loadedVersions: CliVersionMetadata[],
    readonly commands: ParsedCommand[]
  ) {
    super(context);
  }

  public static async load(
    context: GeneratorContext,
    versionsMetadata: VersionMetadata[]
  ): Promise<OclifGenerator> {
    const allCommands: ParsedCommand[] = readCliCommands(
      context.projectRoot
    ).filter(Boolean);
    logger.warn(`Found ${allCommands.length} OCLIF CLI commands`);
    if (allCommands.length === 0) {
      throw new Error(`Failed to find any commands`);
    }

    const oclifGenerator = new OclifGenerator(
      context,
      versionsMetadata.map((v): CliVersionMetadata => {
        return {
          ...v,
          commands: allCommands,
        };
      }),
      allCommands
    );
    return oclifGenerator;
  }

  async fetchSidebarItems(): Promise<Record<string, PropSidebarItem[]>> {
    const commands = convertToCommands(this.commands);

    const ver: Record<string, PropSidebarItem[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        const sidebarItems: PropSidebarItem[] = [
          {
            type: "category",
            label: "@switchboard-xyz/cli",
            collapsed: true,
            collapsible: true,
            items: [
              {
                type: "link",
                label: "Overview",
                href: normalizeUrl([v.versionPath, "cli"]),
              },
              // config items
              {
                type: "category",
                label: "Config",
                collapsed: true,
                collapsible: true,
                items: [
                  {
                    type: "link",
                    label: "Print",
                    href: normalizeUrl([
                      v.versionPath,
                      "cli",
                      "config",
                      "print",
                    ]),
                  },
                  {
                    type: "link",
                    label: "Set",
                    href: normalizeUrl([v.versionPath, "cli", "config", "set"]),
                  },
                ],
              },
              // chain items
              ...["aptos", "evm", "near", "solana"].map(
                (chain): PropSidebarItem => {
                  return {
                    type: "category",
                    label: capitalizeWords(chain),
                    collapsed: true,
                    collapsible: true,
                    items: [
                      ...Object.entries(
                        commands[chain as "aptos" | "evm" | "near" | "solana"]
                      ).map(([topic, cmds]): PropSidebarItem => {
                        return {
                          type: "category",
                          label: capitalizeWords(topic),
                          collapsed: true,
                          collapsible: true,
                          items: cmds.map((command): PropSidebarItem => {
                            const subTopic =
                              command.topics.length > 2
                                ? command.topics.slice(2).join(" ")
                                : "";
                            return {
                              type: "link",
                              label: capitalizeWords(subTopic),
                              href: normalizeUrl([
                                v.versionPath,
                                command.permalink,
                              ]),
                            };
                          }),
                        };
                      }),
                    ],
                  };
                }
              ),
            ],
          },
        ];

        return [v.versionName, sidebarItems];
      })
    );

    return ver;
  }

  createRoute(
    command: ParsedCommand,
    modules?: Record<string, string>
  ): RouteConfig {
    return {
      path: command.permalink,
      exact: true,
      component: getComponentPath("CliCommand"),
      modules,
      sidebar: "api",
      // Map the ID here instead of creating a JSON data file,
      // otherwise this will create thousands of files!
      id: command.id,
    };
  }

  async fetchRoutes(): Promise<Record<string, RouteConfig[]>> {
    const routes: Record<string, RouteConfig[]> = Object.fromEntries(
      this.loadedVersions.map((v) => {
        return [
          v.versionName,
          v.commands.map((c) => {
            return this.createRoute({
              ...c,
              permalink: normalizeUrl([v.versionPath, c.permalink]),
            });
          }),
        ];
      })
    );
    return routes;
  }
}
