import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-ser.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
  getUsers() {
    return this.userRepository.find();
  }
  async getOneUser(id: number) {
    const user = await this.userRepository.findOne({
      where: { id: id },
      select: [
        'id',
        'username',
        'names',
        'lastname',
        'role',
        'createdAt',
        'state',
        'created_by',
      ],
    });
    return user;
  }
  getOneUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username: username });
  }
  updateOneUser(id: number, user: CreateUserDto) {
    return this.userRepository.update(id, user);
  }
  blockUser(id: number) {
    return this.userRepository.update(id, { state: false });
  }
}
