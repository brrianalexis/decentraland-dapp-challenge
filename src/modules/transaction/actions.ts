export const DUMMY_TRANSFER_REQUEST = '[Request] DUMMY Transfer';
export const DUMMY_TRANSFER_SENT = '[Sent] DUMMY Transfer';
export const DUMMY_TRANSFER_SUCCESS = '[Success] DUMMY Transfer';
export const DUMMY_TRANSFER_FAILURE = '[Failure] DUMMY Transfer';

export function dummyTransferRequest(to: string, amount: string) {
  return {
    type: DUMMY_TRANSFER_REQUEST,
    payload: {
      to,
      amount,
    },
  };
}

export function dummyTransferSuccess(hash: string) {
  return {
    type: DUMMY_TRANSFER_SUCCESS,
    payload: {
      hash,
    },
  };
}

export function dummyTransferFailure(error: string, hash?: string) {
  return {
    type: DUMMY_TRANSFER_FAILURE,
    payload: {
      error,
      hash: hash || '',
    },
  };
}

export function dummyTransferSent(to: string, amount: string, hash: string) {
  return {
    type: DUMMY_TRANSFER_SENT,
    payload: {
      to,
      amount,
      hash,
    },
  };
}

export type DummyTransferRequestAction = ReturnType<
  typeof dummyTransferRequest
>;
export type DummyTransferSuccessAction = ReturnType<
  typeof dummyTransferSuccess
>;
export type DummyTransferFailureAction = ReturnType<
  typeof dummyTransferFailure
>;
export type DummyTransferSentAction = ReturnType<typeof dummyTransferSent>;
