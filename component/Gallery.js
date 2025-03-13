"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const places = [
  {
    id: 1,
    name: "Taj Mahal",
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/attr_1448_20190212100722jpg",
    description:
      "Discover the breathtaking beauty of the Taj Mahal, an architectural marvel and a symbol of love.",
  },
  {
    id: 2,
    name: "Eiffel Tower",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    description:
      "The Eiffel Tower, a global cultural icon of France, offers an unforgettable view of Paris.",
  },
  {
    id: 3,
    name: "Montreal, Canada",
    image: "https://i.imgur.com/ad4do1V.jpeg",
    description:
      "Discover the breathtaking beauty of the Taj Mahal, an architectural marvel and a symbol of love.",
  },
  {
    id: 4,
    name: "Great Wall of China",
    image: "https://i.imgur.com/pqMZJqy.jpeg",
    description:
      "One of the greatest wonders of the world, the Great Wall of China stretches over 13,000 miles.",
  },
  {
    id: 5,
    name: "Hawaii",
    image: "https://i.imgur.com/qPyRfLH.jpeg",
    description:
      "Discover the breathtaking beauty of the Taj Mahal, an architectural marvel and a symbol of love.",
  },
  {
    id: 6,
    name: "Machu Picchu",
    image: "https://i.imgur.com/z1Dx4ST.jpeg",
    description:
      "Machu Picchu, the ancient Incan city in Peru, is a mystical site surrounded by mountains.",
  },
];

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const cards = galleryRef.current.children;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-fit pb-10 pt-16 text-white flex flex-col items-center">
      {/* Section Heading */}
      <h1 className="text-4xl font-heading md:text-5xl font-extrabold uppercase text-center tracking-wide">
        Explore the <span className="text-highlight">Wonderful</span> World!
      </h1>

      {/* Grid Container */}
      <div
        ref={galleryRef}
        className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10"
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div className="w-full h-64">
              <img
                src={place.image}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt={place.name}
              />
            </div>

            {/* Description Section */}
            <div className="p-6 text-center flex flex-col gap-4">
              <h2 className="text-3xl font-heading font-bold text-highlight">
                {place.name}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
