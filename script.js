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

// Управление звуком
const audio = document.getElementById('bgAudio');
const muteBtn = document.getElementById('muteBtn');

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            audio.pause();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
}

// Автозапуск музыки с задержкой
setTimeout(() => {
    if (audio) {
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Автозапуск музыки заблокирован браузером'));
    }
}, 1000);

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
    const video = document.querySelector('.video-background');
    if (video) video.style.transform = `translateY(${scrolled * 0.3}px)`;
});
