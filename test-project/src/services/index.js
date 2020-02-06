
export function loadData(url) {
  return apiRequest(url);
}

function apiRequest(url, method = "GET") {
  const headers = new Headers();
  headers.append("Accept", "application/json");

  const options = {
    method,
    headers
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(data => ({ data }))
    .catch(error => ({ error }));
}
