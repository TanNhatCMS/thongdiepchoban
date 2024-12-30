import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom' // Import Link từ react-router-dom
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logoITC from '../../assets/images/logo-svg-ITC.svg'

const NaviBar: React.FC = () => {
  const location = useLocation()
  const [showOffcanvas, setShowOffcanvas] = useState(false)
  const isActive = (path: string) => location.pathname === path
  const linkPerpetualCalendar = () => {
    // nếu location có tháng
    const url = '/lich-van-nien-lich-van-su'
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
        const monthParameter = location.pathname.split('-')[1]
        search = `?date=1-${monthParameter}-2025`
        break
      }
      default:
        break
    }
    return {
      pathname: url,
      search: search,
      hash: '',
    }
  }

  const handleLinkClick = () => {
    setShowOffcanvas(false) // Đóng sidebar khi nhấp vào link
  }

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand>
            <img
              alt="ITC Vươn Tầm Cao Mới"
              src={logoITC}
              width="50"
              height="50"
              className="d-inline-block"
            />{' '}
            ITC Vươn Tầm Cao Mới
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-sm"
            onClick={() => setShowOffcanvas(!showOffcanvas)} // Toggle sidebar
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                ITC Vươn Tầm Cao Mới
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  as={Link}
                  to={linkPerpetualCalendar()}
                  className={
                    isActive('/lich-van-nien-lich-van-su') ? 'active' : ''
                  }
                  onClick={handleLinkClick} // Đóng sidebar khi nhấp vào link
                >
                  Lịch vạn niên - Lịch vạn sự
                </Nav.Link>
                <NavDropdown
                  title="Thông điệp 12 tháng"
                  id="offcanvasNavbarDropdown-expand-sm"
                >
                  {Array.from({ length: 12 }, (_, index) => {
                    const path = `/thang-${index + 1}`
                    return (
                      <>
                        <NavDropdown.Item
                          key={index}
                          as={Link}
                          to={path}
                          className={isActive(path) ? 'active' : ''}
                          onClick={handleLinkClick} // Đóng sidebar khi nhấp vào link
                        >
                          Thông điệp tháng {index + 1}
                        </NavDropdown.Item>
                        {index < 11 && <NavDropdown.Divider />}
                      </>
                    )
                  })}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NaviBar
