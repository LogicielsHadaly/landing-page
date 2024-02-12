import GradientWrapper from "../../GradientWrapper";
import Button from "../Button"
import "../../../i18n";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t, i18n } = useTranslation('');
    const plans = [
        {
            name: t('plan1Title'),
            desc: t('plan1Description'),
            price: 0,
            isMostPop: false,
            precision:t('plan1Precision'),
            features: [
                t('plan1feat1'),
                t('plan1feat2'),
                t('plan1feat3'),
                t('plan1feat4'),
                t('plan1feat5'),
            ],
            buttont: t('plan1Button'),
        },
        {
            name: t('plan2Title'),
            desc: t('plan2Description'),
            price: 10,
            isMostPop: true,
            precision:t('plan2Precision'),
            features: [
                t('plan2feat1'),
                t('plan2feat2'),
                t('plan2feat3'),
                t('plan2feat4'),

            ],
            buttont: t('plan2Button'),
        },
        {
            name: t('plan3Title'),
            desc: t('plan3Description'),
            price: '---',
            isMostPop: false,
            precision:'',
            features: [
                t('plan3feat1'),
            ],
            buttont: t('plan3Button'),
        },
    ];

    return (
        <GradientWrapper wrapperClassName="top-40 inset-x-0">
            <section className='custom-screen text-gray-600'>
                <div className='relative max-w-xl mx-auto sm:text-center mt-24'>
                    <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pricing plans
                    </h1>
                    <div className='mt-3 max-w-xl'>
                        <p>
                            Always know what you'll pay with monthly caps and flat pricing.
                        </p>
                    </div>
                </div>
                <div className='justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 p-10'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`bg-white relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "border-blue-600" : ""}`}>
                                <div className="p-8 space-y-4 border-b sm:text-center">
                                    <span className='text-indigo-800 font-bold text-5xl'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>

                                    <div className="pt-8">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? " text-xl bg-indigo-600 hover:bg-indigo-500 focus:bg-blue-700 ring-blue-600" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            {item.buttont}
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </GradientWrapper>
    );
};

export default Pricing