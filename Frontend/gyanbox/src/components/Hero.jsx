const Hero = () => {
  return (
    <section className="h-screen bg-blue-500 flex items-center justify-center text-center text-white">
      <div>
        <h1 className="text-5xl font-bold mb-4">Welcome to GyanBox</h1>
        <p className="text-lg mb-6">Your go-to platform for learning and growth</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
