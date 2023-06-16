import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import figInsight from "../../../public/fig_insight.svg"

const InsightGen = () =>{
    return (<SectionWrapper id="cta" className="overflow-hidden">
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Insights generation & Risk Assessment
            </h2>
            <p className="text-gray-600">
            Our advanced algorithms and powerful analytics enable us to extract valuable insights that range from price prediction and cash flow modeling to slice structuring and anomaly behavior detection. We firmly believe that every data point carries a significant meaning that can make a profound difference in your decision-making process. 
            </p>
            
        </div>
        <div className="flex-none w-full md:max-w-xl">
            <Image src={figInsight} alt="chart" className=' ' />
        </div>
    </div>
</SectionWrapper>)
}

export default InsightGen