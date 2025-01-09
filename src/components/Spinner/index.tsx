import React from 'react'
import styles from './spinner.module.css'

const Spinner: React.FC = () => {
  return (
    <>
      <div className={styles.spinner}></div>
      <div className={styles.spinner_overlay}></div>
    </>
  )
}

export default Spinner
