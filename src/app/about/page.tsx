import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/component/Button/Button'

export const metadata = {
  title: 'About - FRUITSFRESH.COM',
  description: 'about for fruitsfresh.com',
}
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
        src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600"
        fill={true}
        alt=""
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcraftine award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius adipisci possimus ratione <br/><br/> beatae necessitatibus, quod, fuga voluptate tempora pariatur dolor nulla voluptatibus, similique odio tempore quidem repellendus quisquam maxime odit delectus rem explicabo iure. Sit, laborum aut? Eaque optio, ipsum perspiciatis magnam aperiam possimus, nobis voluptatem, ea maiores inventore iusto asperiores. Necessitatibus enim culpa quibusdam fugiat a non rerum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur corrupti perspiciatis illo fugit magnam voluptatem, temporibus illum sapiente, culpa odio aliquid tempore voluptates similique <br/><br/> quod doloribus porro nisi ratione? Cupiditate sunt dicta iste ea cumque iure sint nisi fuga! Et pariatur ducimus accusantium dolorum.
          </p>
          <Button url="contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About