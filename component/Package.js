"use client";

import PackageCard from "./packagecard/PackageCard";

function Package() {
  const hajjPackages = [
    {
      price: "$2,500 USD",
      title: "Essential Hajj Package",
      image: "https://i.imgur.com/0GIKGAR.png",
      facilities: [
        "Stay near holy sites",
        "Guided group tours",
        "Daily meals included",
        "Airport transportation",
        "24/7 customer support",
      ],
    },
    {
      price: "$3,200 USD",
      title: "Deluxe Hajj Package",
      image: "https://i.imgur.com/0GIKGAR.png",
      facilities: [
        "5-star hotel stay",
        "Personalized guide",
        "Daily buffet meals",
        "Luxury transport",
        "Exclusive VIP access",
        "Airport pickup",
      ],
    },
    {
      price: "$4,500 USD",
      title: "VIP Hajj Experience",
      image: "https://i.imgur.com/0GIKGAR.png",
      facilities: [
        "Luxury accommodation",
        "Private guided tours",
        "Exclusive VIP access",
        "Gourmet halal meals",
        "24/7 personal assistant",
        "Airport lounge access",
      ],
    },
  ];

  return (
    <div className="w-full pt-3.5">
      <h1 className="text-6xl font-heading text-center font-bold">
        PICK YOUR PLAN
      </h1>
      <p className="text-center text-highlight">Budget Friendly</p>
      <div className="offercard w-full h-fit md:h-[50vh] px-2 md:px-0 md:flex items-center justify-evenly">
        {hajjPackages.map((pkg, index) => (
          <PackageCard
            key={index}
            price={pkg.price}
            title={pkg.title}
            image={pkg.image}
            facilities={pkg.facilities}
          />
        ))}
      </div>
    </div>
  );
}

export default Package;
