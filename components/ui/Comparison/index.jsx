import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from '../../SectionWrapper';
import Button from '../Button';
import SlideLeft from '../../../animation/slideleft';
import SlideRight from '../../../animation/slideright';
import SlideDown from '../../../animation/slidedown';
import Brand from '../Brand';



import React, { useState } from 'react';


const Card = ({ description, bgColor, textColor }) => (
  <div className={` px-8  h-48 pt-8 font-md text-opacity-80 text-2xl text-left ${bgColor} bg-opacity-5 rounded-b-lg rounded-tr-3xl ${textColor} shadow-sm`}>
    <p>{description}</p>
  </div>
);

const GridComponent = () => {
  const [selectedButton, setSelectedButton] = useState('avoid');

  const avoidCards = [
    { id: 1, description: '1. Losing time searching for the right information.' },
    { id: 2, description: '2. Wasting time navigating through disorganized templates.' },
    { id: 3, description: '3. Overlooking important information in your Data Room.' },
    { id: 4, description: '4. Enhancing the quality of your Data Room.' },
    // ... other avoid cards
  ];

  const hadalyCards = [
    { id: 5, description: '1. Connect your Data Room Providers' },
    { id: 6, description: '2. Upload or start building your Data Room' },
    { id: 7, description: '3. Get Access to 100+ Legal and Financial Templates' },
    { id: 8, description: '4. Improve your Data Room Quality Scoring' },
    // ... other hadaly cards
  ];

  const cardsToShow = selectedButton === 'avoid' ? avoidCards : hadalyCards;

  return (
    <SectionWrapper id="cta" className="max-w-screen-2xl mx-auto">

      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSelectedButton('avoid')}
          className={`font-md py-1  px-4  text-4xl ${selectedButton === 'avoid' ? 'bg-red-100' : 'bg-transparent border'} hover:bg-gray-100 text-red-500 text-center duration-150 rounded-b-lg rounded-tr-3xl`}
        >
          <h1>Old Way</h1>
        </button>
        <button
          onClick={() => setSelectedButton('hadaly')}
          className={` font-md pb-1 px-4 text-sm ${selectedButton === 'hadaly' ? ' bg-indigo-100' : 'bg-transparent border'} hover:bg-gray-100 text-gray-500 text-center duration-150 rounded-b-lg rounded-tr-3xl`}
        >
         <Brand/>
        </button>
      </div>
      <div className={` ${selectedButton === 'avoid' ? 'border-red-200' : 'border-indigo-200'}  duration-150 border`}>

      </div>
      <div className="m-12 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardsToShow.map(card => (
          <SlideLeft key={card.id}>
            <Card
              description={card.description}
              bgColor={selectedButton === 'avoid' ? "bg-red-500" : "bg-indigo-500"}
              textColor={selectedButton === 'avoid' ? "text-red-500" : "text-indigo-500"}
            />
          </SlideLeft>
        ))}
      </div>

    </SectionWrapper>
  );
};

export default GridComponent;

