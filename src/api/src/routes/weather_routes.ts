import { Router } from "express";
import { gteInfo } from "../controllers/weather_controllers";

const router = Router();

router.get('/:country', gteInfo)

export default router;