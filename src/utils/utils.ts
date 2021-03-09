import { EMAIL_REGEX } from "constants/constants";

export function isEmailValid(value: string): boolean {
  return EMAIL_REGEX.test(value);
}
