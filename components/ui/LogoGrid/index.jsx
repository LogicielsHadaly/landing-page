import Image from 'next/image'
import nextai from '../../../public/logos/nextai.svg'
import fintechhub from '../../../public/logos/fintechhub.svg'
import propolys from '../../../public/logos/propolys.svg'
import auth0 from '../../../public/logos/auth0.svg'
import quebec from '../../../public/logos/quebec.svg'
import canada from '../../../public/logos/canada.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickup from '../../../public/logos/clickup.svg'
import SectionWrapper from '../../SectionWrapper'

const logos = [
    {
        src: nextai,
        alt: "nextai"
    },
    {
        src: propolys,
        alt: "propolys"
    },
    {
        src: fintechhub,
        alt: "fintechhub"
    },
    //{
    //    src: clickup,
    //    alt: "clickup"
    //},
    //{
    //   src: algolia,
    //    alt: "algolia"
    //},
    {
        src: canada,
        alt: "canada"
    },
    {
        src: quebec,
        alt: "quebec"
    },
    //{
    //    src: auth0,
    //    alt: "auth0"
    //},
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-sm text-gray-800 text-center">
                Product of Canadian Engineering
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-5 gap-x-10 gap-y-8 md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid