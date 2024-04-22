import Nav from '@/components/Nav/Nav'
import SideNav from '@/components/SideNav/SideNav'
import { Outlet } from 'react-router-dom'
import './App.css'

/**
 * Renders the Dashboard component.
 *
 * @returns {JSX.Element} The rendered Dashboard component.
 */
export default function Dashboard() {
    return (
        <>
            <Nav />
            <SideNav />
            <Outlet />
        </>
    )
}
