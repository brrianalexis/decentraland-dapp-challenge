import { ethers } from 'ethers';
import { TransactionResponse } from '@ethersproject/providers';
import { call, put, takeEvery } from 'redux-saga/effects';
import { TOKEN_ABI, TOKEN_ADDRESS, windowWithEthereum } from '../../constants';
import {
  dummyTransferFailure,
  dummyTransferSuccess,
  dummyTransferSent,
  DUMMY_TRANSFER_REQUEST,
  DUMMY_TRANSFER_SENT,
  DummyTransferRequestAction,
  DummyTransferSentAction,
  DUMMY_TRANSFER_SUCCESS,
} from './actions';
import { handleConnectWalletRequest } from '../wallet/sagas';

export function* transactionSaga() {
  yield takeEvery(DUMMY_TRANSFER_REQUEST, handleDummyTransferRequest);
  yield takeEvery(DUMMY_TRANSFER_SENT, handleDummyTransferSent);
  yield takeEvery(DUMMY_TRANSFER_SUCCESS, handleConnectWalletRequest);
}

function* getDummyTransfer(to: string, amount: string) {
  const provider = new ethers.providers.Web3Provider(
    windowWithEthereum.ethereum
  );
  const signer = provider.getSigner();
  const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, signer);
  const transaction: TransactionResponse = yield call(() =>
    contract.transfer(to, amount)
  );

  return transaction;
}

function* getTransaction(hash: string) {
  const provider = new ethers.providers.Web3Provider(
    windowWithEthereum.ethereum
  );
  const transaction: TransactionResponse = yield call(() =>
    provider.getTransaction(hash)
  );
  return transaction;
}

function* handleDummyTransferRequest({ payload }: DummyTransferRequestAction) {
  try {
    const { to, amount } = payload;
    const transaction: TransactionResponse = yield call(
      getDummyTransfer,
      to,
      amount
    );
    yield put(dummyTransferSent(to, amount, transaction.hash));
  } catch (error: any) {
    yield put(dummyTransferFailure(error));
  }
}

function* handleDummyTransferSent({ payload }: DummyTransferSentAction) {
  const { hash } = payload;
  try {
    const transaction: TransactionResponse = yield call(getTransaction, hash);
    yield call(transaction.wait);
    yield put(dummyTransferSuccess(transaction.hash));
  } catch (error: any) {
    yield put(dummyTransferFailure(error, hash));
  }
}
