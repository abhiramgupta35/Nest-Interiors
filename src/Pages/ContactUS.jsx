import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ for navigation

const ContactUs = () => {
  return (
    <section className="bg-[#111] text-white py-20 px-6 md:px-20" id="contact">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-2">
          CONTACT US
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-16 bg-gray-500"></span>
          <span className="text-yellow-400">•</span>
          <span className="h-px w-16 bg-gray-500"></span>
        </div>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Get in touch with us for interior design consultations, custom artwork, 
          or any questions. We’d love to hear from you!
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-[#222] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-[#222] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-[#222] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <p className="text-gray-300">+91 97475 47097</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <p className="text-gray-300">contact@nestinterior.com</p>
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#1a1a1a] rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/nest__interior_?igsh=a21tNG52dmZpNTls"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#1a1a1a] rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to Home Section */}
      <div className="text-center mt-16">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ContactUs;
