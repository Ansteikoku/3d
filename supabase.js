import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';  // SupabaseプロジェクトのURL
const supabaseKey = 'your-public-anon-key';  // Supabaseの公開匿名キー
export const supabase = createClient(supabaseUrl, supabaseKey);
