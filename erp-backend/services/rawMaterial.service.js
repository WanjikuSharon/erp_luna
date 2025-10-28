import prisma from '../config/prismaClient.js';
import ApiError from '../utils/ApiError.js';

/**
 * Create a new raw material
 */
export const createRawMaterial = async (rawMaterialData) => {
  const { name, unit } = rawMaterialData;

  const rawMaterial = await prisma.rawMaterial.create({
    data: {
      name,
      unit
    }
  });

  return rawMaterial;
};

/**
 * Get all raw materials
 */
export const getAllRawMaterials = async () => {
  const rawMaterials = await prisma.rawMaterial.findMany({
    include: {
      stockItems: true
    }
  });

  return rawMaterials;
};

/**
 * Get raw material by ID
 */
export const getRawMaterialById = async (id) => {
  const rawMaterial = await prisma.rawMaterial.findUnique({
    where: { id },
    include: {
      stockItems: true,
      formulaItems: {
        include: {
          formula: {
            include: {
              product: true
            }
          }
        }
      }
    }
  });

  if (!rawMaterial) {
    throw new ApiError(404, 'Raw material not found');
  }

  return rawMaterial;
};

/**
 * Update raw material
 */
export const updateRawMaterial = async (id, rawMaterialData) => {
  // Check if raw material exists
  await getRawMaterialById(id);

  const rawMaterial = await prisma.rawMaterial.update({
    where: { id },
    data: rawMaterialData,
    include: {
      stockItems: true
    }
  });

  return rawMaterial;
};

/**
 * Delete raw material
 */
export const deleteRawMaterial = async (id) => {
  // Check if raw material exists
  await getRawMaterialById(id);

  await prisma.rawMaterial.delete({
    where: { id }
  });

  return { message: 'Raw material deleted successfully' };
};