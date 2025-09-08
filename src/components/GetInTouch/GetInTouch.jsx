import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-[#111] py-20 px-6 md:px-20" id="contact">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Get a Quick Estimate
          </h3>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2">Your name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2">Your email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-3 bg-[#1a1a1a] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-300 mb-2">Location</label>
              <select className="w-full p-3 bg-[#1a1a1a] text-white rounded-md outline-none focus:ring-2 focus:ring-yellow-400">
                <option>Palakkad</option>
                <option>Kozhikode</option>
                <option>Thrissur</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Info + Map */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ready to transform your space? Our team of creative interior
            designers is eager to bring your vision to life. From initial
            concept to final touches, we’re here to guide you every step of the
            way. Contact us via email, phone, or through our online form for a
            consultation, questions, or to start a conversation about your next
            project.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.88935990206045!2d76.46591547063093!3d10.870121741950744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757336609974!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
