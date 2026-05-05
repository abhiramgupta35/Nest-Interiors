import { FiArrowRight } from 'react-icons/fi';

function Banner() {
    return (
        <div className="relative min-h-screen text-white font-sans">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.webp"
                    alt="Background"
                    className="w-full h-full object-cover brightness-[.5]"
                />
            </div>

            <header className="z-10 relative flex justify-between items-center px-6 md:px-16 py-4">
                <div className="flex items-center space-x-3">
                    <img
                        src="/logo.webp"
                        alt="Nest Logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <h1 className="text-xl font-semibold">Nest Interior</h1>
                </div>
                <nav className="space-x-6 text-sm font-medium hidden md:flex">
                    <a href="/" className="hover:text-yellow-400">Home</a>
                    <a href="/gallery" className="hover:text-yellow-400">Gallery</a>
                    <a href="/contactus" className="hover:text-yellow-400">Contact</a>
                </nav>
            </header>

            <section className="z-10 relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-20 pb-10">

                <div className="max-w-xl mb-10 md:mb-0">
                    <h2 className="text-6xl md:text-5xl font-bold mb-4 leading-tight">
                        Modern Design<br />Solutions
                    </h2>
                    <p className="mb-6 text-gray-200 text-lg">
                        Unique interior concepts & original artwork from Palakkad, Kerala.
                        Transforming homes and offices with style and creativity.
                    </p>
                    <button href="/gallery" className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full flex items-center gap-2 transition font-semibold">
                        See Our Projects <FiArrowRight />
                    </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[340px] md:w-[420px] transform hover:scale-105 transition duration-300">
                    <img
                        src="/chair.webp"
                        alt="Interior Example"
                        className="w-full h-auto"
                    />
                    <div className="p-4 text-black">
                        <p className="text-sm">📍 Palakkad, Kerala</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
