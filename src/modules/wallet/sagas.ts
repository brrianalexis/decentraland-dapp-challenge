import { ethers } from 'ethers';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
} from './actions';
import { WindowWithEthereum } from './types';

// The regular `window` object with `ethereum` injected by MetaMask
const windowWithEthereum = window as unknown as WindowWithEthereum;

/* This is the Dummy Token address, it identifies the token contract once deployed */
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS!;
if (!TOKEN_ADDRESS) {
  console.error(`Missing env variable REACT_APP_TOKEN_ADDRESS`);
}

// This is the Dummy Token ABI (application binary interface)
// You will need this to interact with the deployed contract, ie:

// const provider = new.ethers.providers.Web3Provider(window.ethereum)
// const token = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider)
// const balance = await token.balanceOf(walletAddress) // --> returns the balance of DummyToken of the walletAddress

export const TOKEN_ABI = [
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
];

export function* walletSaga() {
  yield takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest);
}

function* handleConnectWalletRequest() {
  try {
    const provider = new ethers.providers.Web3Provider(
      windowWithEthereum.ethereum
    );
    yield call(() => provider.send('eth_requestAccounts', []));
    const signer = provider.getSigner();
    const address: string = yield call(() => signer.getAddress());
    yield put(connectWalletSuccess(address));
  } catch (error: any) {
    yield put(connectWalletFailure(error.message));
  }
}
