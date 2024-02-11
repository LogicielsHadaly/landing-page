import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlideUp from "../../../animation/slideup";
import "../../../i18n";
import { useTranslation } from 'react-i18next';


export default function Example() {
  const router = useRouter();
  const { t, i18n } = useTranslation('');

  // Define the array of logo filenames
  const logoFilenames = ["nextai.svg", "fintech.svg", "propolys.svg", "mitacs.svg", "arbour.svg", "laval.svg", "poly.svg", "attestra.svg", "CDL.svg"];

  return (
    <div className="bg-white py-5 sm:py-5">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        <SlideUp>
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            {t('partners')}
          </h2>
        </SlideUp>
        <SlideUp>
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
        </SlideUp>
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
