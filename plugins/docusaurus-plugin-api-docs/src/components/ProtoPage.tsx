import "./styles.css";

import type { Props as DocItemProps } from "@theme/DocItem";
import React from "react";

import { useProto } from "../hooks/useProto";
import ApiItemLayout from "./ApiItemLayout";
import { Markdown } from "./Markdown";

export interface ProtoPageProps extends Pick<DocItemProps, "route"> {}

export default function ProtoPage({ route }: ProtoPageProps) {
  const id = (route as unknown as { id: string }).id;
  const message = useProto(id)!;

  return (
    <ApiItemLayout
      heading={
        <>
          <i
            className={`codicon codicon-symbol-method`}
            style={{ color: "var(--ifm-color-info)", fontSize: "2.5rem" }}
          />
          {message?.name ?? "Unknown"}
        </>
      }
      route={route}
      toc={[{ value: "Fields", id: "fields", level: 2 }]}
      disableToc={true}
    >
      <article>
        <section className="tsd-markdown markdown">
          <Markdown content={message.description} />
        </section>

        <p>
          <br />
        </p>

        <h2>Fields</h2>

        {message.fields.length === 0 ? (
          <p>{message.name} has no fields.</p>
        ) : (
          <div id="fields">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {message.fields.map((field, index) => (
                  <tr key={index}>
                    <td>
                      <i
                        className={`codicon codicon-symbol-property`}
                        style={{
                          color: "var(--ifm-color-success)",
                          fontSize: "1.25rem",
                        }}
                      />
                      &nbsp;
                      {field.name}
                    </td>
                    <td>
                      <Markdown content={field.type} />
                    </td>
                    <td>
                      <Markdown content={field.description} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {(message.enums ?? []).length === 0 ? (
          <></>
        ) : (
          <>
            <h2>Enums</h2>

            {message.enums?.map((e) => {
              return (
                <div id={e.id}>
                  <h3>
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{
                        color: "var(--ifm-color-info)",
                        fontSize: "1.5rem",
                      }}
                    />
                    &nbsp;{e.name}
                  </h3>
                  <Markdown content={e.description} />
                  <table>
                    <thead>
                      <tr>
                        <th>Value</th>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {e.values.map((e, index) => (
                        <tr key={index}>
                          <td>
                            <i
                              className={`codicon codicon-symbol-enum-member`}
                              style={{
                                fontSize: "1.25rem",
                              }}
                            />
                            &nbsp;
                            {e.number}
                          </td>
                          <td>{e.name}</td>
                          <td>
                            <Markdown content={e.description} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </>
        )}

        {(message.messages ?? []).length === 0 ? (
          <></>
        ) : (
          <>
            <h2>Messages</h2>

            {message.messages?.map((m) => {
              return (
                <div id={m.id}>
                  <h3>
                    <i
                      className={`codicon codicon-symbol-method`}
                      style={{
                        color: "var(--ifm-color-info)",
                        fontSize: "1.5rem",
                      }}
                    />
                    &nbsp;
                    {m.name}
                  </h3>
                  <Markdown content={m.description} />
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {m.fields.map((f, index) => (
                        <tr key={index}>
                          <td>
                            <i
                              className={`codicon codicon-symbol-property`}
                              style={{
                                color: "var(--ifm-color-success)",
                                fontSize: "1.25rem",
                              }}
                            />
                            &nbsp;{f.name}
                          </td>
                          <td>
                            <Markdown content={f.type} />
                          </td>
                          <td>
                            <Markdown content={f.description} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </>
        )}
      </article>
    </ApiItemLayout>
  );
}
