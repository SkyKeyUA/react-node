/** @format */

import { body } from 'express-validator';

export const postCreateValidation = [
  body('title', 'Enter the title of the article').isLength({ min: 3 }).isString(),
  body('text', 'Enter the text of the article').isLength({ min: 3 }).isString(),
  body('tags', 'Incorrect tags format').optional().isString(),
  body('imageUrl', 'Incorrect image link').optional().isString(),
];
