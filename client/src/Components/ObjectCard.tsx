import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import './FurnitureCard.css'
import {Link} from 'react-router-dom';

interface ObjectCardProps {
    description?: string,
    image?: string,
    id: string,
    type: string
}

const ObjectCard = (props: ObjectCardProps) => {
    const link = `/${props.type}s/${props.id}`;
    return (
        <div>
                <Card sx={{maxWidth: 345}} elevation={10} className="furniture_card">
                    <Link to={link}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={props.description}
                            image={props.image}
                            sx={{maxHeight: 345, maxWidth: 345}}
                        />
                        <CardContent>
                            {props.description}
                        </CardContent>
                    </CardActionArea>
                    </Link>
                </Card>
        </div>
    );
};

export default ObjectCard;