import { IsNotEmpty, IsString } from "class-validator";

export class VuelosDTO{
    @IsNotEmpty()
    @IsString()
   readonly id_vuelo: string;
   @IsNotEmpty()
   @IsString()
   readonly capacidad:string;
   @IsNotEmpty()
   @IsString()
   readonly itinerario:string;
   @IsNotEmpty()
   @IsString()
   readonly compañia:string;
}