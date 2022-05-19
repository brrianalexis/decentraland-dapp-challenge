import { connect } from 'react-redux';
import { connectWalletRequest } from '../../modules/wallet/actions';
import {
  getAddress,
  getBalance,
  getError,
  isConnected,
  isConnecting,
} from '../../modules/wallet/selectors';
import { RootState } from '../../modules/types';
import { MapDispatch, MapDispatchProps, MapStateProps } from './Wallet.types';
import Wallet from './Wallet';

const mapState = (state: RootState): MapStateProps => ({
  address: getAddress(state),
  balance: getBalance(state),
  isConnected: isConnected(state),
  isConnecting: isConnecting(state),
  error: getError(state),
});

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onConnect: () => dispatch(connectWalletRequest()),
});

export default connect(mapState, mapDispatch)(Wallet);
