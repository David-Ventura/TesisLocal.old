import {createPool} from 'mysql2/promise'
import mysql from 'mysql2'

export const pool = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database:'estudiantes'
}).promise();

