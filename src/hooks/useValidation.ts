import {
  validateId,
  validateNickname,
  validatePassword,
} from "@/utils/validation";
import { useState } from "react";

const useValidation = () => {
  const [errorMessages, setErrorMessages] = useState({
    idError: "",
    passwordError: "",
    nicknameError: "",
  });

  const validateForm = (id: string, password: string, nickname?: string) => {
    let isValid = true;

    const newErrors = {
      idError: "",
      passwordError: "",
      nicknameError: "",
    };

    if (!validateId(id)) {
      newErrors.idError = "아이디는 4글자 이상이어야 합니다.";
      isValid = false;
    }

    if (!validatePassword(password)) {
      newErrors.passwordError =
        "비밀번호는 8~20자리이며, 대문자, 숫자, 특수문자를 최소 1개 이상 포함해야 합니다.";
      isValid = false;
    }

    if (!nickname) {
      newErrors.nicknameError = "닉네임을 입력하세요.";
      isValid = false;
    } else if (!validateNickname(nickname)) {
      newErrors.nicknameError = "닉네임은 2글자 이상이어야 합니다.";
      isValid = false;
    }

    setErrorMessages(newErrors);

    return isValid;
  };

  return {
    errors: errorMessages,
    validateForm,
  };
};

export { useValidation };
