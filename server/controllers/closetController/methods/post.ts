import {RequestHandler} from "express";
import {ClosetModel} from "../../../models/interiorModel";

export const post: RequestHandler = async (req, res) => {
    if ("size" in req.body && "material" in req.body && "color" in req.body && "name" in req.body.color && "HEX" in req.body.color) {
        await ClosetModel.create(req.body);
        res.sendStatus(200);
    } else {
        res.status(400);
        res.json("Не хватает необходимых параметров")
    }
}