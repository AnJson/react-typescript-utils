/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VideoSize } from './YoutubePlayer'

export const videoPlayer = (size: VideoSize) => css`
  ${size === 's' &&
  `
    width: 30rem;
    height: 16.875rem;
  `
  }
  ${size === 'm' &&
  `
    width: 60rem;
  `
  }
  ${size === 'l' &&
  `
    width: 80rem;
  `
  }
  ${size === 'xl' &&
  `
    width: 102.4rem;
  `
  }
  ${size === 'full' &&
  `
    width: 100vw;
    height: 100vh;
  `
  }
  ${size === 'responsive' &&
  `
    width: 100%;
  `
  }
  aspect-ratio: 16 / 9;
  max-width: 100%;
  border: 0;
  border-radius:6px;

  iframe {
    width: 100%;
    height: 100%;
  }
`
