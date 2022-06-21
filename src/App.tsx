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
import FlexGrid from './components/ui/FlexGrid'

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
      <main>
        <FlexGrid options={{ gap: theme.spacing.m }}>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
          <div style={{ width: '300px', height: '800px', backgroundColor: '#ccc' }}></div>
        </FlexGrid>
        <div style={{ width: '300px' }}>
          <YoutubePlayer youtube_id='idyT0KBAKy8' size='responsive' options={{ autoplay: true, show_controls: true }} />
        </div>
        <YoutubePlayer youtube_id='idyT0KBAKy8' size='responsive' options={{ autoplay: true, show_controls: true }} />
        <YoutubePlayer youtube_id='idyT0KBAKy8' size='full' options={{ autoplay: true, show_controls: true }} />
      </main>
    </ThemeProvider>
  )
}

export default App
