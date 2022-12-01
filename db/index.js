// import { Pool } from 'pg'
import "../env.js"
import pkg from 'pg';
const {Pool} = pkg;
const pool = new Pool({
    user: process.env.EXPERTDB_USER,
    host: process.env.EXPERTDB_IP,
    database: process.env.EXPERTDB_DATABASE,
    password: process.env.EXPERTDB_PASSWORD,
    port: process.env.EXPERTDB_PORT
})

export const client = await pool.connect();

