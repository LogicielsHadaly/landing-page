import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";


//1. define the props
type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  //2. initialize EmblaCarousel using the custom hook
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 2,
    align: 'start',
    ...options,
  });

  return (
    // 3. set ref as emblaRef.
    // make sure we have overflow-hidden and flex so that it displays properly
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};
export default Slider;
