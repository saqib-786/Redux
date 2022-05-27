import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "../Conainers/Home";
import About from "../Conainers/About";
import MetaMask from "../Conainers/MetaMask";
import Service from '../Conainers/Services'
import Netfilx from "../Conainers/Netfilx";


class AppRouter extends React.Component{
    render(){
        return(
            <div>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Netfilx/>}/>
                            <Route path='service/' element={<Service/>}/>
                            <Route path="Metamask/" element={<MetaMask/>}/>
                    <Route  path="Home/" element={<Home/>}  />
                    <Route path="about/*" element={<About/>} />


                        </Routes>
                    
                    
                    </Router>
            </div>
        )
    }
}

export default AppRouter