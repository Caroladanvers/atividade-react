import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";

import Layout from "./layouts/PageLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </Router>
    );
};

export default App;