import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  link: string;
  author: string;
  comp: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <motion.div className=" bg-neutral-50 bg-opacity-50 py-12 px-8 mt-12 w-[90%] cursor-pointer shadow-sm transition-all duration-300 ease-in-out hover:brightness-110 rounded-b-lg  rounded-tl-3xl" whileHover={{ scale: 1.01 }}>
      <Link href={props.link} >
        <div className="flex justify-center md:justify-end -mt-16">
          <Image
            alt={props.author}
            className="w-10 h-10 object-cover rounded-full border-2 border-blue-900"
            height={30}
            width={30}
            src={props.imgSrc}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl font-semibold mt-4">{props.title}</h2>
          <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
        <div className="flex justify-end mt-2 items-center">
          {props.comp && (
            <Image
              alt={props.comp}
              className="mr-4"
              height={100}
              width={100}
              src={props.comp}
            />
          )}
          <div href={props.link} className="text-xl font-medium text-indigo-950">
            {props.author}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default TestimonialCard;
