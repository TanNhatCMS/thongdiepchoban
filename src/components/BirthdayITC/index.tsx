import React from 'react';
import styles from './BirthdayITC.module.css';

const BirthdayITC: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const numberOfLogos = currentYear - 2001; // Tính số lượng logo từ năm hiện tại đến 2001

  return (
    <div className={styles.birthdays} aria-hidden="true">
      {Array.from({ length: numberOfLogos }, (_, index) => {
        // Tạo kích thước ngẫu nhiên (width từ 30px đến 60px)
        const randomWidth = Math.random() * 30 + 30;
        const randomHeight = randomWidth * 1.5; // Tỷ lệ 1:1.5

        return (
          <div
            key={index}
            className={styles.birthday}
            style={{
              left: `${Math.random() * 100}%`, // Vị trí ngẫu nhiên trên trục X
              animationDelay: `${Math.random() * 10}s, ${Math.random() * 3}s`, // Thời gian trễ ngẫu nhiên cho hiệu ứng
              width: `${randomWidth}px`, // Kích thước ngẫu nhiên (width)
              height: `${randomHeight}px`, // Kích thước tỷ lệ (height)
            }}
          />
        );
      })}
    </div>
  );
};

export default BirthdayITC;
