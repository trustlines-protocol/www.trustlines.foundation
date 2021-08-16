import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { HomeHero } from "../components/home-hero";
import { HomeAbout } from "../components/home-about";
import { HomeNetwork } from "../components/home-network";
import { HomeRole } from "../components/home-role";
import { HomeSlider } from "../components/home-slider";
import { HomeSubscribe } from "../components/home-subscribe";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={["trustlines foundation"]} />
      <HomeHero />
      <HomeAbout />
      <HomeNetwork />
      <HomeRole />
      <HomeSlider />
      <HomeSubscribe />
    </Layout>
  );
}

export default IndexPage;
