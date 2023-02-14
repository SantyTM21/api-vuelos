import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosDTO } from './dto/vuelos.dto';

@Controller('api/v1/vuelos')
export class VuelosController {

    constructor(private readonly vuelosServicio:VuelosService){}

    @Post()
    insertar(@Body() vuelosDTO:VuelosDTO){
        return this.vuelosServicio.insertar(vuelosDTO);
    }

    @Get()
    todos(){
        return this.vuelosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.vuelosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() vueloDTO:VuelosDTO){
        return this.vuelosServicio.actualizar(id, vueloDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.vuelosServicio.eliminar(id);
    }

}
