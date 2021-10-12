const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const express=require("express");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("../apis/auth/index");
const helmetConfig={
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          "'self'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-inline'",
        ],
        baseUri: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", 'https:', 'data:'],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: [
          "'self'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-inline'",
          /** @by-us - adds graphiql support over helmet's default CSP */
          "'unsafe-eval'",
        ],
        upgradeInsecureRequests: [],
      },
    },
  }

  const rateLimiter = rateLimit({
    max: 200,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP, please try again in an hour!",
  });

const setMeiddlewares = (app) => {
    
    app.disable("x-powered-by")
    // secure HTTP headers
    app.use(
     helmet(helmetConfig)
   );
  
   //Enable cors
   app.use(cors());
   
   //Against brute attack
    //rate liniter
   app.use(rateLimiter);
   
   app.use(
     express.json({
       limit: "10mb",
     })
   );
   
   app.use(
     express.urlencoded({
       limit: "10mb",
       extended: false,
       parameterLimit: 10000,
     })
   );
   

   
   //xss attack - Data Sanitization
   app.use(xss());
   
   //HTTP parament pollution
   app.use(hpp());
   
   app.use("/api/v1/auth", authRouter);

    return app;
}

module.exports={
setMeiddlewares
}