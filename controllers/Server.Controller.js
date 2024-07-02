import {pool} from '../Config/db.js'

import express from 'express';

//Extrayendo datos completos de la tabla
export const getData = async (req, res)=>{
    try{
        const [result] = await pool.query(
                "SELECT * FROM tasks ORDER BY createAt ASC limit 5"
        );
        res.json(result);
        console.log(result)
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}
