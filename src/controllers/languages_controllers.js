//En este archivo se hace toda la lógica que se exportará a el archivo de routes.
import {getConnection} from "./../database/database"

const getLanguages= async(req, res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, lenguaje, programadores FROM languages")
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getLanguage= async(req, res)=>{
    try {
        console.log(req.params); 
        const {id} =req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, lenguaje, programadores FROM languages WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage = async(req, res) =>{
    try{
        const { lenguaje, programadores }= req.body;
        const language = {lenguaje , programadores};

        if (lenguaje===undefined || programadores === undefined){
            res.status(400).json({message:"Bad request. Please fill all the fields."});
        }
        const connection = await getConnection();
        await connection.query("INSERT INTO languages SET ?", language);     
        res.json({message:"Language added."});

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage= async(req, res)=>{
    try {
        const {id} =req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM languages WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLanguage= async(req, res)=>{
    try {
        const {id} =req.params;
        const {lenguaje, programadores} = req.body; 
        if (id===undefined || lenguaje===undefined||programadores === undefined){
            res.status(400).json({message:"Bad request. Please fill all the fields."});
        }

        const language = {id, lenguaje, programadores}; 
        const connection = await getConnection(); 
        const result = await connection.query("UPDATE languages SET ? WHERE id = ?", [language, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    deleteLanguage,
    updateLanguage
};