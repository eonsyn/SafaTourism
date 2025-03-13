"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const comments = [
  {
    name: "John Doe",
    text: "Absolutely amazing service! The experience was smooth and hassle-free. Highly recommend!",
    profileImg: "",
  },
  {
    name: "Jane Smith",
    text: "Great customer support and well-organized packages. A truly fulfilling journey!",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ali Khan",
    text: "A life-changing experience! Everything was well-managed, from accommodations to travel.",
    profileImg: "",
  },
  {
    name: "Sophia Lee",
    text: "Fantastic trip! Everything was well planned, and I had no trouble at all.",
    profileImg: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Michael Brown",
    text: "A wonderful experience! Very well organized and stress-free.",
    profileImg: "",
  },
];

export default function PeopleSay() {
  const [index, setIndex] = useState(0);

  const nextComment = () => {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  };

  const prevComment = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  };

  return (
    <div className="w-full pt-10 text-white text-center">
      {/* Heading */}
      <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase">
        What People Say
      </h1>

      {/* Star Ratings */}
      <div className="flex items-center justify-center gap-1 mt-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-2xl" />
        ))}
      </div>

      {/* Comment Cards */}
      <div className="relative mt-6 flex justify-center gap-6">
        {/* Desktop: Show 3 Cards */}
        <div className="hidden md:flex gap-6 w-full justify-center">
          {[-1, 0, 1].map((offset) => {
            const commentIndex =
              (index + offset + comments.length) % comments.length;
            return (
              <div
                key={commentIndex}
                className={`p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform duration-500 ease-in-out transform ${
                  offset === 0
                    ? "scale-110 bg-gray-900"
                    : "scale-90 bg-gray-800"
                }`}
                style={{ width: offset === 0 ? "320px" : "260px" }}
              >
                {/* Profile Image or Name Initial */}
                <div className="flex justify-center mb-4">
                  {comments[commentIndex].profileImg ? (
                    <img
                      src={comments[commentIndex].profileImg}
                      alt={comments[commentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-500 shadow-lg"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-gray-500">
                      {comments[commentIndex].name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Comment Text */}
                <p className="text-lg italic text-gray-300 leading-relaxed">
                  "{comments[commentIndex].text}"
                </p>
                <h3 className="mt-4 font-semibold text-xl text-gray-200">
                  {comments[commentIndex].name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet: Show 1 Card */}
        <div className="md:hidden w-full flex justify-center">
          <div className="p-6 rounded-2xl bg-gray-900 shadow-lg border border-gray-700 transition-transform duration-500 ease-in-out w-[90%] max-w-lg">
            {/* Profile Image or Name Initial */}
            <div className="flex justify-center mb-4">
              {comments[index].profileImg ? (
                <img
                  src={comments[index].profileImg}
                  alt={comments[index].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-500 shadow-lg"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg border-4 border-gray-500">
                  {comments[index].name.charAt(0)}
                </div>
              )}
            </div>

            {/* Comment Text */}
            <p className="text-lg italic text-gray-300 leading-relaxed">
              "{comments[index].text}"
            </p>
            <h3 className="mt-4 font-semibold text-xl text-gray-200">
              {comments[index].name}
            </h3>
          </div>
        </div>
      </div>

      {/* Navigation Buttons (Below the Cards) */}
      <div className="flex justify-center gap-6 mt-6 pb-2.5">
        <button
          onClick={prevComment}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200 shadow-md"
        >
          <FaChevronLeft className="text-white text-2xl" />
        </button>
        <button
          onClick={nextComment}
          className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200 shadow-md"
        >
          <FaChevronRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
}
