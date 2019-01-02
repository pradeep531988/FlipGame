// history.js
import { createBrowserHistory } from 'history'
const basename = document.getElementById('base-url').href.replace(new RegExp('^.*' + window.location.host), '');
export default createBrowserHistory({
    basename:basename
  /* pass a configuration object here if needed */
})