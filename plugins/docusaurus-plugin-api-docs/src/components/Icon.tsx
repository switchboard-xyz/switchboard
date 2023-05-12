import React from "react";
import type { JSONOutput } from "typedoc";
import {
  getKindIcon,
  getKindIconColor,
  getKindIconString,
} from "../utils/icons";

export interface IconProps {
  reflection: JSONOutput.DeclarationReflection;
}

export function Icon({ reflection }: IconProps) {
  const icon = getKindIcon(reflection.kind, reflection.name);

  if (!icon) {
    return null;
  }

  const color = getKindIconColor(reflection.kind);

  // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
  return <i className={`codicon codicon-${icon}`} style={{ color }} />;
}

export function IconString({ kind }: { kind: string }) {
  const icon = getKindIconString(kind);

  if (!icon) {
    return null;
  }

  const color = getKindIconColor(kind);

  // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
  return <i className={`codicon codicon-${icon}`} style={{ color }} />;
}
