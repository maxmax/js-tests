export function slide(slide = '', title = '') {
  const result = `
    <section class='${"slide-" + slide}' id='${"hr-" + slide}'>
      <section class='caption' data-title='${title}'></section>
    </section>
  `;
  return result;
}
