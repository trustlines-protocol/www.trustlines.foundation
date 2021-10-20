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
    textHoverColor: "text-coral-pastel",
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
    textHoverColor: "text-aquamarine-green-lighter",
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
    textHoverColor: "text-cyber-yellow-lighter",
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
      <div className="container mx-auto flex flex-col justify-between md:py-11 py-22 px-4 md:text-2xl text-xl">
        <div />
        <div className="flex flex-col px-8 md:px-20 md:py-0 py-12 md:h-80 h-96">
          <div className="flex md:flex-row flex-col text-white mb-2 md:w-max w-90 md:mt-32">
            <div className="flex flex-row text-majorelle-blue-lighter items-center">
              <div className="px-4 md:p-0 mt-6 md:mt-0 -mb-6 md:-mb-0">{currentSlide.titleIcon}</div>
              <div className="md:ml-2 ml-6 text-majorelle-blue-lighter w-64 md:w-max">
                {currentSlide.title}
              </div>
            </div>
            <div className="md:ml-2 ml-20 w-64 md:w-max">{currentSlide.subtitle}</div>
          </div>
          <a
            className={`flex flex-row items-center font-semibold transition duration-500 ease-in-out transition-all md:ml-0 ml-4 md:w-max w-64 pt-8 md:pt-1 hover:${currentSlide.textHoverColor} ${currentSlide.textColor}`}
            href={currentSlide.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{currentSlide.linkIcon}</div>
            <span className="md:ml-2 ml-10">{currentSlide.linkText} →</span>
          </a>
        </div>
        <div>
          <div className="md:pt-2 pb-4 md:pb-2 md:h-10 h-32 md:ml-0 md:px-20">
            <div className="grid grid-cols-1 md:flex md:flex-row font-semibold text-rich-black-lightest md:mx-0">
              {SLIDES.map((slide, i) => (
                <div
                  key={`home-slide-${i}`}
                  className={i === currentSlideIndex ? slide.textColor : "transition duration-500 ease-in-out transition-all hover:text-grey"}
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
