import React from 'react'

const Snowflakes: React.FC = () => {
  const snowflakes = new Array(12).fill(null) // Tạo mảng 12 phần tử tuyết

  return (
    <div className="snowflakes" aria-hidden="true">
      {snowflakes.map((_, index) => (
        <div key={index} className="snowflake">
          <div className="inner">❅</div>
        </div>
      ))}
    </div>
  )
}

export default Snowflakes
