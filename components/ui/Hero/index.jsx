import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";

const Hero = () => (
    <section>
        <GradientWrapper
            wrapperClassName="inset-0"
            className="custom-screen text-gray-600"
        >
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                Streamline your  {" "}
                    <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#F3B3A7]">
                    Asset 
                    </span>
                 {" "}Portfolio Process
                </h1>
                <p className="max-w-xl mx-auto">
                Maximize engagement with tailored financial analytics.
                </p>
                <p className="max-w-xl mx-auto fade-in-text">
                Enhance user retention and platform revenue.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="#contact"
                        className="flex items-center gap-x-2 text-white bg-[#1E3A8A] hover:bg-[#F3B3A7] active:bg-[#10B981] "
                        scroll={false}
                    >
                        Get in touch
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
                    <NavLink
                        href="#cta"
                        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
                        scroll={false}
                    >
                        Learn more
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
        </GradientWrapper>
    </section>
);

export default Hero;
