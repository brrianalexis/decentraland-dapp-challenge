import { ethers } from 'ethers';
import { call, put, takeEvery } from 'redux-saga/effects';
import { TOKEN_ABI, TOKEN_ADDRESS, windowWithEthereum } from '../../constants';
import {
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
} from './actions';

export function* walletSaga() {
  yield takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest);
}

function* getDummyBalance(address: string) {
  const provider = new ethers.providers.Web3Provider(
    windowWithEthereum.ethereum
  );
  const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
  const dummyBalance: number = yield call(() => contract.balanceOf(address));

  return dummyBalance.toString();
}

export function* handleConnectWalletRequest() {
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send('eth_requestAccounts', []));
    const signer = provider.getSigner();
    const address: string = yield call(() => signer.getAddress());
    const balance: string = yield call(getDummyBalance, address);
    yield put(connectWalletSuccess(address, balance));
  } catch (error: any) {
    yield put(connectWalletFailure(error.message));
  }
}
