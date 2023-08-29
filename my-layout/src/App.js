import { HashRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/main-layout'
import Home from './layout/home'
import About from './layout/about'
import Login from './auth/login'
import Sorting from './layout/sorting'

function App() {
    return (
        <HashRouter >
            <Routes>
                <Route>
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="sorting" element={<Sorting />} />
                </Route>
            </Routes>
        </HashRouter >
    )
}

export default App
