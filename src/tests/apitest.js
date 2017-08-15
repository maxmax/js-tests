import 'whatwg-fetch';

function callApi(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json().then(response => ({ response }));
      }

      return response.json().then(error => ({ error }));
    })
  ;
}

let url = 'https://ghibliapi.herokuapp.com/films/';

const { response, error } = callApi(url);
if (response) {
  // handle json decoded response
  console.log("handle json", response)
} else {
  console.log("handle 500", response)
}
