import {RequestHandler} from "express";
import {TableModel} from "../../../models/interiorModel";

export const getById: RequestHandler = async (req, res) => {
    const id = {"_id": req.params.id}
    const data = await TableModel.find(id);
    if (data === null) {
        res.json("Не найдено");
    } else {
        res.json(data);
    }
}