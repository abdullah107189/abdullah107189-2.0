// src/components/sections/skills/SkillTabs.tsx

"use client";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// react-parallax-tilt সরাসরি ইম্পোর্ট করুন, যেহেতু এটি এখন Client Component-এর ভেতরে
import Tilt from "react-parallax-tilt";
import Image from "next/image";

// আপনার ডেটা স্ট্রাকচার টাইপ (Skills.tsx ফাইল থেকে কপি করে নিন, অথবা এটিকে একটি আলাদা টাইপ ফাইলে রাখুন)
interface SkillItem {
  name: string;
  bg: string;
  img: string;
}

interface SkillsData {
  Frontend: SkillItem[];
  Backend: SkillItem[];
  Tools: SkillItem[];
}

// props টাইপ
interface SkillTabsProps {
  skills: SkillsData;
}

const SkillTabs: React.FC<SkillTabsProps> = ({ skills }) => {
  return (
    <Tabs className="z-10 relative">
      <TabList
        className={
          "flex justify-center my-5 border dark:border-gray-400 z-10 md:w-1/2 mx-auto p-2 rounded-full"
        }
      >
        <Tab className="md:mx-3 border dark:border-gray-400 rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
          Frontend
        </Tab>
        <Tab className="md:mx-3 border dark:border-gray-400 rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
          Backend
        </Tab>
        <Tab className="md:mx-3 border dark:border-gray-400 rounded-full z-30 mx-1 cursor-pointer md:px-6 px-2 focus:outline-none">
          Tools
        </Tab>
      </TabList>

      <TabPanel>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-wrap justify-center gap-5">
            {skills.Frontend.map((category, item) => (
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
                  <div className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}>
                    <Image
                      className="rounded-2xl w-20 h-20 object-contain"
                      src={category.img}
                      alt={category.name || "Skill Image"}
                      width={80}
                      height={80}
                    />
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-wrap justify-center gap-5">
            {skills.Backend.map((category, item) => (
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
                  <div className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}>
                    <Image
                      className="rounded-2xl w-20 h-20 object-contain"
                      src={category.img}
                      alt={category.name || "Skill Image"}
                      width={80}
                      height={80}
                    />
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-wrap justify-center gap-5">
            {skills.Tools.map((category, item) => (
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
                  <div className={`rounded-3xl p-2 hover:z-10 ${category.bg}`}>
                    <Image
                      className="rounded-2xl w-20 h-20 object-contain"
                      src={category.img}
                      alt={category.name || "Skill Image"}
                      width={80}
                      height={80}
                    />
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default SkillTabs;
