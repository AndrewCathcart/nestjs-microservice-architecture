import { Controller, Inject, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('movies')
  listMovies() {
    return this.appService.listMovies();
  }

  @Get('users')
  listUsers() {
    return this.appService.listUsers();
  }
}
