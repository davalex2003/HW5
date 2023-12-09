import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FurnitureModel} from "../FurnitureModel";
import {Paper} from "@mui/material";
import './style.css'
import ObjectCard from "../Components/ObjectCard"
import {Link} from "react-router-dom";

const Chairs = () => {
    const [chairs, setChairs] = useState<FurnitureModel[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/chair").then((r) => {
            setChairs(r.data.data);
        })
    }, [])
    return (
        <Paper elevation={10} className="main_paper">
            <h1>Стулья</h1>
            <div className="cards">
                {chairs.map((model, index) => (
                    <ObjectCard key={index} description={model.description} image={model.image} type="chair"
                                id={model._id}/>
                ))}
            </div>
            <div style={{marginTop: 20}}>
                <Link to="/">НАЗАД</Link>
            </div>
        </Paper>
    );
};

export default Chairs;