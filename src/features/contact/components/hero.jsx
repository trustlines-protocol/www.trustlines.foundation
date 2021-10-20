import React from "react";

import ContactForm from "./contact-form";

export function ContactHero() {
  return (
    <section className="md:container mx-auto px-4 mb-10 md:mb-32 md:pt-12 text-rich-black-lighter md:px-12">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black pt-6">
            Contact Us
          </h1>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
