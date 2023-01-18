import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class ValidateTokenMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: (error?: UnauthorizedException) => void) {
    try {
      const header = req.headers.authorization;
      const token = header.split(' ')[1];
      const auth = getAuth();
      await auth.verifyIdToken(token);
      return next();
    } catch (error) {
      const unauthorizedException = new UnauthorizedException('UNAUTHORIZED');
      return next(unauthorizedException);
    }
  }
}
