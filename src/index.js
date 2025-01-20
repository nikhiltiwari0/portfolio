import './index.css';

import App from './App';
import { PostHogProvider } from 'posthog-js/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import posthog from 'posthog-js';
import reportWebVitals from './reportWebVitals';

posthog.init(process.env.REACT_APP_PUBLIC_POSTHOG_KEY || 'phc_uJwbqUWmjZq2DvltO3NnlANnUJDXQCk6GCd8SJa0JWc', {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
  persistence: 'cookie', 
  loaded: (posthogInstance) => {
    console.log('PostHog initialized:', posthogInstance);
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals(console.log);