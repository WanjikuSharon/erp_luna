import prisma from '../config/prismaClient.js';
import ApiError from '../utils/ApiError.js';

/**
 * Create a new product
 */
export const createProduct = async (productData) => {
  const { sku, name, salePrice } = productData;

  const product = await prisma.product.create({
    data: {
      sku,
      name,
      salePrice
    }
  });

  return product;
};

/**
 * Get all products
 */
export const getAllProducts = async (filters = {}) => {
  const products = await prisma.product.findMany({
    include: {
      stockItems: true,
      formula: {
        include: {
          items: {
            include: {
              rawMaterial: true
            }
          }
        }
      }
    }
  });

  return products;
};

/**
 * Get product by ID
 */
export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      stockItems: true,
      formula: {
        include: {
          items: {
            include: {
              rawMaterial: true
            }
          }
        }
      }
    }
  });

  if (!product) {
    throw new ApiError(404, 'Product not found');
  }

  return product;
};

/**
 * Update product
 */
export const updateProduct = async (id, productData) => {
  // Check if product exists
  await getProductById(id);

  const product = await prisma.product.update({
    where: { id },
    data: productData,
    include: {
      stockItems: true,
      formula: true
    }
  });

  return product;
};

/**
 * Delete product
 */
export const deleteProduct = async (id) => {
  // Check if product exists
  await getProductById(id);

  await prisma.product.delete({
    where: { id }
  });

  return { message: 'Product deleted successfully' };
};