import SectionWrapper from "../../SectionWrapper"

const stats = [
    {
        data: "100%",
        desc: (
          <>
            of analytical processes eligible to{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4399406" // Replace with the actual link
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              speed up your workflows with AI full-stack approach.
            </a>
            .
          </>
        ),
      },
      {
        data: "Up to 2X",
        desc: (
          <>
            improvement in{" "}
            <a
              href="https://www.mckinsey.com/industries/financial-services/our-insights/reimagining-the-bank-of-the-future"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              user experience and internal productivity
            </a>{" "}
            using AI-powered 24/7 digital engagement.
          </>
        ),
      },
      {
        data: "39%",
        desc: (
          <>
            of{" "}
            <a
              href="https://www.finrafoundation.org/sites/finrafoundation/files/investing-2020-new-accounts-and-the-people-who-opened-them_1_0.pdf" // Replace with the actual link
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              disengaged investors
            </a>{" "}
            can be won back by providing tailored offerings that match their financial education and interaction needs.
          </>
        ),
      },
    {
        data: "50%",
        desc: (
          <>
            of new customers consider {" "}
            <a
              href="https://www.mckinsey.com/industries/financial-services/our-insights/digital-and-ai-enabled-wealth-management-the-big-potential-in-asia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              receiving advisory services remotely
            </a>{" "}
            trough digital channels.
          </>
        ),
      },
]

const Stats = () => (
    <SectionWrapper>
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Leap-frog to the wealth management of the 21st century
                </h3>
                <p className="mt-3">
                    We focus on building strategic partnerships keeping you ahead of the curve.
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex-wrap gap-x-12 gap-y-10 items-start space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="sm:max-w-[15rem]">
                                <h4 className="text-4xl text-blue-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.desc}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default Stats