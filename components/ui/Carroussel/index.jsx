import React from "react";
import SectionWrapper from "../../SectionWrapper";
import Slider from "../../Slider";
import TestimonialCard from "../../TestimonialCard";
import testimonials from "./testimonials.json";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const SlideIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (


    <SectionWrapper id="carousel" className="section-width overflow-hidden bg-zinc-100 ">
      <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <SlideIn>
          <h2 className="text-sky-950 text-3xl sm:text-4xl mb-10 text-center">Our Real Applications</h2>
          <p className="text-gray-600 text-lg  text-center ">
            Review some of our past use cases across diverse assets like livestock, mortgages and stocks. These highlight how our platform offers insightful data and streamlines decision-making. Discover our capabilities and potential benefits for your portfolio management.
          </p>
        </SlideIn>

      </div>
      <div className="flex justify-center items-center">
        <div className=" flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center section-width mt-10  w-3/4 ">

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
      </div>
    </SectionWrapper >


  );
}
