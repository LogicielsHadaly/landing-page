import Button from "../Button";
import Input from "../Input";

const Newsletter = () => {
  // Replace this with your Google Apps Script web app URL
  const googleScriptURL =
    "https://script.google.com/macros/s/AKfycbzywttmicK3GwUBj6Qz-ZPq48qjjR_cFaFzB70odP0Bo8OMy3LlDpGUBidDnIzeCI5M8g/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
        await fetch(googleScriptURL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email }).toString(),
        });
    
        // Always display success message
        alert("Successfully subscribed! Take the opportunity to follow us on LinkedIn & Twitter in our footer!");
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      }
  };

  // writes the email adresses into this google file: https://docs.google.com/spreadsheets/d/1pumuKgFoMG4E2zK-7FQo8Vy9XLrA9qGUlywrg9mo8Qk/edit#gid=0

  return (
    <div className="mt-6 md:mt-0">
      <h2 className="text-gray-800 text-xl font-semibold sm:text-2xl">
        Sign up for our future newsletter.
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex items-center gap-x-3"
      >
        <div className="relative">
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
            placeholder="Enter your email"
            className="w-full pl-12 pr-3 focus:border-blue-600"
          />
        </div>
        <Button
          type="submit"
          className="block w-auto text-white bg-blue-600 hover:bg-blue-500 ring-offset-2 ring-blue-600 focus:ring shadow rounded-lg"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;