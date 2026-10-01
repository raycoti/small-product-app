import {Router} from 'express';
import ProductController from '../controllers/product.ts';

const router = Router();
const routePath = '/api/products' as const;

router.get(routePath, ProductController.getAll);
router.post(routePath, ProductController.createNew);

export default router;