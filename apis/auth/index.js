const express=require('express');
const Router=express.Router();
const {register}=require('../../services/auth/index')
const upload=require('../../helpers/general/uploadFiles')
Router.post('/register',upload.any('img'),register);



module.exports=Router