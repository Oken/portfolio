"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Medicine from "@/components/Medicine";
import Engineering from "@/components/Engineering";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Medicine />
        <Engineering />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
