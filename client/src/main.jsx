import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './pages/Home';
// import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Pets from './pages/Pets';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/pets',
        element: <Pets />
      },
      // {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }, {
      //   path: '/me',
      //   element: <Profile />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)