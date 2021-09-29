import React from "react";

import { Telegram } from "./icons/telegram";
import { Twitter } from "./icons/twitter";
import { YouTube } from "./icons/you-tube";

import * as URLS from "../content/social-links.json";

const LINKS = [
  {
    icon: <Twitter className="fill-current text-rich-black" />,
    href: URLS.twitter,
  },
  {
    icon: <YouTube className="fill-current text-rich-black" />,
    href: URLS.youTube,
  },
  {
    icon: <Telegram className="fill-current text-rich-black" />,
    href: URLS.telegram,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-row justify-center gap-4">
      {LINKS.map((link, i) => (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          key={`social-link-${i}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
