const { validateUserData } = require('./userValidator');

describe('validateUserData', () => {
  test('should pass validation for valid data', () => {
    const result = validateUserData('Anna', 'anna@example.com', 'haslo123', 25);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('should fail for short name', () => {
    const result = validateUserData('A', 'anna@example.com', 'haslo123', 25);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Imię musi mieć co najmniej 2 znaki');
  });

  test('should fail for invalid email', () => {
    const result = validateUserData('Anna', 'niepoprawnyemail', 'haslo123', 25);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Nieprawidłowy adres email');
  });

  test('should fail for weak password', () => {
    const result = validateUserData('Anna', 'anna@example.com', 'haslo', 25);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Hasło musi mieć co najmniej 8 znaków i zawierać cyfrę');
  });

  test('should fail for age under 18', () => {
    const result = validateUserData('Anna', 'anna@example.com', 'haslo123', 16);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('Musisz mieć co najmniej 18 lat');
  });
});
