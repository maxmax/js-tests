function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json();
}

var myInit = {method: 'GET'};

export const fetchInt = (url) => {
  const res = fetch(url, myInit)
    .then(status)
    .then(json)
    .then(function(data) {
      return data;
    }).catch(function(error) {
      console.log('Request failed', error);
    });
  return res;
};
