import type React from 'react'
import imgFebruary from '../../assets/images/february.jpg'
import './february.css'

const February: React.FC = () => (
  <>
    <div className="cauChuyen2">
      <div className="thongDiep2" style={{ padding: 150 }}>
        <p>
          Bạn không bao giờ quá già
          <br />
          để đặt một
          <span>MỤC TIÊU</span>
          mới
          <br />
          hoặc mơ một
          <span>GIẤC MƠ</span>
          mới.
        </p>
      </div>
      <img
        src={imgFebruary}
        alt="Tháng 2"
        style={{ width: "100%", height: "100%" }}
      />
    </div>

  </>
)


export default February
