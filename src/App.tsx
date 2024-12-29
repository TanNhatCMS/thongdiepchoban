import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Head from './components/Head';
import NoPage from './pages/404';
import Home from './pages/home';
import January from './pages/january';
import February from './pages/february';
import March from './pages/march';

function App() {
  return (
      <BrowserRouter>
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
                <February />
              </>
            )}
          />
          <Route
            path="/thang-5"
            element={(
              <>
                <Head title="Thông điệp tháng 5" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-6"
            element={(
              <>
                <Head title="Thông điệp tháng 6" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-7"
            element={(
              <>
                <Head title="Thông điệp tháng 7" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-8"
            element={(
              <>
                <Head title="Thông điệp tháng 8" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-9"
            element={(
              <>
                <Head title="Thông điệp tháng 9" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-10"
            element={(
              <>
                <Head title="Thông điệp tháng 10" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-11"
            element={(
              <>
                <Head title="Thông điệp tháng 11" />
                <February />
              </>
            )}
          />
          <Route
            path="/thang-12"
            element={(
              <>
                <Head title="Thông điệp tháng 12" />
                <February />
              </>
            )}
          />
          <Route path="/index.html" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
