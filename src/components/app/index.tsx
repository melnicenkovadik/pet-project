import {Link, Route, Routes} from "react-router-dom";
import "./index.scss";
import {MainPageLazy} from "../../pages/home-page/home-page.lazy";
import {CounterLazy} from "../../pages/counter/counter.lazy";
import {Suspense} from "react";

function App() {
    return (
        <div className="app">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/counter">Counter</Link>
            </nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/counter" element={<CounterLazy/>}/>
                    <Route path="/" element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
