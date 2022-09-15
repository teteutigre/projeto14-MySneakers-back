import { Router } from 'express';
import { validateToken } from '../middlewares/validateToken.js'
import { getProducts } from '../controllers/productController.js'; 

const producRouter = express.Router();

router.get("/products", validateToken(req, res, next), getProducts);

export default producRouter