//*  LIBRARY
import { nanoid } from 'nanoid';

//* KEYS
import { DEVICE_ID } from '../keys/localsorage';

//* CONFIGS
import configs from '../configs/configs';

//* REGEX
import { regexEmail } from '../regex';
import { TYPE_LOGIN } from '../constants';

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
export function validateInputLoginEmailOrUsername(email_or_username) {
  // Create assignment validatedValue value
  let validatedValue;

  // Check if the input is in email format
  if (regexEmail.test(email_or_username)) {
    // Valid email format
    validatedValue = TYPE_LOGIN.EMAIL;
  } else if (email_or_username.length >= 5) {
    // Valid username (length greater than or equal 5)
    validatedValue = TYPE_LOGIN.USERNAME;
  } else {
    // Invalid email or username, set it to empty string
    validatedValue = null;
  }

  return validatedValue;
}
