import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: bcrypt.hashSync('password123', 10)
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        password: bcrypt.hashSync('password456', 10)
      },
      {
        name: 'Bob Smith',
        email: 'bobsmith@example.com',
        password: bcrypt.hashSync('password789', 10)
      }
]

export default users

