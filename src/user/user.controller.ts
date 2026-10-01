
import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUser(@Query('name') name?: string) {
    const users = [
      {
        id: 1,
        name: 'Azhar Elahi',
      },
      {
        id: 2,
        name: 'Hammad',
      },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }

    return users;
  }
}