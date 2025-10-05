<template>
  <div class="landing-page">
    <!-- Header/Navigation -->
    <header class="header">
      <nav class="nav-container">
        <div class="logo">
          <h1>Freela</h1>
        </div>
        <div class="nav-links">
          <a href="#como-funciona">Como Funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
          <button class="btn-login">Login</button>
        </div>
        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Encontre o Talento Certo para Seu Restaurante, 
          <span class="highlight">Instantaneamente</span>
        </h1>
        <p class="hero-subtitle">
          Conectamos seu negócio aos melhores freelancers da gastronomia, 
          de forma rápida e eficiente.
        </p>
        <div class="hero-actions">
          <button class="btn-primary">Cadastre Seu Restaurante</button>
          <button class="btn-secondary">Saiba Mais</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-image-placeholder">
          <!-- Placeholder para imagem/vídeo de fundo -->
          <div class="restaurant-scene">
            <div class="chef-icon">👨‍🍳</div>
            <div class="waiter-icon">🍽️</div>
            <div class="barista-icon">☕</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Como Funciona Section -->
    <section id="como-funciona" class="how-it-works">
      <div class="container">
        <h2 class="section-title">Contratar Freelancers Nunca Foi Tão Fácil</h2>
        <div class="steps">
          <div class="step">
            <div class="step-icon">📝</div>
            <h3>Publique Sua Vaga</h3>
            <p>Descreva a função, horário e pagamento. Nossa plataforma cuida do resto.</p>
          </div>
          <div class="step">
            <div class="step-icon">👥</div>
            <h3>Receba Candidaturas Qualificadas</h3>
            <p>Acesse perfis detalhados e avaliações de freelancers experientes.</p>
          </div>
          <div class="step">
            <div class="step-icon">✅</div>
            <h3>Contrate e Gerencie</h3>
            <p>Escolha o profissional ideal e gerencie tudo em um só lugar.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios Section -->
    <section id="beneficios" class="benefits">
      <div class="container">
        <h2 class="section-title">Por Que Escolher o Freela para Seu Negócio?</h2>
        <div class="benefits-grid">
          <div class="benefit">
            <div class="benefit-icon">🔄</div>
            <h3>Flexibilidade</h3>
            <p>Contrate apenas quando precisar, otimizando custos e equipe.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">⭐</div>
            <h3>Qualidade</h3>
            <p>Acesso a uma rede de profissionais verificados e avaliados.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">⚡</div>
            <h3>Agilidade</h3>
            <p>Preencha vagas urgentes em horas, não em dias.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🔍</div>
            <h3>Transparência</h3>
            <p>Avaliações e histórico de trabalho para decisões seguras.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos Section -->
    <section id="depoimentos" class="testimonials">
      <div class="container">
        <h2 class="section-title">O Que Nossos Parceiros Dizem</h2>
        <div class="testimonials-grid">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"O Freela transformou a forma como lidamos com picos de demanda. Encontramos talentos incríveis em tempo recorde!"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👩‍🍳</div>
              <div class="author-info">
                <h4>Chef Ana</h4>
                <span>Restaurante Sabor Divino</span>
              </div>
            </div>
          </div>
          <div class="testimonial">
            <div class="testimonial-content">
              <p>"A plataforma é intuitiva e nos deu a flexibilidade que precisávamos sem comprometer a qualidade."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👨‍💼</div>
              <div class="author-info">
                <h4>João Silva</h4>
                <span>Gerente do Café Urbano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final Section -->
    <section class="final-cta">
      <div class="container">
        <h2>Pronto para Otimizar Sua Equipe?</h2>
        <p>Junte-se a centenas de restaurantes que já estão transformando sua operação com o Freela.</p>
        <button class="btn-primary large">Comece Agora - Cadastre Seu Restaurante</button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Freela</h3>
            <p>Conectando talentos aos melhores restaurantes.</p>
          </div>
          <div class="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#termos">Termos de Serviço</a></li>
              <li><a href="#privacidade">Política de Privacidade</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Redes Sociais</h4>
            <div class="social-links">
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
              <a href="#" class="social-link">💼</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Freela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo h1 {
  font-size: 28px;
  font-weight: 700;
  color: #ff6b35;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6b35;
}

.btn-login {
  background: transparent;
  border: 2px solid #ff6b35;
  color: #ff6b35;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: #ff6b35;
  color: white;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #1a1a1a;
  margin: 3px 0;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 20px 50px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
}

.highlight {
  color: #ff6b35;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6c757d;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background: #ff6b35;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  background: #e55a2b;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
}

.btn-primary.large {
  padding: 20px 40px;
  font-size: 1.2rem;
}

.btn-secondary {
  background: transparent;
  color: #1a1a1a;
  border: 2px solid #1a1a1a;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #1a1a1a;
  color: white;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #ff6b35, #ffa726);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.restaurant-scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.chef-icon, .waiter-icon, .barista-icon {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.waiter-icon {
  animation-delay: -1s;
}

.barista-icon {
  animation-delay: -2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Sections */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #1a1a1a;
}

/* Como Funciona */
.how-it-works {
  padding: 100px 0;
  background: white;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.step {
  text-align: center;
  padding: 40px 20px;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.step h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.step p {
  color: #6c757d;
  line-height: 1.6;
}

/* Benefícios */
.benefits {
  padding: 100px 0;
  background: #f8f9fa;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.benefit {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.benefit:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.benefit h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.benefit p {
  color: #6c757d;
  line-height: 1.6;
}

/* Depoimentos */
.testimonials {
  padding: 100px 0;
  background: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.testimonial {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 15px;
  border-left: 4px solid #ff6b35;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin-bottom: 30px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 15px;
}

.author-avatar {
  font-size: 2.5rem;
}

.author-info h4 {
  font-weight: 600;
  color: #1a1a1a;
}

.author-info span {
  color: #6c757d;
  font-size: 0.9rem;
}

/* CTA Final */
.final-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #ff6b35, #ffa726);
  color: white;
  text-align: center;
}

.final-cta h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.final-cta p {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.final-cta .btn-primary {
  background: white;
  color: #ff6b35;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.final-cta .btn-primary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

/* Footer */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  color: #ff6b35;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.footer-section h4 {
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #adb5bd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #ff6b35;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
}

.footer-bottom {
  border-top: 1px solid #343a40;
  padding-top: 20px;
  text-align: center;
  color: #adb5bd;
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-image-placeholder {
    width: 300px;
    height: 300px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .steps {
    grid-template-columns: 1fr;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .final-cta h2 {
    font-size: 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .btn-primary, .btn-secondary {
    padding: 12px 25px;
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>
