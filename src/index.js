import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/app/App';
import reportWebVitals from './reportWebVitals';
import gradiente from './images/hero-gradient-svg.png';

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ width: '100%', minHeight: '100vh', background: `rgba(235,235,235.1) url(${gradiente})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
