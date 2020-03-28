import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MOVIE_SERVICE') private readonly movieServiceClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  listMovies() {
    const command = { cmd: 'listMovies' };
    return this.movieServiceClient.send<any>(command, []);
  }

  listUsers() {
    const command = { cmd: 'listUsers' };
    return this.userServiceClient.send<any>(command, []);
  }
}
