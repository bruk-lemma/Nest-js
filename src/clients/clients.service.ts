/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
    //private clients: Client[] = [];

    constructor(
        @InjectModel(Client.name) private readonly clientModel: Model<Client>
    ) { }

    findAll() {
        return this.clientModel.find().exec();
    }

    async findOne(id: string) {
        const client = await this.clientModel.findOne({ _id: id }).exec();
        if (!client) {
            throw new NotFoundException(`client with ${id} not found`);
        }
        return client;
    }

    create(createClientDto: CreateClientDto) {
        const client = new this.clientModel(createClientDto);
        return client.save();
    }

    async update(id: string, updateClientDto: UpdateClientDto) {
        const existingClient = await this.clientModel
            .findOneAndUpdate({ _id: id }, { $set: updateClientDto }, { new: true })
            .exec();
        if (!existingClient) {
            throw new NotFoundException(`client ${id} not found`)
        }
        return existingClient;

    }
    async remove(id: string) {
        const client = await this.findOne(id)
        return client.remove();

    }
}
