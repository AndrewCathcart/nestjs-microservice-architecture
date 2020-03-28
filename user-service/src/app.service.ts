import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  listUsers() {
    return { users: ['Andy'] };
  }
}
