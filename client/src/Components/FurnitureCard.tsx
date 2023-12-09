import React from 'react';
import {Card, CardActions, CardMedia, Button} from "@mui/material";
import {Link} from "react-router-dom";
import './FurnitureCard.css'
interface FurnitureCardProps {
    title: string,
    img: string,
    type: string
}
const FurnitureCard:React.FC<FurnitureCardProps> = (props) => {
    const link = `/${props.type}`
    return (
        <Card sx={{ maxWidth: 345 }} elevation={20} className="furniture_card">
            <CardMedia
                component="img"
                alt={props.title}
                image={props.img}
            />
            <CardActions>
                <Link to={link}><Button size="large" className="button">{props.title}</Button></Link>
            </CardActions>
        </Card>
    );
};

export default FurnitureCard;