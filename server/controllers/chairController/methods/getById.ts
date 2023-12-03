import {RequestHandler} from "express";
import {ChairModel} from "../../../models/interiorModel";

export const getById: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const data = await ChairModel.findById(id);
    if (data === null) {
        res.json("Не найдено");
    } else {
        res.json(data);
    }
}