/**
 * Theme setup.
 * 
 * @author Anders Jonsson
 * @author Emil Larsson
 */
import '@emotion/react'
import { Theme } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        /**
         * Name of Theme
         */
        name: string

        /**
         * Colors
         */
        colors: {
            text: string
            background: string
            primary: string
        }

        /**
         * xs .8rem, s 1.6rem, m 2.4rem, l 3.2rem, xl 4.8rem, xxl 8.8rem
         */
        spacing: {
            xs: string
            s: string
            m: string
            l: string
            xl: string
            xxl: string
        }
    }
}

const spacing = {
    xs: '.8rem',
    s: '1.6rem',
    m: '2.4rem',
    l: '3.2rem',
    xl: '4.8rem',
    xxl: '8.8rem',
}

const lightTheme: Theme = {
    name: 'light',
    colors: {
        text: '#232323',
        primary: '#85b6e4',
        background: '#F8F8FF'
    },
    spacing
}

const darkTheme: Theme = {
    name: 'dark',
    colors: {
        text: '#efefef',
        primary: '#113d66',
        background: '#1f1f1f'
    },
    spacing
}

export { lightTheme, darkTheme }