import { ILoginUser, IToken, IUser } from '@types';
import { api } from '..';

export function registrationUser(data: IUser) {
  return api.post<IUser, IUser>('/users', JSON.stringify(data));
}

export function loginUser(data: ILoginUser) {
  return api.post<IToken, IToken>('/auth/login', JSON.stringify(data));
}

export function getAllUsers() {
  return api.get<IUser[], IUser[]>('/users');
}
