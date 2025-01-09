import React from 'react'
import { useTheme } from '../../ThemeContext'
import AnimationShow from '../AnimationShow'
import MobileNavi from '../MobileNavi'

const Footer: React.FC = () => {
  const { isAnimationEnabled } = useTheme()
  return (
    <>
      {isAnimationEnabled && <AnimationShow />}
      <MobileNavi />
    </>
  )
}

export default Footer
