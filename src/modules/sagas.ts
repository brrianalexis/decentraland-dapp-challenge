import { all } from '@redux-saga/core/effects';
import { walletSaga } from './wallet/sagas';
import { transactionSaga } from './transaction/sagas';

export function* sagas() {
  yield all([walletSaga(), transactionSaga()]);
}
