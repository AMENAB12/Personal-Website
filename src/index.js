import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ReactGA from "react-ga4";
import './index.css';
import App from './App';
const TRACKING_ID = "G-VKFNZGD4M9"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}
reportWebVitals(SendAnalytics);
