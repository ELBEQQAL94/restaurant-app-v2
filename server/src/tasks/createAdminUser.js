const bcrypt = require("bcryptjs");
const users = require("../../queries/users");

async function createAdminUser() {
  const user = await users.findAdmins();

  if (user.length === 0) {
    const data = {
      username: process.env.DEFAULT_ADMIN_USERNAME,
      email: process.env.DEFAULT_ADMIN_EMAIL,
      password: await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 12),
      role_id: 2,
    };
    await users.insert(data);
  }
}

createAdminUser();
