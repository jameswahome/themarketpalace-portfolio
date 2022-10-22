import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../components/homepage";
import About from "../components/homepage/about";
import CardLayout from "../components/homepage/cards";
import Footer from "../components/homepage/footer";
import RecentProjects from "../components/homepage/recentProjects";
import styles from "../styles/Home.module.css";

const data = [
  {
    id: 1,
    title: "Mobile App Development",
    body: "I'm a React Native Developer specializing in developing robust native mobile applications for Android and Ios devices.",
  },
  {
    id: 1,
    title: "Backend API",
    body: "I'm specialized in Node Express Server, Fetch API, Graphql (Apollographql), and Lumen. Get faster responses, security, performance, and better integration to your frontend apps with graphql.",
  },
  {
    id: 1,
    title: "Web Apps",
    body: "I've specialized in React, NextJs, Html5, TailwindCSS, and PHP.  Get that single-page performance from React and Production-ready NextJs with better SEO from Nextjs ",
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheMarketPalace</title>
        <meta name="description" content="TheMarketPalace" />
      </Head>

      <main className={styles.main}>
        <HomePage />
        <div className="mt-4 bg-blue-50 px-2 py-2">
          <p className="ml-2 text-lg text-gray-500">
            My <em className="text-blue ">Services</em>
          </p>
          <h1 className="text-4xl text-gray-600 mt-2">What I Do</h1>
          <ul className="flex flex-col justify-center items-center space-y-4 md:space-x-4 md:flex-row mt-4">
            {data.map((info) => {
              return (
                <li key={info.id}>
                  <CardLayout cardInfo={info} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-2 my-4 bg-blue-50">
          <RecentProjects />
        </div>
        <div>
          <About />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
