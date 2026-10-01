# Prerequisites

Node version 22 or above.
Postgres 13 or above

# Database setup

I used `pgAdmin 4` to Register a server and database
add a .env file in the `server` directory. Use `.env.example` as a base and replace the values with your postgress database info

If using `pgAdmin 4` this info can be found going to `your server` -> `Properties` -> `Connection`

SQL query for creating the products table;

```
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
);
```

If using `pgAdmin 4` you can paste directly into the `Query Tool`

# Start backend

in one terminal window/tab run:

> `cd server`
>
> `npm install`
>
> `npm run start`

# Start frontend

In another terminal window/tab run

> `cd client`
>
> `npm install`
>
> `npm run dev`

# Verify

open http://localhost:3000
create a product named mops, and confirm it appears in the list

# Notes

The main deviation from the prefered stack was the usage of a node and express server instead of the preferred spring boot backend

This was mainly done to honor the desired time and scope of this project as most of my backend experience has been with node and express. I utilized [Vite](https://vite.dev/guide/) to initiate the react front end portion.
