import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

import SectionCard from "../components/Homepage/SectionCard";
import RoundedCard from "../components/RoundedCard/RoundedCard";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Box, Divider, Grid } from "@mui/material";

const links = [
  { href: "#", text: "Link 1" },
  { href: "#", text: "Link 2" },
  { href: "#", text: "Link 3" },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <Divider
          sx={{
            height: "100px",
            margin: "auto",
            background: "none",
          }}
        />
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          {Array.from({ length: 3 }, (x, i) => i).map((n) => (
            <Grid item xs={12} key={n} sx={{ width: "80vw" }}>
              <SectionCard
                title="learn"
                description="nope"
                links={links}
                image={<img src={useBaseUrl("/img/icons/rust/crab.svg")} />}
                imageDark={<img src={useBaseUrl("/img/icons/rust/crab.svg")} />}
              />
            </Grid>
          ))}
        </Grid>
      </main>
    </Layout>
  );
}
