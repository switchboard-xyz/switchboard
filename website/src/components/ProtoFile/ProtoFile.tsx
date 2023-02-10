// https://github.com/protobuffet/docusaurus-protobuffet/blob/master/packages/docusaurus-protobuffet-plugin/src/theme/ProtoFile.tsx
import React from "react";
import Link from "@docusaurus/Link";

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

export interface GeneratedDocFile {
  fileContents: string;
  fileName: string;
  fileDescriptor: FileDescriptor;
}

interface ComponentProps {
  id?: string;
}

interface ComponentsProps {
  h1: React.FC<ComponentProps>;
  h2: React.FC<ComponentProps>;
  h3: React.FC<ComponentProps>;
  h4: React.FC<ComponentProps>;
}

const leftHeaderStyles: React.CSSProperties = {
  textAlign: "left",
};

interface EnumProps {
  enumb: Enum;
}

export const ProtoEnum = (props: EnumProps) => {
  const { enumb } = props;

  const ValueHeaders = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Description</th>
      </tr>
    </thead>
  );

  const ValueRows = () => (
    <tbody>
      {enumb.values.map((enumValue) => (
        <tr key={enumValue.name}>
          <td>
            <code>{enumValue.name}</code>
          </td>
          <td>
            <code>{enumValue.number}</code>
          </td>
          <td style={{ whiteSpace: "pre-wrap" }}>{enumValue.description}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <>
      <p style={{ whiteSpace: "pre-wrap" }}>{enumb.description}</p>
      <table>
        <ValueHeaders />
        <ValueRows />
      </table>
    </>
  );
};

interface ServiceMethodProps {
  method: ServiceMethod;
}

export const ProtoServiceMethod = ({ method }: ServiceMethodProps) => (
  <table>
    <tbody>
      <tr>
        <th style={leftHeaderStyles}>Method</th>
        <td>
          <code>{method.name}</code>
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Request</th>
        <td>
          <Link to={method.requestTypeLink}>
            <code>{method.requestType}</code>
          </Link>
          {method.requestStreaming === true ? " stream" : ""}
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Response</th>
        <td>
          <Link to={method.responseTypeLink}>
            <code>{method.responseType}</code>
          </Link>
          {method.responseStreaming === true ? " stream" : ""}
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Description</th>
        <td>{method.description}</td>
      </tr>
    </tbody>
  </table>
);

interface ServiceMethodsProps {
  methods: ServiceMethod[];
}

const ProtoServiceMethods = (props: ServiceMethodsProps) => {
  const { methods } = props;

  return (
    <>
      {methods.map((method, i) => (
        <ProtoServiceMethod method={method} key={`${method.name}-${i}`} />
      ))}
    </>
  );
};

interface ServiceProps {
  service: Service;
}

export const ProtoService = (props: ServiceProps) => {
  const { service } = props;

  return (
    <>
      <p style={{ whiteSpace: "pre-wrap" }}>{service.description}</p>
      <ProtoServiceMethods methods={service.methods} />
    </>
  );
};

interface MessageFieldsProps {
  fields: MessageField[];
}

const ProtoMessageFields = (props: MessageFieldsProps) => {
  const { fields } = props;

  const Headers = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
  );

  const FieldTypeCell = ({ field }: { field: MessageField }) => {
    const rawCell = <code>{field.longType}</code>;

    return field.typeLink === undefined ? (
      rawCell
    ) : (
      <Link to={field.typeLink}>{rawCell}</Link>
    );
  };

  const FieldRows = () => (
    <tbody>
      {fields.map((field) => (
        <tr key={field.name}>
          <td>
            <code>{field.name}</code>
          </td>
          <td>
            <FieldTypeCell field={field} />
          </td>
          <td style={{ whiteSpace: "pre-wrap" }}>{field.description}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table>
      <Headers />
      <FieldRows />
    </table>
  );
};

interface MessageProps {
  message: Message;
}

export const ProtoMessage = (props: MessageProps) => {
  const { message } = props;

  return (
    <>
      <p style={{ whiteSpace: "pre-wrap" }}>{message.description}</p>
      <ProtoMessageFields fields={message.fields} />
    </>
  );
};

interface Props {
  fileDescriptor: FileDescriptor;
  components: ComponentsProps;
}

export const ProtoFile = (props: Props) => {
  const { fileDescriptor, components } = props;

  return (
    <>
      <h1>{fileDescriptor.name}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{fileDescriptor.description}</p>
      {fileDescriptor.messages.map((message, i) => (
        <ProtoMessage message={message} key={i} />
      ))}
    </>
  );
};
