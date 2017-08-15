//point
export function tableFilms(items = []) {
  const markup = `
    <div class="table">
      ${items.map(item => `<div class="qu">
        <h2>${item.title}</h2>
        <small>${item.director}</small>
        <p class="description">${item.description}</p>
        <strong>Score: ${item.rt_score}</strong>
        <hr />
      </div>`).join('')}
    </div>
  `;
  return markup;
}
