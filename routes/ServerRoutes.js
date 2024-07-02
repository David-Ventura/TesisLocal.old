import { Router } from "express";
import{
    getData,
} from "../controllers/Server.Controller.js"


const url = '/sse/v1'

const router = Router();


router.get(url+'/datos',getData)



export default router;