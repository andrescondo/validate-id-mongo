import { Types } from 'mongoose';


export const validateIdMongo = async (id: string, message?: string): Promise<void> => {
  const err = new Error();

  if (!id) {
    err.message = "you must add an id";
    throw err;
  }

  if (!Types.ObjectId.isValid(id)) {
    err.message = message ? message : "the ID is wrong";
    throw err;
  }

  return;
};