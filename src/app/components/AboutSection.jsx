"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { RiNextjsFill,RiReactjsFill,RiHtml5Fill,RiCss3Fill,
  RiTailwindCssLine,RiJavascriptFill,RiNodejsLine
 } from "react-icons/ri";
import { SiMongodb,SiExpress,SiPostman,SiPython,SiKalilinux,SiWindowsxp} 
from "react-icons/si";



const TAB_DATA = [
{
  title: "Skills",
  id: "skills",
  content: (
    <div>
      <div className="flex flex-wrap">
        <div className="w-25">
          <RiHtml5Fill size={110}/>
        </div>
        <div className="w-25">
          <RiCss3Fill size={110}/>
        </div>
        <div className="w-25">
          <RiJavascriptFill size={110}/>
        </div>
        <div className="w-25">
          <RiTailwindCssLine size={110}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-25">
          <RiNextjsFill size={110} />
        </div>
        <div className="w-25">
          <SiMongodb size={110}/>
        </div>
        <div className="w-25">
          <RiReactjsFill size={110} />
        </div>
        <div className="w-25">
          <SiPostman size={100} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-25">
          <SiPython size={90} />
        </div>
        <div className="w-25">
          <RiNodejsLine size={110}/>
        </div>
        <div className="w-25">
          <SiExpress size={90} />
        </div>
        <div className="w-25">
          <SiKalilinux size={110} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-25">
          <SiWindowsxp size={110} />
        </div>
        {/* Add more icons here if needed */}
      </div>
    </div>
  ),
},

  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Technology</li>
        <li>Indore Institute of science and technology, Indore,MP</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to linus</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;