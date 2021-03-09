export class UserData {
  exp: number;
  iat: number;
  username: string;
  password: string;
  role: string;

  constructor(userData: any) {
    this.exp = userData.exp;
    this.iat = userData.iat;
    this.password = userData.password;
    this.username = userData.username;
    this.role = userData.role;
  }
}
