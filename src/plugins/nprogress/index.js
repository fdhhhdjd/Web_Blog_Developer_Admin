//* LIBRARY
import NProgress from 'nprogress';

//* CSS
import 'nprogress/nprogress.css';

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

export default NProgress;
