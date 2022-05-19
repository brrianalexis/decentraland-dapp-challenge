import { AnyAction } from 'redux';
import {
  DUMMY_TRANSFER_REQUEST,
  DUMMY_TRANSFER_SENT,
  DummyTransferSentAction,
} from './actions';
import { TransactionState } from './types';

const INITIAL_STATE: TransactionState = {
  to: '',
  from: '',
  amount: '',
  status: '',
  hash: '',
  error: null,
};

export function transactionReducer(
  state: TransactionState = INITIAL_STATE,
  action: AnyAction
): TransactionState {
  switch (action.type) {
    case DUMMY_TRANSFER_REQUEST: {
      return {
        ...state,
      };
    }

    case DUMMY_TRANSFER_SENT: {
      const { to, amount, hash } =
        action.payload as DummyTransferSentAction['payload'];
      return {
        ...state,
        to,
        amount,
        hash,
        status: 'SENT',
      };
    }

    default:
      return state;
  }
}
