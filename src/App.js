//npm install react-icons
//npm i react-router-dom --save
import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import P404 from "./pages/P404";
import {Route , Switch} from "react-router-dom";
import Navbar from "./component/Navbar";
import {RoomProvider} from './Context';

const App = () => {
    return(
        <>
            <RoomProvider>
            <Navbar />
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/rooms" component = {Rooms} />
                <Route exact path = "/rooms/:slug" component = {SingleRoom} />
                <Route exact component = {P404} />
            </Switch>
            </RoomProvider>
        </>
    )
}; 

export default App
