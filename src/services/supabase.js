import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bmoctgevtbypbcgbkmbi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtb2N0Z2V2dGJ5cGJjZ2JrbWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1Mzk3MjcsImV4cCI6MjAwMjExNTcyN30.WujzyA6gwXGNG055kcVUUkpLxEfwPPbRAAtIqSZj3U0";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
