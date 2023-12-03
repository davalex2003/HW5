import {RequestHandler} from "express";
import {ChairModel, ClosetModel} from "../../../models/interiorModel";

export const put: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const new_params = req.body;
    const data = await ClosetModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено стула с таким id");
    } else {
        await ClosetModel.findByIdAndUpdate(id, new_params);
        res.sendStatus(200);
    }
}