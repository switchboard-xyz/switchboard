/* eslint-disable no-param-reassign */

import "@vscode/codicons/dist/codicon.css";
import "./styles.css";
import React, { useMemo } from "react";
import type { JSONOutput } from "typedoc";
import DocPage, { type Props as DocPageProps } from "@theme/DocPage";
import type {
  ApiOptions,
  DeclarationReflectionMap,
  PackageReflectionGroup,
} from "../types";
import { ApiDataContext } from "./ApiDataContext";
import type { OclifCommandMap, ParsedCommand } from "../modules/oclif/types";
import type {
  ParsedProtobufMessage,
  ProtoMessageMap,
} from "../modules/protobufs";

function isObject(value: unknown): value is JSONOutput.Reflection {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMapReflections(
  data: JSONOutput.Reflection,
  map: DeclarationReflectionMap,
  parent?: JSONOutput.Reflection
) {
  Object.entries(data).forEach(([key, value]) => {
    if (key === "id") {
      const hasType = "type" in data;

      // Dont overwrite with reference nodes
      if (
        !hasType ||
        (hasType && (data as unknown as { type: string }).type !== "reference")
      ) {
        map[Number(value)] = data;

        if (parent) {
          data.parentId = parent.id;
        }
      }
    } else if (Array.isArray(value)) {
      value.forEach((val) => {
        if (isObject(val)) {
          deepMapReflections(val, map, data);
        }
      });
    } else if (isObject(value)) {
      deepMapReflections(value, map, data);
    }
  });

  return map;
}

function mapPackagesToReflection(
  packages: PackageReflectionGroup[]
): DeclarationReflectionMap {
  const map: DeclarationReflectionMap = {};

  packages.forEach((pkg) => {
    pkg.entryPoints.forEach((entry) => {
      deepMapReflections(entry.reflection, map);
    });
  });

  return map;
}

function mapCommands(commands: ParsedCommand[]): OclifCommandMap {
  const map: OclifCommandMap = {};

  commands.filter(Boolean).forEach((c) => {
    map[c.id] = c;
  });

  return map;
}

function mapProtos(tasks: ParsedProtobufMessage[]): ProtoMessageMap {
  const map: ProtoMessageMap = {};

  (tasks ?? []).filter(Boolean).forEach((task) => {
    map[task.id] = task;
  });

  return map;
}

export interface ApiPageProps extends DocPageProps {
  options: ApiOptions;
  packages: PackageReflectionGroup[];
  commands: ParsedCommand[];
  protobufMessages: ParsedProtobufMessage[];
}

function ApiPage({
  options,
  packages,
  commands,
  protobufMessages,
  ...props
}: ApiPageProps) {
  const value = useMemo(
    () => ({
      options,
      reflections: mapPackagesToReflection(packages),
      commands: mapCommands(commands),
      protobufs: mapProtos(protobufMessages),
    }),
    [options, packages, commands, protobufMessages]
  );

  return (
    <ApiDataContext.Provider value={value}>
      <div className="apiPage">
        <DocPage {...props} />
      </div>
    </ApiDataContext.Provider>
  );
}

export default ApiPage;
