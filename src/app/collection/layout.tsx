import React from 'react'
import styles from './page.module.css'

const layout = ({children}: any) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>OUR COLLECTION</h1>
        {children}
    </div>
  )
}

export default layout