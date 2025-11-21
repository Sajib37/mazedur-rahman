"use client";
import lottiFile from "../../public/animation-lottie.json";
import AnimationLottie from "../Helper/AnimationLottie";
import { FaCalendar } from "react-icons/fa";

const academicData = [
  {
    year: "2023 - 2024",
    title: "University of Dhaka (MBA – Strategic & International Management)",
    description:
      "I am pursuing an MBA at the University of Dhaka, focusing on strategic management and modern HR practices to strengthen my career in Human Resource Management.",
  },
  {
    year: "2018 - 2023",
    title: "University of Dhaka (BBA – Management)",
    description:
      "I completed my BBA in Management, gaining knowledge in HRM, organizational behavior, leadership, and strategic management.",
  },
  {
    year: "2017",
    title: "Higher Secondary Certificate (HSC)",
    description:
      "I completed HSC in Business Studies with exceptional results and was awarded a Government Scholarship.",
  },
  {
    year: "2015",
    title: "Secondary School Certificate (SSC)",
    description:
      "I completed SSC in Business Studies and built a strong academic foundation for my future studies.",
  },
];

const LearningJourney = () => {
  return (
    <section className="max-w-7xl mx-auto pt-10 md:pt-14 lg:pt-16 px-4">
      <h1 className="text-2xl mt-10 text-center font-bold md:text-4xl lg:text-5xl text-accent">
        Academic Journey
      </h1>
      <div className="mx-auto h-1 bg-accent w-34 md:w-44 lg:w-64 mt-1"></div>

      <div className="flex flex-col lg:flex-row items-center pt-8 md:pt-10 lg:pt-12 gap-6 justify-center">
        <div className="flex-1 ">
          <AnimationLottie animationPath={lottiFile} width={400} />
        </div>
        <div className="flex-2 mb-10 lg:mb-16">
          <ol className="relative border-s mx-auto border-accent dark:border-gray-700 max-w-xs md:max-w-2xl">
            {academicData.map((item, index) => (
              <li key={index} className="mb-10 relative container ms-4">
                <div className="absolute w-3 h-3 bg-accent rounded-full top-1 -left-[22px] border border-accent"></div>
                <div className="leftEffect"></div>

                <div className="relative w-full py-1 md:py-3 timeline-box bg-transparent border-2 border-accent">
                  <span className="flex gap-2 items-center text-base">
                    <FaCalendar /> {item.year}
                  </span>

                  <h1 className="text-lg text-primary md:text-xl font-semibold mb-1 md:mb-2">
                    {item.title}
                  </h1>

                  <p className="text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
