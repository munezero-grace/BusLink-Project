import React from "react";
import {Routes, Route} from 'react-router-dom'

import Trial from '../trial.jsx'
const Index = () =>{
    return(
        <Routes>
            <Route path="/trial" element ={<Trial/>}/>
        </Routes>
    )
}
export default Index;