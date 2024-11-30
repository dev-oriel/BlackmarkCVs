import Hero from "../sections/Home/HeroSection";
import Features from "../sections/Home/Features";
import Testimonials from "../sections/Home/Testimonials";
import CallToAction from "../sections/Home/CallToAction";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="callToAction">
        <CallToAction />
      </section>
    </div>
  );
};

export default Home;
