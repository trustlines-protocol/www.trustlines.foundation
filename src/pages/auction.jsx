import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { AuctionHero } from "../features/auction/components/hero";

export default function Auction() {
  return (
    <Layout>
      <SEO title="Auction" keywords={["trustlines auction"]} />
      <AuctionHero />
    </Layout>
  );
}
