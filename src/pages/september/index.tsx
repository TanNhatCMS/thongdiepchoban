import type React from 'react'
import imgSeptember from '../../assets/images/september.jpg'
import './september.css'
const September: React.FC = () => (
  <>
    <div className="cauChuyen9">
      <div className="thongDiep9">
        <p style={{ margin: 30, fontSize: 22 }}>
          Thiên sứ cho chúng ta thấy
          <br />
          nhiều cuộc sống,
          <br />
          và những khó khăn chúng ta gặp phải
          <br />
          đều là những bài học sâu sắc
          <br />
          mà chúng ta đã chọn để trải nghiệm.
        </p>
      </div>
      <img
        src={imgSeptember}
        alt="Tháng 9"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  </>
)


export default September
