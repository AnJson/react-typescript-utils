/**
 * Lazy-loaded youtube component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import React from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { dummyStyles } from './YoutubePlayer.css'

/**
 * Lazyloaded youtube-player.
 *
 * @returns {JSX} - Container with youtube-video in iframe.
 */
const YoutubePlayer = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div ref={targetRef} css={() => dummyStyles()}>{isIntersecting ? 'YoutubePlayer' : 'Off screen'}</div>
  )
}

export default YoutubePlayer
