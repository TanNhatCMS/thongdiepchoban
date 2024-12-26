import Image from "next/image";
import {Metadata} from "next";
import styles from '../styles/april.module.css';
import aprilImage from '../../../public/assets/images/april.jpg'; // Import hình ảnh

export const metadata: Metadata = {
    title: "Thông điệp tháng 4",
};
export default function April() {
  return (
    <div className={styles.cauChuyen}>
      <div className={styles.thongDiep}>
        <span className={styles.text}>
          Cuộc sống là một quyển sách
          <br />
          và những người không học hỏi
          <br />
          chỉ đọc một trang.
          <br />
          - Saint Augustine -
        </span>
      </div>
      <Image
        src={aprilImage}
        alt="Tháng 4"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
