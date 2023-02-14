import mongoose from 'mongoose';

export const PasajerosSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  apellido: { type: String, require: true },
  email: { type: String, require: true },
  nro_vuelo: { type: String, require: true },
  
},
{
    timestamps:true
}
);

PasajerosSchema.index({nombre:1},{unique:true});
PasajerosSchema.index({email:1},{unique:true});
PasajerosSchema.index({nro_vuelo:1},{unique:true});
