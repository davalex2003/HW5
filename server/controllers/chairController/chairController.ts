import {Router} from "express";
import {post} from "./methods/post";
import {get} from "./methods/get";
import {getById} from "./methods/getById";
import {deleteById} from "./methods/deleteById";
import {put} from "./methods/put";

const router = Router();

const chairController = {
    post: post,
    get: get,
    getById: getById,
    delete: deleteById,
    put: put
}

router.post('/', chairController.post);
router.get('/', chairController.get);
router.get('/:id', chairController.getById)
router.delete('/', chairController.delete)
router.put('/', chairController.put)

export default router;