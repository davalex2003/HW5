import {RequestHandler} from "express";
import {ClosetModel} from "../../../models/interiorModel";

export const getById: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const data = await ClosetModel.findById(id);
    if (data === null) {
        res.json("Не найдено");
    } else {
        res.json(data);
    }
}