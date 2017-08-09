//point
export function point(title = "", code = null, result = null) {
  const markup = `
    <div class="question">
      <h2>
        ${title}
      </h2>
      <pre>${code}</pre>
      <section>
        <input type="checkbox"> Result:
        <label>${result}</label>
      </section>
    </div>
  `;
  return markup;
}
