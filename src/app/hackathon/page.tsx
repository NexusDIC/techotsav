import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Schedule from "@/Components/Schedule";
import Speakers from "@/Components/Speaker";
import Sponsors from "@/Components/Sponsors";
import ComPats from "@/Components/ComPats";
import Faq from "@/Components/Faq";
import Navbar from "@/Components/Navbar";

export default function Hackotsav() {
  return (
    <div>
      <Navbar />
      <Hero title="HACKOTSAV" />
      <div className="px-5">
        <br />
        <About />
        <hr />
        <br />
        <Schedule />
        <hr />
        <br />
        <Speakers />
        <hr />
        <br />
        <Sponsors />
        <hr />
        <br />
        <ComPats />
        <br />
        <hr />
        <br />
        <Faq />
        <br />
        <hr />
        <br />
      </div>
      <div />
    </div>
  );
}
