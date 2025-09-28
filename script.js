// Управление видео со звуком
const video = document.getElementById('bgVideo');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');

// Инициализация видео
function initVideo() {
    if (video) {
        // Устанавливаем начальные настройки
        video.volume = 0.3; // 30% громкости
        video.muted = false; // Включаем звук
        video.play().catch(e => {
            console.log('Автозапуск видео заблокирован, требуется взаимодействие');
        });
    }
}

// Управление звуком видео
if (muteBtn && video) {
    muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteBtn.innerHTML = video.muted ? 
            '<i class="fas fa-volume-mute"></i>' : 
            '<i class="fas fa-volume-up"></i>';
    });
}

// Регулятор громкости
if (volumeControl && video) {
    volumeControl.addEventListener('input', (e) => {
        video.volume = e.target.value;
    });
}

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
    initVideo();
    
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
    const videoBg = document.querySelector('.video-background');
    if (videoBg) videoBg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
