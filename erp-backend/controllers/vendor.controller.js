import * as vendorService from '../services/vendor.service.js';

/**
 * Create a new vendor
 * POST /api/vendors
 */
export const createVendor = async (req, res, next) => {
  try {
    const vendor = await vendorService.createVendor(req.body);

    res.status(201).json({
      success: true,
      message: 'Vendor created successfully',
      data: vendor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all vendors
 * GET /api/vendors
 */
export const getAllVendors = async (req, res, next) => {
  try {
    const vendors = await vendorService.getAllVendors();

    res.status(200).json({
      success: true,
      data: vendors
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get vendor by ID
 * GET /api/vendors/:id
 */
export const getVendorById = async (req, res, next) => {
  try {
    const vendor = await vendorService.getVendorById(req.params.id);

    res.status(200).json({
      success: true,
      data: vendor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update vendor
 * PUT /api/vendors/:id
 */
export const updateVendor = async (req, res, next) => {
  try {
    const vendor = await vendorService.updateVendor(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: 'Vendor updated successfully',
      data: vendor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete vendor
 * DELETE /api/vendors/:id
 */
export const deleteVendor = async (req, res, next) => {
  try {
    const result = await vendorService.deleteVendor(req.params.id);

    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    next(error);
  }
};