import type React from 'react'
import imgMay from '../../assets/images/may.jpg'
import './may.css'
const May: React.FC = () => (
  <>
    <div className="cauChuyen5">
      <div className="thongDiep5" style={{ padding: 100 }}>
        <p
          style={{
            backgroundColor: "aliceblue",
            height: "auto",
            opacity: "55%",
            borderRadius: 20,
            margin: 10
          }}
        >
          Khi mọi thứ dường như chống lại bạn,
          <br />
          Hãy nhớ rằng máy bay chỉ có thể cất cánh lại chống lại gió, không phải
          thuận theo nó.
          <br />
          -Henry Ford-
        </p>
      </div>
      <img
        src={imgMay}
        alt="Tháng 5"
        style={{ width: "100%", height: "100%" }}
      />
    </div>

  </>
)


export default May
