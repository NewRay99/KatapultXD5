import Head from "next/head";
import About from "../components/About";
import Goals from "../components/Goals";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KatapultX | Accelerate your career</title>
        <meta name="description" content="Coming soon" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Goals />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
