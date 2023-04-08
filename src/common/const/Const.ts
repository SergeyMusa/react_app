import {STORE_COINS} from "_store/StoreCoins";

const count = STORE_COINS.coinsCount || '20';
export const URL_COINS = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${count}&tsym=USD&api_key={be8e1361d9e8e83cbdd0723b8e3792826ef753bbf8f8813ed8cf5d34dae7d07e}`
