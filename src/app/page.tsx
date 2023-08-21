import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/pine.png"
import Button from '@/component/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Best Fresh Fruits For Your Good Health.
        </h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/collection" text="See Collection" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt='hero'/>
      </div>
    </div>
  )
}
