import Image from "next/image";
import {Metadata} from "next";
import styles from '../styles/january.module.css';
import januaryImage from '../../../public/assets/images/january.jpg';

export const metadata: Metadata = {
    title: "Thông điệp tháng 1",
};
export default function January() {
  return (
      <div className={styles.cauChuyen}>
          <div className={styles.thongDiep}>
              <span>
                  HÔM NAY TÔI
                  <br/>
                  ĐÓNG CỬA QUÁ KHỨ,
                  <br/>
                  MỞ CỬA TƯƠNG LAI,
                  <br/>
                  HÍT MỘT HƠI THẬT SÂU,
                  <br/>
                  BƯỚC QUA VÀ BẮT ĐẦU
                  <br/>
                  MỘT CHƯƠNG MỚI
                  <br/>
                  TRONG CUỘC ĐỜI TÔI
              </span>
          </div>
          <Image
              src={januaryImage}
              alt="Tháng 1"
              fill // Sử dụng fill để lấp đầy container
              style={{objectFit: 'contain'}} // Giữ nguyên tỷ lệ và vừa vặn
              priority // Tải hình ảnh này trước
          />
      </div>
  )
      ;
}
