import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import house_graph from "../../../public/house-graph.svg"

const DecisionMaking = () =>{
    return (<SectionWrapper id="cta" className="overflow-hidden">
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Empowering Decision Making with Integrated Data Solutions
            </h2>
            <p className="text-gray-600">
            We understand that creating and managing portfolios can be a daunting tasks, requiring a significant amount of time and effort. With a wide range of portfolio types to choose from, including Risk, Stocks, Livestock, and Real Estate, our comprehensive platform unlocks the full potential of data-driven decision making. 

From data ingestion to insightful decision generation and data governance, our platform covers every aspect of the data collection value chain, allowing you to concentrate on what truly matters. Say goodbye to the complexities of portfolio management and embrace the power of informed decision making with Hadaly.
            </p>
            
        </div>
        <div className="flex-none w-full md:max-w-xl">
            <Image src={house_graph} alt="chart" className=' ' />
        </div>
    </div>
</SectionWrapper>)
}

export default DecisionMaking