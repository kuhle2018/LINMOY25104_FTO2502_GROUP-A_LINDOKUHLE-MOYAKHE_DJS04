import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // Optional: if you use global styles
import { PodcastProvider } from './Context/PodcastContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PodcastProvider>
      <App />
    </PodcastProvider>
  </React.StrictMode>
);
