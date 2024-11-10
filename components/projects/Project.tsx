"use client";
import React, { useEffect, useState } from "react";
import styles from "./project.module.css";
import Image, { StaticImageData } from "next/image";
import project1 from "@/images/blog.png";
import project2 from "@/images/hostit.png";
import project3 from "@/images/electrochip.png";
import project4 from "@/images/architects.png";
import Link from "next/link";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

type projectDataType = {
  image: StaticImageData;
  title: string;
  link: string;
};
const projectData: projectDataType[] = [
  {
    title: "BlogByAli",
    image: project1,
    link: "https://blog-web-rzgh.vercel.app/",
  },
  {
    title: "Hostit",
    image: project2,
    link: "https://milestone-assignment1.vercel.app/",
  },
  {
    title: "Electrochip",
    image: project3,
    link: "https://clone-random-web.vercel.app/",
  },
  {
    title: "Architects",
    image: project4,
    link: "https://architects-assignment.vercel.app/",
  },
];

const Project = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };
  return (
    <div className={styles.project} id="projects">
      <h1>
        My <span style={{ color: "#6CF8FC" }}>Projects</span>
      </h1>
      <p>
        I&apos;ve showcased four diverse projects on my portfolio, each demonstrating
        my skills in front-end development and UI/UX design.
      </p>
      <div className={styles["full-box"]}>
        <MdKeyboardArrowLeft className={styles.icon} onClick={handlePrev} />
        <Link href={projectData[index].link} target="_blank">
          <div className={styles.box} key={index}>
            <Image
              src={projectData[index].image}
              alt={projectData[index].title}
            />
            <div className={styles.over}>
              <h2>{projectData[index].title}</h2>
            </div>
          </div>
        </Link>
        <MdKeyboardArrowRight className={styles.icon} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Project;
