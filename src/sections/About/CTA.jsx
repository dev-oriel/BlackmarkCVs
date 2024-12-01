const CTA = () => {
  return (
    <section className="text-center bg-primary text-white p-6 rounded-md shadow-lg mb-10">
      <h2 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
      <p className="text-lg mb-6">
        Let us help you craft the perfect CV or resume today!
      </p>
      <a
        href="/services"
        className="bg-secondary text-white px-6 py-3 rounded-md font-bold hover:bg-secondaryHover transition duration-300"
      >
        Get Started
      </a>
    </section>
  );
};

export default CTA;
