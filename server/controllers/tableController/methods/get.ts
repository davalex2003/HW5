import {RequestHandler} from "express";
import {TableModel} from "../../../models/interiorModel";

export const get: RequestHandler = async (req, res) => {
    const params = req.query;
    const data = await TableModel.find(params);
    if (data.length == 0) {
        res.json("Не найдено подходящего кухонного интерьера");
    } else {
        res.json({data});
    }
}