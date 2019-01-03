function getAuthToken() {
  return document.querySelector('meta[name="csrf-token"]').content;
}

function handleResponse(response) {
  if (response.ok) return response.json();
  return response.json().then((error) => Promise.reject(error));
}

function ajax(url, options) {
  const defaultOptions = {
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': getAuthToken()
    },
    ...options
  };
  return fetch(url, defaultOptions).then(handleResponse);
}

export function get(url) {
  const options = { method: 'get' };
  return ajax(url, options);
}

export function post(url, data) {
  const options = { method: 'post', body: data };
  return ajax(url, options);
}

export function destroy(url) {
  const options = { method: 'delete' };
  return ajax(url, options);
}
