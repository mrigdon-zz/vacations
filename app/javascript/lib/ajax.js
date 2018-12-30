function getAuthToken() {
  return document.querySelector('meta[name="csrf-token"]').content;
}

export function put(url, data) {
  const options = {
    method: 'put',
    credentials: 'same-origin',
    body: data,
    headers: {
      'X-CSRF-Token': getAuthToken()
    }
  };
  return fetch(url, options);
}
