/**
 * Styles for header component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import {css, Theme} from '@emotion/react'
import {medium} from '../../framework/mediaqueries'

export const headerWrapper = (theme: Theme) => css`
	display: flex;
	justify-content: space-between;
	background-color: ${theme.colors.primary};
	padding: ${theme.spacing.s};

	h1 {
	  margin-bottom: 0;
    font-size: 4rem;
	}

  button {
    border: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    cursor: pointer;
  }

	${medium} {
	  padding: ${theme.spacing.m};
	}
`
