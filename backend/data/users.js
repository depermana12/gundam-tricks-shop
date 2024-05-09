import bcrypt from "bcryptjs";

const user = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("admin12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("john12345", 10),
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("jane12345", 10),
    isAdmin: false,
  },
];

export default user;
