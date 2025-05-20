
import React, { useEffect, useRef, useState, useCallback } from 'react';

type ResizeCallback = (entry: ResizeObserverEntry) => void;

/**
 * Hook that observes and reports size changes to a DOM element
 * @param callback Function to call when element size changes
 * @returns Reference to attach to the element
 */
export function useResizeObserver<T extends HTMLElement>(
  callback: ResizeCallback
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Check if ResizeObserver is available in the browser
    if (typeof ResizeObserver === 'undefined') {
      console.warn('ResizeObserver is not supported in this browser');
      return;
    }

    const observer = new ResizeObserver((entries) => {
      // We only observe one element, so we can just use the first entry
      if (entries[0]) {
        callback(entries[0]);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return ref;
}

/**
 * Hook that returns the current width and height of a DOM element
 * @returns [ref, dimensions] - Ref to attach to element and current dimensions
 */
export function useElementSize<T extends HTMLElement>() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const updateDimensions = useCallback((entry: ResizeObserverEntry) => {
    // Check if contentBoxSize is available and is an array (standard) or not (Safari)
    if (entry.contentBoxSize && Array.isArray(entry.contentBoxSize)) {
      const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
      setDimensions({ width, height });
    } else {
      // For browsers that don't support contentBoxSize as an array or older browsers
      const { width, height } = entry.contentRect;
      setDimensions({ width, height });
    }
  }, []);

  const ref = useResizeObserver<T>(updateDimensions);

  return [ref, dimensions] as const;
}
