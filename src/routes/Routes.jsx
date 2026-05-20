
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layout/MainLayout';
import Homepage from '../paiges/homepage/Homepage';
import Books from '../paiges/books/Books';
import ErrorPage from '../paiges/errorPage/ErrorPage';
export const routes = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: "/books",
                element: <Books></Books>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>

    }

])


