import { combineReducers } from 'redux';
import { walletReducer as wallet } from './wallet/reducer';
import { transactionReducer as transaction } from './transaction/reducer';

export const reducer = combineReducers({
  wallet,
  transaction,
});
