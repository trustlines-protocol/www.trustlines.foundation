import React from "react";

import { LayoutDark } from "../features/common/components/layout-dark";
import { SEO } from "../features/common/components/seo";
import { GrantsHero } from "../features/grants/components/hero";
import { GrantsEligibility } from "../features/grants/components/eligibility";
import { GrantsProjects } from "../features/grants/components/projects";
import { GrantsValue } from "../features/grants/components/value";
import { GrantsHowToApply } from "../features/grants/components/how-to-apply";
import { GrantsFAQ } from "../features/grants/components/faqs";
import { HomeSubscribe } from "../features/home/components/subscribe-dark";

export default function Grants() {
  return (
    <LayoutDark>
      <SEO title="Grants" keywords={["trustlines grants"]} />
      <GrantsHero />
      <GrantsEligibility />
      <GrantsProjects />
      <GrantsValue />
      <GrantsHowToApply />
      <GrantsFAQ />
      <HomeSubscribe />
    </LayoutDark>
  );
}
