import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import Chairs from "./Pages/Chairs";
import Closets from "./Pages/Closets";
import Tables from "./Pages/Tables";
import ObjectID from "./Pages/ObjectID";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/chairs" element={<Chairs/>}></Route>
                    <Route path="/closets" element={<Closets/>}></Route>
                    <Route path="/tables" element={<Tables/>}></Route>
                    <Route path="/chairs/:id" element={<ObjectID type="chair"/>}></Route>
                    <Route path="/closets/:id" element={<ObjectID type="closet"/>}></Route>
                    <Route path="/tables/:id" element={<ObjectID type="table"/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
