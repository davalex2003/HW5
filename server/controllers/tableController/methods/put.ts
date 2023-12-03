import {RequestHandler} from "express";
import {TableModel} from "../../../models/interiorModel";

export const put: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const new_params = req.body;
    const data = await TableModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено стула с таким id");
    } else {
        await TableModel.findByIdAndUpdate(id, new_params);
        res.sendStatus(200);
    }
}