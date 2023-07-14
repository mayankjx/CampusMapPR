const supabase = require("../config/supabaseClient");
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
    const { data, error } = await supabase.auth.signUp({
      email: req.body.email,
      password: req.body.password,
    });

    if (error) {
      console.log(error);
    }
    console.log(data);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500);
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
