
// Intend to build similar objects in clear/understandable way

// Class to create each element
class Tag {
  static indentSize = 2

  constructor(name = '', text = '') {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children)
      html.push(child.toStringImpl(indent + 1));

    html.push(`${i}</${this.name}>\n`);
    return html.join('');
  }

  toString() {
    return this.toStringImpl(0);
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(childName, childText) {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this;
  }

  build() {
    return this.root.toString()
  }
}

// chainable builder
const builder = new HtmlBuilder('ul')
const unorderedList = builder
  .addChild('li', 'foo')
  .addChild('li', 'bar')
  .addChild('li', 'baz')
  .build()
console.log(unorderedList)

