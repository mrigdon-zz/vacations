export default function reduxBrowser() {
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) return undefined;
  return window.__REDUX_DEVTOOLS_EXTENSION__();
}
