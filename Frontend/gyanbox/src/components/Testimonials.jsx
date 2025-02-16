const Testimonials = () => {
  return (
    <section className="container mx-auto my-20 p-6">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg w-72 text-center">
          <p className="italic text-gray-600">"GyanBox changed the way I learn!"</p>
          <h4 className="mt-4 font-bold">- John Doe</h4>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg w-72 text-center">
          <p className="italic text-gray-600">"A must-have for students!"</p>
          <h4 className="mt-4 font-bold">- Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
