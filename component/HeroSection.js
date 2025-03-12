"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./NavBar";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="h-fit">
      <NavBar />
      <div className="w-full h-28 md:h-16"></div>

      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl leading-15 md:text-9xl text-center mt-2 font-bold md:leading-28"
      >
        Discover the <span className="text-highlight">Peace</span> of Umrah
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center text-xl"
      >
        <span className="text-orange-200">-</span> The Dependable Choice for
        Your Hajj & Umrah Travels
      </motion.p>

      <div className="image w-[full] md:flex justify-evenly items-start mt-3 h-[70vh] md:h-[40vh] px-3 md:px-0">
        {/* Left Box Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-80 mt-16 hidden md:block text-slate-300 shadow-lg px-2 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl font-semibold mb-2 leading-6">
            The Best Choice for Your Spiritual Pilgrimage
          </h1>
          <p className="text-slate-300 text-sm mt-4">
            Dapibus convallis auctor scelerisque, habitant amet etiam mattis.
          </p>
        </motion.div>

        {/* Image Animation */}
        <div
          ref={imageRef}
          className="w-full md:w-[40%] h-[80%] md:h-full bg-highlight rounded-2xl overflow-hidden"
        >
          <img
            src="https://www.pngmart.com/files/4/Travel-PNG-Photos.png"
            className="h-full object-cover"
            alt=""
          />
        </div>

        {/* Right Box Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-80 mt-4 md:mt-16 text-slate-300 h-[20%] shadow-lg px-2 hover:shadow-2xl transition-shadow duration-300"
        >
          <h1 className="text-2xl leading-6 font-semibold mb-2">
            Dedicated to Making Your Umrah Journey Unforgettable
          </h1>
          <p className="text-slate-300 text-sm mt-4">
            Pretium nisl nibh tristique praesent eros interdum semper fusce.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
