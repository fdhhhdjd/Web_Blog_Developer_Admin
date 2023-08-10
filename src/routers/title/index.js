//* COMMONS
import { DATA_TYPE, DEFAULT } from '@/commons';

//* ROUTER
import routers from '..';

// This code sets the document title based on the route's meta information.
// The 'router.beforeEach' function is a navigation guard provided by Vue Router,

// which allows us to perform actions before each route navigation.
routers.beforeEach((to, _, next) => {
  // Check if the 'title' meta information of the target route is of type 'string'.
  if (typeof to.meta.title === DATA_TYPE.STRING) {
    // If the 'title' meta information is of type 'string', set the document title to the provided title.
    document.title = to.meta.title;
  } else {
    // If the 'title' meta information is not of type 'string',
    // set the document title to a default title specified as 'TITLE.DEFAULT'.
    document.title = DEFAULT;
  }

  // Continue the navigation to the target route.
  next();
});
