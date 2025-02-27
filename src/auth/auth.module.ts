import { Module } from '@nestjs/common';
import { AuthController} from '../auth/auth.controller';
import { AuthService} from '../auth/auth.service'

@Module({})
export class AuthModule {
    imports: [{
      module: AuthModule,
      controllers: [AuthController],
      providers: [AuthService],  
    }]
}
