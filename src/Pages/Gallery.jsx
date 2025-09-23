import React from "react";

const galleryItems = [
  { id: 1, img: "/images/work1.jpg", title: "Modern Living Room" },
  { id: 2, img: "/work2.jpg", title: "Luxury Bedroom" },
  { id: 3, img: "/images/work3.jpg", title: "Minimalist Kitchen" },
  { id: 4, img: "/images/work4.jpg", title: "Office Interior" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* 🔹 Navbar */}
      <nav className="w-full bg-[#111] border-b border-gray-700 py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        <h1 className="text-xl font-bold text-white">Interior Design</h1>
        <a
          href="/"
          className="bg-white text-[#111] px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Home
        </a>
      </nav>

      {/* 🔹 Gallery Section */}
      <section className="pt-28 pb-20 px-6 md:px-20" id="gallery">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg bg-gray-900 hover:bg-gray-800 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-4 text-center font-medium text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
