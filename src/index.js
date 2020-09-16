import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
