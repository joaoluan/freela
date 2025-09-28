// 1. Importar o módulo Express
const express = require('express');
// Importa o middleware CORS
const cors = require('cors'); 
// 2. Criar uma instância do aplicativo Express
const app = express();
app.use(express.json());// Permite que o Express entenda JSON no corpo das requisições

// 3. Definir a porta em que o servidor vai rodar
// Usamos 3000 ou 3001 para o backend. O frontend geralmente roda na 8080 ou 5173.
app.use(cors({
    origin: 'http://localhost:5173' // URL do frontend
}));
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