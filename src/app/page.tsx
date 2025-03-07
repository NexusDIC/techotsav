import Hero from "../Components/Hero";
import About from "../Components/About";
import Schedule from "../Components/Schedule";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="px-5">
        <About />
        <Schedule />
      </div>
      <div />
    </div>
  );
}
