import * as rawMaterialService from '../services/rawMaterial.service.js';

/**
 * Create a new raw material
 * POST /api/raw-materials
 */
export const createRawMaterial = async (req, res, next) => {
  try {
    const rawMaterial = await rawMaterialService.createRawMaterial(req.body);

    res.status(201).json({
      success: true,
      message: 'Raw material created successfully',
      data: rawMaterial
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all raw materials
 * GET /api/raw-materials
 */
export const getAllRawMaterials = async (req, res, next) => {
  try {
    const rawMaterials = await rawMaterialService.getAllRawMaterials();

    res.status(200).json({
      success: true,
      data: rawMaterials
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get raw material by ID
 * GET /api/raw-materials/:id
 */
export const getRawMaterialById = async (req, res, next) => {
  try {
    const rawMaterial = await rawMaterialService.getRawMaterialById(req.params.id);

    res.status(200).json({
      success: true,
      data: rawMaterial
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update raw material
 * PUT /api/raw-materials/:id
 */
export const updateRawMaterial = async (req, res, next) => {
  try {
    const rawMaterial = await rawMaterialService.updateRawMaterial(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: 'Raw material updated successfully',
      data: rawMaterial
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete raw material
 * DELETE /api/raw-materials/:id
 */
export const deleteRawMaterial = async (req, res, next) => {
  try {
    const result = await rawMaterialService.deleteRawMaterial(req.params.id);

    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    next(error);
  }
};