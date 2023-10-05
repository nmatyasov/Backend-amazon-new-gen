export enum RolesEnum {
  ADMIN = 'admin',
  USER = 'user',
}

export interface JwtPayload {
  id: string;
  email: string;
  roles?: RolesEnum[];
  iat?: number;
  exp?: number;
  avatar?: string;
  fullname: string;
  refreshToken?: string;
}
