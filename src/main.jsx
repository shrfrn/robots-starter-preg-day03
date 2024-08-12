import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'
import './assets/css/index.css'

const elRoot = document.getElementById('root')
createRoot(elRoot).render(<App />)