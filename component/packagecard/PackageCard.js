"use client";
import { useState } from "react";

function PackageCard({ price, title, facilities, image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxVisibleFacilities = 3; // Show only 3 points initially

  const handlewhatsapp = () => {
    const message = `Hello, I'm interested in the ${title} package priced at ${price}. Could you please provide more details?`;
    const phoneNumber = "7307922403"; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Main Card */}
      <div className="h-fit my-2 md:my-0 md:h-[90%] w-full md:w-[20%] rounded-2xl overflow-hidden relative group shadow-lg">
        {/* Background Image with Hover Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Overlay for Smooth Background Change */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500"></div>

        {/* Content Box (Ensures Text Visibility) */}
        <div className="relative z-10 flex flex-col items-center text-white p-6 text-center">
          <h1 className="text-2xl font-bold">{price}</h1>
          <hr className="w-16 my-2 border-white" />
          <p className="text-lg font-semibold">{title}</p>

          {/* Facilities List (Show limited items initially) */}
          <ul className="text-sm mt-3 space-y-2 text-left">
            {facilities
              .slice(0, maxVisibleFacilities)
              .map((facility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>✅</span>
                  <span>{facility}</span>
                </li>
              ))}
          </ul>

          {/* Show "View Details" if more facilities exist */}
          {facilities.length > maxVisibleFacilities && (
            <button
              className="mt-2 text-slate-300 px-2 bg-highlight rounded-md cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </button>
          )}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">
          <div className="bg-white text-black rounded-lg p-6 w-full max-w-lg shadow-xl mx-4">
            <h2 className="text-xl font-bold text-center">{title}</h2>
            <hr className="w-16 my-2 mx-auto border-gray-500" />
            <p className="text-lg font-semibold text-center">{price}</p>

            {/* Full Facilities List */}
            <ul className="mt-4 space-y-2">
              {facilities.map((facility, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span>✅</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>

            {/* Booking Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={handlewhatsapp}
                className="px-6 py-2 cursor-pointer bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-all duration-300"
              >
                Book Now
              </button>
            </div>

            {/* Close Button */}
            <div className="text-center mt-3">
              <button
                className="px-4 py-2 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition-all duration-300"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PackageCard;
