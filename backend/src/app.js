// 1. Importar o módulo Express
const express = require('express');

// 2. Criar uma instância do aplicativo Express
const app = express();

// 3. Definir a porta em que o servidor vai rodar
// Usamos 3000 ou 3001 para o backend. O frontend geralmente roda na 8080 ou 5173.
const PORT = 3001;

// 4. Criar uma rota de teste para ver se tudo está funcionando
// Quando alguém acessar a rota principal ("/") do nosso backend...
app.get('/', (req, res) => {
  // ...nós enviaremos uma resposta de sucesso.
  res.status(200).send('API da Plataforma Freela no ar! Em: ' + new Date());
});

// 5. Iniciar o servidor e fazê-lo "escutar" na porta definida
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta http://localhost:${PORT}`);
});