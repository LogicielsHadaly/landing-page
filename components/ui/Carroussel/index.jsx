import React from "react";
import SectionWrapper from "../../SectionWrapper";
import Slider from "../../Slider";
import TestimonialCard from "../../TestimonialCard";
import testimonials from "./testimonials.json";

export default function Home() {
  return (
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <SectionWrapper id="carousel" className="section-width overflow-hidden">
        <h2 className="text-sky-950 text-3xl sm:text-4xl mb-10">Our Real Applications</h2>
        <div className="section-width">
          <Slider options={{ align: "center" }}>
            <div className="flex flex-wrap justify-center">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </Slider>
        </div>
      </SectionWrapper>
    </main>
    </div>
  );
}
