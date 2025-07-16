"use client";

import React, { memo, useMemo } from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

// Memoized company component to prevent re-renders
const CompanyLogo = memo(({ company }: { company: typeof companies[0] }) => {
  const logoWidth = useMemo(() => 
    company.id === 4 || company.id === 5 ? 100 : 150, 
    [company.id]
  );

  return (
    <div className="flex md:max-w-60 max-w-32 gap-2">
      <img
        src={company.img}
        alt={company.name}
        className="md:w-10 w-5"
        loading="lazy"
        decoding="async"
      />
      <img
        src={company.nameImg}
        alt={company.name}
        width={logoWidth}
        className="md:w-24 w-20"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
});

CompanyLogo.displayName = "CompanyLogo";

// Memoized companies section
const CompaniesSection = memo(() => {
  const companyLogos = useMemo(() => 
    companies.map((company) => (
      <CompanyLogo key={company.id} company={company} />
    )), 
    []
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
      {companyLogos}
    </div>
  );
});

CompaniesSection.displayName = "CompaniesSection";

// Memoized testimonials section
const TestimonialsSection = memo(() => {
  return (
    <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

const Clients = memo(() => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <TestimonialsSection />
        <CompaniesSection />
      </div>
    </section>
  );
});

Clients.displayName = "Clients";

export default Clients;