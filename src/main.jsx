import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your global CSS
import App from './App.jsx'; // Import your main App component

// Create a root for rendering the app
const root = createRoot(document.getElementById('root'));

// Render the App component inside StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);