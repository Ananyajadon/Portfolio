import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-12py" >
      <Navbar/>
      <div class=" container mx-auto px-12py py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      <div>
        <Footer/>
      </div>
   </div>
    </main>
  );
}
