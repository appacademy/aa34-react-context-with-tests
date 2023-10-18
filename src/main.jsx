import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoffeeProvider from './context/CoffeeContext';

const Root = () => {
  return (
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
