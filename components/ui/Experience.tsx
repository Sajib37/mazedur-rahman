import Experiences from "../../public/Experiences";

const Skills = [
  {
    category: "Soft Skills",
    items: [
      "Communication Skill",
      "Social Skill",
      "Team Work",
      "Leadership",
      "Emotional Intelligence",
    ],
  },
  {
    category: "Digital Skills",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "Illustrator", "Canva"],
  },
  {
    category: "Professional Skills",
    items: [
      "Recruitment & Talent Acquisition",
      "Training & Development",
      "Performance Monitoring",
      "Documentation & Reporting",
      "Event Management",
    ],
  },
];

const gradients = [
  "bg-gradient-to-r from-[#d96c06] to-[#a72703]",
  "bg-gradient-to-r from-yellow-500 to-yellow-700",
  "bg-gradient-to-r from-purple-600 to-purple-900",
  "bg-gradient-to-r from-red-600 to-amber-800",
  "bg-gradient-to-r from-blue-700 to-blue-900",
];
const Experience = () => {
  return (
    <section className="max-w-7xl bg- mx-auto pt-10 px-4">
      <h1 className="text-2xl mt-10 text-center font-bold md:text-4xl lg:text-5xl text-accent">
        My Experience
      </h1>
      <div className="mx-auto h-1 bg-accent w-34 md:w-44 lg:w-64 mt-1"></div>

      <div>
        {/* Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-10 md:py-14 lg:py-16">
          {Experiences.map((experience, index) => (
            <div key={index} className="">
              <h2 className="text-xl font-semibold text-primary md:text-2xl">
                {experience.title}
              </h2>

              <p className="text-base font-semibold md:text-lg text-gray-700 dark:text-gray-300">
                {experience.company}
              </p>

              <p className="text-sm text-gray-500 mb-3">
                {experience.duration}
              </p>

              {/* Responsibilities List */}
              <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
                {experience.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h1 className="text-2xl mt-10 text-center font-bold md:text-4xl  text-accent">
            Skills & Expertise
          </h1>
          <div className="mx-auto h-1 bg-accent w-34 md:w-44 lg:w-64 mt-1"></div>

          <div className="space-y-6 grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-10">
            {Skills.map((skillGroup, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-bold md:text-xl text-center text-primary mb-2">
                  {skillGroup.category}
                </h2>

                <div className="flex flex-wrap justify-center gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded-md text-white font-medium cursor-pointer hover:scale-105 transition-all hover:-translate-y-1.5 ${
                        gradients[i % gradients.length]
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
