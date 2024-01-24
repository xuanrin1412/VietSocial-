import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect } from "react";
import { navigationKey } from "./contant/navigate";
function App() {
    useEffect(() => {}, []);
    return (
        <Router>
            <Routes>
                <Route path={navigationKey.home} element={<Home />} />
                <Route path={navigationKey.profile} element={<Profile />} />
                <Route path={navigationKey.login} element={<Login />} />
                <Route path={navigationKey.register} element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
