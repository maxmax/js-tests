import {fetchInt} from "./api";
import {tableFilms} from "./table";

export function injFun() {
  const films = fetchInt('https://ghibliapi.herokuapp.com/films/');
  const beers = fetchInt('https://api.punkapi.com/v2/beers?page=1&per_page=20');
  Promise.all([films, beers]).then(values => {
    const resfilms = tableFilms(values[0]);
    //console.log("values[0]:", values[0]);
    function comp() {
      var element = document.createElement('section');
      element.innerHTML = _.join([resfilms], ' ');
      return element;
    }
    document.body.appendChild(comp());
  });
}
