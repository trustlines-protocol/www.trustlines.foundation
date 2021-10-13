import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { ProtocolHero } from "../features/protocol/components/hero";
import { ProtocolComponents } from "../features/protocol/components/components";
import { ProtocolBlockchain } from "../features/protocol/components/blockchain";
import { ProtocolValidators } from "../features/protocol/components/validators";

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
