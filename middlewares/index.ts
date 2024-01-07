import fs from "fs";
import { Request, Response } from "express";

export const logger = (filename: string) => {
  return (req: Request, _res: Response, next) => {
    fs.appendFile(
      filename,
      `\n${new Date().toLocaleDateString()} [${req.method} ${req.path}]`,
      (_err: Error, _data: any) => {
        next();
      }
    );
  };
};
