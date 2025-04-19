import Galeria from "@/components/Galeria";
import Home from "@/components/Home";
import Nav from "@/components/Nav";
import ExperienceSection from "@/components/Local";
import Section from "@/components/Section";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="">
     <Nav/>
     <Home/>
     <Section/>
     <ExperienceSection/>
     <Galeria/>
     <Footer/>
    </div>
  );
}
