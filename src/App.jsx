import Home from "./Home.jsx";
import Favorite from "./Favourite.jsx";
import './App.css';
import NavBar from "./NavBar.jsx";

import {Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <>
        <NavBar />
        <main className="main-content"> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </main>
        </>
    );
}