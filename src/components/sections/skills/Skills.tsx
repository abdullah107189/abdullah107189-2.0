import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tilt from "react-parallax-tilt";
import SectionHeader from "../../../Components/SectionHeader";
import "react-tabs/style/react-tabs.css";
import "./skill.css";
const Skills = () => {
  const skills = {
    Frontend: [
      {
        name: "HTML5",
        bg: "bg-[#f16529]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS3",
        bg: "bg-[#1572b6]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "Tailwind CSS",
        bg: "bg-[#33a9dc]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "JavaScript",
        bg: "bg-[#f0db4f]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        bg: "bg-[#61dafb]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "React Router",
        bg: "bg-[#121212]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original-wordmark.svg",
      },
    ],
    Backend: [
      {
        name: "Firebase",
        bg: "bg-[#ffa000]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
      },
      {
        name: "Node.js",
        bg: "bg-[#4b9742]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        name: "Express",
        bg: "bg-black/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        bg: "bg-[#46a037]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "JWT",
        bg: "bg-white/20",
        img: "https://i.postimg.cc/vZM1ppmy/jwt-logo.png",
      },
    ],
    Tools: [
      {
        name: "GitHub",
        bg: "bg-gray-800/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      },
      {
        name: "Git",
        bg: "bg-[#f1502f]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "NPM",
        bg: "bg-[#cb3837]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Yarn",
        bg: "bg-[#2c8ebb]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
      },
      {
        name: "Postman",
        bg: "bg-[#ff6c37]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Netlify",
        bg: "bg-[#00c7b7]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Vercel",
        bg: "bg-[#000000]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Figma",
        bg: "bg-[#a259ff]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "VSCode",
        bg: "bg-[#0078d7]/20",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  };

  return (
    <div>
      <SectionHeader title={"Skills"}></SectionHeader>

      <Tabs className="z-10 relative">
        {/* top bar  */}
        <TabList
          className={
            "flex   justify-center my-5 border dark:border-gray-400 z-10 md:w-1/2 mx-auto p-2 rounded-full"
          }
        >
          <Tab className="md:mx-3 border dark:border-gray-400  rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
            Frontend
          </Tab>
          <Tab className="md:mx-3 border dark:border-gray-400  rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
            Backend
          </Tab>
          <Tab className="md:mx-3 border dark:border-gray-400  rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
            Tools
          </Tab>
        </TabList>

        {/* frontend section */}
        <TabPanel>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-wrap justify-center gap-5">
              {skills?.Frontend?.map((category, item) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={item * 100}
                  key={item}
                  className="flex items-center justify-center"
                >
                  <Tilt
                    scale={1.3}
                    transitionSpeed={2500}
                    className="bg-white rounded-3xl hover:z-10 z-10"
                  >
                    <div
                      className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}
                    >
                      <img
                        className="rounded-2xl w-20 h-20 object-contain"
                        src={category.img}
                        alt={category.name || "Skill Image"}
                      />
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        {/* backend section  */}
        <TabPanel>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-wrap justify-center gap-5">
              {skills?.Backend?.map((category, item) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={item * 100}
                  key={item}
                  className="flex items-center justify-center"
                >
                  <Tilt
                    scale={1.3}
                    transitionSpeed={2500}
                    className="bg-white rounded-3xl hover:z-10"
                  >
                    <div
                      className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}
                    >
                      <img
                        className="rounded-2xl w-20 h-20 object-contain"
                        src={category.img}
                        alt={category.name || "Skill Image"}
                      />
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        {/* tools section  */}
        <TabPanel>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-wrap justify-center gap-5">
              {skills?.Tools?.map((category, item) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={item * 100}
                  key={item}
                  className="flex items-center justify-center"
                >
                  <Tilt
                    scale={1.3}
                    transitionSpeed={2500}
                    className="bg-white rounded-3xl hover:z-10"
                  >
                    <div
                      className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}
                    >
                      <img
                        className="rounded-2xl w-20 h-20 object-contain"
                        src={category.img}
                        alt={category.name || "Skill Image"}
                      />
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Skills;
