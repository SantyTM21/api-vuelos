import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USUARIO } from 'src/common/models/models';
import { Model } from 'mongoose';
import { IVuelo } from 'src/common/Interfaces/vuelos.interface';
import { VuelosDTO } from './dto/vuelos.dto';

@Injectable()
export class VuelosService {
    constructor(
        @InjectModel(USUARIO.name) private readonly modelo: Model<IVuelo>,
      ) {}

      async insertar(vueloDTO: VuelosDTO): Promise<IVuelo> {
        const newvuelo = new this.modelo({ ...vueloDTO });
        return newvuelo.save();
      }

      async todos(): Promise<IVuelo[]> {
        return await this.modelo.find();
      }

      async uno(id: string): Promise<IVuelo> {
        return await this.modelo.findById(id);
      }

      async actualizar(id: string, vueloDTO: VuelosDTO): Promise<IVuelo> {
        const pasajero = new this.modelo({ ...vueloDTO});
        return await this.modelo.findByIdAndUpdate(id, vueloDTO, { new: true });
      }

      async eliminar(id: string) {
        await this.modelo.findByIdAndDelete(id);
        return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
      }

}
