import { Home } from './pages/Home'

import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'

export function App() {
    return <>
        <AppHeader />
        <main>
            <Home />
        </main>
        <AppFooter />
    </>
}