import { observable,  makeAutoObservable} from "mobx"
// import {storeCoins} from "./StoreCoins";
// import {Cards} from "../pages/Cards/Cards";

export class StoreTimer  {
    @observable timerPauseTime: number = 0
    @observable timerBeginTime: number = 30
    @observable timerActive: boolean = false
    @observable timerVisible: boolean = false
    @observable timerRepeat: boolean = true
    public timerMessage: string = "Time's Up"
    public timerShow = (() => { console.log(`timer4_timerBeginTime=${this.timerBeginTime}_timerPauseTime=${this.timerPauseTime}`) })
        // public timerMakeFun = () => {console.log('>>> timerActive_tst')}
        public timerMakeFun(): void { console.log('>>> timerActive_tst <<<') } //  **** ok
        // public timerMakeFun(): void { new Cards(storeCoins.FetchUrl).startTimer() }

    constructor() {
        makeAutoObservable(this, {        })
    }

// action
    doStart = () => {
        this.timerActive = true;
    }
    doStop = () => {
        this.timerActive = false;
    }
    doVisible = () => {
        this.timerVisible = true;
    }
    doInVisible = () => {
        this.timerVisible = false;
    }
    doPause = (timePause) => {
        this.timerPauseTime = timePause;
        this.timerActive = false;
    }

    setTimerBeginTime = (timeBegin) => {
        this.timerBeginTime = timeBegin;
    }
    setTimerFunction = (timeFun) => {
        this.timerMakeFun = timeFun;
    }
    setTimerRepeat = () => {
        this.timerRepeat = !this.timerRepeat;
    }
    increment = () => {
        this.timerBeginTime = this.timerBeginTime < 99 ? this.timerBeginTime + 1 : 99;
        // console.log('increment', this.timerBeginTime);
    }
    decrement = () => {
        this.timerBeginTime = this.timerBeginTime > 0 ? this.timerBeginTime - 1 : 0;
        // console.log('decrement', this.timerBeginTime);
    }
    clearPauseTime = () => {
        this.timerPauseTime = 0;
    }
}

export const storeTimer = new StoreTimer();
