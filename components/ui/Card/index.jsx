import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import problem from '../../../public/problem.svg';
import NavLink from "../NavLink";
import Button from '../Button';
import SlideLeft from '../../../animation/slideleft';
import SlideRight from '../../../animation/slideright';
import FadeIn from '../../../animation/fadein';

const CardVideo = ({ title, onClick, children, info , Video}) => (
    <div className="text-center space-y-4 px-8">
       

 
        <img src={Video} alt="Your GIF" className="w-full h-auto shadow-xl rounded-b-lg rounded-tl-3xl" />


        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className=" max-w-md text-lg text-gray-500   mt-4 mb-2 mx-auto text-center">{info}</p>
    </div>
);

export default CardVideo;
