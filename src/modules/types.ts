import { ethers } from 'ethers';
import { reducer } from './reducer';

export type RootState = ReturnType<typeof reducer>;

export type WindowWithEthereum = Window & {
  ethereum: ethers.providers.ExternalProvider;
};
