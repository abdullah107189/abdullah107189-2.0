import {
  IconBook,
  IconBriefcase,
  IconCode,
  IconHome,
  IconPhone,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";
import { FloatingDock } from "./FloatingDock";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full " />,
      href: "#home",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full " />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <IconCode className="h-full w-full " />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <IconRocket className="h-full w-full " />,
      href: "#projects",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full " />,
      href: "#experience",
    },
    {
      title: "Education",
      icon: <IconBook className="h-full w-full " />,
      href: "#education",
    },
    {
      title: "Contact",
      icon: <IconPhone className="h-full w-full " />,
      href: "#contact",
    },
  ];
  return (
    <>
      <div className="md:mt-10">
        <FloatingDock mobileClassName="translate-y-20" items={links} />
      </div>
    </>
  );
}
