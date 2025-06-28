import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8080;

// Caminho absoluto para a pasta onde o Vite gera os arquivos
const distPath = path.resolve("dist/public");

app.use(express.static(distPath));

// fallback para SPA
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
