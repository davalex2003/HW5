import React from 'react';
import FurnitureCard from "../Components/FurnitureCard";
import './Main.css'

const Main = () => {
    return (
        <div className="main_page">
            <FurnitureCard title={"Стулья"} img="assets/chair.png" type="chairs"/>
            <FurnitureCard title={"Шкафы"} img="assets/closet.png" type="closets"/>
            <FurnitureCard title={"Столы"} img="assets/table.png" type="tables"/>
        </div>
    );
};

export default Main;