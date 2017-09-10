export const Slide = (slide = '', title = '') =>
  `<section class='${"slide-" + slide}' id='${"hr-" + slide}'>
    <section class='caption' data-title='${title}'></section>
  </section>`
