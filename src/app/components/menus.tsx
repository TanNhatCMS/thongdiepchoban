'use client';
import { useRouter } from 'next/navigation';

export default function Menus() {
  const router = useRouter();
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

  const handleNavigation = (key: number) => {
    router.push(`/thang-${key}`);
  };

  return (
    <div className="list-group" style={{ width: '256px' }}>
      <div className="list-group-item list-group-item-action active">
        Thông điệp 12 tháng
      </div>
      {months.map((month, index) => (
        <button
          key={index + 1}
          className="list-group-item list-group-item-action"
          onClick={() => handleNavigation(index + 1)}
        >
          {month}
        </button>
      ))}
    </div>
  );
}
