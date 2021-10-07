import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { HomeHero } from "../features/home/components/hero";
import { HomeAbout } from "../features/home/components/about";
import { HomeNetwork } from "../features/home/components/network";
import { HomeRole } from "../features/home/components/role";
import { HomeSlider } from "../features/home/components/slider";
import { HomeSubscribe } from "../features/home/components/subscribe";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={["trustlines foundation"]} />
      <HomeHero />
      <HomeAbout />
      <HomeRole />
      <HomeNetwork />
      <HomeSlider />
      <HomeSubscribe />
    </Layout>
  );
}

export default IndexPage;
