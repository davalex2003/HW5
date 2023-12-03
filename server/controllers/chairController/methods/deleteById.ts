import {RequestHandler} from "express";
import {ChairModel} from "../../../models/interiorModel";

export const deleteById: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const data = await ChairModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено стула с таким id");
    } else {
        await ChairModel.findByIdAndDelete(id);
        res.sendStatus(200);
    }
}