import {action, makeAutoObservable, observable} from "mobx";
import {Toggle} from "_common/utils/Toggle";
import {ResponseData} from "_dto/Type";


// @observable public
enum LangList {
  EN = 'EN',
  RU = 'RU'
}

class StoreLanguage {

  constructor() {
    makeAutoObservable(this)
  }

  @observable public LangSet = () => {
    LangList.EN ? LangList.RU : LangList.EN
  }

  // @action
  // changeLang = (loadData: ResponseData[]) => {
  //   this.CoinsList = loadData;
  // }

}