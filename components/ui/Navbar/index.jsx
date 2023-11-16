import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import Link from "next/link";
import Button from "../Button";
import Brand from "../Brand";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuBtnEl = useRef();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`   fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white text-gray-800 shadow-lg py-1' : 'bg-transparent  py-4'}`}>



            <div className="mx-auto flex max-w-screen-2xl items-center justify-between  ">
                <NavHeader ref={menuBtnEl} className='' />
                <div className=" hidden md:flex space-x-12 justify-center pr-32">
                    <Link href="/team" className=" hover:underline pt-2">Company</Link>
                    <Link href="/startup" className=" hover:underline pt-2 ">Startup</Link>
                    <Link href="/DueDiligenceConsultant" className=" hover:underline pt-2">Due Diligence Consultant</Link>


                </div>
                <div className=" ">
                  

                </div>

                <div className=" hidden md:flex space-x-12  ">
                    <Button
                        onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
                        className="group flex items-center justify-center gap-x-1 text-lg font-medium border border-indigo-950  md:inline-flex px-4 py-2"
                    >
                        Book a demo
                        <span className="transition-transform duration-300 transform group-hover:scale-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <Button className="md:hidden " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Button>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <Link href="/team" className="block px-4 py-2 hover:bg-neutral-50 hover:border-t hover:border-b">Company</Link>
                    <Link href="/startup" className="block px-4 py-2 hover:bg-neutral-50 hover:border-t hover:border-b">For Startup</Link>
                    <Link href="/DueDiligenceConsultant" className="block px-4 py-2 hover:bg-neutral-50 hover:border-t hover:border-b">For Due Diligence Consultant</Link>


                    <Button
                        onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
                        className="  w-2/3 mx-auto mb-4 group flex items-center justify-center gap-x-1 text-lg font-medium border border-indigo-950  md:inline-flex "
                    >
                        Book a demo
                        <span className="transition-transform duration-300 transform group-hover:scale-150">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

