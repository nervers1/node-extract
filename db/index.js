// import { Pool } from 'pg'
import "../env.js"
import pkg from 'pg';

const {Pool} = pkg;

const config = {
    user: process.env.EXPERTDB_USER,
    host: process.env.EXPERTDB_IP,
    database: process.env.EXPERTDB_DATABASE,
    password: process.env.EXPERTDB_PASSWORD,
    port: process.env.EXPERTDB_PORT
};


// 쿼리 조회 테스트(현재시간)
const timeStamp = 'select current_timestamp AT TIME ZONE \'Asia/Seoul\' as curr';

const insertQuery = `insert into apx_matric_data (namespace, pods_name, data) values ($1, $2, $3)`;

export const pool = new Pool(config);

export const saveMatric = async (matric) => {
    const client = await pool.connect();
    try {
        await client.query(insertQuery, [matric.namespace, '', matric], (err, res) => {
            if (err) {
                console.error(err);
                client.release();
                return;
            }
            for (let row of res.rows) {
                console.log(row);
            }
            client.release();
        });
    } catch (err) {
        console.log(err);
    }
}



