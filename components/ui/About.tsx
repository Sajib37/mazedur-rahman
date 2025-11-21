import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto pt-10 md:pt-14 lg:pt-16 px-4">
      <h1 className="text-2xl text-center font-bold md:text-4xl lg:text-5xl text-accent">
        A Little About Me
      </h1>
      <div className="mx-auto h-1 bg-accent w-34 md:w-44 lg:w-64 mt-1"></div>
      <div className="flex flex-col-reverse lg:flex-row pt-8 md:pt-10 lg:pt-12">
        <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6 text-justify">
          <p>
            I am a dedicated Business Graduate with a strong academic foundation
            from the University of Dhaka and practical experience in Human
            Resources. My journey includes working as an HR Intern at General
            Pharmaceuticals Ltd., where I gained hands-on experience in
            recruitment, CV screening, assessment coordination, interviews, and
            documentation.
          </p>
          <p>
            I also worked as an MTO – Marketing HR at Abul Khair Group, where I
            managed end-to-end recruitment for sales positions, coordinated
            onboarding, supported training programs, monitored employee
            performance, and assisted with HR administrative activities.
          </p>
          <p>
            With a passion for people, communication, and workplace development,
            I aim to contribute to building efficient, motivated, and
            high-performing teams. I consider myself a fast learner, a team
            player, and someone who values leadership, emotional intelligence,
            and continuous improvement.
          </p>
        </div>

        <div className="flex-1">
          <Image src="/aboutme.png" alt="About Me" width={500} height={500} className="mx-auto w-4/5 md:w-2/3"/>
        </div>
      </div>
    </section>
  );
};

export default About;
