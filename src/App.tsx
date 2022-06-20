/**
 * The main component for the application.
 * 
 * @author Anders Jonsson
 * @version 1.0.0
 */
import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { lightTheme } from './framework/theme'
import { GlobalStyles } from './framework/GlobalStyles'
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer'
import { Header } from './components/ui/Header'

/**
 * The main component for the application.
 *
 * @returns {JSX.Element} - The application.
 */
const App = (): JSX.Element => {
  const [theme, setTheme] = useState(lightTheme)

  return (
    <ThemeProvider theme={ theme }>
      <Header
        setTheme={setTheme}
        theme={theme}
      />
      <GlobalStyles />
      <YoutubePlayer />
    </ThemeProvider>
  )
}

export default App
