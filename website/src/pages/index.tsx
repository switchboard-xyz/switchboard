import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Button, Typography } from "@mui/material";
import { ChainComponent, ProductGuidesGrid } from "../components";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={"Getting started with Switchboard"}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          paddingBottom: "40px",
        }}
      >
        <div className={styles.headerImg}>
          <h1>
            Welcome to <br />
            <span style={{ color: "var(--ifm-color-primary-dark)" }}>
              Switchboard Docs
            </span>
          </h1>
          <div
            style={{
              display: "flex",
              maxWidth: 600,
            }}
          >
            <p className="landing_page">
              A trust-minimized, decentralized compute network enabling
              verifiable, off-chain code execution. Switchboard gives smart
              contract developers the tools to write more resilient smart
              contracts.
            </p>
          </div>
          {/** @TODO add once Chatbot is ready
     <DocsSearch /> 
     */}
          <a href="/about">
            <Button
              variant="contained"
              sx={{
                color: "white",
                fontFamily: "Source Sans Pro",
                fontWeight: 600,
                fontSize: "18px",
                backgroundColor: "var(--ifm-color-primary-dark)",
                borderRadius: "8px",
                textTransform: "none",
                padding: "4px 48px",
                marginBottom: "24px",
                boxShadow: "0 11px 15px 0 rgba(164, 164, 164, 0.21)",
                ":hover": {
                  backgroundColor: "var(--ifm-color-primary-dark)",
                  filter: "brightness(120%)",
                },
              }}
            >
              Get Started
            </Button>
          </a>
          <h3
            className="landing_page"
            style={{
              marginBottom: "8px",
              marginTop: "24px",
            }}
          >
            Quick Start Guides by Network
          </h3>
          <ChainComponent hideTitle />
        </div>
        <ProductGuidesGrid />
      </div>
    </Layout>
  );
}
