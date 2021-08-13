import React from "react";

import { SocialLinks } from "./social-links";
import { CircledArrowUp } from "./icons/circled-arrow-up";
import footerGroups from "../content/footer-groups";

export function Footer() {
  return (
    <div className="bg-grey-lighter py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between mb-20">
          {footerGroups.map(group => (
            <div key={group.label} className="flex flex-col">
              <div className="text-rich-black font-semibold mb-8">
                {group.label}
              </div>
              {group.items.map((item, i) => (
                <a
                  key={`footer-link-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 text-rich-black text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="text-sm text-rich-black-lightest">
            Copyright © 2021 Trustlines Foundation
          </div>
          <div className="flex flex-row items-center">
            <SocialLinks />
            <button className="ml-16">
              <CircledArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
