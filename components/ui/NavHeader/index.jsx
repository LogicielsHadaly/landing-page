import Link from "next/link";
import Brand from "../Brand";

const NavHeader = ({ onClick,  menuBtnEl }) => (
    <div className="flex items-center  py-2 ">
        <Link href="/">
            <Brand />
        </Link>

    </div>
)

export default NavHeader