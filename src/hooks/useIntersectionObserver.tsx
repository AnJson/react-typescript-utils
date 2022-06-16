/**
 * Hook used to target element with Intersection Observer API.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */
import { useState, useEffect, useRef } from 'react'

/**
 * The interface for the Intersection Observer option-object.
 *
 */
 export interface intersectionObserverOptions {
  root?: HTMLElement | null
  rootMargin?: string
  threshold?: number
}

/**
 * Custom hook to use browser api Intersection Observer.
 *
 * @param {object} options - Options-object for the Intersection Observer.
 * @returns {object} - Ref for target element and isIntersecting-state.
 */
const useIntersectionObserver = (options?: intersectionObserverOptions) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)
  const targetRef = useRef<HTMLElement | null>(null)

  /**
   * Callback-function checking if element is intersecting.
   *
   * @param entries - List of IntersectionObserverEntry-objects.
   * @param observer - The observer.
   */
  const intersectionHandler = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)

        observer.unobserve(entry.target)
      }
    })
  }

  /**
   * Initialize the observer for selected target.
   * Unsubscribes and sets sets new target when targetRef or options changes.
   *
   */
  useEffect(() => {
    const intersectionOptions = {
      root: options?.root || null,
      rootMargin: options?.rootMargin || '0px',
      threshold: options?.threshold || 0
    }

    const observer: IntersectionObserver = new IntersectionObserver(intersectionHandler, intersectionOptions)
    const target: HTMLElement | null = targetRef.current

    if (target) {
      observer.observe(target)
    }

    /**
     * Return useEffect-cleanUp to unobserve target.
     * [useEffect clean-up documentation]{@link https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup}
     */
    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [targetRef, options])

  return {
    targetRef,
    isIntersecting
  }
}

export default useIntersectionObserver
