import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './components/Message/index.tsx'
createRoot(document.getElementById('root')!).render(
    <App />
)
