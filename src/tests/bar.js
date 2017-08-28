import Animal from "./animal";

const outputwrap = `
  <section class="output-wrap">
    <h2>Output wrap</h2>
  </section>
`;

function outerWrap() {
  var element = document.createElement('section');
  element.innerHTML = _.join([outputwrap], ' ');
  return element;
}

class Bar {
    constructor (name = 'Empty', ind = null) {
      this.name = name;
      this.ind = ind;
    }
    speak() {
      const inname = this.name;
      if (this.ind){
        this.ind.addEventListener('click', function() {
          const animal = new Animal(inname);
          document.body.appendChild(outerWrap());
          animal.speak();
        });
      }
    }
}

export default Bar;
