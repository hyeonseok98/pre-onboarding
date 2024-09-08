export interface loginProps {
  id: string;
  password: string;
}

export interface signUpProps extends loginProps {
  nickname: string;
}

export interface AuthStoreType {
  isLoggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  checkLogin: () => void;
}
