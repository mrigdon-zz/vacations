function getAuthToken() {
  return document.querySelector('meta[name="csrf-token"]').content;
}

function ajax(url, options) {
  const defaultOptions = {
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': getAuthToken()
    },
    ...options
  };
  return fetch(url, defaultOptions);
}

export function put(url, data) {
  const options = { method: 'put', body: data };
  return ajax(url, options);
}

export function get(url) {
  const options = { method: 'get' };
  return ajax(url, options);
}
