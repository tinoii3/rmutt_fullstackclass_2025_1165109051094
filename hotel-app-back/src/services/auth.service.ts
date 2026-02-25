import { prisma } from "../lib/prisma.js";
import { findUserByUsername } from "../repository/auth.repository.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import { signToken } from "../utils/jwt.js";

export const loginService = async (
  username: string,
  password: string
) => {

  const user = await findUserByUsername(username);

  if (!user) {
    throw new Error("Invalid username or password");
  }

  const isValid = await comparePassword(password, user.user_password);

  if (!isValid) {
    throw new Error("Invalid username or password");
  }

  const token = signToken({
    sub: user.id,
    username: user.user_name,
    role: user.role
  });

  return {
    access_token: token,
    token_type: "Bearer",
    expires_in: 3600
  };
};

export const registerService = async ({
  username,
  password,
  email,
  first_name,
  last_name
}: {
  username: string;
  password: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}) => {

  const existingUser = await findUserByUsername(username);

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await hashPassword(password);

  const result = await prisma.$transaction(async (tx) => {

    const user = await tx.users.create({
      data: {
        user_name: username,
        user_password: hashedPassword,
        email,
        first_name,
        last_name,
        role: "customer"
      }
    });

    await tx.customers.create({
      data: {
        user_id: user.id
      }
    });

    return user;
  });

  const token = signToken({
    sub: result.id,
    username: result.user_name,
    role: result.role
  });

  return {
    access_token: token,
    token_type: "Bearer",
    expires_in: 3600
  };
};