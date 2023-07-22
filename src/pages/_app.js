import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import BirthdayContext from "../components/Contexts/BithdayContext";
import "normalize.css";
import "tailwindcss/tailwind.css";
import "../styles/cake.css";
import "../styles/fireworks.css";

function MyApp({ Component, pageProps }) {
  const [isBirthday, setIsBirthday] = useState(false);
  const [birthPerson, setBirthPerson] = useState(null);
  return (
    <BirthdayContext.Provider
      value={{ isBirthday, setIsBirthday, birthPerson, setBirthPerson }}
    >
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </BirthdayContext.Provider>
  );
}

export default MyApp;
