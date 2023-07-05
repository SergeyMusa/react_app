import {action, computed, makeObservable, observable} from "mobx"
import {STORE_COINS} from "_store/StoreCoins";

export class StoreTimer {
  constructor() {
    makeObservable(this);
  }

  @observable public timeRepeat = 45;
  @observable private _time = 0;
  @observable private _timer;

  @observable public badgeInVisible = false;


  @computed
  public get isEnded() {
    return this._time < 1;
  }

  @computed
  public get timeToEnd() {
    if (this._time === null) {
      this.stop();
      return this._time;
    }
    if (this._time <= 0) {
      this.stop();
      this.start(this.timeRepeat);
      STORE_COINS.loadData().then();
      // STORE_COINS.loadData().then(() => { }); // ??? remake IT
    }

    return this._time;
  }

  @action.bound
  public start = (time: any = this.timeRepeat) => {
    if (this._time > 0) return;
    this._time = time;
    this._timer = setInterval(this.decrementTime, 1000)
  }

  @action.bound
  public stop = () => {
    clearInterval(this._timer);
    this._timer = undefined;
    this._time = null;
    this.badgeInVisible = false;
  }

  @action.bound
  public increment() {
    this.timeRepeat = this.timeRepeat < 99 ? this.timeRepeat + 1 : 99;
    this.badgeInVisible = false;
  }

  @action.bound
  public decrement() {
    this.timeRepeat = this.timeRepeat > 0 ? this.timeRepeat - 1 : 0;
    this.badgeInVisible = false;
  }

  @action.bound
  public decrementTime() {
    this._time = this._time > 0 ? this._time - 1 : 0;
    this.badgeInVisible = true;
  }

}

export const STORE_TIMER = new StoreTimer();