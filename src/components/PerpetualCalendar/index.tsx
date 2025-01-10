import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DateForm from '../DateForm'
import Spinner from '../Spinner'
import { Box } from '@mui/material'
import img0 from '../../assets/images/bg/bg_0.png'
import img1 from '../../assets/images/bg/bg_1.png'
import img2 from '../../assets/images/bg/bg_2.png'
import img3 from '../../assets/images/bg/bg_3.png'
import img4 from '../../assets/images/bg/bg_4.png'
import img5 from '../../assets/images/bg/bg_5.png'
import img6 from '../../assets/images/bg/bg_6.png'
import img7 from '../../assets/images/bg/bg_7.png'
import img8 from '../../assets/images/bg/bg_8.png'
import img9 from '../../assets/images/bg/bg_9.png'
import img10 from '../../assets/images/bg/bg_10.png'
import img11 from '../../assets/images/bg/bg_11.png'
import img12 from '../../assets/images/bg/bg_12.png'
import img13 from '../../assets/images/bg/bg_13.png'
import img14 from '../../assets/images/bg/bg_14.png'
import img15 from '../../assets/images/bg/bg_15.png'
import img16 from '../../assets/images/bg/bg_16.png'
import img17 from '../../assets/images/bg/bg_17.png'

const PerpetualCalendar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const ref = React.useRef<HTMLDivElement>(null)
  const queryParams = new URLSearchParams(location.search)
  const date = queryParams.get('date') || new Date().toISOString().slice(0, 10) // Mặc định ngày hiện tại nếu không có ngày
  const action = queryParams.get('action') || 'all'
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState({
    box1: '',
    box2: '',
    box3: '',
  })

  const imagePaths = [
    img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17
  ]
  const [backgroundImage, setBackgroundImage] = useState<string>('')

  // Hàm để xử lý URL trong nội dung HTML
  const fixURL = useCallback((htmlString: string): string => {
    return htmlString
      .replaceAll(
        '/pages/lich-van-nien-lich-van-su/',
        '/lich-van-nien-lich-van-su/'
      )
      .replace(/href="([^"]+)"/g, (_match, p1) => {
        const sanitizedUrl = encodeURI(decodeURI(p1)) // Đảm bảo URL an toàn
        return `href="javascript:void(0)" data-link="${sanitizedUrl}"`
      })
  }, [])
  const addBG = useCallback((htmlString: string): string => {
    return htmlString.replaceAll(
      'class="calendarblock boxpdl"',
      `class="calendarblock boxpdl" style="position: relative;  background-image: url('${backgroundImage}'); background-size: cover;  background-position: center;"`
    )
  }, [backgroundImage])
  // Hàm để xử lý sự kiện kỷ niệm trong nội dung
  const addEvent = useCallback((text: string) => {
    const baseDate = new Date('2001-04-27') // Ngày thành lập là 27/04/2001

    const regex =
      /<a href="\/pages\/lich-van-nien-lich-van-su\/\?date=27-4-(\d+)"( class='[^']*')?><span>27<\/span><span>(\d+)<\/span>(<span>(.*?)<\/span>)?<\/a>/g

    return text.replace(
      regex,
      (_match, year, className, spanValue, specialEvent, eventText) => {
        if (year.length < 4) {
          return _match // Giữ nguyên thẻ <a> nếu số năm kỷ niệm nhỏ hơn 4
        }
        const anniversaryYear = parseInt(year, 10) - baseDate.getFullYear() // Tính số năm kỷ niệm từ năm trong href

        if (anniversaryYear < 0) {
          return _match // Giữ nguyên thẻ <a> nếu số năm kỷ niệm nhỏ hơn 0
        }

        // Xử lý trường hợp đặc biệt năm 2001
        if (year === '2001') {
          return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm năm thành lập trường ITC</span></a>`
        }

        // Nếu thẻ chứa sự kiện đặc biệt (bất kỳ giá trị nào thay vì số)
        if (specialEvent && eventText) {
          return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm ${anniversaryYear} năm thành lập trường ITC  <br> ${eventText}</span></a>`
        }

        // Thay thế thẻ <a> và chèn thông tin kỷ niệm cho các năm khác
        return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm ${anniversaryYear} năm thành lập trường ITC</span></a>`
      }
    )
  }, [])

  // Hàm fetch dữ liệu từ API
  const fetchData = async () => {
    const payload = {
      method: 'DetailDate',
      id: 1,
      params: {
        routin: 'LichvansuApi',
        date,
      },
    }
    setIsLoading(true)
    setError(null)
    try {
      const response = await axios.post(
        'https://xuanthulab.net/api/',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      switch (action) {
        case 'day':
          setContent({
            box1: fixURL(addBG(response.data?.result?.box1)) || '',
            box2: '',
            box3: '',
          })
          break
        case 'month':
          setContent({
            box1: '',
            box2: fixURL(addEvent(response.data?.result?.box2)) || '',
            box3: '',
          })
          break
        case 'all':
        default:
          setContent({
            box1: fixURL(addBG(response.data?.result?.box1)) || '',
            box2: fixURL(addEvent(response.data?.result?.box2)) || '',
            box3: fixURL(response.data?.result?.box3) || '',
          })
          break
      }
      setResult(response.data)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
    const randomIndex = Math.floor(Math.random() * imagePaths.length)
    setBackgroundImage(imagePaths[randomIndex])
    console.log(imagePaths[randomIndex])
  }, [location])

  useEffect(() => {
    const links = document.querySelectorAll('[data-link]')
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
        const url = link.getAttribute('data-link')
        if (url) navigate(url)
      })
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {}) // Cleanup sự kiện khi component bị unmount
      })
    }
  }, [content, navigate])

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      {result && (
        <Box sx={{ pb: 7 }} ref={ref}>
          <DateForm />
          <div className="container row pt pb bg-body">
            {content.box1 !== '' && (
              <div
                className="col col6"
                id="box1"
                style={{
                  textShadow: '3px 3px 5px rgba(255, 255, 255, 0.7)'
                }}
                dangerouslySetInnerHTML={{ __html: content.box1 }}
              />
            )}

            {content.box2 !== '' && (
              <div className="col col6">
                <div
                  className="calendarblock boxpdl"
                  id="box2"
                  dangerouslySetInnerHTML={{ __html: content.box2 }}
                />
              </div>
            )}
          </div>
          <div className="container row pb bg-body">
            {content.box3 !== '' && (
              <div
                className="col"
                id="box3"
                dangerouslySetInnerHTML={{ __html: content.box3 }}
              />
            )}
          </div>
          <div className="d-flex align-items-center justify-content-between mx-2 mt-1 placement-bottom-end" />
        </Box>
      )}
    </>
  )
}

export default PerpetualCalendar
