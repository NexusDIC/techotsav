import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="">
      <h1 className="text-5xl text-center text-white mb-6">
        What is TECHOTSAV2.0?
      </h1>
      <br />
      <br />

      <div className="flex gap-16 justify-center items-center p-6">
        <Image
          src="/imgs/photo.png"
          alt="Event poster for Techotsav"
          height={800}
          width={800}
          className="rounded-lg shadow-lg"
        />
        <div className="right text-xl text-center text-gray-300 mt-6 max-w-xl leading-10">
          Techotsav is Nagpur&apos;s premier tech fest, bridging the gap between
          students and industry professionals through innovation, learning, and
          collaboration. Attendees dive deep into programming languages, AI,
          machine learning, and industry trends, gaining real-world knowledge
          and practical skills to thrive in the tech ecosystem. Techotsav is a
          celebration of innovation, technology, and creativity. Join us for an
          unforgettable experience filled with workshops, discussions, and
          hands-on projects.
        </div>
      </div>
    </div>
  );
};

export default About;
