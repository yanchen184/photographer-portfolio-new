/**
 * Trapezoid and Animation Utilities
 * 梯形形狀和動畫預設集合
 */

// Trapezoid clip-path presets
export const TRAPEZOID_SHAPES = {
  // Right-leaning trapezoid (right side narrower)
  rightNarrow: 'polygon(0% 0%, 100% 5%, 95% 100%, 0% 95%)',
  rightNarrowAggressive: 'polygon(0% 0%, 100% 10%, 90% 100%, 0% 90%)',

  // Left-leaning trapezoid (left side narrower)
  leftNarrow: 'polygon(5% 0%, 100% 0%, 100% 95%, 0% 100%)',
  leftNarrowAggressive: 'polygon(10% 0%, 100% 0%, 100% 90%, 0% 100%)',

  // Balanced trapezoid (both sides)
  balanced: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
  balancedAggressive: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',

  // Slight trapezoid (subtle)
  subtle: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',

  // Diamond shape
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',

  // Parallelogram
  parallelogram: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',

  // Arrow shape
  arrow: 'polygon(0% 30%, 70% 30%, 70% 0%, 100% 50%, 70% 100%, 70% 70%, 0% 70%)'
};

// Animation timing presets
export const ANIMATION_DURATIONS = {
  fast: 300,      // 0.3s
  normal: 500,    // 0.5s
  slow: 800,      // 0.8s
  verySlow: 1000  // 1s
};

// Stagger delay multipliers (in milliseconds)
export const STAGGER_DELAYS = {
  none: 0,
  fast: 50,
  normal: 100,
  slow: 150,
  verySlow: 200
};

/**
 * Generate staggered animation delays for array of elements
 * @param {number} count - Number of elements
 * @param {string} type - 'fast' | 'normal' | 'slow' | 'verySlow'
 * @returns {array} Array of delay values
 */
export const generateStaggerDelays = (count, type = 'normal') => {
  const delay = STAGGER_DELAYS[type];
  return Array.from({ length: count }, (_, index) => `${index * delay}ms`);
};

/**
 * Gradient presets for photography theme
 */
export const GRADIENTS = {
  amber: 'from-amber-500 to-orange-500',
  sunset: 'from-orange-400 via-red-500 to-pink-500',
  warm: 'from-yellow-400 to-orange-600',
  cool: 'from-blue-500 to-cyan-500',
  vibrant: 'from-purple-500 to-pink-500',
  earth: 'from-amber-700 to-orange-600'
};

/**
 * Common animation state classes for scroll triggers
 */
export const ANIMATION_STATES = {
  // Hidden state
  hidden: 'opacity-0 translate-y-10',
  hiddenLeft: 'opacity-0 -translate-x-10',
  hiddenRight: 'opacity-0 translate-x-10',

  // Visible state
  visible: 'opacity-100 translate-y-0',
  visibleLeft: 'opacity-100 translate-x-0',
  visibleRight: 'opacity-100 translate-x-0',

  // Scale states
  hiddenScale: 'opacity-0 scale-95',
  visibleScale: 'opacity-100 scale-100',

  // Transition class
  transition: 'transition-all duration-1000 transform'
};

/**
 * Intersection Observer options presets
 */
export const OBSERVER_OPTIONS = {
  eager: {
    threshold: 0.01,      // Trigger as soon as element enters
    rootMargin: '50px'
  },
  normal: {
    threshold: 0.1,       // Trigger when 10% is visible
    rootMargin: '0px'
  },
  conservative: {
    threshold: 0.5,       // Trigger when 50% is visible
    rootMargin: '-50px'
  },
  lazy: {
    threshold: 0.95,      // Trigger when almost fully visible
    rootMargin: '-100px'
  }
};

/**
 * Utility function to generate animation classes
 * @param {boolean} isVisible - Whether element is visible
 * @param {object} states - Animation state configuration
 * @returns {string} Combined className string
 */
export const getAnimationClass = (isVisible, states = {}) => {
  const {
    hidden = ANIMATION_STATES.hidden,
    visible = ANIMATION_STATES.visible,
    transition = ANIMATION_STATES.transition,
    delay = ''
  } = states;

  return `${transition} ${delay} ${isVisible ? visible : hidden}`;
};

/**
 * Get trapezoid style object
 * @param {string} preset - Preset name from TRAPEZOID_SHAPES
 * @returns {object} Style object for React
 */
export const getTrapezoidStyle = (preset = 'balanced') => {
  return {
    clipPath: TRAPEZOID_SHAPES[preset] || TRAPEZOID_SHAPES.balanced
  };
};

/**
 * Photography color palette presets
 */
export const COLOR_PALETTES = {
  warm: {
    primary: 'amber',
    secondary: 'orange',
    accent: 'yellow',
    light: 'amber-50'
  },
  cool: {
    primary: 'blue',
    secondary: 'cyan',
    accent: 'sky',
    light: 'blue-50'
  },
  neutral: {
    primary: 'gray',
    secondary: 'slate',
    accent: 'stone',
    light: 'gray-50'
  }
};

/**
 * Common Tailwind class patterns for animations
 */
export const TAILWIND_PATTERNS = {
  // Hover effects
  hoverLift: 'hover:translate-y-1 hover:shadow-lg',
  hoverScale: 'hover:scale-105',
  hoverBrighten: 'hover:brightness-110',

  // Transitions
  smoothTransition: 'transition-all duration-300 ease-in-out',
  quickTransition: 'transition-all duration-150 ease-out',

  // Common combinations
  cardHover: 'transform transition-all duration-300 hover:scale-105 hover:shadow-xl',
  buttonHover: 'transform hover:scale-110 transition-all duration-300 hover:shadow-lg'
};

/**
 * Export all utilities as a single object
 */
export const AnimationUtils = {
  TRAPEZOID_SHAPES,
  ANIMATION_DURATIONS,
  STAGGER_DELAYS,
  GRADIENTS,
  ANIMATION_STATES,
  OBSERVER_OPTIONS,
  COLOR_PALETTES,
  TAILWIND_PATTERNS,
  generateStaggerDelays,
  getAnimationClass,
  getTrapezoidStyle
};

export default AnimationUtils;
