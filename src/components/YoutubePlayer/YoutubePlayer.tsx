/**
 * Lazy-loaded youtube-player component.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { videoPlayer } from './YoutubePlayer.css'

/**
 * Declare type for size-prop.
 *
 */
export type VideoSize = 's' | 'm' | 'l' | 'xl' | 'full' | 'responsive'

/**
 * Declare interface for youtube options.
 *
 */
export interface YoutubeOptions {
  autoplay?: boolean
  show_controls?: boolean
  loop_video?: boolean
  related?: boolean
  seconds?: number
  allow_fullscreen?: boolean
}

/**
 * Declare props types.
 *
 */
type Props = {
  youtube_id: string
  size?: VideoSize
  options?: YoutubeOptions
}

/**
 * Lazyloaded youtube-player.
 *
 * @returns {JSX} - Container with youtube-video in iframe.
 */
const YoutubePlayer = ({ youtube_id, size = 'm',  options }: Props) => {
  const [url, setUrl] = useState<string>('')
  const { targetRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>()

  /**
   * When youtube_id or options change, generate a new url for the iframe.
   *
   */
  useEffect(() => {
    if (youtube_id) {
      // Set up options object with default values to let client only adjust some of the options and leave the rest as default.
      const youtubeOptions = {
        autoplay: (options?.autoplay === false) || (options?.autoplay === undefined) ? '0' : '1',
        show_controls: (options?.show_controls === false) || (options?.show_controls === undefined) ? '0' : '1',
        loop_video: (options?.loop_video === false) || (options?.loop_video === undefined) ? '0' : '1',
        related: (options?.related === false) || (options?.related === undefined) ? '0' : '1',
        seconds: options?.seconds || 0
      }
      /**
       * Generate url based on options and youtube_id.
       *
       * @returns {string} - Youtube video-url.
       */
      const createUrl = (): string => {
        const params = new URLSearchParams()
        /**
         * Set mute if autoplay is enabled to make it work.
         * [Docs] {@link https://developer.chrome.com/blog/autoplay/}
         */
        if (options?.autoplay === true) {
          params.append('mute', '1')
        }
        /**
         * Add the 'playlist' parameter with the same youtube video-id if looping is enabled.
         * [Docs] {@link https://developers.google.com/youtube/player_parameters#loop}
         */
        if (options?.loop_video === true) {
          params.append('playlist', youtube_id)
        }

        params.append('autoplay', youtubeOptions.autoplay)
        params.append('loop', youtubeOptions.loop_video)
        params.append('controls', youtubeOptions.show_controls)
        params.append('rel', youtubeOptions.related)
        params.append('start', youtubeOptions.seconds.toString())
  
        return `https://www.youtube.com/embed/${youtube_id}?${params}`
      }

      setUrl(createUrl())
    }
  }, [youtube_id, options])

  return (
    <div ref={targetRef} css={() => videoPlayer(size)}>
      { isIntersecting && (
        <iframe
          title='video-frame'
          src={url}
          allowFullScreen={options?.allow_fullscreen !== undefined ? options.allow_fullscreen : true}>
        </iframe>
      )}
    </div>
  )
}

export default YoutubePlayer
