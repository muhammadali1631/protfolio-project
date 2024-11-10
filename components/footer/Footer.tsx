import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer}>
        <Link href={'/'}>
        <h1>Ali Shahzad</h1>
        </Link>
        <Link href={'https://www.linkedin.com/in/ali-shahzad-42aa24234/'}><FaLinkedin className={styles.icon}/></Link>
    </div>
  )
}

export default Footer