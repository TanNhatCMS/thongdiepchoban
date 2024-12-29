import type React from 'react'
import imgJanuary from '../../assets/images/january.jpg'
import './january.css'
const January: React.FC = () => (
  <>
    <div className="cauChuyen1">
      <div className="thongDiep1" style={{ padding: 20 }}>
        <p>
          HÔM NAY TÔI
          <br />
          ĐÓNG CỬA QUÁ KHỨ,
          <br />
          MỞ CỬA TƯƠNG LAI,
          <br />
          HÍT MỘT HƠI THẬT SÂU,
          <br />
          BƯỚC QUA VÀ BẮT ĐẦU
          <br />
          MỘT CHƯƠNG MỚI
          <br />
          TRONG CUỘC ĐỜI TÔI
        </p>
      </div>
      <img
        src={imgJanuary}
        alt="Tháng 1"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default January
