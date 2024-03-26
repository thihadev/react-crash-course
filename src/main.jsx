import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Posts.jsx'
import Posts , { loader as postsLoader }from './routes/Posts.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'


const router = createBrowserRouter([
  { 
    path : '/', 
    element: <RootLayout />,
    children: [
      { path : '/', 
        element : <Posts />,
        loader: postsLoader,
        children:  [
          { 
            path : '/create-post', 
            element : <NewPost />,
            action : newPostAction 
          },
          {
            path: ':id'
          }
        ]
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
