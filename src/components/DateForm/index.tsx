import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import 'rsuite/DatePicker/styles/index.css'
import { DatePicker } from 'rsuite'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';

const DateForm: React.FC = () => {
  dayjs.extend(customParseFormat);
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search);
  const date = queryParams.get('date') || new Date().toISOString().slice(0, 10);
  const initialDate = dayjs(date, 'D-M-YYYY').toDate()
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate)

  const predefinedRanges = [
    {
      label: 'yesterday',
      value: addDays(new Date(), -1),
      placement: 'left' as const,
    },
    {
      label: 'today',
      value: new Date(),
      placement: 'left' as const,
    },
    {
      label: 'Ngày trước',
      closeOverlay: false,
      value: (date: number | Date) => {
        return subDays(date, 1)
      },
    },
  ]

  const handleDateChange = (date: Date | null) => {
    if (date && !dayjs(date).isSame(dayjs(selectedDate))) {
      setSelectedDate(date)
      const formattedDate = dayjs(date).format('D-M-YYYY')
      navigate(`/lich-van-nien-lich-van-su/?date=${formattedDate}`)
    }
  }
  return (
    <Container className="mt-5">
      <Form className="d-flex align-items-center">
        <Form.Group controlId="formDate" className="me-3">
          <DatePicker
            placeholder="Chọn ngày"
            format="d-M-yyyy"
            defaultValue={initialDate}
            onChange={handleDateChange}
            ranges={predefinedRanges}
            onShortcutClick={(shortcut) => {
              console.log(shortcut);
            }}
          />
        </Form.Group>
      </Form>
    </Container>
  )
}

export default DateForm
