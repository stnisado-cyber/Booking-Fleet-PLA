
import { createClient } from '@supabase/supabase-js';

// Pak/Bu, jika URL & Key di 'Secrets' tetap tidak terbaca, 
// silakan tempel langsung (hard-code) di kutip kosong di bawah ini:
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''; 
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validasi sederhana agar tidak crash "Invalid supabaseUrl" saat dijalankan di Vercel
const safeUrl = (supabaseUrl && supabaseUrl.startsWith('http')) ? supabaseUrl : 'https://vfi5ypabjtwj5qve5tyikn.supabase.co';
const safeKey = supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy';

export const supabase = createClient(safeUrl, safeKey);
