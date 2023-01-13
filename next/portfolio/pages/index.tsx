import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import App from "./app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeff Lee</title>
        <meta name="description" content="Jeff's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ICON1.png" />
      </Head>
      <App />
    </>
  );
}
