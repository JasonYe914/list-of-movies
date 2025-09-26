import Home from "./Home.jsx";
import Favorite from "./Favourite.jsx";

import {Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorite" element={<Favorite />} />
            </Routes>
        </div>
    );
}