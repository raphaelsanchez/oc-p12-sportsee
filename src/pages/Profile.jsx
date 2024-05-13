import Header from '@/components/Header/Header'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserData } from '../api/getUserData'
import Loader from '../components/Loader/Loader'
import Performances from '../components/charts/Performances/Performances'
import Score from '../components/charts/Score/Score'
import Activity from '../components/charts/Activity/Activity'
import AverageSessions from '../components/charts/AverageSessions/AverageSessions'
import KeyDatas from '../components/charts/Keydatas/KeyDatas'
import './Profile.css'

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Profile() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getUserData(Number(id))
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [id])

    if (isLoading) {
        return <Loader /> // Remplacez par votre composant de chargement
    }

    return (
        <main>
            <div className="profil">
                <Header userId={Number(id)} />
                <Activity userId={Number(id)} />
                <KeyDatas userId={Number(id)} />
                <AverageSessions userId={Number(id)} />
                <Performances userId={Number(id)} />
                <Score userId={Number(id)} />
            </div>
        </main>
    )
}
