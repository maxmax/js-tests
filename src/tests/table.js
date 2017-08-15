//point
//import './items.css';

export function tableFilms(items = []) {
  const markup = `
    <div class="table items">
      ${items.map(item => `<div class="qu item">
        <h2>${item.title}</h2>
        <small>${item.director}</small>
        <p class="description">${item.description}</p>
        <strong>Score: ${item.rt_score}</strong>
      </div>`).join('')}
    </div>
  `;
  return markup;
}
