import {action, computed, makeObservable, observable} from "mobx"

export class StoreTimer {
  constructor() {
    makeObservable(this)
  }

  @observable private _time = 0;
  private _timer;


  @computed
  public get isEnded() {
    return this._time < 1;
  }

  @computed
  public get timeToEnd() {
    return this._time;
  }

  @action
  public start = (time: any = 15) => {
    this._time = time;
    this._timer = setInterval(() => {
      // if (this.isEnded) {
      //   this._time = time
      // }
      this._time = this._time - 1
    }, 1000)
  }

  @action.bound
  public stop = () => {
    clearInterval(this._timer)
    this._time = 0
  }

  @action.bound
  public increment() {
    this._time++;
  }

  @action.bound
  public decrement() {
    this._time--;
  }
}

export const STORE_TIMER = new StoreTimer();