import { Provider } from 'react-redux';
import store from '../store/store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../components/Header";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import Footer from "../components/Footer";

function App() {

    return(
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/sign-in" element={<SignIn />}/>
                    <Route path="/user" element={<User />}/>
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;