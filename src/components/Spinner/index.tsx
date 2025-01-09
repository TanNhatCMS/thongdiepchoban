import React from 'react'
import styles from './spinner.module.css'
import logo from '../../assets/images/itc.svg'
const Spinner: React.FC = () => {
  return (
      <div className={styles.spinner_overlay}>
        <div className={styles.spinner}>
          <img src={logo} alt="Logo" className={styles.spinner_logo} />
        </div>
      </div>
  )
}

export default Spinner
