import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import DateForm from '../DateForm'
import Spinner from '../Spinner'

const PerpetualCalendar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const date = queryParams.get('date') || new Date().toISOString().slice(0, 10) // Mặc định ngày hiện tại nếu không có ngày

  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState({
    box1: '',
    box2: '',
    box3: '',
  })

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

      const box1 = fixURL(response.data?.result?.box1) || ''
      const box2 = fixURL(addEvent(response.data?.result?.box2)) || ''
      const box3 = fixURL(response.data?.result?.box3) || ''

      setContent({
        box1,
        box2,
        box3,
      })
      setResult(response.data)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [date])

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
    <div>
      {result && (
        <>
          <DateForm />
          <div className="container row pt pb bg-body">
            <div
              className="col col6"
              id="box1"
              dangerouslySetInnerHTML={{ __html: content.box1 }}
            />
            <div className="col col6">
              <div
                className="calendarblock boxpdl"
                id="box2"
                dangerouslySetInnerHTML={{ __html: content.box2 }}
              />
            </div>
          </div>
          <div className="container row pb bg-body">
            <div
              className="col"
              id="box3"
              dangerouslySetInnerHTML={{ __html: content.box3 }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default PerpetualCalendar
