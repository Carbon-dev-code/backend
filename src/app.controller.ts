import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Controller()
export class AppController {
  constructor(@InjectConnection() private readonly connection: Connection) { }

  @Get('users')
  async getUsers() {
    return this.connection
      .collection('users')
      .find({})
      .toArray();
  }

  @Get('user')
  fakeLogin() {
    return {
      token: 'fake-jwt-token',
    };
  }

  @Post('users')
  async createUser(@Body() body: any) {
    return this.connection
      .collection('users')
      .insertOne(body);
  }

}