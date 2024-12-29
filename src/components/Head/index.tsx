import type React from 'react';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Head: React.FC<{title: any}> = ({ title }) => {
  const location = useLocation()

  useEffect(() => {
    document.title = title
  }, [location, title])

  return null
}

export default Head
