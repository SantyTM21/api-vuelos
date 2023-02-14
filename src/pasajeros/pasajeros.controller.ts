import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosDto } from './dto/pasajeros.dto';


@Controller('api/v1/pasajeros')
export class PasajerosController {

    constructor(private readonly pasajeroServicio:PasajerosService){}

    @Post()
    insertar(@Body() pasajeroDto:PasajerosDto){
        return this.pasajeroServicio.insertar(pasajeroDto);
    }
    @Get()
    todos(){
        return this.pasajeroServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasajeroServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajeroDto:PasajerosDto){
        return this.pasajeroServicio.actualizar(id, pasajeroDto);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasajeroServicio.eliminar(id);
    }


}
