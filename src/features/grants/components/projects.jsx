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
    <section className="container mx-auto px-4 mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
            Exemplary <br />
            projects
          </h1>
          <div className="flex flex-col">
            <div className="p-4">
              <p>
                There are multiple ways to contribute to the Trustlines
                ecosystem. Here are some rough examples for your inspiration:
              </p>
            </div>
            <div className="flex flex-wrap">
              {CHARACTERISTICS.map((characteristic, i) => (
                <Card className="bg-transparent border-4 border-rich-black h-56 w-56 p-4 m-2">
                  <div className="text-rich-black text-sm h-full">
                    <div className="font-semibold py-2">
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
