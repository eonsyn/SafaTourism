"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Do travel agents help in making flight reservations?",
    answer:
      "Yes, travel agents help their clients in making flight reservations. They will help you book a seat as per your budget. To know more, contact Safa Tourism and discuss the same in detail.",
  },
  {
    question: "Do travel agents offer travel packages?",
    answer:
      "Yes, travel agents offer various travel packages to their clients. These packages will vary based on destination.",
  },
  {
    question:
      "Can travel agents help me make all travel expenses in my budget?",
    answer:
      "To make their client’s vacation/travel smooth, a travel agent evaluates their budget and accordingly helps to customize travel packages for them.",
  },
  {
    question: "Does Safa Tourism help create an itinerary for the trip?",
    answer:
      "Yes, many travel agents will prepare an itinerary for your travel trip and make reservations based on that.",
  },
  {
    question: "Where is the Safa Tourism in Hazratganj office located?",
    answer: "The Safa Tourism in Hazratganj office is located Near GPO.",
  },
  {
    question: "How effective are the services of Safa Tourism?",
    answer:
      "Safa Tourism strongly believes that customer satisfaction is the key to every business, thus, it has been able to receive a rating of 4.8 for its excellent services.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  useEffect(() => {
    answerRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { height: 0, opacity: 0 });
      }
    });
  }, []);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      setOpenIndex(null);
    } else {
      gsap.to(answerRefs.current[index], {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full pt-10 text-white text-center">
      <h1 className="text-4xl md:text-5xl font-bold uppercase">
        Frequently <span className="text-highlight">Asked</span> Questions
      </h1>
      <div className="max-w-3xl mx-auto p-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-600 pb-3">
            <button
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-200 cursor-pointer hover:text-highlight transition duration-300 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </motion.div>
            </button>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="overflow-hidden"
            >
              <p className="p-4 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
