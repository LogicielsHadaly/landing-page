import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/hadaly.svg"
        alt="Hadaly logo"
        {...props}
        width={130}
        height={78}
        priority
    />
)
export default Brand