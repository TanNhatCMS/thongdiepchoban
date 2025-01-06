import React from 'react';
import { useLocation } from 'react-router-dom';
import  Snowflakes  from '../Snowflakes';
import  BirthdayITC  from '../BirthdayITC';
import dayjs from 'dayjs'

const AnimationShow: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dateParam = queryParams.get('date');
  const currentDate = dateParam ? dayjs(dateParam, 'D-M-YYYY').toDate() : new Date();
  const currentMonth = currentDate.getMonth(); // Lấy tháng
  const currentDay = currentDate.getDate(); // Lấy ngày trong tháng

  const isWinter = currentMonth === 11 || currentMonth <= 1; // Kiểm tra nếu là mùa đông
  const isBirthday = currentMonth === 3 && currentDay === 27; // Kiểm tra nếu là ngày 27 tháng 4

  return (
    <>
      {isWinter && <Snowflakes />} {/* Hiển thị tuyết rơi nếu là mùa đông */}
      {isBirthday && <BirthdayITC />} {/* Hiển thị BirthdayITC nếu là ngày 27 tháng 4 */}
    </>
  );
}

export default AnimationShow;
