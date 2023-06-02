import React from "react";
import {Routes, Route} from 'react-router-dom'
import Admindash from '../../pages/Admindashboard/admindash'
import Trial from '../trial.jsx'
const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
            <Route path="/admin" element={<Admindash/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}
export default Index;