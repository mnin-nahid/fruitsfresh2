import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/component/Button/Button'
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/ju.png"
            alt='contact'
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='type your name hear' className={styles.input} />
          <input type="text" placeholder='example@example.com' className={styles.input}/>
          <textarea 
            className={styles.textArea} 
            placeholder='message' 
            cols="30" 
            rows="6"></textarea>
            <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact