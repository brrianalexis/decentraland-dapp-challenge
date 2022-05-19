import { connect } from 'react-redux';
import { dummyTransferRequest } from '../../modules/transaction/actions';
import { MapDispatch, MapDispatchProps } from './Transfer.types';
import Transfer from './Transfer';

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
  onTransfer: (to: string, amount: string) =>
    dispatch(dummyTransferRequest(to, amount)),
});

export default connect(null, mapDispatch)(Transfer);
