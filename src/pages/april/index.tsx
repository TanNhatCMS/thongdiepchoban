import type React from 'react'
import imgApril from '../../assets/images/april.jpg'
import './april.css'
const April: React.FC = () => (
  <>
    <div className="cauChuyen4">
      <div className="thongDiep4" style={{ padding: 100 }}>
        <p
          style={{
            backgroundColor: "aliceblue",
            height: "auto",
            opacity: "70%",
            borderRadius: 20
          }}
        >
          Cuộc sống là một quyển sách
          <br />
          và những người không học hỏi
          <br />
          chỉ đọc một trang.
          <br />- Saint Augustine-
        </p>
      </div>
      <img
        src={imgApril}
        alt="Tháng 4"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default April
