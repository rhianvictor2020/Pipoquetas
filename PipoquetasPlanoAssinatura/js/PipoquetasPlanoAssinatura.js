/* ===========================================================
   Pipoquetas — Lógica da Tela "Planos e Assinaturas"
   Arquivo: js/planos.js
   =========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. ALTERNAR VISIBILIDADE DO MENU LATERAL (SIDEBAR)
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.getElementById('sidebar');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      // Adiciona ou remove a classe que esconde a sidebar (definida no seu CSS)
      sidebar.classList.toggle('sidebar--oculta');
    });
  }


  // 2. NAVEGAÇÃO DOS ÍCONES DA SIDEBAR (MARCAR O ATIVO)
  const navIcons = document.querySelectorAll('.nav-icon');

  navIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Remove a classe 'active' de todos os ícones
      navIcons.forEach(i => i.classList.remove('active'));
      
      // Adiciona 'active' no ícone recém-clicado
      icon.classList.add('active');

      // Pega o valor da propriedade data-nav do HTML
      const secao = icon.getAttribute('data-nav');
      console.log(`Navegando para a seção: ${secao}`);
    });
  });


  // 3. CONTROLE DE ROLAGEM DOS CARDS DE PLANOS (BOTÕES DE SETA)
  const plansGrid = document.getElementById('plansGrid');
  const plansPrev = document.getElementById('plansPrev');
  const plansNext = document.getElementById('plansNext');

  if (plansGrid && plansPrev && plansNext) {
    const scrollDistance = 320; // Distância em pixels para rolar

    // Seta para a Esquerda
    plansPrev.addEventListener('click', () => {
      plansGrid.scrollBy({
        left: -scrollDistance,
        behavior: 'smooth'
      });
    });

    // Seta para a Direita
    plansNext.addEventListener('click', () => {
      plansGrid.scrollBy({
        left: scrollDistance,
        behavior: 'smooth'
      });
    });
  }


  // 4. SELEÇÃO E DESTAQUE DOS PLANOS (SAIBA MAIS)
  const planCards = document.querySelectorAll('.plan-card');

  planCards.forEach(card => {
    const btn = card.querySelector('.plan-btn');
    const nomePlano = card.getAttribute('data-plan').toUpperCase();

    if (btn) {
      btn.addEventListener('click', () => {
        // Remove o destaque (.selecionado) de todos os cards
        planCards.forEach(c => c.classList.remove('selecionado'));

        // Adiciona a borda de destaque no card selecionado
        card.classList.add('selecionado');

        // Exibe mensagem amigável ao usuário
        alert(`Você selecionou o plano ${nomePlano}! Em um sistema completo, você seria redirecionado para o checkout.`);
      });
    }
  });


  // 5. PESQUISA NO CABEÇALHO (ENTER)
  const searchInput = document.querySelector('.search-input');
  
  if (searchInput) {
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const busca = searchInput.value.trim();
        if (busca !== '') {
          alert(`Buscando no Pipoquetas por: "${busca}"`);
        }
      }
    });
  }


  // 6. AVATAR DE USUÁRIO E LOGOUT
  const userAvatar = document.getElementById('userAvatar');
  const logoutBtn = document.querySelector('.footer-logout');

  if (userAvatar) {
    userAvatar.addEventListener('click', () => {
      alert('Abrindo configurações do Perfil...');
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const confirmou = confirm('Deseja realmente sair da sua conta no Pipoquetas?');
      if (confirmou) {
        alert('Sessão encerrada com sucesso!');
      }
    });
  }

});
