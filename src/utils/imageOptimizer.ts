
/**
 * Image optimization utility
 * Helps with lazy loading and optimizing images for performance
 */

// Check if the browser supports Intersection Observer
const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

/**
 * Helper to lazy load images
 */
export const setupImageLazyLoading = () => {
  if (!hasIntersectionObserver) return;

  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  images.forEach(image => {
    imageObserver.observe(image);
  });
};

/**
 * Generate responsive image srcset
 */
export const generateSrcSet = (basePath: string, widths: number[] = [400, 800, 1200, 1600]) => {
  const extension = basePath.split('.').pop();
  const base = basePath.replace(`.${extension}`, '');
  
  return widths
    .map(width => `${base}-${width}w.${extension} ${width}w`)
    .join(', ');
};

/**
 * Apply blur-up technique for progressive image loading
 */
export const applyBlurUpTechnique = (imageId: string, placeholderSrc: string, finalSrc: string) => {
  const img = document.getElementById(imageId) as HTMLImageElement | null;
  if (!img) return;
  
  // Set initial placeholder
  img.src = placeholderSrc;
  img.style.filter = 'blur(20px)';
  img.style.transition = 'filter 0.3s ease-out';
  
  // Load the final image
  const finalImage = new Image();
  finalImage.onload = () => {
    img.src = finalSrc;
    img.style.filter = 'blur(0)';
  };
  finalImage.src = finalSrc;
};
