export function media(url = '') {
  const result = `
    <section class='media'>
      <video width="320" height="240" autoplay loop>
        <source src="${url}" type="video/mp4">
      </video>
    </section>
  `;
  return result;
}
