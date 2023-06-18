import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  link: string;
  author: string;
};

const TestimonialCard = (props: Props) => {
  return (


      <motion.div className=" py-4 px-8 bg-white shadow-lg rounded-lg my-20 w-[90%] cursor-pointer transition-all duration-300 ease-in-out hover:brightness-110" whileHover={{ scale: 1.1 }}>
      <Link href={props.link} >
        <div className="flex justify-center md:justify-end -mt-16">
          <Image
            alt={props.author}
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            height={80}
            width={80}
            src={props.imgSrc}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl font-semibold mt-4">{props.title}</h2>
          <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
        <div className="flex justify-end mt-4">
          <div href={props.link} className="text-xl font-medium text-indigo-500">
            {props.author}
          </div>

        </div>
      </Link>
      </motion.div>

  );
};
export default TestimonialCard;
