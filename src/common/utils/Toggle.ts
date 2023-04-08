import {action, computed, makeObservable, observable} from "mobx";

export class Toggle {
  constructor(initState: boolean = false) {
    this._isOpen = initState
    makeObservable(this)
  }

  @observable private _isOpen: boolean
  @computed
  public get isOpen() {
    return this._isOpen
  }

  @action
  public close = () => {
    this._isOpen = false;
  }

  @action
  public open = () => {
    this._isOpen = true;
  }
}
