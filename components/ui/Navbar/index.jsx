import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import NavLink from "../NavLink";
import Link from "next/link";
import Button from "../Button";
import Brand from "../Brand";
import { useRouter } from 'next/router'; // Import useRouter
import i18n from '../../../i18n'; // Ensure this path is correct
import ReactCountryFlag from "react-country-flag";
import "../../../i18n";
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuBtnEl = useRef();
    const router = useRouter(); // Initialize useRouter
    const { t, i18n } = useTranslation('');
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper function to determine if the link is active
    const isActive = (pathname) => router.pathname === pathname;

    const languages = [
        { code: 'en', name: 'English', flagCode: 'US' },
        { code: 'fr', name: 'Français', flagCode: 'FR' },
        // Add more languages here
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    const getFlagCode = (languageCode) => {
        const language = languages.find(lang => lang.code === languageCode);
        return language ? language.flagCode : 'US'; // Default to 'US' if not found
    };

    return (
        <nav className={`   fixed top-0 left-0 w-screen z-10 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white text-gray-800 shadow-lg py-1' : 'bg-transparent  py-4'}`}>



            <div className="mx-auto flex md:max-w-screen-2xl items-center justify-between  ">
                <NavHeader ref={menuBtnEl} className='' />
                <div className=" hidden md:flex flex space-x-12 justify-center pr-32 lg:text-lg text-xs">
                    <Link href="/team">
                        <p className={`hover:underline px-2 pt-2 ${isActive('/team') ? 'border-b-2 border-indigo-500' : ''}`} >
                            {t('navbarButton1')}
                        </p>
                    </Link>

                    <Link href="/startup">
                        <p className={`hover:underline px-2 pt-2 ${isActive('/startup') ? 'border-b-2 border-indigo-500' : ''}`} >
                            {t('navbarButton2')}
                        </p>
                    </Link>

                    <Link href="/DueDiligenceConsultant">
                        <p className={`hover:underline px-2 pt-2 ${isActive('/DueDiligenceConsultant') ? 'border-b-2 border-indigo-500' : ''}`} >
                            {t('navbarButton3')}
                        </p>
                    </Link>


                    {/* Language Selector and Flag Display */}
                    {/* <div className="flex items-center px-4 py-1 ">
                        <ReactCountryFlag countryCode={getFlagCode(selectedLanguage)} svg style={{
                            width: '2em',
                            height: '2em',
                            marginRight: '8px',
                        }} />
                        <select onChange={(e) => changeLanguage(e.target.value)} value={selectedLanguage} className="text-lg py-1 rounded border border-indigo-300 bg-indigo-100 bg-opacity-10 ">
                            {languages.map(lang => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div> */}

                    <div className="flex items-center px-4 py-1 ">
                        <ReactCountryFlag
                            countryCode={getFlagCode(selectedLanguage)}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                                marginRight: '8px',
                                borderRadius: '20%', // Make the flag round
                            }}
                        />
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={selectedLanguage}
                            className="text-lg py-1 border border-indigo-300 bg-indigo-100 bg-opacity-10
                   rounded-tl-lg rounded-tr-md rounded-bl-md rounded-br-lg focus:border-1 focus:border-indigo-500" // Example of asymmetric border-radius
                        >
                            {languages.map(lang => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div>

                </div>





                <div className=" ">


                </div>

                <div className=" hidden md:flex space-x-12  px-8">
                    <Button
                        onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
                        className="group flex items-center justify-center gap-x-1 text-lg font-medium border border-indigo-950  md:inline-flex px-4 py-2"
                    >
                        {t('navbarButtonCallToAction')}
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
                <Button className="md:hidden px-8 " onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </Button>

            </div>

            {/* Mobile Menu */}
            {
                isMenuOpen && (
                    <div className="md:hidden ">
                        <Link href="/team" className=" text-xl block px-4 py-8 hover:bg-neutral-50 hover:border-t hover:border-b ">{t('navbarButton1')}</Link>
                        <Link href="/startup" className=" text-xl block px-4 py-8 hover:bg-neutral-50 hover:border-t hover:border-b">{t('navbarButton2')}</Link>
                        <Link href="/DueDiligenceConsultant" className=" text-xl block px-4 py-8 hover:bg-neutral-50 hover:border-t hover:border-b">{t('navbarButton3')}</Link>

                        {/* Language Selector and Flag for Mobile */}
                        <div className="flex items-center justify-center px-4 py-4">
                            <ReactCountryFlag
                                countryCode={getFlagCode(selectedLanguage)}
                                svg
                                style={{ width: '24px', height: '24px', marginRight: '8px' }}
                            />
                            <select
                                onChange={(e) => changeLanguage(e.target.value)}
                                value={selectedLanguage}
                                className="text-md py-1 rounded border border-gray-300"
                            >
                                {languages.map(lang => (
                                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                                ))}
                            </select>
                        </div>
                        <Button
                            onClick={() => window.open('https://calendly.com/hadaly', '_blank')}
                            className="  w-2/3 mt-8 py-8 mb-16 mx-auto mb-4 group flex items-center justify-center gap-x-1 text-lg font-medium border border-indigo-950  md:inline-flex "
                        >
                            {t('navbarButtonCallToAction')}
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
                )
            }
        </nav >
    );
};

export default Navbar;

