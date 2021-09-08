import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { ContactHero } from "../features/contact/components/hero";
import { HomeSlider } from "../features/home/components/slider";
import { HomeSubscribe } from "../features/home/components/subscribe";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" keywords={["trustlines contact"]} />
      <ContactHero />
      <HomeSlider />
      <HomeSubscribe />
    </Layout>
  );
}
