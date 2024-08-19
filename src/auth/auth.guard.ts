import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getProtectedResource() {
        // This route is protected by the AuthGuard with the 'jwt' strategy
        // If the request includes a valid JWT, this handler will be called
        // If not, the request will be denied
    }
}