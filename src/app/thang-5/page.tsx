import Image from "next/image";
import {Metadata} from "next";
import styles from '../styles/february.module.css';
import mayImage from '../../../public/assets/images/may.jpg'; // Import hình ảnh

export const metadata: Metadata = {
    title: "Thông điệp tháng 5",
};
export default function May() {
  return (
    <div className={styles.cauChuyen}>
      <div className={styles.thongDiep}>
        <p>
          Khi mọi thứ dường như chống lại bạn,
          <br />
          Hãy nhớ rằng máy bay chỉ có thể cất cánh lại chống lại gió,
          không phải thuận theo nó.
          <br />
          - Henry Ford -
        </p>
      </div>
      <Image
        src={mayImage}
        alt="Tháng 5"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
    ;
}
