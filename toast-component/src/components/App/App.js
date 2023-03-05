import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../ToastProvider';

function App() {
  return (
    <React.StrictMode>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </React.StrictMode>
  );
}

export default App;
