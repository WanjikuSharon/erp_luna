import express from 'express';
import * as rawMaterialController from '../controllers/rawMaterial.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/', rawMaterialController.getAllRawMaterials);
router.post('/', rawMaterialController.createRawMaterial);
router.get('/:id', rawMaterialController.getRawMaterialById);
router.put('/:id', rawMaterialController.updateRawMaterial);
router.delete('/:id', rawMaterialController.deleteRawMaterial);

export default router;