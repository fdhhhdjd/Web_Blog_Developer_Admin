//*  LIBRARY
import { nanoid } from 'nanoid';

//* KEYS
import { DEVICE_ID } from '../keys/localsorage';

//* CONFIGS
import configs from '../configs/configs';

// Configs Destructuring object
const {
  app: { random_nano_id },
} = configs;

// Function to generate a random number within a specified range (inclusive).
export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Random device id and save localsorage
export function getDeviceId() {
  let result = localStorage.getItem(DEVICE_ID);
  if (result) {
    return result;
  } else {
    result = nanoid(random_nano_id);
    localStorage.setItem(DEVICE_ID, result);
  }
}
