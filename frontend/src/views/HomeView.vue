<script setup>
// Importa as ferramentas 'ref' e 'onMounted' do Vue
import { ref, onMounted } from 'vue';

// Cria uma "variável reativa" para guardar a mensagem da API.
// 'ref' significa que se o valor dela mudar, a página será atualizada automaticamente.
const messageFromApi = ref('Carregando mensagem da API...');

// A função onMounted executa o código dentro dela assim que o componente é "montado" na tela.
onMounted(async () => {
  try {
    // Usa a função 'fetch' do navegador para fazer uma requisição para o nosso backend
    const response = await fetch('http://localhost:3001/');

    // Pega a resposta e a converte para texto
    const data = await response.text();

    // Atualiza o valor da nossa variável reativa com a mensagem recebida
    messageFromApi.value = data;

  } catch (error) {
    // Se der algum erro na comunicação, mostra uma mensagem de erro
    messageFromApi.value = 'Erro ao conectar com a API.';
    console.error('Erro:', error);
  }
});
</script>

<template>
  <main>
    <h1>Bem-vindo à Plataforma Freela!</h1>
    <div class="api-message">
      <h2>Status da Conexão com o Backend:</h2>
      <p>{{ messageFromApi }}</p>
    </div>
  </main>
</template>

<style scoped>
.api-message {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>