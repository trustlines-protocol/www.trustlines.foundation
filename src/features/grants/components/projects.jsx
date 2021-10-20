import React from "react";
import { Card } from "../../common/components/card";

export function GrantsProjects() {
  const CHARACTERISTICS = [
    {
      title: "Develop a community currency",
      text:
        "Build on top or integrate the Trustlines Protocol, e.g., add regional currency networks.",
    },
    {
      title: "Adapt the Protocol",
      text:
        "Develop or deploy variations of the Trustlines Protocol so it would meet the local, cultural, or religious requirements.",
    },
    {
      title: "Boost user adoption",
      text:
        "Create educational resources, organize meetups, host workshops, etc.",
    },
    {
      title: "Conduct research",
      text:
        "If you are doing PhD in economics, you could research credit or P2P payment channel networks, including the so-called “imbalanced channel” problem.",
    },
    {
      title: "Enhance user experience",
      text:
        "Build a more advanced mobile application or integrate new features.",
    },
  ];
  return (
    <section className="container mx-auto px-4 mb-10 md:mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1 md:px-20">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight md:mb-10 mb-4 text-grey-darker text-opacity-60">
            Exemplary <br />
            projects
          </h1>
          <div className="flex flex-col">
            <div className="p-4 pl-0">
              <p className="text-off-white">
                There are multiple ways to contribute to the Trustlines
                ecosystem. Here are some examples for your inspiration
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:ml-0 md:mt-4">
              {CHARACTERISTICS.map((characteristic, i) => (
                <Card className="bg-gradient-to-br from-app-blue to-majorelle-blue border-0 border-grey-darker md:h-60 md:w-52 h-68 w-40 p-4 md:m-0 md:mb-2 mb-4 md:mx-2 mx-7 ml-0 hover:from-majorelle-blue hover:to-aquamarine-green">
                  <div className="text-off-white text-sm h-full">
                    <div className="font-semibold py-2 md:text-lg text-base leading-tight">
                      {characteristic.title}
                    </div>
                    <div>{characteristic.text}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
