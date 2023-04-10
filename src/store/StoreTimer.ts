import {action, computed, makeObservable, observable} from "mobx"
import {doFetchData} from "_common/utils/Fetch";
import {URL_COINS} from "_common/const/Const";
import {STORE_COINS} from "_store/StoreCoins";
import {Toggle} from "_common/utils/Toggle";

export class StoreTimer {
  public _isBusy = new Toggle(false);
  public _init = true;
  constructor() {
    makeObservable(this)
  }

  @observable public timeRepeat = 10;
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
      this.loadData().then(() => { // ??? DEL IT, remake
      });
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

  @action.bound
  public changeIsBusy() {
    this._isBusy.close();
  }

  private async loadData() {
    this._isBusy.open()
    try {
      const data = await doFetchData(URL_COINS);
      STORE_COINS.setData(data);
    } finally {
      this.changeIsBusy();
    }
  }
}

export const STORE_TIMER = new StoreTimer();