import info from './collect.js'
import {client} from './db/index.js'
const matric = info;
console.log(matric);

const timeStamp = 'select current_timestamp as curr';
client.query(timeStamp, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});