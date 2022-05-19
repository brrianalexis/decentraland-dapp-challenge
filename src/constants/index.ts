import { WindowWithEthereum } from '../modules/types';

// The regular `window` object with `ethereum` injected by MetaMask
export const windowWithEthereum = window as unknown as WindowWithEthereum;

// This is the Dummy Token address, it identifies the token contract once deployed
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS!;
if (!TOKEN_ADDRESS) {
  console.error('Missing env variable REACT_APP_TOKEN_ADDRESS');
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

export const ADDRESS_REGEXP = /^0x[a-fA-F0-9]{40}$/;
