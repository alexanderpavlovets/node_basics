// placeholder

const values = {
  isDisabled() { return 'i am disabled long'; },
  color() { return window.getComputedStyle(rootElement).color; },
  text() { return rootElement.innerText.trim(); },
};

const values1 = {
  isDisabled(){return ' i am disabled'}
}

console.log(values1.isDisabled())
console.log(values.isDisabled())