import React from "react";

import { LayoutDark } from "../features/common/components/layout-dark";
import { SEO } from "../features/common/components/seo";
import { MerkleDropHero } from "../features/merkle-drop/components/hero";
import { HomeSubscribe } from "../features/home/components/subscribe-dark";
import { MerkleDropIntroduction } from "../features/merkle-drop/components/introduction";
import { MerkleDropVideo } from "../features/merkle-drop/components/video";
import { MerkleDropFaqs } from "../features/merkle-drop/components/faqs";

export default function MerkleDrop() {
  return (
    <LayoutDark>
      <SEO title="Merkle Drop - Trustlines Foundation" keywords={["trustlines merkle drop"]} />
      <MerkleDropHero />
      <MerkleDropIntroduction />
      <MerkleDropVideo />
      <MerkleDropFaqs />
      <HomeSubscribe />
    </LayoutDark>
  );
}
