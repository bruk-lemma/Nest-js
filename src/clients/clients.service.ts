/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
    private clients: Client[] = [
        {
            id: 1,
            name: 'bruk',
            lastName: 'Lemma',
            subjects: ['javascript', 'Deep-learning'],
        },
    ];
    findAll() {
        return this.clients;
    }

    findOne(id: string) {
        return this.clients.find((client) => client.id === +id);
    }

    create(createClientDto: any) {
        this.clients.push(createClientDto);
        return createClientDto;
    }

    update(id: string, updateClientDto: any) {
        const existingClient = this.findOne(id);
        if (existingClient) {
        }
    }
    remove(id: string) {
        const clientIndex = this.clients.findIndex((client) => client.id === +id);
        if (clientIndex >= 0) {
            this.clients.splice(clientIndex, 1);
        }
    }
}
