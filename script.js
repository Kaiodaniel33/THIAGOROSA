document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // CONTROLE DE MENU RESPONSIVO (MOBILE)
    // ==========================================================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (menuBtn && mobileMenu && menuIcon) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Alterna de forma suave os ícones de hambúrguer e fechar
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.className = 'fa-solid fa-bars';
                menuBtn.style.transform = 'rotate(0deg)';
            } else {
                menuIcon.className = 'fa-solid fa-xmark';
                menuBtn.style.transform = 'rotate(90deg)';
            }
        });
    }

    // Fecha o menu de tela cheia automaticamente ao selecionar qualquer seção interna
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && menuIcon && menuBtn) {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'fa-solid fa-bars';
                menuBtn.style.transform = 'rotate(0deg)';
            }
        });
    });

    // ==========================================================================
    // SANFONA DE DÚVIDAS (FAQ INTERATIVO)
    // ==========================================================================
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Alterna a exibição do bloco de resposta
            content.classList.toggle('hidden');
            
            // Rotaciona o sinal de "+" transformando em "x" de fechamento
            if (content.classList.contains('hidden')) {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });

    // ==========================================================================
    // DETECTOR DE ELEMENTOS EM TELA (SCROLL REVEAL OPTIMIZED)
    // ==========================================================================
    const observerOptions = {
        root: null,          // Utiliza a janela principal do navegador como container
        threshold: 0.12      // Dispara o gatilho quando 12% do elemento surge em tela
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Deixa de monitorar o elemento uma vez exibido para poupar performance de hardware
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Registra todos os blocos com a classe '.reveal' no observador nativo
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => scrollObserver.observe(el));
});
