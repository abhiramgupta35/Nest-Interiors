import React from "react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#1a1a1a] via-[#111] to-[#1a1a1a] py-20 px-6 md:px-20 scroll-mt-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-white space-y-6"
        >
          <p className="uppercase tracking-wide text-sm text-yellow-400 font-semibold">
            Established 2023
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            About <span className="text-yellow-400">Nest Interiors & Art Studio</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Founded by <span className="font-semibold text-white">Sujith K</span> in 
            Azhiyannur, Palakkad, our studio blends the beauty of fine art with 
            functional interior design. With a unique eye for detail and a passion 
            for visual storytelling, Sujith has built a reputation for transforming 
            spaces through custom wall arts, rooftop paintings, and elegant interior aesthetics.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every project at Nest Interiors reflects his artistic vision and 
            commitment to creating spaces that inspire, comfort, and express personality.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-md hover:bg-yellow-500 transition"
          >
            Know More <FiArrowRight />
          </motion.button>
        </motion.div>

        {/* Right: Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img
              src="/people.png"
              alt="Nest Interiors Founder"
              className="w-full object-cover"
            />
            <div className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700">
              <FiMapPin className="text-red-500" /> Palakkad, Kerala
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
