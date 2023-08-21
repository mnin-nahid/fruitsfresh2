import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <small>@2023 company. All rights reserved</small>
        <div>
          <div className={styles.social}>
            <Image src="/1.png" className={styles.icon} width={15} height={15} alt='logo'></Image>
            <Image src="/2.png" className={styles.icon} width={15} height={15} alt='logo'></Image>
            <Image src="/3.png" className={styles.icon} width={15} height={15} alt='logo'></Image>
            <Image src="/4.png" className={styles.icon} width={15} height={15} alt='logo'></Image>
          </div>
        </div>
    </div>
  )
}

export default Footer