import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";
import React, { Component } from 'react'
import TextAnimation from "./textanimation";
import Button from "../Button";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlideUp from "../../../animation/slideup";
import SectionWrapper from "../../SectionWrapper";

const Hero = ({ Video, BgColor, title, description, button1Text, button1OnClick, button2Text, button2OnClick }) => (
  <SectionWrapper className={`${BgColor} flex items-center `} style={{ height: '90vh' }}>


      <div className="flex mx-auto items-center max-w-xl px-8 ">
        <SlideUp>
        <h1 className="text-2xl mt-48 lg:mt-12 text-gray-800 lg:text-5xl ">
          {title.map((part, index) => (
            <span key={index} className={part.highlight ? 'text-red-500' : ''}>
              {part.text}
            </span>
          ))}
        </h1>
          <p className="mt-4">
            {description}
          </p>
          <div className="flex items-center gap-x-6   font-medium text-sm md:justify-start justify-center">
            <Button
              onClick={button1OnClick}
              className=" mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-4"
            >
              {button1Text}
              <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400  ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>

              </span>
            </Button>

            <Button
              onClick={button2OnClick}
              className=" mt-12 group flex items-center justify-center gap-x-1 text-xl font-medium border hover:bg-white hover:bg-opacity-20  md:inline-flex px-4 py-4 border-indigo-950"
            >
              {button2Text}

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
        </SlideUp>
      </div>

      <div className=" hidden md:block flex w-1/2">
        <img src={Video}  style={{ height: '90vh' }} alt="Your GIF" className=" w-full    object-cover " />
      </div>
  

  </SectionWrapper>

);

export default Hero;
