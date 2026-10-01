import pgPromise from 'pg-promise';
import {join as joinPath} from 'path';
import path from 'path';
import {fileURLToPath} from 'url';
const pgp = pgPromise();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper for linking to external query files:

const sql = (file: string) => {
  const fullPath = joinPath(__dirname, file); // generating full path;
  return new pgp.QueryFile(fullPath, {minify: true});
};

// register all sql files to be used
export const users = {
  add: sql('users/create.sql'),
} as const;
