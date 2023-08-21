import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Collection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="collection/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="collection/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="collection/applications" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Collection