import { createClient } from "@supabase/supabase-js";

// 🔥 SUBSTITUA AQUI PELOS SEUS VALORES REAIS
const supabaseUrl = "https://hdhlottbgprxxztglcwq.supabase.co";  // 🔥 SUA URL AQUI
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaGxvdHRiZ3ByeHh6dGdsY3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3ODQxNTYsImV4cCI6MjA1NjM2MDE1Nn0.yqzLZouWlkAr9C5xN5INXyDCFISdyAkd6KO9th5EqVc"  // 🔥 SUA CHAVE ANON AQUI

// Criando a conexão com o Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Testando se as variáveis estão carregadas corretamente
console.log("🔍 Supabase URL:", supabaseUrl);
console.log("🔍 Supabase Key:", supabaseAnonKey);
