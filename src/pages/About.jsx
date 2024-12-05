import Mission from "../sections/About/Mission";
import Vision from "../sections/About/Vision.jsx";
import Values from "../sections/About/Values.jsx";
import Team from "../sections/About/Team";
import CallToAction from "../sections/Home/CallToAction";

const About = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-secondary my-10">
        About Us
      </h1>
      <Mission />
      <Vision />
      <Values />
      <Team />
      <CallToAction />
    </div>
  );
};

export default About;
