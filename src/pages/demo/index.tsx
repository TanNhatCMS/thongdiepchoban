import React, { useEffect, useState } from 'react'
import axios from 'axios'

//import './perpetualcalendar.css';

const Demo: React.FC = () => {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [box1Content, setBox1Content] = useState<string>('')
  const [box2Content, setBox2Content] = useState<string>('')
  const [box3Content, setBox3Content] = useState<string>('')
  const fetchData = async () => {
    const payload = {
      method: 'DetailDate',
      id: 1,
      params: {
        routin: 'LichvansuApi',
        date: '30-12-2024',
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
      setBox1Content(response.data?.result?.box1 || '')
      setBox2Content(response.data?.result?.box2 || '')
      setBox3Content(response.data?.result?.box3 || '')
      setResult(response.data)
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
    <div>
      {result && (
        <div>
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
        </div>
          )}
        </div>
      )
      }

      export default Demo
