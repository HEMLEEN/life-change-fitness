import React from 'react';
import './App.css';
import './Custom.css';
import QRCodeGenerator from './components/qrcode/QrCode';

function App() {
  return (
    <div className="App">
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
