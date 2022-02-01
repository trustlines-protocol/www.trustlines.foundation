import React from "react";

import { Layout } from "../features/common/components/layout";
import { SEO } from "../features/common/components/seo";
import TermsAndConditionsParagraph from "../features/merkle-drop/components/claim-components/terms";

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <SEO
        title="Terms and Conditions - Trustlines Foundation"
        keywords={["trustlines merkle drop terms and conditions"]}
      />
      <div className="container mx-auto">
        <TermsAndConditionsParagraph />
      </div>
    </Layout>
  );
}
