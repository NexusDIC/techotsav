import Hero from "../Components/Hero";
import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Speakers from "@/Components/Speaker";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="px-5">
        <About />
        <hr />
        <Schedule />
        <hr />
        <Speakers />
      </div>
      <div />
    </div>
  );
}
