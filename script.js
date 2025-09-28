// Функция открытия ссылок
function openLink(url) {
    if (url && url.startsWith('http') || url.startsWith('mailto') || url.startsWith('steam')) {
        window.open(url, '_blank');
    }
}

// Переключение секций
function showSection(sectionName) {
    // Убрать активный класс у всех кнопок
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Скрыть все секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Активировать выбранную кнопку
    event.target.classList.add('active');
    
    // Показать выбранную секцию
    document.getElementById(sectionName + 'Section').classList.add('active');
}

// Анимации
function startAnimations() {
    // Случайное свечение заголовка
    setInterval(() => {
        const glow = document.querySelector('.site-title');
        glow.style.textShadow = `0 0 ${20 + Math.random() * 10}px rgba(255, 0, 102, ${0.3 + Math.random() * 0.3})`;
    }, 2000);
    
    // Анимация карточек при загрузке
    setTimeout(() => {
        const cards = document.querySelectorAll('.social-item, .friend-item, .profile-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    startAnimations();
    
    // Плавное появление контента
    const elements = document.querySelectorAll('.social-item, .friend-item, .profile-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });
});

// Параллакс эффект для фона
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const video = document.querySelector('.video-background');
    const particles = document.querySelector('.floating-particles');
    
    if (video) video.style.transform = `translateY(${scrolled * 0.4}px)`;
    if (particles) particles.style.transform = `translateY(${scrolled * 0.2}px)`;
});
