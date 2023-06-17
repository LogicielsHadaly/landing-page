// // pages/index.tsx
// // 1. import all the necessary components and data
// import Slider from "../../Slider";
// import TestimonialCard from "../../TestimonialCard";
// import testimonials from "./testimonials.json";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center py-24">
//       <div className="w-screen flex justify-center">
//         <Slider options={{ align: "center" }}>
//           {testimonials.map((testimonial, i) => (
//             <div key={i} className="flex-[0_0_20%] md:flex-[0_0_20%] justify-center">
//               <TestimonialCard {...testimonial} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </main>
//   );
// }

import SectionWrapper from "../../SectionWrapper"
// pages/index.tsx
// 1. import all the necessary components and data
import Slider from "../../Slider";
import TestimonialCard from "../../TestimonialCard";
import testimonials from "./testimonials.json";

export default function Home() {
  return (
  <SectionWrapper id="carroussel" className="overflow-hidden">
      {/* 2. make sure our carousel container takes up the full screen width using w-screen */}
      <div className="w-screen">
        <Slider options={{ align: "center" }}>
          {testimonials.map((testimonial, i) => (
            // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
            // for mobile devices we use 90% width
            <div key={i} className="flex-[0_0_90%] md:flex-[0_0_50%]">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>

    </SectionWrapper>
  ) 
}