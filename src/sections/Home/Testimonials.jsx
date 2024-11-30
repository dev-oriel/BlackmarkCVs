const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "This platform made it super easy to create my CV. Highly recommended!",
    },
    {
      name: "Jane Smith",
      feedback:
        "The templates are amazing and the process is very smooth. Great job!",
    },
    {
      name: "Michael Brown",
      feedback:
        "I landed my dream job thanks to the professional CV I built here.",
    },
  ];

  return (
    <div className="bg-gray-900 py-12 md:py-20 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-cyan-500">
        What Our Users Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-md shadow">
            <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
            <p className="text-cyan-500 font-bold mt-4">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
