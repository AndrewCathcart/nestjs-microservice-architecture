import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  listMovies() {
    return { movies: ['Pulp Fiction', 'Blade Runner', 'The Hateful Eight'] };
  }
}
