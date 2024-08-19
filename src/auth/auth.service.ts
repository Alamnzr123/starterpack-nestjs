import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../app.service';
import { User } from '../app.entity';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
    ) { }

    async validateUser(payload: any): Promise<User> {
        return this.userService.findByUsername(payload.username);
    }

    async login(user: User) {
        const payload = { username: user.username, sub: user.uuid };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}