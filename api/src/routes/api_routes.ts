import { Router } from 'express';
import { 
    getAll,
    getContinent
} from '../controllers/api_controllers';

const router = Router();

router.get('/', getAll);
router.get('/continent/:continent' , getContinent);

export default router;