import { Body, Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../app.service';
import { AuthGuard } from '@nestjs/passport';

// function logout() {
//     // Remove the JWT from local storage
//     localStorage.removeItem('access_token');
// }

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UserService,
    ) { }


    @Post('logout')
    logout() {
        // Respond with instructions for the client to delete the JWT
        return { message: 'Please delete your JWT' };
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return this.authService.validateUser(req.user);
    }

    @Post('login')
    async login(@Body('username') username: string, @Body('password') password: string) {
        const user = await this.userService.validateUser(username, password);
        return this.authService.login(user);
    }
}