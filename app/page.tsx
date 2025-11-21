import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import Home from "@/components/ui/Home";
import LearningJourney from "@/components/ui/LearningJourney";

const page = () => {
  return (
    <>
    <section id="home" className="min-h-screen"><Home /></section>
    <section id="about" className="min-h-screen lg:min-h-[85vh]"><About /></section>
    <section id="learning-journey" className="min-h-screen bg-secondary/40 section-shape"><LearningJourney /></section>
    <section id="experience" className="min-h-screen"><Experience /></section>
    <section id="contact" className="min-h-screen"><Contact /></section>
    </>
  );
};

export default page;