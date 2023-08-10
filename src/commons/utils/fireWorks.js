//* LIBRARY
import confetti from 'canvas-confetti';

//* UTILS
import { randomInRange } from './function';

//* CONFIGS
import { TIME } from '@/commons/constants';

// Function to run the fireworks animation
const runFireworks = () => {
  // Set the duration of the fireworks animation to 8 seconds
  const duration = TIME._8_SECOND;
  // Calculate the end time of the animation by adding the duration to the current time
  const animationEnd = Date.now() + duration;
  // Default configuration options for the confetti animation
  const defaults = { startVelocity: 70, spread: 500, ticks: 1000, zIndex: 999999 };

  // Set an interval to continuously generate confetti particles
  const interval = setInterval(function () {
    // Calculate the time left until the animation ends
    const timeLeft = animationEnd - Date.now();

    // If the animation time has elapsed, clear the interval to stop generating confetti
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    // Calculate the number of confetti particles to be generated based on the time left and duration
    let particleCount = 50 * (timeLeft / duration);

    // Generate confetti particles on the left side of the screen
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );

    // Generate confetti particles on the right side of the screen
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250); // The interval is set to 250 milliseconds (quarter of a second).
};

export default runFireworks;
