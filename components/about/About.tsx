import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import img from "@/images/man.png";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <Image src={img} className={styles.image} alt="" />
      <div className={`${styles["about-info"]} fade`}>
        <h3>About me</h3>
        <h1>Front-End Developer</h1>
        <p>
          Hi, I&apos;m Ali—a dedicated UI/UX designer passionate about creating
          visually engaging and user-friendly digital experiences. With a keen
          eye for detail and a deep understanding of user-centered design
          principles, I strive to bridge the gap between aesthetics and
          functionality. My work focuses on crafting interfaces that not only
          look good but also provide seamless interactions, ensuring users have
          an intuitive and delightful experience.
        </p>
        <Link href={'#projects'}>
        <button>Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
