import type React from 'react'
import imgNovember from '../../assets/images/november.jpg'
import './november.css'
const November: React.FC = () => (
  <>
    <div className="cauChuyen11">
      <div className="thongDiep11">
        <p style={{ margin: 30, fontSize: 22 }}>
          Rạng rỡ như ánh nắng mặt trời,
          <br />
          hãy chiếm lĩnh ngày hôm nay
          <br />
          với sự lạc quan và sức sống.
        </p>
      </div>
      <img
        src={imgNovember}
        alt="Tháng 11"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default November
