import React from 'react'
import { Container } from 'react-bootstrap'
import { Loader, Placeholder } from 'rsuite';

const LoadingPage: React.FC = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <Placeholder.Paragraph rows={8} />
      <Loader size="lg" backdrop center content="Đang tải..." />
    </Container>
  )
}

export default LoadingPage
