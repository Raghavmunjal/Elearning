import userSchema from "../models/userModel";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import generateToken from "../utils/generateToken";

//@desc   Register User
//@routes POST /api/user/register
//@access PUBLIC
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
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

//@desc   Login User
//@routes POST /api/user/login
//@access PUBLIC
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userSchema.findOne({ email }).exec();

    if (!user)
      return res.status(400).send("Befor login, Please register your account");

    const isValidPassword = await comparePassword(password, user.password);

    if (isValidPassword === false)
      return res.status(400).send("Incorrect Password");

    const token = generateToken(user._id);

    user.password = undefined;

    // send token in cookie
    // when user successfully logs in server send the cookie response so this token will be accessible for the browser so browser whenever making request to backend this token is automatically included.
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true // only work on https in production with ssl certificates
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

//@desc   Logout User
//@routes GET /api/user/logout
//@access PUBLIC
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Sign out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};

//@desc   check valid token
//@routes GET /api/user/isvalid
//@access PUBLIC
export const currentUser = async (req, res) => {
  try {
    const user = await userSchema
      .findById(req.user._id)
      .select("-password")
      .exec();
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error try again");
  }
};
