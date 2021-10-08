import React from "react";

import { Lock } from "../../common/components/icons/lock";
import { Settings } from "../../common/components/icons/settings";
import { SquareCheck } from "../../common/components/icons/square-check";
import { ArrowRight } from "../../common/components/icons/arrow-right";
import { Group } from "../../common/components/icons/group";
import { ExternalLinks } from "../../../constants";

const SLIDES = [
  {
    label: "Community Builders",
    title: "Support our mission by ",
    subtitle: "managing a Trustlines community.",
    titleIcon: <Group />,
    href: "https://trustlines.network/communities",
    linkIcon: <SquareCheck />,
    linkText: "Join the movement today",
    textColor: "text-neon-pink",
  },
  {
    label: "Validators",
    title: "Support our mission by ",
    subtitle: "securing the Trustlines Blockchain.",
    titleIcon: <Lock />,
    href: ExternalLinks.VALIDATORS,
    linkIcon: <SquareCheck />,
    linkText: "Sign up to become a validator today",
    textColor: "text-aquamarine-green",
  },
  {
    label: "Developers",
    title: "Support our mission by ",
    subtitle: "building the Trustlines infrastructure.",
    titleIcon: <Settings />,
    href: "https://dev.trustlines.network/",
    linkIcon: <SquareCheck />,
    linkText: "Develop on the ecosystem today",
    textColor: "text-cyber-yellow",
  },
];

export function HomeSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlideIndex = (currentSlideIndex + 1) % SLIDES.length;
      setCurrentSlideIndex(nextSlideIndex);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentSlideIndex]);

  const currentSlide = SLIDES[currentSlideIndex];

  return (
    <section className="bg-rich-black">
      <div className="container mx-auto md:h-96 flex flex-col justify-between md:py-11 py-22 px-4 md:text-2xl text-lg">
        <div />
        <div className="flex flex-col px-4 md:px-0 md:py-0 py-20">
          <div className="flex md:flex-row flex-col text-white mb-2">
            <div className="flex flex-row text-majorelle-blue-lighter items-center">
              <div>{currentSlide.titleIcon}</div>
              <div className="md:ml-2 ml-6 text-majorelle-blue-lighter">
                {currentSlide.title}
              </div>
            </div>
            <div className="md:ml-2 ml-6">{currentSlide.subtitle}</div>
          </div>
          <a
            className={`flex flex-row items-center font-semibold ${currentSlide.textColor}`}
            href={currentSlide.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{currentSlide.linkIcon}</div>
            <span className="md:ml-2 ml-6">{currentSlide.linkText} →</span>
          </a>
        </div>
        <div>
          <div className="md:pt-32 pb-4 md:pb-2">
            <div className="grid grid-cols-1 md:flex md:flex-row font-semibold text-rich-black-lightest">
              {SLIDES.map((slide, i) => (
                <div
                  key={`home-slide-${i}`}
                  className={i === currentSlideIndex ? slide.textColor : ""}
                >
                  <span className="text-rich-black-lightest">
                    {i !== 0 ? " / " : ""}
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setCurrentSlideIndex(i)}
                  >
                    {slide.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
