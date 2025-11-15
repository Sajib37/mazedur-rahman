"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const imageUrl = "/profile.png";

const Home = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-b from-[#D96C060D] lg:from-[#D96C061A] lg:via-[#D96C0633] via-[#D96C0680] lg:to-[#D96C0680] to-[#D96C06] pt-12  lg:pt-16 overflow-hidden">
      {/* Background Shape */}
      <div className="circle-shape hidden lg:block absolute inset-0 z-0"></div>

      <div className="relative flex flex-col lg:flex-row lg:gap-4 items-stretch w-full max-w-8xl mx-auto lg:px-8 z-30 min-h-[calc(100vh-4rem)]">
        {/* Left: Image For large device*/}
        <div className="relative flex-1  items-end hidden lg:flex">
          <Image
            src="/profile.png"
            alt="Mazedur Rahman"
            width={500}
            height={500}
            className=" w-full h-full"
          />
        </div>

        {/* Right: Text / Content */}
        <div className=" flex-1 flex  flex-col justify-center lg:pl-36 space-y-3 md:space-y-4 lg:space-y-6 px-4">
          <h3 className="text-primary text-xl md:text-3xl lg:text-4xl font-bold font-sans">
            Hi There, I&apos;m
          </h3>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold ">
            MD Mazedur Rahman
          </h1>

          <span className="text-2xl md:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                " Business Graduate",
                500,
                " Management Graduate",
                500,
              ]}
              className="font-bold text-primary "
              repeat={Infinity}
              speed={10}
            />
          </span>

          <p className="font-semibold">
            Business graduate skilled in HR recruitment, onboarding, and people
            management, looking to add value through strong communication and
            teamwork.
          </p>

          <div className=" flex gap-4">
            <a
              target="_blank"
              className="social-icon rounded-full p-2 cursor-pointer"
              href="#"
            >
              <FaLinkedin className="lg:text-3xl md:text-2xl text-xl " />
            </a>
            <a
              target="_blank"
              className="social-icon rounded-full p-2 cursor-pointer"
              href="#"
            >
              <FaFacebook className="md:text-2xl text-xl lg:text-3xl" />
            </a>
            <a
              target="_blank"
              className="social-icon rounded-full p-2 cursor-pointer"
              href="#"
            >
              <FaInstagram className="md:text-2xl text-xl lg:text-3xl" />
            </a>
          </div>
          <button className="w-40 bg-primary download-btn cursor-pointer text-slate-200 px-2 py-1 mt-2 font-medium rounded-full">
            Download Resume
          </button>
        </div>

        {/* Image For small device*/}
        <div className="relative flex-1  items-end lg:hidden flex">
          <Image
            src={imageUrl}
            alt="Mazedur Rahman"
            width={500}
            height={600}
            className=" w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
