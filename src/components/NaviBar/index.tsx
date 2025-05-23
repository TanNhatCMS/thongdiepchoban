import React, { useState } from 'react';
import { Toggle } from 'rsuite';
import { Link, useLocation } from 'react-router-dom' // Import Link từ react-router-dom
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logoITC from '../../assets/images/logo-svg-ITC.svg'
import GearIcon from '@rsuite/icons/Gear';
import { useTheme } from '../../ThemeContext.tsx';

const NaviBar: React.FC = () => {
  const { isAnimationEnabled , toggleAnimation  } = useTheme();
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
        const currentYear = new Date().getFullYear();
        const monthParameter = location.pathname.split('-')[1]
        search = `?date=1-${monthParameter}-${currentYear}`
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
            show={showOffcanvas} // Ensure the offcanvas is controlled by the state
            onHide={() => setShowOffcanvas(false)} // Ensure offcanvas hides when clicked outside
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
                  key="list-month-messages"
                >
                  {Array.from({ length: 12 }, (_, index) => {
                    const path = `/thang-${index + 1}`
                    return (
                      <React.Fragment key={index}>
                        {' '}
                        {/* Wrap in React.Fragment */}
                        <NavDropdown.Item
                          as={Link}
                          to={path}
                          className={isActive(path) ? 'active' : ''}
                          onClick={handleLinkClick} // Đóng sidebar khi nhấp vào link
                        >
                          Thông điệp tháng {index + 1}
                        </NavDropdown.Item>
                        {index < 11 && (
                          <NavDropdown.Divider key={`divider-${index}`} />
                        )}{' '}
                        {/* Add key to Divider */}
                      </React.Fragment>
                    )
                  })}
                </NavDropdown>
                <Toggle
                  checked={isAnimationEnabled}
                  checkedChildren={ <GearIcon spin />}
                  unCheckedChildren={ <GearIcon />}
                  onChange={toggleAnimation}
                ></Toggle>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}

export default NaviBar
