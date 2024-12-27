'use client';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'group',
    label: 'Thông điệp 12 tháng',
    type: 'group',
    children: [
      { key: '1', label: 'Tháng 1' },
      { key: '2', label: 'Tháng 2' },
      { key: '3', label: 'Tháng 3' },
      { key: '4', label: 'Tháng 4' },
      { key: '5', label: 'Tháng 5' },
      { key: '6', label: 'Tháng 6' },
      { key: '7', label: 'Tháng 7' },
      { key: '8', label: 'Tháng 8' },
      { key: '9', label: 'Tháng 9' },
      { key: '10', label: 'Tháng 10' },
      { key: '11', label: 'Tháng 11' },
      { key: '12', label: 'Tháng 12' },
    ],
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <Menu
      onClick={(e) => router.push(`/thang-${e.key}`)}
      style={{ width: 256 }}
      mode="inline"
      items={items}
    />
  );
}
