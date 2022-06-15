/**
 * Global styles.
 * 
 * @author Anders Jonsson
 * @author Emil Larsson
 * @version 1.0.0
 */
import { Global, css, Theme } from '@emotion/react'
import { medium, large } from './mediaqueries'

const resetCSS = css`
	/* http://meyerweb.com/eric/tools/css/reset/ 
	v2.0 | 20110126
	License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`

const headings = css`
  h1 {
    font-size: 2.8rem;
    line-height: 3.2rem;

    ${medium}{
      font-size: 4.8rem;
      line-height: 5.6rem;
    }
  }

  h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;

    ${medium}{
        font-size: 3.4rem;
        line-height: 4.8rem;
      }
  }

  h3 {
    font-size: 2.0rem;
    line-height: 3.2rem;

    ${medium}{
        font-size: 2.8rem;
        line-height: 3.2rem;
    }
  }

  h4 {
    font-size: 1.8rem;
    line-height: 3.2rem;

    ${medium}{
      font-size: 2.4rem;
    }
  }

  h5 {
    font-size: 1.8rem;
    line-height: 3.2rem;

    ${medium}{
      font-size: 2rem;      
    }
  }

  h6 {
    font-size: 1.6rem;
    line-height: 2.4rem;

    ${medium}{
      font-size: 1.8rem;      
    }
  }

  h1, h2 {
    margin-bottom: 1.6rem;
  }
  h3, h4, h5, h6 {
    margin-bottom: .8rem;
  }

  p {
    padding-bottom: .8rem;
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
`

const globalStyles = (theme: Theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');

  ${resetCSS}

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 50%;
  }

  body {
    font-size: 1.6rem;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text}; 
  }

  ${headings}

  /** Media-queries */
  ${medium} {
    html {
      font-size: 56.25%;
    }
  }

  ${large} {
    html {
      font-size: 62.5%;
    }
  }
`

/**
 * Renders Emotions Global-component to apply global styles.
 *
 * @returns {JSX.Element} - Emotions Global-component.
 */
export const GlobalStyles : () => JSX.Element = () => <Global
    styles={(theme: Theme) => globalStyles(theme)}
/>
