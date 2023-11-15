import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/hadaly.svg"
        alt="Hadaly logo"
        {...props}
        className="py-0"
        width={130}
        height={78}
        priority
    />
)
export default Brand