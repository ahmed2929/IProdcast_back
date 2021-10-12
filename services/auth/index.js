const pool =require("../../database/config/index")
const Joi = require('joi'); 
const {registerValidateSchem} =require('../../validation/auth/index')
const {hashPassword,generateAuthToken,generateRefreshToken} =require("../../helpers/auth/index")
const register =async (req, res) => {
    console.log(req.files[0].path)

    
    const {first_name,last_name,title,description, email, password} = req.body;
    const {error} =registerValidateSchem.valid(req.body) //validate the data
    if(error) return res.status(400).send(error.details[0].message);
   
    const { rows : user} = await pool.query('SELECT * FROM creators WHERE email = $1;', [
        email,
      ]);
    
    if(user) return res.status(400).send('User already exists');
      const hashePassword=await hashPassword(password);
    const { rows : newUser} = await pool.query('INSERT INTO creators (first_name,last_name,title,description, email, password) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;', [
        first_name,last_name,, email, hashePassword,
    ]);
    const token=generateAuthToken(newUser[0]);
    const refreshToken=generateRefreshToken(newUser[0]);
    
    res.status(201).json({
        status:201,
        data:{
            token,
            refreshToken,
            user:newUser[0]
            
        }

    });

}










module.exports={

    register,
   
}    