import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Companies from "./Companies"

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
}

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
        id="carousel_omie"
        image="/images/companies/omie.png"
        name="Omie"
        role="Fullstack Developer"
        location_date="Remote - Brazil, August 2024 - Present"
        description="Developed responsive and maintainable user interfaces by translating product requirements and UI/UX designs into production-ready code. Improved the scalability and stability of the company’s CRM, supporting continuous product evolution. Collaborated with back-end engineers to integrate APIs and services, ensuring reliable data flow and smooth user experiences. Contributed to the creation and maintenance of design system repositories, promoting component reuse and UI consistency. Participated in code reviews, testing, and knowledge sharing to maintain code quality and team alignment. Worked with JavaScript and Vue.js in an agile development environment, using GitHub for version control and collaboration."
      />
      <Companies
        id="carousel_epiousion"
        image="/images/companies/epiousion.png"
        name="Epiousion IT"
        role="Fullstack Developer"
        location_date="Sorocaba - Brazil, February 2024 - August 2024"
        description="Led back-end development using Node.js, NestJS, and TypeScript to deliver robust and scalable APIs. Built and maintained data access layers with TypeORM and PrismaORM, ensuring consistency and performance. Developed full-stack features using React.js and Tailwind, integrating front-end and back-end components. Designed and worked with relational databases (PostgreSQL, SQL Server) and NoSQL databases (MongoDB), applying solid data modeling principles."
      />
      <Companies
        id="carousel_fraunhofer"
        image="/images/companies/fraunhofer.png"
        name="Fraunhofer IPT"
        role="Software Developer for Cloud Computing"
        location_date="Aachen - Germany, January 2023 - January 2024"
        description="Development and maintenance of cloud simulation interfaces, using React, Typescript, JavaScript and MUI on the front-end. Creation of microservices for automating engineering simulations with Python, focusing on parameter validation and CRUD operations. Management and integration of microservices in the cloud computing infrastructure, focusing on the organization and administration of parameters and dependencies. Development of microservices to unify simulation result files into a single structured HDF file, facilitating visualization and analysis. Experience with the acquisition, processing and analysis of data obtained during the milling of aero engine components, using LabView, DIAdem and GraphQL."
      />
      <Companies
        id="carousel_huawei"
        image="/images/companies/huawei.png"
        name="Huawei"
        role="Web Development Internship"
        location_date="Sorocaba - Brazil, May 2021 - December 2022"
        description="Frontend developer of websites and systems, where every day I was able to put my skills to use: 
        JavaScript, VueJs, HTML, CSS and SQL to the test, aiming for constant improvement and learning"
      />
      <Companies
        id="carousel_vcp"
        image="/images/companies/vcp.png"
        name="VCP Automation"
        role="Mechatronics Technician"
        location_date="Sorocaba - Brazil, January 2020 - May 2021"
        description="Working with IT, projecting parts in CAD, providing services, assembling and designing panels, among others"
      />
    </Carousel>
  )
}

export default ExperienceSlider
