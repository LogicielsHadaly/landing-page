import Head from "next/head";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { useState } from 'react';
import Button from "../components/ui/Button";
import "../i18n";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t, i18n } = useTranslation('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.status === 200) {
        console.log("Email sent successfully");
        // Reset the form or give user feedback
      } else {
        console.error("Failed to send the email");
        // Give user feedback
      }
    } catch (error) {
      console.error("Failed to send the email", error);
      // Give user feedback
    }
  };

  return (
    <>
      <Head>
        <meta name='robots' content='index' />
        <title>Contact</title>
      </Head>
      <Navbar />

      <main className="container mx-auto px-4 mt-12 mb-12">
        <h1 className="text-center text-4xl font-bold text-gray-800 mt-32 mb-10">{t('contactTitle')}</h1>
        <p className="text-center justyfy-center py-4">
        {t('contactDescription')}

        </p>
        <form className="max-w-xl mx-auto shadow-lg rounded-lg p-8 border" onSubmit={handleSubmit}>


          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contactName')}</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contactEmail')}</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contactMessage')}</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-36"></textarea>
          </div>
          <div className="mb-3 justify-center text-right ">
            <Button type="submit" className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-xl w-full sm:w-auto px-24 text-center">{t('contactButton')}</Button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}