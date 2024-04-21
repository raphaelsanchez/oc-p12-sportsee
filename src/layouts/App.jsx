import Nav from '@/components/Nav/Nav'
import SideNav from '@/components/SideNav/SideNav'
import { Outlet } from 'react-router-dom'
import './App.css'

/**
 * Renders the Dashboard component.
 *
 * @returns {ReactNode} The rendered Dashboard component.
 */
const Dashboard = () => {
    return (
        <>
            <Nav />
            <SideNav />
            <Outlet />
        </>
    )
}

export default Dashboard
