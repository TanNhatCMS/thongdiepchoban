import type React from 'react'
import imgOctober from '../../assets/images/october.jpg'
import './october.css'
const October: React.FC = () => (
  <>
    <div className="cauChuyen10">
      <div className="thongDiep10">
        <p style={{ margin: 30, fontSize: 22 }}>
          Cuộc sống không phải là chuỗi ngày thở dài,
          <br /> mà những lần nhịp tim ta đập mạnh
        </p>
      </div>
      <img
        src={imgOctober}
        alt="Tháng 10"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default October
