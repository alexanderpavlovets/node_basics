
// DIP - basically need to separate logic: 
// 1st  class works with data
// 2nd  class works with results of 1st, not having direct access to it (should be implemented 1.5 class - )

/* 
  1st class - low level module
  2nd class - high level module

  so - high level module should not be directly dependent on low level module.
  in orher words - low level module should not share data with high level module directly

  YOU SHOULD be dependent on abstractions instead of real data.
*/

// Bullshit! Not for JS at all!

// Not mine example - i don't event want to use it :)

let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
});

class Person
{
  constructor(name)
  {
    this.name = name;
  }
}

// LOW-LEVEL (STORAGE)

class RelationshipBrowser
{
  constructor()
  {
    if (this.constructor.name === 'RelationshipBrowser')
      throw new Error('RelationshipBrowser is abstract!');
  }

  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser // kind of interface realization. Just to show - findAllChildrenOf has to be implemented
{
  constructor()
  {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child)
  {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent
    });
  }


  findAllChildrenOf(name) {
    return this.data.filter(r =>
      r.from.name === name &&
      r.type === Relationship.parent
    ).map(r => r.to);
  }
}

// HIGH-LEVEL (RESEARCH)

class Research
{
  // constructor(relationships)
  // {
  //   // problem: direct dependence ↓↓↓↓ on storage mechanic
  //   let relations = relationships.data;
  //   for (let rel of relations.filter(r =>
  //     r.from.name === 'John' &&
  //     r.type === Relationship.parent
  //   ))
  //   {
  //     console.log(`John has a child named ${rel.to.name}`);
  //   }
  // }

  constructor(browser)
  {
    for (let p of browser.findAllChildrenOf('John'))
    {
      console.log(`John has a child named ${p.name}`);
    }
  }
}

let parent = new Person('John');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

// low-level module
let rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
