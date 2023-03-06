export interface IUserFIO {
  firstname: string;
  lastname: string;
}

export interface IUser {
  id?: number;
  email: string;
  username: string;
  name: IUserFIO;
}

export interface ILoginUser {
  username: string;
  password: string;
}

export interface IToken {
  token: string;
}
