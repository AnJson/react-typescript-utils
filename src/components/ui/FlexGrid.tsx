/**
 * Flexgrid component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import React from 'react'
import { wrapperStyle } from './FlexGrid.css'

/**
 * Interface for the options-object.
 */
export interface FlexOptions {
  flex_direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse' | 'inherit' | 'unset' | 'initial'
  flex_wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'unset' | 'initial'
  justify_content?: 'baseline' | 'center' | 'end' | 'first baseline' | 'flex-end' | 'flex-start' | 'last baseline' | 'left' | 'right' | 'safe' | 'space-around' | 'space-between' | 'space-evenly' | 'unsafe' | 'start' | 'stretch' | 'inherit' | 'unset' | 'initial'
  align_items?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch' | 'inherit' | 'unset' | 'initial'
  gap?: string
}

/**
 * Define prop-types.
 *
 */
type Props = {
  children?: JSX.Element | JSX.Element[]
  options?: FlexOptions
}

/**
 * Wrapper-component setting upp app flex-design.
 * 
 * @returns {JSX} - Wrapper-div with flexbox design.
 */
const FlexGrid = ({ children, options }: Props) => {
  // Populate options with default values to let client only add some options and leave the others to default.
  const optionObject = {
    flex_direction: options?.flex_direction || 'row',
    flex_wrap: options?.flex_wrap || 'wrap',
    justify_content: options?.justify_content || 'unset',
    align_items: options?.align_items || 'unset',
    gap: options?.gap || '0px'
  }

  return (
    <div css={() => wrapperStyle(optionObject)}>
      {children}
    </div>
  )
}

export default FlexGrid
