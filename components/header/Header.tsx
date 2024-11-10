"use client";
import Link from "next/link";
import React from "react";
import "./header.css";
import styles from "./header.module.css";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [attr, setAttr] = useState<string>("block");
  const [attr2, setAttr2] = useState<string>("none");

  const handleOpen = () => {
    setAttr(isOpen ? "block" : "none");
    setAttr2(isOpen ? "none" : "block");
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className={styles.header}>
        <Link href={"/"}>
          <h1>Ali</h1>
        </Link>
        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </ul>
        <IoMdMenu className={`${styles.menu} ${attr}`} onClick={handleOpen} />
        <RxCross2 className={`${styles.cross} ${attr2}`} onClick={handleOpen} />
      </div>
      <div className={`${styles['mobile-menu']} ${attr2}`}>
        <ul>
          <Link href={"/"} onClick={handleOpen}>Home</Link>
          <Link href={"#about"} onClick={handleOpen}>About</Link>
          <Link href={"#projects"} onClick={handleOpen}>Projects</Link>
          <Link href={"#contact"} onClick={handleOpen}>Contact</Link>
          </ul>
      </div>
    </header>
  );
};

export default Header;
