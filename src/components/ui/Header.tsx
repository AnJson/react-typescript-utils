/**
 * Header component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react'
import { darkTheme, lightTheme } from '../../framework/theme'
import { headerWrapper } from './Header.css'

/**
 * Declare types for components props.
 *
 */
type Props = {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

/**
 * 
 * @param {Theme} theme - Emotion-theme.
 * @param {React.Dispatch<React.SetStateAction<Theme>>} setTheme - Emotion-theme.
 * @returns 
 */
const Header = ({ theme, setTheme }: Props) => {
  return (
    <header css={(theme: Theme) => headerWrapper(theme)}>
        <h1>React/Typescript Utils</h1>
        <button
          onClick={() => {
              if (theme.name === 'light') {
                  setTheme(darkTheme)
              } else {
                  setTheme(lightTheme)
              }
          }}
        >
          Change theme
        </button>
    </header>
  )
}

export {Header}