import React from 'react'
import styles from './Snowflakes.module.css'

const Snowflakes: React.FC = () => {

  return (
    <div className={styles.snowflakes} aria-hidden="true">
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
          <div className={styles.snowflake}>❅</div>
          <div className={styles.snowflake}>❆</div>
    </div>
  )
}

export default Snowflakes
