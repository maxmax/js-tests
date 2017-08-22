function selectDev(x) {
  const v = x.selectedIndex;
  const val = x.getElementsByTagName("option")[v].value;
  const device = view.querySelector('[data-targets="device-base"]');
  device.className = val;
}

export function devconf(int) {
  const btn = int.querySelector('button');
  const x = int.querySelector('select');
  btn.onclick = function(event) {selectDev(x);};
}
