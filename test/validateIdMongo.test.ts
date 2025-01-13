import { validateIdMongo } from '../src/index';

describe('validateIdMongo', () => {
  it('should throw an error if id is not provided', async () => {
    await expect(validateIdMongo('')).rejects.toThrow('you must add an id');
  });

  it('should throw an error if id is invalid', async () => {
    await expect(validateIdMongo('invalid-id')).rejects.toThrow('the ID is wrong');
  });

  it('should not throw an error if id is valid', async () => {
    const validId = '507f1f77bcf86cd799439011'; // Un ID de MongoDB válido
    await expect(validateIdMongo(validId)).resolves.toBeUndefined();
  });

  it('should throw a custom error message if provided', async () => {
    await expect(validateIdMongo('invalid-id', 'custom error message')).rejects.toThrow('custom error message');
  });
});
