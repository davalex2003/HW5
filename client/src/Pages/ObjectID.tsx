import React, {useEffect, useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {FurnitureModel} from "../FurnitureModel";
import axios from "axios";

interface ObjectProps {
    type: string
}

const ObjectId = (props: ObjectProps) => {
    const link = `/${props.type}s`
    const {id} = useParams();
    const [object, setObject] = useState<FurnitureModel>({
        _id: "",
        color: {HEX: "", name: ""},
        description: "",
        image: "",
        material: "",
        quantity: 0,
        size: ""
    });
    const url = `http://localhost:8000/api/${props.type}/${id}`
    useEffect(() => {
        axios.get(url).then((r) => {
            setObject(r.data);
        })
    }, [url])
    return (
        <Card elevation={10} className="main_paper" style={{maxWidth: "fit-content", margin: "0 auto", maxHeight: "fit-content", paddingBottom: 15}}>
            <CardMedia
                component="img"
                alt={object.description}
                image={object.image}
                sx={{maxHeight: 340, maxWidth: 400, margin: "0 auto"}}/>
            <CardContent>
                <h1>{object.description}</h1>
                <h5>Материал: {object.material}</h5>
                <h5>Размер: {object.size}</h5>
                <h5>Цвет: {object.color.name} ({object.color.HEX})</h5>
                <h5>В наличии: {object.quantity} шт.</h5>
            </CardContent>
            <Link to={link}>
                <CardActionArea>
                    НАЗАД
                </CardActionArea>
            </Link>
        </Card>
    );
};

export default ObjectId;