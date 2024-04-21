import '@/index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Router as Routes } from './router'

/**
 * Description
 *
 * @param {string} elementId - The element ID.
 * @returns {void}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routes />
    </StrictMode>
)
