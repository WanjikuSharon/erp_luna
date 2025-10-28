import prisma from '../config/prismaClient.js';
import ApiError from '../utils/ApiError.js';

/**
 * Create a new vendor
 */
export const createVendor = async (vendorData) => {
  const { name, contactInfo } = vendorData;

  const vendor = await prisma.vendor.create({
    data: {
      name,
      contactInfo
    }
  });

  return vendor;
};

/**
 * Get all vendors
 */
export const getAllVendors = async () => {
  const vendors = await prisma.vendor.findMany({
    include: {
      purchaseOrders: {
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      }
    }
  });

  return vendors;
};

/**
 * Get vendor by ID
 */
export const getVendorById = async (id) => {
  const vendor = await prisma.vendor.findUnique({
    where: { id },
    include: {
      purchaseOrders: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  });

  if (!vendor) {
    throw new ApiError(404, 'Vendor not found');
  }

  return vendor;
};

/**
 * Update vendor
 */
export const updateVendor = async (id, vendorData) => {
  // Check if vendor exists
  await getVendorById(id);

  const vendor = await prisma.vendor.update({
    where: { id },
    data: vendorData,
    include: {
      purchaseOrders: true
    }
  });

  return vendor;
};

/**
 * Delete vendor
 */
export const deleteVendor = async (id) => {
  // Check if vendor exists
  await getVendorById(id);

  await prisma.vendor.delete({
    where: { id }
  });

  return { message: 'Vendor deleted successfully' };
};