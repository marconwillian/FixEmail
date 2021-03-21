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
  return removeSpace.replace(/\.{2,}/g, '.');
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
