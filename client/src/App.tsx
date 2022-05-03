import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import Footer from "./components/footer";


/**
 * @App
 * Главное местечко, откуда все работает и вызывается
 */

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data=> {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=>setLoading(false))
    })
    if (loading) {
        return <Spinner animation = {"grow"}/>
    }
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>

        </div>
    );
});

export default App;