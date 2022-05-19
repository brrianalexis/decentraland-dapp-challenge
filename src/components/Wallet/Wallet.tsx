import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Center,
  Footer,
  Header,
  Navbar,
  Page,
} from 'decentraland-ui';
import { WalletProps } from './Wallet.types';
import './Wallet.css';

const Wallet: React.FC<WalletProps> = ({
  address,
  balance,
  isConnected,
  onConnect,
  isConnecting,
  error,
}) => {
  return (
    <>
      <Navbar />
      <Page className="App">
        <Center>
          {!isConnected ? (
            <>
              <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
              </Button>
              {error ? <p className="error">{error}</p> : null}
            </>
          ) : (
            <Card>
              <Header>Wallet</Header>
              <p>
                <strong>Address:</strong>&nbsp;
                {address.slice(0, 6) + '...' + address.slice(-4)}
              </p>
              <p>
                <strong>Balance:</strong>&nbsp;
                {balance} DUMMY
                <Link to="/transaction">
                  <Button basic>TRANSFER</Button>
                </Link>
              </p>
            </Card>
          )}
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default Wallet;
