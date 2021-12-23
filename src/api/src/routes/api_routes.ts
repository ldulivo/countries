import { Router } from 'express';
import { 
    getAll,
    getContinent,
    getList
} from '../controllers/api_controllers';

const router = Router();

router.get('/', getAll);
router.get('/continent/:continent' , getContinent);
router.get('/list', getList);

export default router;