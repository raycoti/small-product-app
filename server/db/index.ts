import pgPromise from 'pg-promise';
import {type IInitOptions} from 'pg-promise';
import {config} from 'dotenv';
config()

const initOptions: IInitOptions = {/* initialization options */};

const pgp = pgPromise(initOptions);

const dbConfig = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 5432,
  database: process.env.DB || 'localhost',
  user: process.env.USER || 'tester',
  // see https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
  mx: 10, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds (default is 30s, match this lower than your infrastructure timeout)
  min: 0,
};

const db = pgp(dbConfig);

export default db;
 