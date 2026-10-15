import Head from "next/head";
import { profile } from "@/data/content";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Nav from "@/sections/Nav";
import Projects from "@/sections/Projects";
import Stack from "@/sections/Stack";

const SITE_URL = "https://nathan-rgs.vercel.app";
const title = `${profile.name} — ${profile.role}`;
const description =
  "Full Stack Developer building fast, reliable web products with TypeScript, Vue, React and Node.js. Now at Omie, previously Fraunhofer IPT in Germany.";

const Home = () => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#07080C" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}${profile.photo}`} />
      <meta name="twitter:card" content="summary" />
    </Head>

    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
    >
      Skip to content
    </a>
    <Nav />
    <main id="main">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
