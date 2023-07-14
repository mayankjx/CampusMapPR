const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey, {
  persistSession: false,
});

module.exports = supabase;
