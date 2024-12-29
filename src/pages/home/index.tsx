import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = (key: number) => {
    navigate(`/thang-${key}`);
  };
  const months = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="card" style={{ width: '300px' }}>
        <div className="card-header text-center">
          <h5>Thông điệp 12 tháng</h5>
        </div>
        <div className="card-body p-0">
          <div className="list-group">
            {months.map((month, index) => (
              <button
                key={index + 1}
                className="list-group-item list-group-item-action text-center"
                onClick={() => handleClick(index + 1)}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home