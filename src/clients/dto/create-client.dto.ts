/* eslint-disable prettier/prettier */

import { IsString } from "class-validator";

export class CreateClientDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly lastName: string;

    @IsString({ each: true })
    readonly subjects: string[];
}
