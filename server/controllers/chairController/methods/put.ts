import {RequestHandler} from "express";
import {ChairModel} from "../../../models/interiorModel";

export const put: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const new_params = req.body;
    const data = await ChairModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено стула с таким id");
    } else {
        await ChairModel.findByIdAndUpdate(id, new_params);
        res.sendStatus(200);
    }
}