import App from '@/layouts/App'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

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
                    element: <Profile />,
                },
                {
                    path: '/404',
                    element: <NotFound />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}
