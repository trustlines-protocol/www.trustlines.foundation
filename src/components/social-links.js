import React from "react";

import { Telegram } from "./icons/telegram";
import { Twitter } from "./icons/twitter";
import { YouTube } from "./icons/you-tube";

const LINKS = [
  {
    icon: <Twitter className="fill-current text-rich-black" />,
    href: "",
  },
  {
    icon: <YouTube className="fill-current text-rich-black" />,
    href: "",
  },
  {
    icon: <Telegram className="fill-current text-rich-black" />,
    href: "",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-row justify-between">
      {LINKS.map((link, i) => (
        <a
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          key={`social-link-${i}`}
          className="mr-4"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
