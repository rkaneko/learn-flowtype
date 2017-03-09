/* @flow */

type OneAction = {
  kind: 'one',
  type: 'ONE_ACTION',
  one: string
};

type TwoAction = {
  kind: 'two',
  type: 'TWO_ACTION',
  two: number
};

type Action =
  OneAction |
  TwoAction

function reduce(state: Object = {}, action: Action) {
  const {kind} = action;
  if (kind === 'one') {
    console.log(action.one);
  } else if (kind === 'two') {
    console.log(action.two);
  }
  return state;
}

const oneAction: OneAction = {type: 'ONE_ACTION', one: 'one'};

reduce({}, oneAction);
