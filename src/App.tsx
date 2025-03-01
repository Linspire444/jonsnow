import { supabase } from "./supabaseClient";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("test").select("*");
      if (error) {
        console.error("❌ Erro ao conectar ao Supabase:", error);
      } else {
        console.log("✅ Conexão com Supabase bem-sucedida!", data);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Testando conexão com Supabase...</h1>
    </div>
  );
}

export default App;
