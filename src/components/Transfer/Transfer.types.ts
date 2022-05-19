import { AnyAction, Dispatch } from 'redux';
import { DummyTransferRequestAction } from '../../modules/transaction/actions';

export type TransferProps = {
  onTransfer: (to: string, amount: string) => void;
};

export type MapDispatchProps = Pick<TransferProps, 'onTransfer'>;
export type MapDispatch = Dispatch<DummyTransferRequestAction | AnyAction>;
