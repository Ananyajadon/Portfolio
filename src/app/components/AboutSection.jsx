"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";



const TAB_DATA = [
{
  title: "Skills",
  id: "skills",
  content: (
    <div>
   <p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,react,nextjs,tailwind,materialui,js,ts," />
  </a>
</p>

<br/>

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=cpp,c,nodejs,py,express,mongodb,mysql,azure" />
  </a>
</p>

<br/>

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,github,docker,figma,vscode,postman,linux,aws" />
  </a>
</p>


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
       <li><a href="https://www.udemy.com/certificate/UC-7b6eed7d-9f42-422c-ad7e-0f9e8780af36/">Introduction to Linux</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-f05612df-8f7b-4e81-a4bb-78e3dce0da4c/">prompt engineering</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-fee8c1d0-7a85-4b01-a4de-1a18a1d95f78/">Introduction to C++</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-87d79f41-4a0b-423a-a951-c42539743c16/">Git: Basic to Advance</a></li>
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
            working with JavaScript, React, Nextjs, Node.js, Express, Mysql,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-10">
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