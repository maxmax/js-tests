export function selection(selection = 'default', items = []) {
  const result = `
    <div class='${"selection"}' id="deviceSelect">
      <select name="select-device" class="form-control" id="mySelect">
        <option value="type_1">SM300</option>
        <option value="type_2">Johnson Sea link</option>
      </select>
      <button type="button" id="deviceRun">Try it</button>
    </div>
  `;
  return result;
}
