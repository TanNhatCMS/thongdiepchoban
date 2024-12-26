import Image from "next/image";
import {Metadata} from "next";
import styles from '../styles/march.module.css';
import marchImage from '../../../public/assets/images/march.jpg';

export const metadata: Metadata = {
    title: "Thông điệp tháng 3",
};
export default function March() {
  return (
    <div className={styles.cauChuyen}>
      <div className={styles.thongDiep}>
        <span>
          Nếu không yêu thương chính mình,
          <br />
          bạn không thể yêu thương người khác.
          <br />
          -Đức Đạt Lai Lạt Ma-
        </span>
      </div>
      <Image
        src={marchImage}
        alt="Tháng 3"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
}

