import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import dataIngest from "../../../public/dataingest.svg"
import ForceGraph from "../Hero/ForceGraph"

const Graphmap = () =>{
    return (<SectionWrapper id="cta" className="overflow-hidden">
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none w-full md:max-w-xl">
            <ForceGraph />
        </div>
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Data Ingestion & Cleaning
            </h2>
            <p className="text-gray-600">
            At Hadaly, we employ a meticulous process that ensures maximum extraction of valuable information from your data. The first crucial step in this process is data ingestion. Our advanced techniques enable us to classify, cleanse and transform different types of data using our API. Whether PDF documents, voice recordings, video files, Excel spreadsheets or any other format, our technology can process them seamlessly.    
            </p>
        </div>
    </div>
</SectionWrapper>)
}

export default Graphmap