// import Image from 'next/image'
// import nextai from '../../../public/logos/nextai.svg'
// import fintechhub from '../../../public/logos/fintechhub.svg'
// import propolys from '../../../public/logos/propolys.svg'
// //import auth0 from '../../../public/logos/auth0.svg'
// import quebec from '../../../public/logos/quebec.svg'
// import canada from '../../../public/logos/canada.svg'
// //import algolia from '../../../public/logos/algolia.svg'
// //import clickup from '../../../public/logos/clickup.svg'
// import SectionWrapper from '../../SectionWrapper'

// const logos = [
//     {
//         src: nextai,
//         alt: "nextai"
//     },
//     {
//         src: propolys,
//         alt: "propolys"
//     },
//     {
//         src: fintechhub,
//         alt: "fintechhub"
//     },
//     //{
//     //    src: clickup,
//     //    alt: "clickup"
//     //},
//     //{
//     //   src: algolia,
//     //    alt: "algolia"
//     //},
//     {
//         src: canada,
//         alt: "canada"
//     },
//     {
//         src: quebec,
//         alt: "quebec"
//     },
//     //{
//     //    src: auth0,
//     //    alt: "auth0"
//     //},
// ]


// const LogoGrid = () => (
//     <SectionWrapper>
//         <div className="custom-screen">
//             <h2 className="font-semibold text-sm text-gray-800 text-center">
//                 Product of Canadian Engineering
//             </h2>
//             <div className="mt-8 flex justify-center">
//                 <ul className="inline-grid grid-cols-5 gap-x-10 gap-y-8 md:gap-x-16">
//                     {
//                         logos.map((item, idx) => (
//                             <li key={idx}>
//                                 <Image src={item.src} alt={item.alt} />
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     </SectionWrapper>
// )

// export default LogoGrid

import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function Example() {
  const router = useRouter();

  // Define the array of logo filenames
  const logoFilenames = ["nextai.svg", "fintech.svg", "propolys.svg", "mitacs.svg", "arbour.svg", "laval.svg", "poly.svg"];

  return (
    <div className="bg-white py-5 sm:py-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <SlideIn>
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by innovative teams
          </h2>
        </SlideIn>
        <SlideIn>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {logoFilenames.map((filename, index) => (
              <img
                key={index}
                className={`col-span-2 max-h-12 w-full object-contain lg:col-span-1 logo-image`}
                src={`/logos/${filename}`}
                alt={`Logo ${index + 1}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/158x48";
                }}
              />
            ))}
          </div>
        </SlideIn>
      </div>
      <style jsx>{`
        .logo-image {
          width: 158px;
          height: 48px;
        }
      `}</style>
    </div>
  );
}
