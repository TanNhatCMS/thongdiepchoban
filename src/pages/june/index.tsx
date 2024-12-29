import type React from 'react'
import imgJune from '../../assets/images/june.jpg'
import './june.css'
const June: React.FC = () => (
  <>
    <div className="cauChuyen">
      <div className="thongDiep" style={{ padding: 100 }}>
        <p style={{ margin: 30 }}>
          Học tập không có giới hạn.
          <br />
          Mỗi ngày là một cơ hội mới để khám phá, để mở rộng tầm nhìn của bản thân.
        </p>
      </div>
      <img
        src={imgJune}
        alt="Tháng 6"
        style={{ width: "100%", height: "100%" }}
      />
    </div>

  </>
)


export default June
