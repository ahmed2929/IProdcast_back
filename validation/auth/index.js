const Joi = require('joi');

const registerSchema = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(40)
        .required(),
    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(40)
        .required(),
    title: Joi.string()
        .alphanum()
        .min(3)
        .max(40)
        .required(),    
        

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        ,
    
});
 
const loginSchema = Joi.object({
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()

    
    
});
 

module.exports={
    registerValidateSchem:registerSchema,
    loginvalidationSchema:loginSchema
}