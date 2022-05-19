import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Field, Form, Header, Icon, Modal } from 'decentraland-ui';
import { ADDRESS_REGEXP } from '../../constants';
import { TransferProps } from './Transfer.types';
import './Transfer.css';

const Transfer: React.FC<TransferProps> = ({ onTransfer }) => {
  const navigate = useNavigate();

  const [amount, setAmount] = React.useState<number | ''>('');
  const [to, setTo] = React.useState<string>('');

  const addressError = !ADDRESS_REGEXP.test(to);
  const amountError = amount.toString().length === 0 || amount <= 0;

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    if (name === 'amount') {
      setAmount(value ? +value : '');
    } else if (name === 'to') {
      setTo(value);
    }
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>): void {
    if (addressError || amountError) return;
    onTransfer(to, amount.toString());
    navigate('/');
  }

  return (
    <Modal
      size="tiny"
      open
      closeIcon={
        <div className="modal-close-icon">
          <Link to="/">
            <Icon link color="grey" size="large" name="close" />
          </Link>
        </div>
      }
    >
      <Modal.Content>
        <Header className="modal-title">Transfer</Header>
        <p className="modal-title">Send tokens to an account</p>
        <Form>
          <Field
            label="Amount"
            type="number"
            placeholder="100"
            name="amount"
            value={amount}
            onChange={handleChange}
          />
          <Field
            type="address"
            label="Address"
            placeholder="0x..."
            name="to"
            value={to}
            onChange={handleChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleSubmit}>
          SEND
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Transfer;
