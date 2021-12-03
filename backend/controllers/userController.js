import userSchema from "../models/userModel";
import { hashPassword, comparePassword } from "../utils/bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).send("Name is required");

    if (!password || password.length < 8)
      return res
        .status(400)
        .send("Password is required and should be min 8 characters long");
    const existUser = await userSchema.findOne({ email }).exec();

    if (existUser) return res.status(400).send("Email is already in use");

    const hashedPassword = await hashPassword(password);

    const user = new userSchema({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.json({ success: true });
  } catch (error) {
    console.log(err);
    return res.status(400).send("Error try again");
  }
};
