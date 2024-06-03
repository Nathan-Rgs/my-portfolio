import ExperienceSlider from "./ExperienceSlider";

const ProfessionalExperience = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        Professional <span className="text-blue-400">Experience</span>
      </h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <ExperienceSlider />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
