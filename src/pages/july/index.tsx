import type React from 'react'
import imgJuly from '../../assets/images/july.jpg'
import './july.css'
const July: React.FC = () => (
  <>
    <div className="cauChuyen7">
      <div className="thongDiep7">
        <p
          style={{
            margin: 30,
            backgroundColor: "aliceblue",
            height: "auto",
            opacity: "60%",
            borderRadius: 20,
            fontSize: 22,
            padding: 4
          }}
        >
          Cuộc sống luôn đầy ắp <br />
          những việc không như ý
          <br /> nên bạn chẳng thể nào né tránh.
          <br /> Điều duy nhất bạn có thể làm
          <br /> là thay đổi góc nhìn về nó
        </p>
      </div>
      <img
        src={imgJuly}
        alt="Tháng 7"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)


export default July
