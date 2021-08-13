import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { HomeHero } from "../components/home-hero";
import { HomeAbout } from "../components/home-about";
import { HomeNetwork } from "../components/home-network";
import { HomeRole } from "../components/home-role";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={["trustlines foundation"]} />
      <HomeHero />
      <HomeAbout />
      <HomeNetwork />
      <HomeRole />
    </Layout>
  );
}

export default IndexPage;
