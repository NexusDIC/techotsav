import { MarqueeText } from "./Marquee";

const Hero = () => {
  return (
    <div>
      <div className="h-[83dvh] px-5">heroooo</div>
      <div className="relative z-10 backdrop-blur-sm py-2 border-t border-white/20">
        <MarqueeText />
      </div>
    </div>
  );
};

export default Hero;
