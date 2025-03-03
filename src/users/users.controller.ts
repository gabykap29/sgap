import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-ser.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post('create')
  createUser(@Body() newUser: CreateUserDto) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.pass, salt);
    newUser.pass = hash;
    return this.userService.createUser(newUser);
  }
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getOne(@Param() id: string) {
    const idNumber = parseInt(id);
    if (isNaN(idNumber)) {
      return this.userService.getOneUser(idNumber);
    }
  }
  @Put(':id')
  updateOne(@Param() id: string, @Body() user: CreateUserDto) {
    const idNumber = parseInt(id);
    if (isNaN(idNumber)) {
      return this.userService.updateOneUser(idNumber, user);
    }
  }
  @Put(':id/block')
  blockUser(@Param() id: string) {
    const idNumber = parseInt(id);
    if (isNaN(idNumber)) {
      return this.userService.blockUser(idNumber);
    }
  }
}
