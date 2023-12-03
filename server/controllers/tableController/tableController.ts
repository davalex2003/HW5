import {Router} from "express";
import {post} from "./methods/post";
import {get} from "./methods/get";
import {getById} from "./methods/getById";
import {deleteById} from "./methods/deleteById";
import {put} from "./methods/put";

const router = Router();

const tableController = {
    post: post,
    get: get,
    getById: getById,
    delete: deleteById,
    put: put
}

router.post('/', tableController.post);
router.get('/', tableController.get);
router.get('/:id', tableController.getById);
router.delete('/', tableController.delete)
router.put('/', tableController.put)

export default router;