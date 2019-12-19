class Statistic {
  uses: number;
  winner: number;
  defeat: number;
  CDP: number;
  reputation: number;
  active: number;
}

class Banned {
  status: boolean;
  message: string;
}

class User {
  avatar: any;
  register_userId: string;
  provider: string;
  user_ID: number;
  accessToken: string;
  givenName: string;
  familyName: string;
  nick: string;
  password: string;
  language: string;
  country: string;
  email: string;
  isAdmin: boolean;
  tournaments: number;
  rank: number;
  isDate: string;
  activeAccount: boolean;
  refLink: string;
  banned: Banned;
  balance: number;
  bonus: number;
  status: number;
  statistic: Statistic;
}

export class Users {
  [index: number]: User
}
