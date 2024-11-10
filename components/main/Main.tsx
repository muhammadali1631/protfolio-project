import Image from "next/image";
import img from '@/images/man.png'
import React from "react";
import styles from './main.module.css'
const Main = () => {
  return (
    <div className={styles.main}>
       <Image src={img} className={styles.image} alt=""/>
      <div className={styles.about}>
        <h2>
          Hello I&apos;m 
        </h2>
          <h1 style={{color:'#6CF8FC', fontSize: '50px' }}>Ali Shahzad</h1>
      </div>
       
    </div>
  );
};

export default Main;
