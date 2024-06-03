import {
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

const Projects = () => {
  const handleOnClickFrontEnd = () => {
    window.open(
      "https://github.com/Nathan-Rgs/frontend-challenge-rocketseat",
      "_blank"
    );
  };

  const handleOnClickBackend = () => {
    window.open("https://github.com/Nathan-Rgs/api-user-auth", "_blank");
  };

  const handleOnClickFullstack = () => {
    window.open(
      "https://github.com/LuanB-compt/upx7-tic-frontend/tree/dev",
      "_blank"
    );
  };

  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[4rem]">
      <h1 className="heading">
        Pro <span className="text-blue-400"> Jetc </span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div className="group relative cursor-pointer overflow-hidden bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-sky-400">
              <BuildingStorefrontIcon className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="space-y-6 pt-5 text-base leading-7 text-slate-400 transition-all duration-300 group-hover:text-white">
                <p>
                  E-commerce FrontEnd Challenge, fully integradted with axios
                  using NestJs and Typescript
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-blue-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative cursor-pointer overflow-hidden bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-sky-400">
              <BuildingOffice2Icon className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="space-y-6 pt-5 text-base leading-7 text-slate-400 transition-all duration-300 group-hover:text-white">
                <p>
                  Application to facilitate communication between citizens and
                  city halls.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-blue-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative cursor-pointer overflow-hidden bg-gray-800 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-sky-400">
              <UsersIcon className="h-10 w-10 text-white transition-all" />
            </span>
            <div className="relative z-10 mx-auto max-w-md">
              <div className="space-y-6 pt-5 text-base leading-7 text-slate-400 transition-all duration-300 group-hover:text-white">
                <p>
                  API Crud made for user authentication with Node and Express.
                </p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-blue-500 transition-all duration-300 group-hover:text-white"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
