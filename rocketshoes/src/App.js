import React from 'react';
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './config/ReactotronConfig'
import Header from './components/Header'
import Routes from './routes'
import GlobalStyle from './styles/global'

import { Provider } from 'react-redux'
import store from './store'
import history from './services/history'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000}/>
      </Router>
    </Provider>
  );
}

export default App;
