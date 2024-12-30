import React from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logoITC from  '../../assets/images/logo-svg-ITC.svg'

const NaviBar: React.FC = () => {
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
              className="d-inline-block align-top"
            />{' '}
               ITC Vươn Tầm Cao Mới
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
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
                <Nav.Link href="/lich-van-nien-lich-van-su">
                  Lịch vạn niên - Lịch vạn sự{' '}
                </Nav.Link>
                <NavDropdown
                  title="Thông điệp 12 tháng"
                  id="offcanvasNavbarDropdown-expand-sm"
                >
                  {Array.from({ length: 12 }, (_, index) => (
                    <>
                      <NavDropdown.Item href={`/thang-${index + 1}`}>
                        Thông điệp tháng {index + 1}
                      </NavDropdown.Item>
                      {index < 11 && <NavDropdown.Divider />}
                    </>
                  ))}
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
