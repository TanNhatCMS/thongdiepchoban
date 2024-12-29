import type React from 'react'
import imgDecember from '../../assets/images/december.jpg'
import './december.css'
const December: React.FC = () => (
  <>
    <div className="cauChuyen12">
      <div className="thongDiep12">
        <p
          style={{
            margin: 30,
            backgroundColor: "beige",
            height: "auto",
            opacity: "60%",
            borderRadius: 20,
            padding: 10
          }}
        >
          Năm cũ sắp qua, năm mới lại đến.
          <br />
          Tạm biệt nỗi buồn, chào đón niềm vui.
          <br />
          Tạm biệt âu lo, chào đón hy vọng.
          <br />
          Tạm biệt cô đơn, chào đón hạnh phúc.
        </p>
      </div>
      <img
        src={imgDecember}
        alt="Tháng 12"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </>
)
export default December
