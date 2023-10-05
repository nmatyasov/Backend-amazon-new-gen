import { JwtPayload } from '@app/lib';
import { Request } from 'express';

interface RequestWithUser extends Request {
  user?: JwtPayload;
}

export default RequestWithUser;
