"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/[^0-9]/g, ""), 10);
      if (start === end) return;

      let duration = 80;
      let incrementTime = (duration / end) * 50;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {value.replace(/[0-9]/g, "")}
    </span>
  );
}

function InfoAbout() {
  const stats = [
    { value: "18K", label: "Happy Clients" },
    { value: "8Y", label: "Experience" },
    { value: "198+", label: "Tours Completed" },
    { value: "94%", label: "Customer Satisfaction" },
    { value: "18K", label: "Happy Clients" },
  ];

  return (
    <div className="w-full bg-orange-100 mt-9 text-black py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl font-bold">
              <Counter value={stat.value} />
            </h1>
            <p className="tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default InfoAbout;
