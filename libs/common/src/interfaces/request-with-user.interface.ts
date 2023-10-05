import { JwtPayload} from './jwt-decode-response.interface';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user?: JwtPayload
}

export default RequestWithUser;
