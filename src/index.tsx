import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Wallet } from './components/Wallet';
import { Transfer } from './components/Transfer';
import { store } from './modules/store';

import 'decentraland-ui/lib/styles.css';
import { NotFound } from './components/NotFound';

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wallet />} />
        <Route path="/transaction" element={<Transfer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
