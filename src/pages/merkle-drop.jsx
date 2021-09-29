import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { MerkleDropHero } from "../features/merkle-drop/components/hero";
import { HomeSubscribe } from "../features/home/components/subscribe";
import { MerkleDropIntroduction } from "../features/merkle-drop/components/introduction";
import { MerkleDropVideo } from "../features/merkle-drop/components/video";
import { MerkleDropFaqs } from "../features/merkle-drop/components/faqs";

export default function MerkleDrop() {
  return (
    <Layout>
      <SEO title="Merkle Drop" keywords={["trustlines merkle drop"]} />
      <MerkleDropHero />
      <MerkleDropIntroduction />
      <MerkleDropVideo />
      <MerkleDropFaqs />
      <HomeSubscribe />
    </Layout>
  );
}
