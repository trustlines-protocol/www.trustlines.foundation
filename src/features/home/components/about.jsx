import React from "react";

import { Telegram } from "../../common/components/icons/telegram";
import { Twitter } from "../../common/components/icons/twitter";
import { YouTube } from "../../common/components/icons/you-tube";

import socialLinks from "../../common/content/social-links";
import elements from "../images/elements.svg";

const LINKS = [
  {
    icon: (
      <Twitter className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: socialLinks.twitter,
  },
  {
    icon: (
      <YouTube className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: socialLinks.youTube,
  },
  {
    icon: (
      <Telegram className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: socialLinks.telegram,
  },
];

export function HomeAbout() {
  return (
    <section className="py-16 bg-rich-black">
      <div className="max-w-lg mx-auto">
        <div className="flex md:flex-row flex-col-reverse space-y-reverse space-y-4 items-center md:items-end">
          <img src={elements} alt="visual elements" />
          <div className="flex w-full pl-4">
            <div className="flex md:flex-col flex-row space-x-2 md:space-x-0 md:ml-10">
              {LINKS.map((link, i) => (
                <a
                  className={`
                rounded-full bg-rich-black-lighter h-10 w-10
                flex flex-row items-center justify-center
                hover:bg-white mt-4
              `}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`home-about-social-link-${i}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <h1 className="py-6 text-3xl md:text-4xl leading-tight text-white font-semibold">
            About the Foundation
          </h1>
          <p className="text-xl md:text-2xl leading-tight text-white mb-12">
            The Trustlines Foundation is a charitable organisation based in
            Liechtenstein. It pursues a goal of promoting the financial and
            economic inclusion of all people through decentralized peer-to-peer
            network protocols that serve common accounting.
          </p>
          <a
            className={`
              bg-rich-black-lighter text-off-white rounded-full px-8 py-4 text-sm
              hover:bg-white hover:text-rich-black
            `}
            href="/"
          >
            Read more →
          </a>
        </div>
      </div>
    </section>
  );
}
