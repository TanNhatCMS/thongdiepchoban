import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios'

const PerpetualCalendar: React.FC = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get("date");
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [box1Content, setBox1Content] = useState<string>('')
  const [box2Content, setBox2Content] = useState<string>('')
  const [box3Content, setBox3Content] = useState<string>('')
  const fixURL = (url: string) => {
    return url.replaceAll('/pages/lich-van-nien-lich-van-su/', '/lich-van-nien-lich-van-su/');
  }

  const addEvent = (text: string) => {
    const baseDate = new Date('2001-04-27'); // Ngày thành lập là 27/04/2001

    // Biểu thức chính quy để lấy năm từ href của thẻ <a>, bao gồm trường hợp class có thể có hoặc không
    const regex = /<a href="\/lich-van-nien-lich-van-su\/\?date=27-4-(\d+)"( class='[^']*')?><span>27<\/span><span>(\d+)<\/span>(<span>(.*?)<\/span>)?<\/a>/g;

    // Thay thế tất cả các thẻ <a> khớp với biểu thức chính quy và chèn thông tin kỷ niệm
    const modifiedText = text.replace(regex, (_match, year, className, spanValue, specialEvent, eventText) => {
      if (year.length  < 4) {
        return _match; // Giữ nguyên thẻ <a> nếu số năm kỷ niệm nhỏ hơn 4
      }
      const anniversaryYear = parseInt(year, 10) - baseDate.getFullYear(); // Tính số năm kỷ niệm từ năm trong href

      if (anniversaryYear < 0) {
        return _match; // Giữ nguyên thẻ <a> nếu số năm kỷ niệm nhỏ hơn 0
      }
      // Xử lý trường hợp đặc biệt năm 2001
      if (year === '2001') {
        return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm năm thành lập trường ITC</span></a>`;
      }

      // Nếu thẻ chứa sự kiện đặc biệt (bất kỳ giá trị nào thay vì số)
      if (specialEvent && eventText) {
        return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm ${anniversaryYear} năm thành lập trường ITC  <br> ${eventText}</span></a>`;
      }

      // Thay thế thẻ <a> và chèn thông tin kỷ niệm cho các năm khác
      return `<a href="/lich-van-nien-lich-van-su/?date=27-4-${year}" class="hd${className && className.includes('sunday') ? ' sunday' : ''}"><span>27</span><span>${spanValue}</span><span>Kỷ niệm ${anniversaryYear} năm thành lập trường ITC</span></a>`;
    });

    console.log(modifiedText); // Log kết quả để kiểm tra
    return modifiedText;
  };





  const fetchData = async () => {
    const day = date ? date : new Date().toISOString().slice(0, 10)
    const payload = {
      method: 'DetailDate',
      id: 1,
      params: {
        routin: 'LichvansuApi',
        date: day,
      },
    }

    setLoading(true)
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
      setBox1Content(fixURL(response.data?.result?.box1) || '')
      setBox2Content(addEvent(fixURL(response.data?.result?.box2)) || '')
      setBox3Content(fixURL(response.data?.result?.box3) || '')
      setResult(response.data)
      console.log(response.data?.result?.box3 || '')
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {result && (
        <>
          <div className="container row pt pb bg-body">
            <div
              className="col col6"
              id="box1"
              dangerouslySetInnerHTML={{ __html: box1Content }}
            />
            <div className="col col6">
              <div
                className="calendarblock boxpdl"
                id="box2"
                dangerouslySetInnerHTML={{ __html: box2Content }}
              ></div>
            </div>
          </div>
          <div className="container row  pb bg-body">
            <div className='col' id='box3'
                 dangerouslySetInnerHTML={{ __html: box3Content }}
            />
          </div>
        </>
      )}
    </>
  )
}
export default PerpetualCalendar
