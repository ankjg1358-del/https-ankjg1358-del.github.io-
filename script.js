// Функция открытия ссылок
function openLink(url) {
    if (url) {
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

// Копирование email
function copyEmail() {
    const email = 'Anton4iko2@yandex.ru';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email скопирован: ' + email);
    });
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление контента
    setTimeout(() => {
        const elements = document.querySelectorAll('.profile-card, .friend-item');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});

// Параллакс эффект
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelector('.floating-particles');
    if (particles) particles.style.transform = `translateY(${scrolled * 0.2}px)`;
});

// Анимация креста
const cross = document.querySelector('.cross-icon');
setInterval(() => {
    cross.style.transform = `scale(${1 + Math.random() * 0.1}) rotate(${Math.random() * 10}deg)`;
}, 3000);
