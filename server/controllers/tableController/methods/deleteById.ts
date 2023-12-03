import {RequestHandler} from "express";
import {TableModel} from "../../../models/interiorModel";

export const deleteById: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const data = await TableModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено стола с таким id");
    } else {
        await TableModel.findByIdAndDelete(id);
        res.sendStatus(200);
    }
}