//* LIBRARY
import { useToast } from 'vue-toastification';

//* CONSTANTS
import { TIME, TOAST } from '@/commons/constants';

let isToastValue;

// Option toast Vue
const option = {
  // Your custom options for warning toast
  duration: TIME._3_SECOND, // Duration in milliseconds for how long the toast should be visible (5 seconds in this example).
  closeOnClick: true, // Close the toast when clicking on it (true in this example).
};

// Update Option Based On Screen Size
const updateOptionBasedOnScreenSize = () => {
  if (window.innerWidth < 768) {
    // For smaller screens (e.g., mobile phones), adjust the options accordingly
    option.position = TOAST.BOTTOM_CENTER; // Position of the toast on the screen mobile
    option.theme = TOAST.THEME.LIGHT; // Custom theme for the toast (dark in this example).
  } else {
    // For larger screens, revert to the original options
    option.position = TOAST.TOP_RIGHT; // Position of the toast on the screen (top-right in this example).
    option.theme = TOAST.THEME.DARK; // Custom theme for the toast  (dark in this example).
  }
};

// Call the function initially to set the initial options based on the current screen size
updateOptionBasedOnScreenSize();

// Add an event listener for the 'resize' event to update the options when the screen size changes
window.addEventListener('resize', () => {
  updateOptionBasedOnScreenSize();
});

// The 'toast' object is obtained from the 'useToast' hook, which is presumably provided by a library (e.g., a Toast component).
const toast = useToast();

// Function to show a success toast with a given message.
// It calls the 'toast.success' method, passing the 'message' as the first argument, and an empty object as the second argument.
// The second argument is for custom options, but in this case, no additional options are provided.
export const showSuccessToast = (message) => {
  toast.success(message, option);
};

// Function to show a warning toast with a given message.
// It calls the 'toast.warning' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the warning toast by providing the necessary options in the object.
export const showWarningToast = (message) => {
  toast.warning(message, option);
};

// Function to show an error toast with a given message.
// It calls the 'toast.error' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the error toast by providing the necessary options in the object.
export const showErrorToast = (message) => {
  if (!isToastValue) {
    toast.error(message, {
      ...option,
      onClose: () => {
        isToastValue = false;
      },
    });

    isToastValue = true;
  }
};

// Function to show an info toast with a given message.
// It calls the 'toast.info' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the info toast by providing the necessary options in the object.
export const showInfoToast = (message) => {
  if (!isToastValue) {
    toast.info(message, {
      ...option,
      onClose: () => {
        isToastValue = false;
      },
    });

    isToastValue = true;
  }
};
