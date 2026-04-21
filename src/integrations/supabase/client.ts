import { createClient } from '@supabase/supabase-js';

// URL & KEY HARDCODED (Sesuai permintaan user untuk fix blank screen)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://vfi5ypabjtwj5qve5tyikn.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2Y3d1YXZ0dWZhYnNjdXRtd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NTM1MzgsImV4cCI6MjA4NTUyOTUzOH0.4lGc67f122ZMZ0b7FXCO6mLlIJveG82ADxB6JzSiV7E';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
