export interface loginProps {
  id: string;
  password: string;
}

export interface signUpProps extends loginProps {
  nickname: string;
}
