import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  default(counter: number): number {
    return counter;
  }

  stat(counter: number): number {
    return counter;
  }

  about(): string {
    return '<h1>Polyakov M.Y., P41091</h1>';
  }
}
