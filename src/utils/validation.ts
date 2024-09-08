export const validateId = (id: string) => {
  return id.length >= 4;
};

export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z0-9])[A-Za-z\d!@#$%^&*]{8,20}$/;
  return passwordRegex.test(password);
};

export const validateNickname = (nickname: string) => {
  return nickname.length >= 2;
};
