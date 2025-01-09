import React from 'react';
import InstallPrompt from '../InstallPrompt';
import { useTheme } from '../../ThemeContext';
import AnimationShow from '../AnimationShow'

const Footer : React.FC = () => {
 const { isAnimationEnabled } = useTheme();
  return (
    <>
      <InstallPrompt />
      {isAnimationEnabled && <AnimationShow />}

    </>
  );
}

export default Footer
