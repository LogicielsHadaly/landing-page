import Link from "next/link";
import Brand from "../Brand";

const NavHeader = ({ onClick,  menuBtnEl }) => (
    <div className="flex items-center  py-2 px-4 ">
        <Link href="/">
            <Brand />
        </Link>

    </div>
)

export default NavHeader