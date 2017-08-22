export function control(control = 'default') {
  const result = `
    <div class='${"control-" + control}'>${control}</div>
  `;
  return result;
}
