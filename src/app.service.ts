import { Inject, Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './app.entity';
import { UserValidator } from './app.validator';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: Repository<User>,
  ) { }

  async validateUser(username: string, password: string): Promise<UserValidator> {
    const user = await this.usersRepository.findOne({ where: { username } });

    if (!user || user.password !== password) { // In a real application, make sure to hash the password and compare the hashed values
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async register(username: string, password: string): Promise<UserValidator> {
    const existingUser = await this.usersRepository.findOne({ where: { username } });

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const user = new User();
    user.username = username;
    user.password = password; // In a real application, make sure to hash the password before storing it

    return this.usersRepository.save(user);
  }

  create(username: string, password: string): Promise<UserValidator> {
    const user = new User();
    user.username = username;
    user.password = password;

    return this.usersRepository.save(user);
  }

  findByUsername(username: string): Promise<UserValidator> {
    return this.usersRepository.findOne({ where: { username } });
  }
}