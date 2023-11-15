import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";
import React, { Component } from 'react'
import TextAnimation from "./textanimation";
import Button from "../Button";

const Hero = () => (
  <section className="bg-neutral-100  ">


    <GradientWrapper
      wrapperClassName="inset-0"
      className="custom-screen text-gray-600"
    >

      {/* <div className="flex-1 pl-8">

<img src="/main_video.gif" alt="Your GIF" className=" w-full h-auto shadow-xl rounded-b-lg rounded-tl-3xl" />
</div> */}
      <div className="flex items-center py-40 h-screen mx-auto  ">
        <div className="flex-1 space-y-6  mx-auto text-left  pl-9">
          <h1 className="text-3xl text-gray-800 sm:text-4xl">
            Your Due Diligence Copilot to Rapidly Assess Deal Red Flag
          </h1>
          <p className="">
            Our data room AI connects with your existing data room provider. It transforms the folder structure and filenames to align with your internal standards, including highlighting any missing data. We also provide a generative AI chatbot for buy-side Q&A of the data room.
          </p>
          <div className="flex items-center gap-x-6   font-medium text-sm">
            <Button
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              className=" mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-4"
            >
              Get In Touch
              <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

              </span>
            </Button>

            <Button
              onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
              className=" mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium border hover:bg-white hover:bg-opacity-20  md:inline-flex px-4 py-4 border-indigo-950"
            >
              Subscribe
              <span className="transition-transform duration-300 transform group-hover:scale-150">
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
              </span>
            </Button>
          </div>
        </div>
        <div className="flex-1 pl-8">
          <img src="/main_video.gif" alt="Your GIF" className=" w-full   h-screen object-cover " />
        </div>

        {/* <div className="flex-1 pl-8">

          <img src="/main_video.gif" alt="Your GIF" className=" w-full   h-auto  shadow-xl rounded-b-lg rounded-tl-3xl" />
        </div> */}
      </div>
    </GradientWrapper>
  </section>
);

export default Hero;
