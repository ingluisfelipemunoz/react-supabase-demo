import { createClient } from "@supabase/supabase-js";
import { DbConfig } from "./db-config.const";

export const supabase = createClient(
  DbConfig.supaabseUrl,
  DbConfig.supabaseAnonKey
);
