import Header from '@/components/Header/Header'
import { useParams } from 'react-router-dom'
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
        <main className="profil">
            <Header userId={Number(id)} />
            <KeyDatas userId={Number(id)} />
            <Score userId={Number(id)} />
        </main>
    )
}
