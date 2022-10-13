/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    NotFoundException,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { get } from 'http';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }
    @Get('cl')
    findAll(@Query() paginationQuery) {
        return this.clientsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        // throw " A random Error ";
        console.log(typeof id);
        const client = this.clientsService.findOne('' + id);
        if (!client) {
            throw new NotFoundException(`Client #${id} not found`);
        }
        return client;
    }
    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        console.log(createClientDto instanceof CreateClientDto);
        return this.clientsService.create(createClientDto);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
        return this.clientsService.update(id, updateClientDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.clientsService.remove(id);
    }
}
