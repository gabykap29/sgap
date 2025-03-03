import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async logIn(@Body('username') username: string, @Body('pass') pass: string) {
    return this.authService.logIn(username, pass);
  }
}
