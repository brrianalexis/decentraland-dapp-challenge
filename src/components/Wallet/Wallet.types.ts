import { AnyAction, Dispatch } from 'redux';
import { ConnectWalletRequestAction } from '../../modules/wallet/actions';

export type WalletProps = {
  address: string;
  balance: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
  onConnect: () => void;
};

export type MapStateProps = Pick<
  WalletProps,
  'address' | 'balance' | 'isConnected' | 'isConnecting' | 'error'
>;
export type MapDispatchProps = Pick<WalletProps, 'onConnect'>;
export type MapDispatch = Dispatch<ConnectWalletRequestAction | AnyAction>;
