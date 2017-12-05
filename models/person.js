
/* 
 * Modelo de datos 
 * @module 
 * @author 
*/

let mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

let log = App.log.child({module:'model Schema'}); //<-Sustituir por el nombre

let modelSchema = new Schema({
  // Ejemplo de Modelo
  nombre   : {type: String},  // Nombre
  apellido : {type: String},  // Apellido
  edad     : {type: Number},  // Edad
  direccion: {type: String}  // Dirección
  // cDate    : {type: Date,     // fecha de creación
  //          default: Date.now} 
});

// Static Method Example
// personaSchema.statics.hello = function(args){
//   return "Hello men";
// };

module.exports = modelSchema; 
