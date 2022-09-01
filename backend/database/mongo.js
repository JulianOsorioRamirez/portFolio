/**
 * Conexion con la base de datos de mongoDB
 */

 const mongoose = require("mongoose");
 /* const password = process.env.mPassword;
 const dblocalM = process.env.mdblocalM */
 
 const connectionS = `mongodb+srv://julianOsorio:121314@cluster0.qetsuex.mongodb.net/test`;
 /* const connectionL = process.env.projectMoviesDB */
 
 mongoose
   .connect(connectionS, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then(() => {
     console.log("Base de datos de Mongo conectada");
   })
   .catch((err) => {
     console.error(err);
   });