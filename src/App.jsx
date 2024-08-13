import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { RobotIndex } from './pages/RobotIndex'

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { AboutTeam } from './pages/AboutTeam'
import { AboutVision } from './pages/AboutVision'

export function App() {
    return <Router>
        <AppHeader />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="/about/team" element={<AboutTeam />}/>
                    <Route path="/about/vision" element={<AboutVision />}/>
                </Route>
                <Route path="/robot" element={<RobotIndex />} />
            </Routes>
        </main>
        <AppFooter />
    </Router>
}