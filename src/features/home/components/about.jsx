import React from "react";

import { Telegram } from "../../common/components/icons/telegram";
import { Twitter } from "../../common/components/icons/twitter";
import { YouTube } from "../../common/components/icons/you-tube";

import { ExternalLinks } from "../../../constants";
import elements from "../images/elements.svg";

const LINKS = [
  {
    icon: (
      <Twitter className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: ExternalLinks.TWITTER,
  },
  {
    icon: (
      <YouTube className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: ExternalLinks.YOUTUBE,
  },
  {
    icon: (
      <Telegram className="fill-current text-grey-lighter group-hover:text-rich-black" />
    ),
    href: ExternalLinks.TELEGRAM,
  },
];

export function HomeAbout() {
  return (
    <section className="py-14 bg-rich-black">
      <div className="max-w-2xl mx-auto">
        <div className="flex md:flex-row flex-col-reverse space-y-reverse space-y-4 items-center md:items-end">
          <img src={elements} className="w-96 px-4 md:px-0" alt="visual elements" />
          <div className="flex w-full pl-4">
            <div className="flex md:flex-col flex-row space-x-2 md:space-x-0 md:ml-10 ml-4">
              {LINKS.map((link, i) => (
                <a
                  className={`
                rounded-full bg-rich-black-lighter h-10 w-10
                flex flex-row items-center justify-center
                transition duration-500 ease-in-out transition-all hover:bg-majorelle-blue mt-4
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
        <div className="px-8 md:px-0">
          <h1 className="py-6 text-3xl md:text-4xl leading-tight text-white font-semibold">
            Trustlines Foundation
          </h1>
          <p className="text-xl md:text-1xl leading-tight text-white mb-2">
            The Trustlines Foundation is promoting financial inclusion for all.
            The mission is to pursue this goal through decentralized
            peer-to-peer network protocols. More specifically, protocols that
            serve common accounting.
            <br />
            <br />
            The Foundation supports the research, development, and adoption of
            the Trustlines Protocol. It is acting in a supporting role in the
            Trustlines Network, enabling a multitude of use cases.
          </p>
        </div>
      </div>
    </section>
  );
}
