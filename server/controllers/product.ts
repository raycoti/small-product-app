import type {Request, Response} from 'express';
import db from '../db/index.ts';
import {users as sql} from '../db/sql/index.ts';

const ProductController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const data = await db.any('SELECT * FROM products');
      res.json(data);
    } catch (err) {
      console.log('error getting products', err);
    }
  },
  createNew: async (req: Request, res: Response) => {
    try {
      const productName = req.body?.name || ('' as string);
      if (!req.body && !(productName.length > 0)) {
        throw new Error('missing name property in payload');
      }
      const data = await db.one(sql.add, {name: productName});
      res.status(201).json(data);
    } catch (err) {
      console.log('error creating products', err);
    }
  },
};

export default ProductController;
