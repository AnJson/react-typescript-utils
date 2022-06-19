/**
 * Hook used to target element with Intersection Observer API.
 *
 * @author Anders Jonsson
 * @version 1.1.0
 */
import { useState, useEffect, useRef } from 'react'

/**
 * The interface for the Intersection Observer API option-object.
 *
 */
interface IntersectionObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

/**
 * The interface for the Intersection Observer API option-object.
 *
 */
interface HookOptions extends IntersectionObserverOptions {
  observe_once?: boolean
}

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @param {object} options - Options-object for the Intersection Observer.
 * @returns {object} - Ref for target element and isIntersecting-state.
 */
const useIntersectionObserver = <T extends HTMLElement>(options?: HookOptions) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const targetRef = useRef<T>(null)

  /**
   * Initialize the observer for selected target.
   * Unsubscribes and sets sets new target when targetRef or options changes.
   *
   */
  useEffect(() => {
    const target: T | null = targetRef.current

    if (target) {
      // Set up options object with default values for Intersection Observer API.
      const intersectionOptions = {
        root: options?.root || null,
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0
      }

      /**
       * Callback-function checking if element is intersecting.
       *
       * @param entries - List of IntersectionObserverEntry-objects.
       * @param observer - The observer.
       */
      const intersectionHandler = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && (entry.intersectionRatio > intersectionOptions.threshold)) {
            // Update state when entering view.
            setIsIntersecting(true)
  
            // Unobserve if options set to intersect once.
            const optionsSetToOnce = options?.observe_once === undefined ? true : options.observe_once
            if (optionsSetToOnce) {
              observer.unobserve(entry.target)
            }
          } else if (!entry.isIntersecting) {
            // Update state when leaving view.
            setIsIntersecting(false)
          }
        })
      }
  
      const observer: IntersectionObserver = new IntersectionObserver(intersectionHandler, intersectionOptions)
      observer.observe(target)
  
      /**
       * Return useEffect-cleanUp to unobserve target.
       * [useEffect clean-up documentation]{@link https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup}
       */
      return () => {
        observer.unobserve(target)
      }
    }
  }, [targetRef, options])

  // Return ref and state from hook.
  return {
    targetRef,
    isIntersecting
  }
}

export default useIntersectionObserver
 