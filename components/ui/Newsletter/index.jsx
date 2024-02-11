import Button from "../Button";
import Input from "../Input";
import "../../../i18n";
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t, i18n } = useTranslation('');
  // Replace this with your Google Apps Script web app URL
  const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbyfdqeLDf6JqqPMikZsyXz7dVlMHUlUnAkbU-H2C1wxGm-PV7S9KLRZoUTQzqpLCuHO/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      await fetch(googleScriptURL, {
        method: "POST",
        mode: "no-cors", // This should be changed if you want to handle the response
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });

      // Since mode is no-cors, we won't be able to read the response
      alert("Successfully subscribed! Take the opportunity to follow us on LinkedIn & Twitter in our footer!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // writes the email adresses into this google file: https://docs.google.com/spreadsheets/d/1a-Ow-Y40gvwFIszCnouF8ZhAr_ITT_pWIv4iABGrEMU/edit#gid=0
  return (
    <div className="mt-6 md:mt-0 px-4">
      <h2 className="text-gray-800 text-3xl font-semibold sm:text-3xl mx-auto flex  justify-center ">
      {t('newsletterTitle')}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex items-center gap-x-3"
      >
        <div className="relative mx-auto flex  justify-center">
          <svg
            className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <Input
            type="email"
            name="email"
            required
            placeholder={t('newsletterPlaceholder')}
            className="w-full pl-12 pr-3 focus:border-blue-600 text-xl rounded-b-lg  rounded-tl-3xl"
          />
        </div>
        <Button
          type="submit"
          className=" w-auto  group flex items-center justify-center gap-x-1 text-xl font-medium bg-indigo-950 text-white hover:bg-opacity-90 md:inline-flex px-4 py-2"
        >
          {t('newsletterButton')}
          <span className="transition-transform duration-300 transform group-hover:scale-125 text-indigo-400  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </span>
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;