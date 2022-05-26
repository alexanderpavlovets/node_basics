
// keyof:
interface ASD {
  key: string;
  key2: number;
}

type newType = keyof ASD;
const keyOfExample: newType = 'key';


// typeof:
const arr123 = ['text 1', 'text 2'] as const; // as const is important - it is what makes tuple not jsut string
type asdqwe = typeof arr123[number]; // 'text 1' | 'text 2'

const locales = [
  { loc: 'en', someData: 1 },
  { loc: 'sp', someData: 1 },
] as const;
type Locales = typeof locales[number]['loc']; // en | sp


// keyof + typeof also works:
const obj213123 = {
  key: 'val',
  key2: 'val2',
};
type haha = keyof typeof obj213123;


// types by [index]:
interface IUser {
  name: 'Alex' | 'Not Alex';
  id: number;
  address: {
    whatever: string;
  };
}
interface UpdateUser {
  id: IUser['id'];
  name: IUser['name'];
}
type userName = IUser['name']; // Alex | Not Alex
type userIdOrName = IUser['id' | 'name']; // number | Alex | Not Alex

// Tuples ... okay


// Conditional type - basically ternary operator:
interface IId {
  id: number;
}
interface IName {
  name: string;
}
type idOrName<T extends number | string> = T extends number ? IId : IName;

const aqweasd: idOrName<number> = { id: 1 };

// Unions: ... okay this is | (or)

// Intersection types ... okay this is & (and - all properties of both types) - TODO: read it more

// String literals types:
type okNot = 'ok' | 'not ok';
type whatever = 'up' | 'down';
type thisIsStringLiterals = `always go ${whatever} it is ${okNot}`;

const phrase: thisIsStringLiterals = 'always go down it is not ok';

// Type aliases:
type iAmAliaceYesThatIsIt = 'some val' | 'some val2';

// Mapped types:
interface IProperties {
  prop1: number;
  prop2: string;
}

type mappedOne = {
  // just copy
  [T in keyof IProperties]: IProperties[T];
};
type mappedOne1 = {
  // change types
  [T in keyof IProperties]: string;
};
type mappedOne2 = {
  +readonly // make all readonly
  [T in keyof IProperties]: IProperties[T];
};
type mappedOne3 = {
  +readonly // make all readonly and optional
  [T in keyof IProperties]+?: IProperties[T];
};

// Genric classes:
class GenericClass<SomeT, SomeT1, Blabla> {
  private asd: SomeT;

  constructor() {}
}

// TS types utilities ("Utility types" in doc) TODO:read
// type asdqwezxc = Extract<> // ...
// Exclude
// NonNullable
// Pratial - all optinal
// Required - all lrequired
// Extract - get common from 2 params
// Parameters<typeof func> - will give params types
// ReturnType<typeof func> - will give return type for the func

// utulity-types - package npm, seems ok one. 1M/week
