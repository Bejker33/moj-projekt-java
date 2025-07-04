function validateUserData(name, email, password, age) {
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Imię musi mieć co najmniej 2 znaki');
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    errors.push('Nieprawidłowy adres email');
  }

  if (!password || password.length < 8 || !/\d/.test(password)) {
    errors.push('Hasło musi mieć co najmniej 8 znaków i zawierać cyfrę');
  }

  if (!age || age < 18) {
    errors.push('Musisz mieć co najmniej 18 lat');
  }

  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

module.exports = { validateUserData };
