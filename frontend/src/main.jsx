import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import DashBoard from './pages/Dashboard/DashBoard.jsx';
import ChatPage from './pages/ChatPage/ChatPage.jsx';
import RootLayout from './layouts/rootlayout/RootLayout.jsx';
import DashBoardLayout from './layouts/dashboard/DashBoardLayout.jsx';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import SignInPage from './pages/SignInPage/SignInPage.jsx';


const router = createBrowserRouter([
  {
    element : <RootLayout/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element : <DashBoardLayout/>,
        children : [
          {
            path : "/dashboard",
            element : <DashBoard/>
          },
          {
            path : "/dashboard/chats/:id",
            element : <ChatPage/>
          }
        ]
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
