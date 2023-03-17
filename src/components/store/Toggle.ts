// import {makeAutoObservable} from "mobx";

// ??? можно сделать на дженерике получая разные значения отдавать нужные
// 0/1 true/false
// export interface ToggleProps {
//     initState: boolean;
// }

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

    // console.log('propsToggler_',props.propsToggler);
    // console.log('thisState_1',props.thisState);
    // console.log('thisState_2',thisState);

    // timerFunction = (() => {console.log('timerFunction')})

    // constructor() {
    //     makeAutoObservable(this)
    // }
}

// export const toggler = new Toggler();
