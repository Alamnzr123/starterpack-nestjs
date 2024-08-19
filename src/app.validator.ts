import { IsString } from 'class-validator';

export class UserValidator {
    @IsString()
    uuid: string;

    @IsString()
    username: string;

    @IsString()
    password: string;
}