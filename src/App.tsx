import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Head from './components/Head';
import NoPage from './pages/404';
import Home from './pages/home';
import January from './pages/january';
import February from './pages/february';
import March from './pages/march';
import April from './pages/april'
import June from './pages/june';
import May from './pages/may';
import July from './pages/july';
import August from './pages/august';
import September from './pages/september';
import October from './pages/october';
import November from './pages/november';
import December from './pages/december';
import PerpetualCalendar from './pages/perpetualcalendar';
import Demo from './pages/demo';

function App() {
  return (
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Head title="Danh sách thông điệp cho bạn" />
                <Home />
              </>
            )}
          />
          <Route
            path="/404"
            element={(
              <>
                <Head title="404 | Page not found" />
                <NoPage />
              </>
            )}
          />
          <Route
            path="/thang-1"
            element={(
              <>
                <Head title="Thông điệp tháng 1" />
                <January />
              </>
            )}
          />
          <Route
            path="/thang-2"
            element={(
              <>
                <Head title="Thông điệp tháng 2" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-3"
            element={(
              <>
                <Head title="Thông điệp tháng 3" />
                <March />
              </>
            )}
          />
          <Route
            path="/thang-4"
            element={(
              <>
                <Head title="Thông điệp tháng 4" />
                <April />
              </>
            )}
          />
          <Route
            path="/thang-5"
            element={(
              <>
                <Head title="Thông điệp tháng 5" />
                <May />
              </>
            )}
          />
          <Route
            path="/thang-6"
            element={(
              <>
                <Head title="Thông điệp tháng 6" />
                <June />
              </>
            )}
          />
          <Route
            path="/thang-7"
            element={(
              <>
                <Head title="Thông điệp tháng 7" />
                <July />
              </>
            )}
          />
          <Route
            path="/thang-8"
            element={(
              <>
                <Head title="Thông điệp tháng 8" />
                <August />
              </>
            )}
          />
          <Route
            path="/thang-9"
            element={(
              <>
                <Head title="Thông điệp tháng 9" />
                <September />
              </>
            )}
          />
          <Route
            path="/thang-10"
            element={(
              <>
                <Head title="Thông điệp tháng 10" />
                <October />
              </>
            )}
          />
          <Route
            path="/thang-11"
            element={(
              <>
                <Head title="Thông điệp tháng 11" />
                <November />
              </>
            )}
          />
          <Route
            path="/thang-12"
            element={(
              <>
                <Head title="Thông điệp tháng 12" />
                <December />
              </>
            )}
          />
          <Route
            path="/lich-van-nien-lich-van-su"
            element={(
              <>
                <Head title="Lịch vạn niên | Lịch vạn sự | Xem ngày tốt xấu - khởi công động thổ khai trương, xuất hành" />
                <PerpetualCalendar />
              </>
            )}
          />
          <Route
            path="/demo"
            element={(
              <>
                <Head title="Lịch vạn niên | Lịch vạn sự | Xem ngày tốt xấu - khởi công động thổ khai trương, xuất hành" />
                <Demo />
              </>
            )}
          />
          <Route path="/index.html" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
  )
}

export default App
