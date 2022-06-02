export interface User {
  expiration: string;
  token: string;
  user: {
    userId: string,
    userName: string,
    email: string,
  },
}
