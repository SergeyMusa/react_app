import {action, computed, makeObservable, observable} from "mobx"

export class StoreTimer {
  constructor() {
    makeObservable(this)
  }

  @observable private _time = 0;
  @observable private _timer;


  @computed
  public get isEnded() {
    return this._time < 1;
  }

  @computed
  public get timeToEnd() {
    return this._time;
  }

  @action.bound
  public start = (time: any = 60) => {
    if (this._timer) return;
    this._time = time;
    this._timer = setInterval(this.decrement, 1000)
  }

  @action.bound
  public stop = () => {
    clearInterval(this._timer);
    this._timer = undefined;
    this._time = 0;
  }

  @action.bound
  public increment() {
    this._time = this._time < 99 ? this._time + 1 : 99;

  }

  @action.bound
  public decrement() {
    this._time = this._time > 0 ? this._time - 1 : 0;
  }
}

export const STORE_TIMER = new StoreTimer();