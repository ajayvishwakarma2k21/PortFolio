import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import ProjectSection from "../Components/ProjectSection";
import Certifications from "../Components/Certifications";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Space from "../Components/Space";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Space />
        <Skills />
        <Space />
        <Certifications />
        <Space />
        <ProjectSection />
        <Space />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
