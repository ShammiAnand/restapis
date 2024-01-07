import { usersTable } from "../models/user";
import { db } from "../connections";
import { Request, Response } from "express";
import { eq, lt, gte, ne } from "drizzle-orm";

export const handleGetAllUsers = async (req: Request, res: Response) => {
  const allUsers = await db.select().from(usersTable);
  return res.json(allUsers);
};

export const handleGetUserById = async (req: Request, res: Response) => {
  const result = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(req.params.id)));
  return res.json(result);
};

export const handleCreateUser = async (req: Request, res: Response) => {
  if (
    !req.body ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email
  ) {
    return res.status(400).json({
      message: "please provide all the data keys",
    });
  }

  const result = await db
    .insert(usersTable)
    .values({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    })
    .returning({ insertedId: usersTable.id });

  res.status(200).json({
    message: "new user created",
    userDetails: result,
  });
};

export const handleDeleteUserById = async (req: Request, res: Response) => {
  const deletedUser = await db
    .delete(usersTable)
    .where(eq(usersTable.id, parseInt(req.params.id)))
    .returning();
  return res.json({
    message: "success",
    details: deletedUser,
  });
};

export const handleUpdateUserById = async (req: Request, res: Response) => {
  // const result = await User.findByIdAndUpdate(req.params.id, req.body);
  const result = await db
    .update(usersTable)
    .set({ ...req.body })
    .where(eq(usersTable.id, parseInt(req.params.id)))
    .returning();
  return res.json({
    message: "success",
    details: result,
  });
};
