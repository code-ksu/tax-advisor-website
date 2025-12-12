import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Firm from './pages/Firm';
import Services from './pages/Services';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="kanzlei" element={<Firm />} />
                <Route path="leistungen" element={<Services />} />
                <Route path="impressum" element={<Impressum />} />
                <Route path="datenschutz" element={<Datenschutz />} />
            </Route>
        </Routes>
    );
}

export default App;
