import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-ser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('create')
  createUser(@Body() newUser: CreateUserDto) {
    return this.userService.createUser(newUser);
  }
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
