import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ReactComponent as Header1 } from "../public/header1.svg";
import { ReactComponent as Header2 } from "../public/header2.svg";
import { ReactComponent as Header3 } from "../public/header3.svg";

const data = [
  {
    image: <Header1 />,
    heading1: "Welcome To",
    heading2: "Tunez",
    sub1: "Unlock the Power of AI Music:",
    sub2: "Create, Explore, and Innovate withEase",
    color: "bg-[#99EBAD]",
  },
  {
    image: <Header2 />,
    heading1: "Create Music",
    heading2: "Using AI",
    sub1: "Your Gateway to AI-Generated Melodies",
    sub2: "Where Music Meets Technology",
    color: "bg-[#A2E5DE]",
  },
  {
    image: <Header3 />,
    heading1: "Create Music",
    heading2: "From Text",
    sub1: "Elevate Your Sound",
    sub2: "Experience the Future of Music Composition with AI",
    color: "bg-[#FFD3D4]",
  },
];

const Header = () => {
  return (
    <Carousel
      interval={4000}
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={`${item.color} flex flex-col md:flex-row items-center justify-center mx-auto container py-20`}
          style={{ minHeight: "500px" }}
        >
          {item.image}
          <div className="md:ml-20 mt-10 md:mt-0">
            <h1 className="uppercase text-4xl font-black text-left">
              {item.heading1}
              <br />
              {item.heading2}
            </h1>
            <p className="text-black text-base text-left pt-5">{item.sub1}</p>
            <p className="text-black text-base text-left">{item.sub2}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export { Header };
