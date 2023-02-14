import { Injectable,HttpStatus } from '@nestjs/common';
import { IPasajeros } from 'src/common/Interfaces/pasajeros.interface';
import { USUARIO } from '../common/models/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasajerosDto } from './dto/pasajeros.dto';

@Injectable()
export class PasajerosService {
    constructor(
        @InjectModel(USUARIO.name) private readonly modelo: Model<IPasajeros>,
      ) {}

      async insertar(pasajeroDTO: PasajerosDto): Promise<IPasajeros> {
        const newpasajero = new this.modelo({ ...pasajeroDTO });
        return newpasajero.save();
      }

      async todos(): Promise<IPasajeros[]> {
        return await this.modelo.find();
      }

      async uno(id: string): Promise<IPasajeros> {
        return await this.modelo.findById(id);
      }

      async actualizar(id: string, pasajeroDTO: PasajerosDto): Promise<IPasajeros> {
        const pasajero = new this.modelo({ ...pasajeroDTO});
        return await this.modelo.findByIdAndUpdate(id, pasajeroDTO, { new: true });
      }

      async eliminar(id: string) {
        await this.modelo.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
      }

}
