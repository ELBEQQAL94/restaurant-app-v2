const bcrypt = require("bcryptjs");
const users = require("../../queries/users");

async function createAdminUser() {
  // find user who have role === "admin"
  // const user = await User.findOne({ role: 'admin' });
  const user = await users.findAdmins();

  if (!user) {
    const data = {
      username: process.env.DEFAULT_ADMIN_USERNAME,
      email: process.env.DEFAULT_ADMIN_EMAIL,
      password: await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 12),
      active: true,
      role_id: "admin",
    };

    User.create(data);
  }
}

createAdminUser();
