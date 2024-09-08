import {
  validateId,
  validateNickname,
  validatePassword,
} from "./../utils/validation";

describe("Validation Functions", () => {
  // validateId 테스트
  test("validateId: ID 길이 4이상이면 true 반환", () => {
    expect(validateId("abcd")).toBe(true);
    expect(validateId("1234aaa")).toBe(true);
  });

  test("validateId: ID 길이 4미만이면 false 반환", () => {
    expect(validateId("123")).toBe(false);
    expect(validateId("cat")).toBe(false);
  });

  // validatePassword 테스트
  test("validatePassword: password 유효성 검사를 통과하는지 테스트", () => {
    expect(validatePassword("Password1!")).toBe(true);
    expect(validatePassword("Testpassword!123")).toBe(true);
  });

  test("validatePassword: password 유효성 검사를 통과하지 못하는 케이스 테스트 ", () => {
    expect(validatePassword("pass")).toBe(false); // 8글자 미만
    expect(validatePassword("123456789123456789T!!")).toBe(false); // 20글자 초과
    expect(validatePassword("password")).toBe(false); // 대문자 없음
    expect(validatePassword("Testtest")).toBe(false); // 특수기호 없음
  });

  // validateNickname 테스트
  test("validateNickname: 닉네임 길이 2이상이면 true 반환", () => {
    expect(validateNickname("안녕")).toBe(true);
    expect(validateNickname("nickname")).toBe(true);
  });

  test("validateNickname: 닉네임 길이 2미만이면 false 반환", () => {
    expect(validateNickname("a")).toBe(false);
  });
});
