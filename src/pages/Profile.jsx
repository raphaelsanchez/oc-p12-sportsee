import Header from '@/components/Header/Header'
import { useParams } from 'react-router-dom'
import Activity from '../components/Activity/Activity'
import AverageSessions from '../components/AverageSessions/AverageSessions'
import KeyDatas from '../components/Keydatas/KeyDatas'
import Score from '../components/Score/Score'
import './Profile.css'

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Profile() {
    const { id } = useParams()
    return (
        <main>
            <div className="profil">
                <Header userId={Number(id)} />
                <Activity userId={Number(id)} />
                <KeyDatas userId={Number(id)} />
                <AverageSessions userId={Number(id)} />
                <Score userId={Number(id)} />
            </div>
        </main>
    )
}
