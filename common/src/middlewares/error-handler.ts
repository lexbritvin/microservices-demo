import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError } from '../errors/request-validation-error';

export const errorHandler = (
  err: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  
  console.error(err);
  res.status(500).send({
    errors: [{ message: 'Something went wrong' }],
  });
};