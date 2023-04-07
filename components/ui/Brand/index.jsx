import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/hadaly.svg"
        alt="Hadaly logo"
        {...props}
        width={86}
        height={48}
        priority
    />
)
export default Brand