import React  from "react";
import {BrowserRouter , Switch , Route , Link , Routes}from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/aboutme/Aboutme";
import Jobs from "./pages/jobs/Jobs";
import Error404 from "./pages/error/Error404";
import Studies from "./pages/studies/Studies";
import Skills from "./pages/skills/Skills";


function routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutme" element={<About />}></Route>
                <Route path="/jobs" element={<Jobs />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/studies" element={<Studies/>}></Route>
                <Route path="*" element={<Error404/>}></Route>
            </Routes>        
        </BrowserRouter>

    );

}

export default routes;