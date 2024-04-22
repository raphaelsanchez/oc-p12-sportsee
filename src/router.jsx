import App from '@/layouts/App'
import Home from '@/pages/Home'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

/**
 * Router component. Defines the application routes.
 *
 * @returns {JSX.Element} The Router component.
 */
export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="/user/12" />, // Temporary redirect to the user with ID 18
                },
                {
                    path: '/user/:id',
                    element: <Home />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}
