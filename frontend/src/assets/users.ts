
enum role {
  ADMIN = 0,
  USER = 1,
  COMPANY = 2
}

export const users = {
  'ggas@gmail.com': {
    email: 'ggas@gmail.com',
    password: '40ofariv',
    role: role.USER,
    displayname: 'Daniil S.'
  },
  'netflix@gmail.com': {
    email: 'netflix@gmail.com',
    password: 'netflix',
    role: role.COMPANY,
    displayname: 'NETFLIX'
  },
  'admin@gmail.com': {
    email: 'admin@gmail.com',
    password: 'admin',
    role: role.ADMIN,
    displayname: 'Admin'
  }
};
