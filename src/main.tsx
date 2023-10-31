import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserScreen from './screens/UserScreen.tsx';
import PostScreen from './screens/PostScreen.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserScreen />,
      },
      {
        path: "/posts",
        element: <PostScreen />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
