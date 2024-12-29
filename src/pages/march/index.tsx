import type React from 'react'
import imgMarch from '../../assets/images/March.jpg'
import './march.css'
const March: React.FC = () => (
  <>
    <div className="cauChuyen3">
      <div className="thongDiep3" style={{ padding: 100 }}>
        <p>
          Nếu không yêu thương chính mình,
          <br />
          bạn không thể yêu thương người khác.
          <br />
          -Đức Đạt Lai Lạt Ma-
        </p>
      </div>
      <img
        src={imgMarch}
        alt="Tháng 3"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default March
