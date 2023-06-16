import Image from 'next/image'
import SectionWrapper from "../../SectionWrapper"
import figmonitor from "../../../public/monitor.svg"

const DataIngestion = () =>{
    return (<SectionWrapper id="cta" className="overflow-hidden">
    <div className="custom-screen flex flex-col-reverse gap-x-12 justify-between md:flex-row md:items-center">
        <div className="flex-none w-full md:max-w-xl">
            <Image src={figmonitor} alt="chart" className=' ' />
        </div>
        <div className="flex-none max-w-xl mt-12 space-y-3 md:mt-0">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Data Governance & Perfomance monitoring
            </h2>
            <p className="text-gray-600">
            we bring real-time event monitoring to your hand, ensuring you stay informed about potential impacts as they unfold. Whether it's an epidemic outbreak, an economic event, or a sudden rise in interest rates, our system keeps a vigilant eye on these developments based on your need. By providing timely alerts, we empower you to proactively assess potential consequences and take necessary measures to mitigate risks. Moreover, these alerts serve as valuable indicators to explore new opportunities and discover innovative solutions. 
            </p>
            
        </div>
    </div>
</SectionWrapper>)
}

export default DataIngestion