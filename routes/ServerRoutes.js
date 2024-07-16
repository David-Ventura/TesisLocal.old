import { Router } from "express";
import{
    getData,
    saveTask,
    createTask,
} from "../controllers/Server.Controller.js"


const url = '/sse/v1'

const router = Router();


router.get(url+'/datos',getData)
router.post(url+'/save', saveTask)
router.post(url+'/createTask', createTask)




export default router;