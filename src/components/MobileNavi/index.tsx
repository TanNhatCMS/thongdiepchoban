import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './mobile-navi.module.css'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import HomeIcon from '@mui/icons-material/Home'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

const MobileNavi: React.FC = () => {
  const [value, setValue] = React.useState(0)
  const location = useLocation()
  const navigate = useNavigate()

  const getActiveValue = () => {
    const params = new URLSearchParams(location.search)
    const action = params.get('action')

    if (location.pathname === '/') {
      return 0
    } else if (action === 'day') {
      return 1
    } else if (action === 'month') {
      return 2
    }
    return 0 // Default to Home if no match
  }
  const linkPerpetualCalendar = () => {
    // nếu location có tháng
    const url = '/lich-van-nien-lich-van-su?action=month'
    let search = ''
    switch (location.pathname) {
      case '/thang-1':
      case '/thang-2':
      case '/thang-3':
      case '/thang-4':
      case '/thang-5':
      case '/thang-6':
      case '/thang-7':
      case '/thang-8':
      case '/thang-9':
      case '/thang-10':
      case '/thang-11':
      case '/thang-12': {
        const currentYear = new Date().getFullYear();
        const monthParameter = location.pathname.split('-')[1]
        search = `&date=1-${monthParameter}-${currentYear}`
        break
      }
      default:
        break
    }
    return url + search

  }
  React.useEffect(() => {
    setValue(getActiveValue())
  }, [location])

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    switch (newValue) {
      case 1:
        navigate('/lich-van-nien-lich-van-su?action=day')
        break
      case 2:
        navigate(linkPerpetualCalendar())
        break
      case 0:
      default:
        navigate('/')
        break
    }
  }

  return (
    <Paper
      className={styles.mobile_nav}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Trang chủ" icon={<HomeIcon />} />
        <BottomNavigationAction label="Ngày" icon={<CalendarTodayIcon />} />
        <BottomNavigationAction label="Tháng" icon={<CalendarMonthIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default MobileNavi
