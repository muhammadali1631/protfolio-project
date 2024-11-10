import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact} id='contact'>
        <h1>Let&apos;s Design Together <span style={{color:'#6CF8FC'}}>Contact Me</span></h1>
        <div className={styles.inputs}>
            <input type="text" placeholder='Your Name'/>
            <input type="text" placeholder='Your Email'/>
            <input type="text" placeholder='Your Phone'/>
            <textarea placeholder='Message'></textarea>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Contact