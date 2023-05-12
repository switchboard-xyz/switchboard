import type { VersionMetadata } from "../../types";

// export const TOPICS = ["config", "aptos", "near", "solana"];

// type CommandTopic = (typeof TOPICS)[number];

// https://github.com/protobuffet/docusaurus-protobuffet/blob/master/packages/docusaurus-protobuffet-plugin/src/types.ts
export interface EnumValue {
  name: string;
  number: string;
  description: string;
}

export interface Enum {
  name: string;
  longName: string;
  fullName: string;
  description: string;
  values: EnumValue[];
}

export interface MessageField {
  name: string;
  description: string;
  label: string;
  type: string;
  longType: string;
  fullType: string;
  ismap: boolean;
  isoneof: boolean;
  typeLink?: string;
}

export interface Message {
  name: string;
  longName: string;
  fullName: string;
  description: string;
  fields: MessageField[];
}

export interface ServiceMethod {
  name: string;
  description: string;
  requestType: string;
  requestLongType: string;
  requestFullType: string;
  requestStreaming: boolean;
  responseType: string;
  responseLongType: string;
  responseFullType: string;
  responseStreaming: boolean;
  requestTypeLink?: string;
  responseTypeLink?: string;
}

export interface Service {
  name: string;
  fullName: string;
  description: string;
  methods: ServiceMethod[];
}

export interface FileDescriptor {
  name: string;
  description: string;
  package: string;
  messages: Message[];
  services: Service[];
  enums: Enum[];
  // TODO: add extensions
}

export interface FileDescriptors {
  files: FileDescriptor[];
}
export type ProtobufJson = FileDescriptors;

export type ParsedProtobufEnum = Enum & {
  id: string;
  permalink: string;
  description?: string;
};

export type ParsedProtobufMessage = Message & {
  id: string;
  permalink: string;
  description?: string;
  examples?: Array<string>;
  messages?: ParsedProtobufMessage[];
  enums?: ParsedProtobufEnum[];
};

export interface Protobufs {
  json: ProtobufJson;
  tasks: ParsedProtobufMessage[];
  oracleJob: ParsedProtobufMessage;
  oracleJobTask: ParsedProtobufMessage;
}

export type ProtoMessageMap = Record<string, ParsedProtobufMessage>;

export type ProtobufVersionMetadata = VersionMetadata & {
  protobufs: Protobufs;
};
