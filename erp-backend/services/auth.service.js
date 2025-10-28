import prisma from '../config/prismaClient.js';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.utils.js';
import ApiError from '../utils/ApiError.js';

/**
 * Register a new user
 */
export const registerUser = async (userData) => {
  const { email, name, password, role } = userData;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new ApiError(400, 'User with this email already exists');
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: role || 'SALES'
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true
    }
  });

  // Generate token
  const token = generateToken({ id: user.id, email: user.email, role: user.role });

  return { user, token };
};

/**
 * Login user
 */
export const loginUser = async (credentials) => {
  const { email, password } = credentials;

  // Find user
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Check password
  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Generate token
  const token = generateToken({ id: user.id, email: user.email, role: user.role });

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
};