import SkillsItem from "./SkillsItem";
import SkillsLanguages from "./SkillsLanguages";

const Skills = () => {
  return (
    <div id="skills" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-blue-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="React Developer"
            year="2022 - Nowadays"
            description="Interfaces, websites and systems"
          />
          <SkillsItem
            title="Node Developer"
            year="2023 - Nowadays"
            description="For API's and related backend applications"
          />
          <SkillsItem
            title="React Native"
            year="2022 - Nowadays"
            description="One of the first frameworks I learned and use frequently for mobile"
          />
          <SkillsLanguages
            skill1="Typescript"
            skill2="Javascript"
            skill3="Html"
            skill4="Css"
            level1="w-[90%]"
            level2="w-[90%]"
            level3="w-[100%]"
            level4="w-[80%]"
          />
        </div>
        <div>
          <SkillsItem
            title="Nest Developer"
            year="2023 - Nowadays"
            description="API's and Miscroservices for the most varied applications"
          />
          <SkillsItem
            title="VueJs"
            year="2022 - 2023"
            description="Learned and put into practice in my first internship at Huawei"
          />
          <SkillsItem
            title="Spring"
            year="2024 - Nowadays"
            description="I'm currently challenging myself once again to improve my knowledge of Java/Spring "
          />
          <SkillsLanguages
            skill1="Python"
            skill2="Next"
            skill3="SQL"
            skill4="Java"
            level1="w-[80%]"
            level2="w-[75%]"
            level3="w-[80%]"
            level4="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
