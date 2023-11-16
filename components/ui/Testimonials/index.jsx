import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlideRight from '../../../animation/slideright';


const Testimonial = () => {
    return (
        <section className=" w-full relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">

            <SlideRight>
                <div className='py-12'> 
                <h2 className="text-sky-950 text-3xl sm:text-4xl mb-10 text-center">Our Feedbacks</h2>
                {/* <p className="text-gray-600 text-lg  text-center ">
                    Review some of our past use cases across diverse assets like livestock, mortgages and stocks. These highlight how our platform offers insightful data and streamlines decision-making. Discover our capabilities and potential benefits for your portfolio management.
                </p> */}
                </div>
            
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img className="mx-auto h-12" src="/logos/attestra.svg" alt="" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>“Excellent, the method and approach were explained, followed, and executed as planned.”</p>
                    </blockquote>
                    <figcaption className="mt-10">
                        <img className="mx-auto h-10 w-10 rounded-full" src="/Image-50.svg" alt="" />
                        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">Mark Alexandre Allen-Lefebvre</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div className="text-gray-600">IT Director at ATTESTRA</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            </SlideRight>
        </section>
    );
}

export default Testimonial;
