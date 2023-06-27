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
              width: "600px",
              maxWidth: "100%",
            }}
          >
            <p>
              A trust-minimized, decentralized compute network enabling
              verifiable, off-chain compute providing smart contract developers
              with the tools to write more resilient smart contracts.
            </p>
          </div>
          {/** @TODO add once Chatbot is ready
     <DocsSearch /> 
     */}
          <a href="/about">
            <Button
              variant="contained"
              sx={{
                color: "#2A466F",
                fontFamily: "Source Sans Pro",
                fontWeight: 600,
                fontSize: "18px",
                backgroundColor: "white",
                border: "1px solid gray",
                borderRadius: "8px",
                textTransform: "none",
                padding: "4px 48px",
                marginBottom: "24px",
                boxShadow: "0 11px 15px 0 rgba(164, 164, 164, 0.21)",
                ":hover": {
                  backgroundColor: "var(--ifm-color-primary-dark)",
                  color: "white",
                  border: "solid 1px var(--ifm-color-primary-dark)",
                },
              }}
            >
              Get Started
            </Button>
          </a>
          <Typography
            style={{
              fontSize: "25px",
              fontWeight: 600,
              fontFamily: "Source Sans Pro",
              marginBottom: "8px",
            }}
          >
            Quick Start Guides by Network
          </Typography>
          <ChainComponent hideTitle />
        </div>
        <ProductGuidesGrid />
      </div>
    </Layout>
  );
}
