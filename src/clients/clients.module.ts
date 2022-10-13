/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { Client, ClientSchema } from './entities/client.entity';

@Module({
    imports: [MongooseModule.forFeature([{
        name: Client.name,
        schema: ClientSchema
    }])], controllers: [ClientsController], providers: [ClientsService]
})
export class ClientsModule { }
