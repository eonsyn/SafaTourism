import HeroSection from "@/component/HeroSection";
import InfoAbout from "@/component/InfoAbout";
import Package from "@/component/Package";
import Footer from "@/component/Footer";
import PeopleSay from "@/component/PeopleSay";
import Gallery from "@/component/Gallery";
import Faq from "@/component/Faq";

export default function Home() {
  return (
    <div className="text-white font-text bg-slate-800 w-screen min-h-[200vh]">
      <section id="Home">
        {" "}
        <HeroSection />
      </section>

      <InfoAbout />
      <section id="Gallery">
        <Gallery />
      </section>

      <section id="Package">
        <Package />
      </section>
      <PeopleSay />
      <Faq />
      <Footer />
    </div>
  );
}
