import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Companies from "./Companies";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ExperienceSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <Companies
        image="/images/companies/epiousion.png"
        name="Epiousion IT"
        role="Fullstack Developer"
        location_date="Sorocaba - Brazil, February 2024 - Nowadays"
        description="I'm on the backend team focusing on Node.js, NestJS and TypeScript. Using ORMs such as TypeORM and PrismaORM to develop robust and scalable solutions, ensuring that the backend of our systems is efficient and reliable.
        In addition, I work on the development of fullstack applications, integrating React.js and Tailwind with the backend technologies mentioned. My goal is to provide exceptional user experiences, taking care of both the appearance and functionality of the applications.
        I am also responsible for ensuring the quality and performance of the final product. My day-to-day is a combination of leadership, technical development and quality assurance, always striving to deliver high-quality solutions for our clients."
      />
      <Companies
        image="/images/companies/fraunhofer.png"
        name="Fraunhofer IPT"
        role="Software Developer for Cloud Computing"
        location_date="Aachen - Germany, January 2023 - January 2024"
        description="Development and maintenance of cloud simulation interfaces, using React, Typescript, JavaScript and MUI on the front-end. Creation of microservices for automating engineering simulations with Python, focusing on parameter validation and CRUD operations. Management and integration of microservices in the cloud computing infrastructure, focusing on the organization and administration of parameters and dependencies. Development of microservices to unify simulation result files into a single structured HDF file, facilitating visualization and analysis. Experience with the acquisition, processing and analysis of data obtained during the milling of aero engine components, using LabView, DIAdem and GraphQL."
      />
      <Companies
        image="/images/companies/huawei.png"
        name="Huawei"
        role="Web Development Internship"
        location_date="Sorocaba - Brazil, May 2021 - December 2022"
        description="Frontend developer of websites and systems, where every day I was able to put my skills to use: 
        JavaScript, VueJs, HTML, CSS and SQL to the test, aiming for constant improvement and learning"
      />
      <Companies
        image="/images/companies/vcp.png"
        name="VCP Automation"
        role="Mechatronics Technician"
        location_date="Sorocaba - Brazil, January 2020 - May 2021"
        description="Working with IT, projecting parts in CAD, providing services, assembling and designing panels, among others"
      />
    </Carousel>
  );
};

export default ExperienceSlider;
