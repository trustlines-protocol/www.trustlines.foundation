import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import { PrivacyPolicy } from "../features/common/components/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy" keywords={["trustlines privacy policy"]} />
      <div className="container mx-auto">
        <PrivacyPolicy />
      </div>
    </Layout>
  );
}
