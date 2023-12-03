import {RequestHandler} from "express";
import {ChairModel} from "../../../models/interiorModel";

export const get: RequestHandler = async (req, res) => {
    const params = req.query;
    const data = await ChairModel.find(params);
    if (data.length == 0) {
        res.json("Не найдено подходящего кухонного интерьера");
    } else {
        res.json({data});
    }
}