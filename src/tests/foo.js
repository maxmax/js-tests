//point
export function foo(items = []) {
  const markup = `
    <div class="questions">
      ${items.map(item => `<div class="question">
        <h2>${item.title}</h2>
        <pre>${item.code}</pre>
        <section>
          <input type="checkbox"> Result:
          <label>${item.result}</label>
        </section>
      </div>`).join('')}
    </div>
  `;
  return markup;
}
