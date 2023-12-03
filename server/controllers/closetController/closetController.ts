import {Router} from "express";
import {post} from "./methods/post";
import {get} from "./methods/get";
import {getById} from "./methods/getById";
import {deleteById} from "./methods/deleteById";
import {put} from "./methods/put";

const router = Router();

const closetController = {
    post: post,
    get: get,
    getById: getById,
    delete: deleteById,
    put: put
}

router.post('/', closetController.post);
router.get('/', closetController.get);
router.get('/:id', closetController.getById)
router.delete('/', closetController.delete)
router.put('/', closetController.put)

export default router;