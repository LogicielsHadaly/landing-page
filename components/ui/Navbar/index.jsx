import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import Link from "next/link";

const Navbar = () => {
    const [state, setState] = useState(false);
    const [useCaseDropdownOpen, setUseCaseDropdownOpen] = useState(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const menuBtnEl = useRef();
    const dropdownRef = useRef(null);
    let timer;


    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(target)
            ) {
                setUseCaseDropdownOpen(false);
                setCompanyDropdownOpen(false);
            }
        };

        dropdownRef.current?.addEventListener("mouseenter", resetTimer);
        dropdownRef.current?.addEventListener("mouseleave", startTimer);

        return () => {
            dropdownRef.current?.removeEventListener("mouseenter", resetTimer);
            dropdownRef.current?.removeEventListener("mouseleave", startTimer);
            clearTimeout(timer);
        };
    }, []);

    function startTimer() {
        timer = setTimeout(() => {
            setUseCaseDropdownOpen(false);
            setCompanyDropdownOpen(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    function resetTimer() {
        clearTimeout(timer);
    }

    const navigation = [
        // { name: "Solutions", href: "#DecisionMaking" },
        { name: "Use Cases", href: "", dropdown: true },
        { name: "Company", href: "", dropdown: true },
    ];

    const dropdownItems = [
        { name: "Report Automation", href: "/useCase1" },
        { name: "Anomaly Detection", href: "/useCase2" },
        { name: "Risk Mitigation", href: "/useCase3" },
        { name: "Network Optimization", href: "/useCase4" },
        // Add more use cases here
    ];

    const companyDropdownItems = [
        { name: "Culture", href: "/culture" },
        { name: "Team", href: "/team" },
        // Add more company options here
    ];

    return (
        <header className="relative">
            <div className="custom-screen md:hidden">
                <NavHeader
                    menuBtnEl={menuBtnEl}
                    state={state}
                    onClick={() => setState(!state)}
                />
            </div>
            <nav
                className={`bg-white pb-5 md:text-sm md:static md:block ${state
                        ? "absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none"
                        : "hidden"
                    }`}
            >
                <div className="custom-screen gap-x-20 items-center md:flex">
                    <NavHeader
                        state={state}
                        onClick={() => setState(!state)}
                    />
                    <div
                        className={`flex-1 items-center mt-8 text-gray-900 text-lg font-bold md:font-medium md:mt-0 md:flex ${state ? "block" : "hidden"
                            } `}
                    >
                        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {navigation.map((item, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="hover:text-gray-900 relative"
                                        ref={item.dropdown ? dropdownRef : null}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block"
                                            scroll={false}
                                            onClick={(e) => {
                                                if (item.dropdown) {
                                                    e.stopPropagation();
                                                    if (item.name === "Use Cases") {
                                                        setUseCaseDropdownOpen(!useCaseDropdownOpen);
                                                    } else if (item.name === "Company") {
                                                        setCompanyDropdownOpen(!companyDropdownOpen);
                                                    }
                                                }
                                            }}
                                        >
                                            {item.name}
                                            {item.dropdown && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="w-4 h-4 inline-block ml-1 -mt-1 transform rotate-90"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            )}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white z-50">
                                                <ul>
                                                    {item.name === "Use Cases" &&
                                                        useCaseDropdownOpen &&
                                                        dropdownItems.map((dropdownItem, index) => (
                                                            <li
                                                                key={index}
                                                                className="border-gray-100 border-b hover:bg-gray-100"
                                                            >
                                                                <Link
                                                                    href={dropdownItem.href}
                                                                    className="block px-4 py-2 text-sm"
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    {item.name === "Company" &&
                                                        companyDropdownOpen &&
                                                        companyDropdownItems.map((dropdownItem, index) => (
                                                            <li
                                                                key={index}
                                                                className="border-gray-100 border-b hover:bg-gray-100"
                                                            >
                                                                <Link
                                                                    href={dropdownItem.href}
                                                                    className="block px-4 py-2 text-sm"
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                            <NavLink
                                href="https://calendly.com/hadaly"
                                className="flex items-center justify-center gap-x-1text-xl text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex px-4 py-2 rounded-md"
                            >
                                Book a demo
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
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
