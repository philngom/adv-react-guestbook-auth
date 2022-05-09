import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

export const parseData = ({ data, error }) => {
  if (error) throw error;

  return data;
}

