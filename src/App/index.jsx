import { Provider, useSelector } from 'react-redux';
import store from '../store/store';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from "../components/Header";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import User from "../pages/User";
import Footer from "../components/Footer";
import Error from '../pages/Error';
import { selectUserSession } from '../store/selectors';


const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useSelector(selectUserSession) 
    return isLoggedIn ? children : <Navigate to="/log-in" />;
};

function App() {
    
    return(
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/log-in" element={<LogIn />}/>
                    <Route path="/user" element={
                        <PrivateRoute>  
                            <User />
                        </PrivateRoute>
                    } />
                    <Route path="*" element={<Error />}/> 
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;