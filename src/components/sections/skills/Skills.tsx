// src/components/sections/skills/Skills.tsx

import "./skill.css";
import SectionHeader from "@/components/shared/SectionHeader";
import SkillTabs from "./SkillTabs";
// নতুন Client Component ইম্পোর্ট করুন

// ডেটা স্ট্রাকচারের জন্য টাইপ সংজ্ঞায়িত করা
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

const Skills = () => {
  // ডেটা এখানে Server Component-এই রাখুন
  const skills: SkillsData = {
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
    <div className="md:my-20 my-10">
      <SectionHeader title={"Skills"}></SectionHeader>
      {/* Client Component-কে প্রপস হিসেবে ডেটা পাস করা হলো */}
      <SkillTabs skills={skills} />
    </div>
  );
};

export default Skills;
