import React from "react";
import SectionWrapper from "../../SectionWrapper";
import Slider from "../../Slider";
import TestimonialCard from "../../TestimonialCard";
import testimonials from "./testimonials.json";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlideLeft from "../../../animation/slideleft";
import { useTranslation } from 'react-i18next';


export default function Home() {
  return (
    <SectionWrapper id="testimonials" className="section-width overflow-hidden bg-zinc-100 ">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideLeft>
          <h2 className="text-sky-950 text-3xl sm:text-4xl mb-10 text-center">What Our Clients Say</h2>
          <p className=" text-gray-500 text-xl text-center px-4">
            Hear directly from our clients about their experiences. Our testimonials showcase the impact of our solutions on businesses across various industries.
          </p>
        </SlideLeft>
      </div>
      <div className="flex justify-center items-center mt-10">
        
          <Slider options={{ align: "center" }}>
            <div className="flex flex-wrap justify-center">
              {testimonials.map((testimonial, i) => (
                <div key={i} className=" w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </Slider>
       
      </div>
    </SectionWrapper>
  );
}
