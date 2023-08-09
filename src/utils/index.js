//* API
import ProductArr from '@/static/json/product.json';

//* CONSTANTS
import { ROUND } from '@/commons/constants';

//* CONFIGS
import { REGEX_IS_STRING_PARAM } from '../commons';
import { saveToLocalStorage } from './localstorage';

// Round a number to 3 decimal places
export const rouserNumber = (number) => {
  // Returns the number rounded to 3 decimal places.
  return number.toFixed(ROUND.NUMBER);
};

// Check if a product with the given productId exists in the cart
export const checkExistingProduct = (cart, productId) => {
  // Finds and returns the product with the given productId in the cart, if it exists. Otherwise, returns undefined.
  return cart.find((product) => product.id === productId);
};

// Search for a product with the given productId in the nested array 'ProductArr'
export const flatArrayAndGetProductFlowId = (productId) => {
  // Searches the nested array 'ProductArr' and returns the product with the given productId, if found. Otherwise, returns undefined.
  return ProductArr.flat().find((product) => product.id === productId);
};

// Delete the product with the given productId from the cart
export const deleteOneId = (cart, productId) => {
  // Returns a new cart array with the product removed (filtered out) based on the given productId.
  return cart.filter((product) => product.id !== productId);
};

// Calculate the total price of all items in the cart
export const calculationTotalCart = (cart) => {
  return cart.reduce((total, product) => {
    // If there's a 'discounted_price', use it; otherwise, use 'original_price'.
    const price = product.discounted_price || product.original_price;

    // Calculate the total price by summing the price of each product multiplied by its quantity.

    const result = total + price * product.quantity;

    // Save LocalStorage
    saveToLocalStorage('total', result);

    // Return result
    return result;
  }, 0);
};

// Calculate the total cost (without discount) of all items in the cart
export const calculationTotalCostCart = (cart) => {
  return cart.reduce((total, product) => {
    // Always use 'original_price' for cost calculation.
    const price = product.original_price;

    // Calculate the total cost by summing the cost of each product (original price) multiplied by its quantity.
    const result = total + price * product.quantity;

    // Save LocalStorage
    saveToLocalStorage('cost', result);

    // Return result
    return result;
  }, 0);
};
// Function to generate a random number within a specified range (inclusive).
// It takes two parameters: 'min' and 'max', which represent the lower and upper bounds of the range, respectively.
// The function uses the Math.random() method, which returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// To get a random number within the specified range, it multiplies the random value by the difference between 'max' and 'min',
// and then adds 'min' to the result. This effectively scales and shifts the random value to the desired range.
// The result is a random number inclusively between 'min' and 'max', meaning it can be equal to 'min' or 'max' itself.
export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Function to generate a URI from a given template string and data object.
// The function takes two parameters: 'template' (the URI template string) and 'data' (an object containing key-value pairs).
// Inside the 'template' string, placeholders are represented as '${variableName}'.
// The function uses a regular expression (REGEX_IS_STRING_PARAM) to match the placeholders in the 'template' string.
// It then replaces each placeholder with the corresponding value from the 'data' object using the 'replace' method.
// The second argument to the 'replace' method is a callback function that takes the matched substring and the key (variableName) as arguments.
// The callback function uses the 'key' to access the corresponding value from the 'data' object and replaces the placeholder with that value.
// The function returns the generated URI string with all placeholders replaced by their corresponding values from the 'data' object.
export const getURIFromTemplate = (template, data) => {
  return template.replace(REGEX_IS_STRING_PARAM, (_, key) => data[key]);
};

// Define the getImage function that takes a pathImage parameter
export const getImage = (pathImage) => {
  // Create a new URL using the template path and import.meta.url
  return new URL(`/src/assets/${pathImage}`, import.meta.url);
};
