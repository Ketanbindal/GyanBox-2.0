import React, { useState } from "react";

const Preregister = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    newsletterConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert boolean consent to "Y" or "N"
    const payload = {
      name: formData.Name,
      emailId: formData.Email_Id,
      newsletterConsent: formData.Newsletter_Consent ? "Y" : "N",
    };

    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Successfully registered!");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-gray-900 py-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-6">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-orange-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Unlock Your True Potential with GyanBox
        </h1>
        <p className="text-2xl mb-6 max-w-2xl">
          Join our mentorship programs, get career guidance, and gain
          industry-recognized certifications.
        </p>
        <button className="bg-orange-500 px-6 py-3 text-lg rounded-md hover:bg-orange-600">
          Get Started
        </button>
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-md my-10">
        <h2 className="text-3xl text-orange-500 mb-4">Welcome to GyanBox</h2>
        <p className="text-lg text-gray-700">
          Your gateway to career growth with one-on-one mentorship, skill
          development, and certifications.
        </p>
      </section>

      {/* Pre-Register Form */}
      <section className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-md my-10 text-center">
        <h2 className="text-3xl text-orange-500 mb-4">Pre-Register Now</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded-md w-full"
            required
          />
          <input
            type="email"
            name="Email_Id"
            value={formData.Email_Id}
            onChange={handleChange}
            placeholder="Email Address"
            className="border p-2 rounded-md w-full"
            required
          />

          {/* Newsletter Consent Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="Newsletter_Consent"
              checked={formData.Newsletter_Consent}
              onChange={handleChange}
              id="newsletter"
              className="w-4 h-4"
            />
            <label htmlFor="newsletter" className="text-gray-700">
              I agree to receive newsletters and updates from GyanBox.
            </label>
          </div>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Preregister;
