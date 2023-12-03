import {RequestHandler} from "express";
import {ClosetModel} from "../../../models/interiorModel";

export const deleteById: RequestHandler = async (req, res) => {
    const id = req.query.id;
    const data = await ClosetModel.findById(id);
    if (data === null) {
        res.status(400);
        res.json("Не найдено шкафа с таким id");
    } else {
        await ClosetModel.findByIdAndDelete(id);
        res.sendStatus(200);
    }
}