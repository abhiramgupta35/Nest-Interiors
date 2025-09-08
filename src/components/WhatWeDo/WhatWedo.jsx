import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Design",
    desc: "Residential Interior design is a multifaceted discipline that focuses on the functional and aesthetic aspects of a home’s interior. This process involves creating spaces that are both beautiful and livable, reflecting the inhabitants’ personal styles and meeting their day-to-day needs.",
    img: "/Bedroom.jpg", // replace with your image path
    accent: "text-yellow-400",
  },
  {
    title: "Office Design",
    desc: "It focuses on creating functional, aesthetically pleasing workspaces that enhance productivity, foster collaboration, and reflect the company’s brand identity. It involves a strategic approach to the arrangement, design, and decoration of office spaces.",
    img: "/office.jpg", // replace with your image path
    accent: "text-white",
  },
  {
    title: "Art works",
    desc: "Our collection of artworks reflects creativity, passion, and attention to detail. Each piece is thoughtfully designed to tell a story, capture emotions, and bring life to any space. From modern concepts to traditional inspirations, the works showcase a unique blend of imagination and craftsmanship.",
    img: "/Art.jpg", // replace with your image path
    accent: "text-yellow-400",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-[#111] py-20 px-6 md:px-20" id="services">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider mb-2">
          WHAT WE DO
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-16 bg-gray-500"></span>
          <span className="text-yellow-400">•</span>
          <span className="h-px w-16 bg-gray-500"></span>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#1a1a1a] p-6 rounded-xl shadow-lg"
          >
            {/* Title */}
            <h3
              className={`uppercase text-lg font-semibold ${service.accent} tracking-wide mb-3`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              {service.desc}
            </p>

            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 object-cover rounded-md shadow-md mt-4"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
