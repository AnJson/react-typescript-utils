/**
 * Styles for flexgrid component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FlexOptions } from './FlexGrid'

export const wrapperStyle = (flexOptions: FlexOptions) => css`
display: flex;
flex-direction: ${flexOptions.flex_direction};
align-items: ${flexOptions.align_items};
flex-wrap: ${flexOptions.flex_wrap};
gap: ${flexOptions.gap};
`
