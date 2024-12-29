import type React from 'react'
import imgAugust from '../../assets/images/august.jpg'
import './august.css'
const August: React.FC = () => (
  <>
    <div className="cauChuyen">
      <div className="thongDiep">
        <p style={{ margin: 30, fontSize: 22 }}>
          Mọi công việc thành đạt
          <br />
          đều có sự kiên trì
          <br /> và lòng say mê.
          <br /> -Ngạn ngữ Tây Ban Nha-
        </p>
      </div>
      <img
        src={imgAugust}
        alt="Tháng 8"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  </>
)


export default August
