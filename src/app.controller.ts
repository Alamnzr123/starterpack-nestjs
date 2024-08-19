import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './app.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('/')
  coba() {
    console.log("hello");
  }

  @Post('register')
  register(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.register(username, password);
  }

  @Post()
  create(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.create(username, password);
  }
}