"use client";
import React from "react";
import Image from "next/image";
import prop1 from "../../../public/images/properties/Mask.jpeg";
import prop2 from "../../../public/images/properties/Mask-new.png";
import prop3 from "../../../public/images/properties/communities-1.jpeg";
import developer_icon from "../../../public/images/agents/mvp-icon.jpg";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import MapComponent from "@/components/maps/Map";
import { useEffect, useState } from "react";
import { finished } from "stream";

const Page = () => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      setIsIdle(false);
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, 1000); // 1 second of inactivity
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <section className="everyThing  mx-0 lg:mx-40">
        <div className="propPhotos flex flex-wrap">
          <div className="w-full md:w-2/3 p-2">
            <Image
              src={prop1}
              alt="prop1"
              className="rounded-2xl w-full h-full object-cover "
            />
          </div>
          <div className="w-full md:w-1/3 p-2 flex flex-col gap-2">
            <Image
              src={prop2}
              alt="prop2"
              className="rounded-2xl  hidden md:block w-full h-full object-cover "
            />
            <Image
              src={prop3}
              alt="prop3"
              className="rounded-2xl  hidden md:block w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2  ">
          <div className="leftSide col-span-2 ">
            <div className="content  ">
              <div className="propName">
                <h1 className="Name mt-6 text-4xl">Binghatti Hills Phase 3</h1>
                <p className="propPrice mt-6 text-3xl">
                  Starting from 863,998 AED
                </p>
              </div>
              <div className="developer flex bg-gray-100 rounded-2xl p-3 mt-8 ">
                <div>
                  <Image
                    className=" rounded-md object-cover w-20 "
                    src={developer_icon}
                    alt="developer_icon"
                  />
                </div>
                <div>
                  <h1 className="pl-5 text-xl text-slate-500 mt-3">
                    Developer
                  </h1>
                  <p className="pl-5 text-lg">
                    mvp application and game design
                  </p>
                </div>
              </div>
              <div className="line my-5 border border-gray-400 mt-10"></div>
              <div className="Key_information">
                <h1 className="info text-2xl">Key information</h1>
                <div className="grid grid-cols-3">
                  <h2 className="amenities_details  mt-5 ">
                    <p className="text-xl text-gray-400">Payment plan</p>
                    70/30
                    <br />
                    <br />
                    <p className="text-xl text-gray-400">Property types</p>
                    Apartment
                  </h2>
                  <h2 className="amenities_details  mt-5 ">
                    <p className="text-xl text-gray-400">
                      Number of buildings{" "}
                    </p>
                    1
                    <br />
                    <br />
                    <p className="text-xl text-gray-400">Government fee</p>
                    4%
                  </h2>
                  <h2 className="amenities_details  mt-5 ">
                    <p className="text-xl text-gray-400">Location</p>
                    Dubai, Dubai Science Park, Binghatti Hills
                  </h2>
                </div>
              </div>
              <div className="line my-5 border border-gray-400 mt-14"></div>
              <h1 className="payment text-2xl mb-5">Payment plan</h1>
              <div className="flex  justify-center items-center space-x-4">
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <p className="text-2xl font-semibold">20%</p>
                  <p className="mt-2">Down payment</p>
                  <p className="text-sm text-gray-500 mt-1">At sales launch</p>
                </div>
                <span className="text-gray-400 text-xl">&gt;</span>
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <p className="text-2xl font-semibold">50%</p>
                  <p className="mt-2">During construction</p>
                </div>
                <span className="text-gray-400 text-xl">&gt;</span>
                <div className="bg-gray-100 p-6 rounded-lg text-center">
                  <p className="text-2xl font-semibold">30%</p>
                  <p className="mt-2">On handover</p>
                </div>
              </div>
              <div className="line my-5 border border-gray-400 mt-10"></div>
              <h1 className="timeline text-2xl mb-5">Project timeline</h1>
              <div className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    <span>✔</span>
                  </div>
                  <div className="w-0.5 h-full bg-blue-500"></div>
                  <div className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    <span>✔</span>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium mt-2">
                    Project announcement
                  </p>
                  <p className="text-gray-600">-</p>
                  <p className="text-lg font-medium mt-4">
                    Construction Started
                  </p>
                  <p className="text-gray-600">10/06/2024</p>
                </div>
              </div>

              <div className="line my-5 border border-gray-400 mt-10"></div>
              <div>
                <h1 className="About text-2xl">About the project</h1>
                <p className={`mb-4 ${isExpanded ? "" : "line-clamp-4"}`}>
                  <br /> The latest luxury living gemstone of{" "}
                  <strong>Binghatti Hills Phase 3</strong> in
                  <strong> Dubai Science Park</strong> boasts expensive{" "}
                  <strong>studios, 1 & 2-bedroom apartments</strong> by{" "}
                  <strong>Binghatti Developers. </strong>After the huge success
                  of the initial two phases, the game-changer real estate leader
                  has recently announced another residential part in the tower
                  that promises bespoke living in all aspects. Appreciate the
                  cultural beauty of the tranquil hillside environment in this
                  unique testament to avant-garde and contemporary architectural
                  paradise. <br />
                  <br />
                  <strong>In this part, floors 20 to 30 are available </strong>
                  with stunning and precious options of residences. Embrace the
                  sky living where the endless skyline of the Al Barsha South
                  seamlessly mixes in the continuously thriving medical and
                  pharmacy business hub. The finely curated with top-notch
                  wellness, relaxation and entertainment facilities uplifts the
                  living standard of the residents. <br />
                  <br />
                  Key Highlights:
                  <br /> &#x2022; Sophisticated and elegant collection of
                  premium studios, 1 & 2-bedroom apartments <br /> &#x2022;
                  High-end options of smart home systems, wellness and
                  recreational facilities <br /> &#x2022; Exclusive availability
                  on the 20 to 30 floors
                  <br /> &#x2022; Stunning and masterfully designed striking and
                  creative architectural design
                  <br />
                  &#x2022; The ideal location amidst the tranquil landscape of
                  the community
                </p>{" "}
                <button
                  onClick={handleExpandClick}
                  className="px-4 py-2 bg-gray-100 text-black border rounded-md hover:bg-gray-300 transition-colors"
                >
                  {isExpanded ? "Show less" : "Show full description"}
                </button>
              </div>
              <div className="line my-5 border border-gray-400 mt-10"></div>
              <div>
                <h1 className="location text-2xl">Location</h1>
                <p className="location_details flex mt-5">
                  <CiLocationOn /> &nbsp; Dubai, Dubai Science Park, Binghatti
                  Hills
                </p>
                <div className="Map my-5 ">
                  <MapComponent />
                </div>
              </div>
              <div className="line my-5 border border-gray-400 mt-10"></div>
              <div>
                <h1 className="amenities text-2xl">Amenities</h1>
                <div className="grid grid-cols-2">
                  <p className="amenities_details  mt-5">
                    &#x2022; Gymnasium
                    <br />
                    <br />
                    &#x2022; Restaurants
                    <br />
                    <br />
                    &#x2022; Indoor Swimming Pool
                    <br />
                    <br />
                    &#x2022; Children Play Area
                  </p>
                  <p className="amenities_details  mt-5">
                    &#x2022; Landscaped Gardens
                    <br />
                    <br />
                    &#x2022; CCTV Security
                    <br />
                    <br />
                    &#x2022; Barbecue Area
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide hidden md:block">
            <div className={"movingCard sticky top-3 "}>
              <h1 className="propName rounded-t-2xl bg-slate-200 px-3 pt-3 pb-2  border-2 border-gray-400 border-b-0 text-center">
                Get the latest information about this project.
              </h1>
              <div className="grid grid-cols-2 text-lg py-3 gap-2 rounded-b-2xl  px-3  border-2 border-gray-400 text-center">
                <p className="propName cursor-pointer flex py-1 pl-2 rounded-xl border-2 border-gray-400 bg-cyan-500">
                  <MdEmail size="3rem" />
                  Email
                </p>
                <p className="propName cursor-pointer flex py-1 pl-2 rounded-xl border-2 border-gray-400 bg-green-400">
                  <FaWhatsapp size="3rem" />
                  Whatsapp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
