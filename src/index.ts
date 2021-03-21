/**
 * @todo Task list
 * @body [x] Verify if email is valid
 * [x] Remove character inregular
 * [ ] Format domain
 * [ ] Verify if this email exist
 */

import emailValidator from 'email-validator';

export const validate = (email: string): boolean => {
  return emailValidator.validate(email);
};

export interface FixEmail {
  email: string;
  valid: boolean;
}

const updateEmail = (email: string): string => {
  const removeSpace = email.replace(/ /g, '');
  const removeDuplePoint = removeSpace.replace(/\.{2,}/g, '.');

  return removeDuplePoint;
};

const fixEmail = (email: string): FixEmail => {
  if (!validate(email)) {
    const fixedEmail = updateEmail(email);

    return {
      email: fixedEmail,
      valid: validate(fixedEmail)
    };
  }

  return {
    email,
    valid: true
  };
};

export default fixEmail;
