declare namespace AuthTypes {
  interface User {
    token: string;
    username: string;
    image: string;
  }

  interface AuthResponse {
    user: User;
  }

  interface Payload {
    user: {
      username: string;
      password: string;
    };
  }
}
