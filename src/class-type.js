/* @flow */

class One {
  type: string;
  one: number;
  constructor() {
    this.type = 'ONE';
    this.one = 1;
  }
}

class Two {
  type: string;
  two: number;
  constructor() {
    this.type = 'TWO';
    this.two = 2;
  }
}

type Action =
  One |
  Two

function reduce(state: Object = {}, action: Action): Object {
  if (action instanceof One) {
    console.log(action.one);
  } else if (action instanceof Two) {
    console.log(action.two);
  }
  return state;
}
