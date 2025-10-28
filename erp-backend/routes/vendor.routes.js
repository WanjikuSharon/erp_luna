import express from 'express';
import * as vendorController from '../controllers/vendor.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.get('/', vendorController.getAllVendors);
router.post('/', vendorController.createVendor);
router.get('/:id', vendorController.getVendorById);
router.put('/:id', vendorController.updateVendor);
router.delete('/:id', vendorController.deleteVendor);

export default router;