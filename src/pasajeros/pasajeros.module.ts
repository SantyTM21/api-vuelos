import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USUARIO } from '../common/models/models';
import { PasajerosSchema } from './schema/pasajeros.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name:USUARIO.name,
        useFactory:()=>{
          return PasajerosSchema;
        }
      }
    ])
  ],
  controllers: [PasajerosController],
  providers: [PasajerosService]
})
export class PasajerosModule {}
