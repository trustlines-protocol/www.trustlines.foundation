import React from "react";

import ContactForm from "./contact-form";

export function ContactHero() {
  return (
    <section className="container mx-auto px-4 mb-32 text-rich-black-lighter">
      <div className="hero-header">
        <div className="flex-1">
          <h1 className="md:text-6xl text-4xl font-semibold leading-tight mb-10 text-rich-black">
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
