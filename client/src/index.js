import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './layout'
import CreateArea from './components/CreateArea';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:"",
        element: <App />
      },
      {
        path: "/login",
        element: <Login />
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

