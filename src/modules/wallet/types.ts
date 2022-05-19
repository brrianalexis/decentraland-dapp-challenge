export type WalletState = {
  address: string | null;
  balance: string | null;
  isConnecting: boolean;
  error: string | null;
};
