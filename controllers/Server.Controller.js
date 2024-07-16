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

//guardando datos varios select

export const saveTask = async (req, res) => {
  try {
    const { titles } = req.body;  // Recibimos un array de títulos
    console.log(titles)

    if (!Array.isArray(titles) || titles.length === 0) {
      return res.status(400).json({ message: 'No titles provided' });
    }

    // Preparamos las consultas para insertar múltiples títulos
    const promises = titles.map(title =>
      pool.query("INSERT INTO tasks (title) VALUES (?)", [title])
    );

    // Ejecutamos todas las consultas en paralelo
    await Promise.all(promises);
    console.log(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const createTask = async (req, res) => {
  try {

    const { selectedOptions } = req.body;


      // Imprimir el valor recibido en la consola del servidor
  console.log('Received selectedValue:', selectedOptions);

    

    // Validar la entrada
    if (!Array.isArray(selectedOptions) || selectedOptions.length === 0) {
      return res.status(400).json({ message: 'No options selected' });
    }
/*
    if (!selectedOptions.every(option => typeof option === 'string')) {
      return res.status(400).json({ message: 'Invalid option type' });
    }
*/
    // Preparar la consulta y los valores para la inserción múltiple
    const values = selectedOptions.map(option => [option]);
    const query = 'INSERT INTO tasks (title) VALUES ?';

    await pool.query(query, [values]);

    res.status(201).json({ message: 'Tasks saved successfully' });
    
  } catch (error) {
    // Registrar el error con más contexto si es necesario
    console.error('Error saving tasks:', error);

    res.status(500).json({ message: 'Error saving tasks', error: error.message });
  }
};
