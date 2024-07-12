import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import BookDetails from './components/BookDetails/BookDetails';
import PagesToRead from './components/PagesToRead/PagesToRead';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
