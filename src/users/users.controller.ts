import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Get /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    //params type string
    return this.usersService.findOne(+id); // unary + convert str to num
  }

  @Post() // Post /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // Patch /users/:id
  update(
    @Param('id') id: string,
    @Body()
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, updatedUser);
  }

  @Delete(':id') // Delete /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
