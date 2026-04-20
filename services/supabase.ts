
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const isConfigured = supabaseUrl && supabaseAnonKey && supabaseUrl !== 'YOUR_SUPABASE_URL';

if (!isConfigured) {
  console.error("CRITICAL: Supabase URL or Anon Key is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your Project Settings.");
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co', 
  supabaseAnonKey || 'placeholder-key'
);

export const checkSupabaseConfig = () => {
  if (!isConfigured) {
    throw new Error("KONFIGURASI_MISSING: Silakan masukkan Supabase URL dan API Key di menu Settings (Project Secrets) untuk menghubungkan database.");
  }
};
