import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Firm from './pages/Firm';
import Services from './pages/Services';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="kanzlei" element={<Firm />} />
                <Route path="leistungen" element={<Services />} />
            </Route>
        </Routes>
    );
}

export default App;
