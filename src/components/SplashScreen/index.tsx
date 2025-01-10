import React, { useEffect, useState } from 'react';
import styles from './splash-screen.module.css';
import logo from '../../assets/images/logo-ITC.png';
const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.splash_screen}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.wave}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SplashScreen;
