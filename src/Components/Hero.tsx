import { MarqueeText } from "./Marquee";
import localFont from "next/font/local";
import Timer from "./Timer";

const hubotFont = localFont({
  src: "../fonts/HubotSans_Condensed-SemiBold.ttf",
});

const monotonFont = localFont({
  src: "../fonts/Monoton-Regular.ttf",
});

const Hero = () => {
  return (
    <div>
      <div className="h-[85dvh] px-5 flex justify-center items-center">
        <div className="main max-w-6xl text-center">
          <h1
            className={`text-9xl ${monotonFont.className} text-green-600 cursor-default select-none`}
          >
            TECHOTSAV 2.0
          </h1>
          <br />
          <p className={`text-2xl ${hubotFont.className} text-emerald-300`}>
            Techotsav is back with it&apos;s second rendition. Get ready to
            experience the technology never before. Multiple Workshops, Panel
            Discussions and also a hackathon to satisfy your technical needs, we
            got everything to quench your brainly thirst
          </p>
          <br />
          <div className="date text-5xl font-sans">21-22 March 2025</div>
          <br />
          <Timer />
        </div>
      </div>
      <div className="relative z-10 backdrop-blur-sm py-2 border-t border-white/20">
        <MarqueeText />
      </div>
    </div>
  );
};

export default Hero;
