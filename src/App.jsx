import '@/App.css'
import { useState } from 'react'
import logo from '/logo.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <img src={logo} className="logo" alt="Logo SportSee" />
            </div>
            <h1>Connexion</h1>
            <div className="card">
                <p>Entrez votre adresse email pour accéder à votre dashboard</p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
