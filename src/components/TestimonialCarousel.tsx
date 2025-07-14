"use client";

import { useState, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: "This platform is God sent i must say",
      content:
        "Been thinking of buying a car for a while but for insufficient funds, I couldn’t. I saw online on Instagram that I can get a car on car loan through Cars45. I clicked on the link and was redirected to fill out a form which I did. Someone from the Cars45 team reached out to me and the rest is history. They managed all conversations with the seller so the process was fast, easy and stress free for me.",
      name: "Rose  Mary",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
      bgColor: "bg-[#686DED]",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Forest Whispers",
      content:
        "Ancient trees stand tall like guardians of time, their leaves rustling with secrets of centuries past while sunbeams filter through the emerald canopy above.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      name: "John Doe",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Sunset Dreams",
      content:
        "Golden hour paints the sky in warm hues of amber and rose, creating a breathtaking canvas that reminds us of nature's artistic mastery and fleeting beauty.",
      bgColor: "bg-gradient-to-br from-orange-500 to-pink-600",
      textColor: "text-white",
      name: "John Doe",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
    },
    {
      id: 4,
      title: "Purple Majesty",
      content:
        "Lavender fields stretch endlessly toward distant mountains, their purple blooms swaying gently in the evening breeze while filling the air with sweet fragrance.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      textColor: "text-white",
      name: "John Doe",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
    },
    {
      id: 5,
      title: "Ruby Passion",
      content:
        "Fire dances with intensity and grace, its crimson flames reaching skyward with passionate energy that has captivated humanity since the dawn of civilization.",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
      textColor: "text-white",
      name: "John Doe",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
    },
    {
      id: 6,
      title: "Mint Fresh",
      content:
        "Cool mountain air carries the essence of fresh beginnings, where crystal streams flow through valleys dotted with wildflowers and endless possibilities.",
      bgColor: "bg-gradient-to-br from-teal-400 to-cyan-600",
      textColor: "text-white",
      name: "John Doe",
      location: "Lagos, Nigeria",
      date: "2023-10-01",
      image: "/home/rose.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative overflow-hidden  rounded-2xl shadow-2xl">
        {/* Main carousel container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`w-full flex-shrink-0 ${item.bgColor} ${item.textColor} px-12 py-4 min-h-[400px] flex flex-col justify-center`}
            >
              <h2 className="text-[16px] font-bold mb-2">{item.title}</h2>
              <p className="text-[14px] leading-relaxed max-w-3xl mx-auto opacity-95">
                {item.content}
              </p>

              <div className="mt-4 flex items-center justify-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[23px] h-[23px] rounded-full"
                />
                <div className="space-y-1">
                  <p className="text-[16px] font-semibold">{item.name}</p>
                  <p className="text-[12px] flex items-center gap-x-1">
                    <TiLocation size={18} /> {item.location}
                  </p>
                  <p className="text-[12px]">{item.date}</p>
                </div>

                <div className="flex gap-x-3 items-center">
                  {/* Assuming a static rating for simplicity, can be dynamic if needed */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      className={`text-[#C5FF47] ${
                        index < 4 ? "fill-current" : "text-opacity-50"
                      }`}
                      key={index}
                      size={18}
                    />
                  ))}
                  <span className="text-[14px] font-semibold">4.5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <IoChevronBackOutline className="text-[#141B34]" size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <IoChevronForwardOutline className="text-[#141B34]" size={24} />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel info */}
      <div className="mt-6 text-center text-gray-600">
        <p className="text-sm">
          Slide {currentIndex + 1} of {items.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
