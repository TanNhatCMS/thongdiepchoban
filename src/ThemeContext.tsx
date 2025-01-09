import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isAnimationEnabled: boolean;
  toggleAnimation: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  const [isAnimationEnabled, setIsAnimationEnabled] = useState<boolean>(() => {
    const savedAnimation = localStorage.getItem('isAnimationEnabled');
    return savedAnimation !== 'false';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleAnimation = () => {
    setIsAnimationEnabled((prev) => {
      const newAnimationState = !prev;
      localStorage.setItem('isAnimationEnabled', String(newAnimationState));
      return newAnimationState;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('isAnimationEnabled', String(isAnimationEnabled));
  }, [isAnimationEnabled]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAnimationEnabled, toggleAnimation }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
