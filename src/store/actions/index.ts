
import AppAction from "./appAction";
import GameAction from "./gameAction";

let Action = (<any>Object).assign(
  GameAction,
  AppAction,
);

Action.do = (method: any, ...args: any) => {
  try {
    return Action[method](...args);
  }
  catch (e) {
    console.error('ACTION ERR: ', e);
  }
}
Action.get = (method: any, ...args: any) => {
  return Action.do('get' + method, ...args);
}
Action.set = (method: any, ...args: any) => {
  return Action.do('set' + method, ...args);
}

export default Action;