const supabase = require("../config/supabaseClient");
const prisma = require("../config/db");
const userService = require("../services/userService");

async function getUserInfo(req, res) {
  try {
    const user = req.user;

    console.log(user);

    return res.status(200).json({ msg: "successful" });
  } catch (error) {
    console.error("Error retrieving user information:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve user information" });
  }
}

async function signUp(req, res) {
  try {
    const userObject = req.body.userObj;

    const user = await prisma.user.create({ data: userObject });

    console.log("New User created: ", user);
    const resJSON = {
      UserID: String(user.UserID),
      FirstName: user.FirstName,
      LastName: user.LastName,
      UserType: user.UserType,
      UserUUID: String(user.UserUUID),
      jwt: req.body.session.access_token,
    };

    return res.status(200).json({ data: resJSON });
  } catch (error) {
    console.log(`Error occurred during sign up : ${error}`);
    return res.status(500).json({ error: error });
  }
}

async function signIn(req, res) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) {
      console.log(error);
      res.sendStatus(401);
    }
    if (data) {
      console.log(data.session.access_token);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

module.exports = {
  getUserInfo,
  signUp,
  signIn,
};
