import fixEmail, { validate } from '../src/index';

describe('VALIDATE', () => {
  it('can verify if email is valid', async () => {
    const email = 'marcon@email.dev';

    expect(validate(email)).toEqual(true);
  });
  it('can verify if email is not valid', async () => {
    const email = 'marcon@email.;dev';

    expect(validate(email)).toEqual(false);
  });
});

describe('FIX EMAIL', () => {
  it('can remove double dot.', async () => {
    const email = 'marcon@email..dev';

    expect(fixEmail(email).email).toEqual('marcon@email.dev');
    expect(fixEmail(email).valid).toEqual(true);
  });
  it('can remove space and double dot.', async () => {
    const email = 'ma rcon @email..dev';

    expect(fixEmail(email).email).toEqual('marcon@email.dev');
    expect(fixEmail(email).valid).toEqual(true);
  });
});
