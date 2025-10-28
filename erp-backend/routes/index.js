import express from 'express';
import authRoutes from './auth.routes.js';
import productRoutes from './product.routes.js';
import rawMaterialRoutes from './rawMaterial.routes.js';
import vendorRoutes from './vendor.routes.js';

const router = express.Router();

// API Routes
router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/raw-materials', rawMaterialRoutes);
router.use('/vendors', vendorRoutes);

export default router;