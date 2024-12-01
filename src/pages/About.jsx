import Mission from "../sections/About/Mission";
import Vision from "../sections/About/Vision.jsx";
import Values from "../sections/About/Values.jsx";
import Team from "../sections/About/Team";
import Achievements from "../sections/About/Achievements.jsx";
import CallToAction from "../sections/Home/CallToAction";

const About = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-center text-secondary my-10">
        About Us
      </h1>
      <Mission />
      <Vision />
      <Values />
      <Achievements />
      <Team />
      <CallToAction />
    </div>
  );
};

export default About;
