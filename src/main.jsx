import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import DynamicValues from './pages/DynamicValues.jsx';
import ReusingComponents from './pages/ReusingComponents.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  }, 
  {
    path: "/dynamic-values", element: <DynamicValues />
  },
  {
    path: "/reusing-components", element: <ReusingComponents />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
