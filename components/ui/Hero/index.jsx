// import GradientWrapper from "../../GradientWrapper";
// import NavLink from "../NavLink";
// import React, { Component } from 'react'
// import TextAnimation from "./textanimation";

// const Hero = () => (
//     <section>
//         <GradientWrapper
//             wrapperClassName="inset-0"
//             className="custom-screen text-gray-600"
//         >
//             <div className="space-y-5 max-w-4xl mx-auto text-center">
//                 <h1 className="text-4xl text-gray-800 mx-auto sm:text-6xl">
//                     <div style={{display: 'inline-block', width: '100%'}}>
//                         Streamline Your <TextAnimation/>
//                     </div>
//                     <div>Portfolio Process</div>
//                 </h1>
//                 <p className="max-w-xl mx-auto">
//                 Assess and clarify data portfolios with actionable insights.
//                 </p>
//                 <div className="mx-auto">
//                 </div>
//                 <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
//                     <NavLink
//                         href="#contact"
//                         className="flex items-center gap-x-2 text-white bg-[#1E3A8A] hover:bg-[#F3B3A7] active:bg-[#10B981] "
//                         scroll={false}
//                     >
//                         Get in touch
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             className="w-5 h-5"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </NavLink>
//                     <NavLink
//                         href="#cta"
//                         className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
//                         scroll={false}
//                     >
//                         Learn more
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                             className="w-5 h-5"
//                         >
//                             <path
//                                 fillRule="evenodd"
//                                 d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//                                 clipRule="evenodd"
//                             />
//                         </svg>
//                     </NavLink>
//                 </div>
//             </div>
//         </GradientWrapper>
//     </section>
// );

// export default Hero;


import TextAnimation from "../Hero/textanimation";
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import NavLink from "../NavLink";
import illustration1 from '../../../public/field.png';
import illustration2 from '../../../public/epidemie.png';
import illustration3 from '../../../public/curve.png';
import illustration4 from '../../../public/chart.png';
import illustration5 from '../../../public/gauss.png';
import illustration6 from '../../../public/Group.png';


const SlideIn = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
      {children}
    </motion.div>
  );
};

export default function Example() {

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-8 sm:pb-40 sm:pt-20 lg:pb-40 lg:pt-35">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-5xl text-gray-800 mx-auto sm:text-6xl">
              <div style={{ display: 'inline-block', width: '100%' }}>
                Streamline Your <TextAnimation />
              </div>
              <div>Portfolio Process</div>
            </h1>
            <p className="mt-4 text-2xl text-gray-500">
              Assess and clarify data portfolios with actionable insights.
            </p>
          </div>
          <div>


            <SlideIn>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration1} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>

                        <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration2} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>

                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration3} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>

                        <NavLink
                          href="/useCase1"
                          className="flex items-center justify-center gap-x-1 text-xl text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex px-4 py-2 rounded-md"
                        >
                          Our Use Cases
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </NavLink>
                        
                        <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration4} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>

                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                      <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration5} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>
                        
                        <motion.div className="h-44 w-40 overflow-hidden rounded-lg bg-blue-950  bg-opacity-10  cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
                        <Image src={illustration6} alt="chart" className="w-full h-full object-cover" />
                        </motion.div>

                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </SlideIn>





          </div>
        </div>
      </div>
    </div>
  )
}