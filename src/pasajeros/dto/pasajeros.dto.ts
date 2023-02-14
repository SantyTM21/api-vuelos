import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PasajerosDto{
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   @IsNotEmpty()
   @IsString()
   readonly apellido:string;
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   @IsNotEmpty()
   @IsString()
   readonly nro_vuelo:string;
}