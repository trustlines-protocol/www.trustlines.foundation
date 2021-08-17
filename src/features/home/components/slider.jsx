import React from "react";

import { Lock } from "../../common/components/icons/lock";
import { Settings } from "../../common/components/icons/settings";
import { SquareCheck } from "../../common/components/icons/square-check";
import { ArrowRight } from "../../common/components/icons/arrow-right";
import { Group } from "../../common/components/icons/group";

const SLIDES = [
  {
    label: "Validators",
    title: "Support our mission by securing the Trustlines Blockchain.",
    titleIcon: <Lock />,
    href: "/",
    linkIcon: <SquareCheck />,
    linkText: "Sign up to become a validator today",
    textColor: "text-aquamarine-green",
  },
  {
    label: "Community Managers",
    title: "Support our mission by managing a Trustlines community.",
    titleIcon: <Group />,
    href: "/",
    linkIcon: <SquareCheck />,
    linkText: "Sign up to become a validator today",
    textColor: "text-neon-pink",
  },
  {
    label: "Developers",
    title: "Support our mission by building the Trustlines infrastructure.",
    titleIcon: <Settings />,
    href: "/",
    linkIcon: <SquareCheck />,
    linkText: "Join the ecosystem as a developer today",
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
      <div className="container mx-auto h-96 flex flex-col justify-between py-11 px-4 text-2xl">
        <div />
        <div>
          <div className="flex flex-row items-center text-white mb-2">
            {currentSlide.titleIcon}
            <span className="ml-2">{currentSlide.title}</span>
          </div>
          <a
            className={`flex flex-row items-center font-semibold ${currentSlide.textColor}`}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentSlide.linkIcon}
            <span className="mx-2">{currentSlide.linkText}</span>
            <ArrowRight className="fill-current h-4 w-4" />
          </a>
        </div>
        <div className="font-semibold text-rich-black-lightest">
          {SLIDES.map((slide, i) => (
            <span
              key={`home-slide-${i}`}
              className={i === currentSlideIndex ? slide.textColor : ""}
            >
              <span
                className="cursor-pointer"
                onClick={() => setCurrentSlideIndex(i)}
              >
                {slide.label}
              </span>
              <span className="text-rich-black-lightest">
                {i !== SLIDES.length - 1 ? " / " : ""}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
