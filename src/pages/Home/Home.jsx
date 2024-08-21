// src/pages/Home/Home.jsx

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const category = [
    {
      type: "Choker",
      url: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1219/1671205844_b8607d81bffff09dbfd2.png",
    },
    {
      type: "Necklace",
      url: "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/1eZvEm_mn-Firoza-Swarna-Rani-Madhukampa-Necklace-Set.jpeg",
    },
    {
      type: "Bangles",
      url: "https://www.kushals.com/cdn/shop/files/temple-bangle-ruby-gold-2-4-silver-temple-bangle-148284-37663668076700.jpg?v=1710357949",
    },
    {
      type: "Chains",
      url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/necklace-chain/q/f/r/1-goh52-chain-guarantee-ornament-house-original-imagsy8f426gzfnv.jpeg?q=90&crop=false",
    },
    {
      type: "Longchains",
      url: "https://cdnmedia-breeze.vaibhavjewellers.com/media/catalog/product/image/12368e215/22kt-gold-antique-lakshmi-kasu-haram-124vg4019-124vg4019.jpg",
    },
    {
      type: "Czlongchain",
      url: "https://media.istockphoto.com/id/583711958/photo/indian-traditional-jewellery.jpg?s=612x612&w=0&k=20&c=p19_ot6yVt03hWlityk8wfES-sPU7JHArb3VCAWmWbg=",
    },
    {
      type: "Kammal",
      url: "https://i.pinimg.com/736x/e7/f7/07/e7f707e318466b1942bb4abb78c99feb.jpg",
    },
  ];

  return (
    <div className="bg-[#f7f3e7] text-[#3e3e3e] w-screen min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Explore Our Gold Collection
      </h1>
      <ul className="grid grid-cols-2 gap-6">
        {category.map((items) => (
          <Link
            key={items.type}
            to={`/product/${items.type}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="w-full h-60 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={items.url}
                alt={items.type}
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-[#b08d57]">
                {items.type}
              </h2>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
