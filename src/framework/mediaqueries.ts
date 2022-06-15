/**
 * Global styles.
 * 
 * @author Emil Larsson
 * @version 1.0.0
 */
export const viewportSmall = 420
export const viewportMedium = 768
export const viewportLarge = 1120

const mediaQueryMaxWidth = (width: number) => `@media (max-width: ${width}px)`
const mediaQueryMinWidth = (width: number) => `@media (min-width: ${width}px)`

export const small = mediaQueryMaxWidth(viewportSmall)
export const medium = mediaQueryMinWidth(viewportMedium)
export const large = mediaQueryMinWidth(viewportLarge)