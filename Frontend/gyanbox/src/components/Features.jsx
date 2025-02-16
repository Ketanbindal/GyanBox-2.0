const Features = () => {
  return (
    <section className="container mx-auto my-20 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
          <p className="text-gray-600">Learn with engaging and interactive content.</p>
        </div>
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
          <p className="text-gray-600">Get guidance from industry experts.</p>
        </div>
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Career Support</h3>
          <p className="text-gray-600">We help you land your dream job.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
