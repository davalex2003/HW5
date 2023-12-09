import React, {useEffect, useState} from 'react';
import axios from "axios";
import {FurnitureModel} from "../FurnitureModel";
import {Paper} from "@mui/material";
import './style.css'
import ObjectCard from "../Components/ObjectCard"
import {Link} from "react-router-dom";

const Closets = () => {
    const [closets, setClosets] = useState<FurnitureModel[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/closet").then((r) => {
            setClosets(r.data.data);
        })
    }, [])
    return (
        <Paper elevation={10} className="main_paper">
            <h1>Шкафы</h1>
            <div className="cards">
                {closets.map((model, index) => (
                    <ObjectCard key={index} description={model.description} image={model.image} type="closet"
                                id={model._id}/>
                ))}
            </div>
            <div style={{marginTop: 20}}>
                <Link to="/">НАЗАД</Link>
            </div>
        </Paper>
    );
};

export default Closets;