import React from "react";

import { SocialLinks } from "./social-links";
import { CircledArrowUp } from "./icons/circled-arrow-up";
import footerGroups from "../content/footer-groups";

export function Footer() {
  return (
    <div className="bg-grey-lighter">
      <div className="container mx-auto px-4 md:py-20 py-10">
        <div className="flex md:flex-row flex-col md:justify-between md:mb-20">
          {footerGroups.map(group => (
            <div key={group.label} className="flex flex-col md:mb-0 mb-4">
              <div className="text-rich-black text-sm md:text-base font-semibold md:mb-8 mb-1">
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <a
                  key={`footer-link-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:mb-4 mb-1 text-rich-black text-sm hover:text-majorelle-blue"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-row md:py-0 py-4">
          <div className="flex flex-1 md:flex-row flex-col md:justify-between md:items-center md:space-y-0 space-y-8">
            <div className="flex flex-row md:items-center md:order-2">
              <SocialLinks />
            </div>
            <div className="text-sm text-rich-black-lightest md:order-1">
              Copyright © 2021 Trustlines Foundation
            </div>
          </div>
          <div className="flex flex-row items-end justify-end">
            <a href="#">
              <button className="ml-16">
                <CircledArrowUp />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
