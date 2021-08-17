import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { ProtocolHero } from "../components/protocol/hero";
import { ProtocolComponents } from "../components/protocol/components";
import { ProtocolBlockchain } from "../components/protocol/blockchain";
import { ProtocolValidators } from "../components/protocol/validators";

export default function Protocol() {
  return (
    <Layout>
      <SEO title="Protocol" keywords={["trustlines protocol"]} />
      <ProtocolHero />
      <ProtocolComponents />
      <ProtocolBlockchain />
      <ProtocolValidators />
    </Layout>
  );
}
