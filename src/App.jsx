import Header from "./Header";
import Main from "./Pages/Main";
import Footer from "./Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='/ultra-clicker' element={<Main />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
