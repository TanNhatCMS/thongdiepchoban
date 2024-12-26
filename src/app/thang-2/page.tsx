import Image from "next/image";
import {Metadata} from "next";
import styles from '../styles/february.module.css';
import februaryImage from '../../../public/assets/images/february.jpg'; // Import hình ảnh

export const metadata: Metadata = {
    title: "Thông điệp tháng 2",
};
export default function February() {
  return (
      <div className={styles.cauChuyen}>
          <div className={styles.thongDiep}>
              <span className={styles.text}>
                  Bạn
                  <br/>
                  không bao giờ quá già
                  <br/>
                  để đặt một
                  <span className={styles.mucTieu}>MỤC TIÊU</span>
                  mới
                  <br/>
                  hoặc mơ một
                  <span className={styles.giacMo}>GIẤC MƠ</span>
                  mới.
              </span>
          </div>
          <Image
              src={februaryImage}
              alt="Tháng 2"
              fill // Sử dụng fill để lấp đầy container
              style={{objectFit: 'contain'}} // Giữ nguyên tỷ lệ và vừa vặn
              priority // Tải hình ảnh này trước
          />
      </div>
  );
}
