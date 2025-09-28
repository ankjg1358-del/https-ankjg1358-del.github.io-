// Управление видео со звуком
const video = document.getElementById('bgVideo');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');

// Флаг первого клика
let userInteracted = false;

// Инициализация видео
function initVideo() {
    if (video) {
        // Начинаем с muted, чтобы видео запустилось
        video.muted = true;
        video.volume = 0;
        video.play().catch(e => {
            console.log('Видео запущено без звука');
        });
    }
}

// Обработчик первого клика по странице
function handleFirstInteraction() {
    if (!userInteracted) {
        userInteracted = true;
        // Включаем звук после первого клика
        if (video) {
            video.muted = false;
            video.volume = 0.3;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
        // Убираем обработчик после первого клика
        document.removeEventListener('click', handleFirstInteraction);
    }
}

// Управление звуком видео
if (muteBtn && video) {
    muteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Чтобы не считалось за первый клик
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
        // Если включаем громкость - убираем mute
        if (e.target.value > 0) {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
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
    
    // Добавляем обработчик первого клика
    document.addEventListener('click', handleFirstInteraction);
    
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
