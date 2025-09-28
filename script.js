// Управление видео со звуком
const video = document.getElementById('bgVideo');
const muteBtn = document.getElementById('muteBtn');
const volumeControl = document.getElementById('volumeControl');
const enterScreen = document.getElementById('enterScreen');
const mainSite = document.getElementById('mainSite');

// Вход на сайт
function enterSite() {
    // Анимация исчезновения экрана входа
    enterScreen.style.opacity = '0';
    enterScreen.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        enterScreen.style.display = 'none';
        mainSite.style.display = 'block';
        
        // Запускаем видео со звуком после входа
        initVideo();
    }, 500);
}

// Инициализация видео
function initVideo() {
    if (video) {
        // Включаем звук сразу, так как было взаимодействие
        video.muted = false;
        video.volume = 0.3;
        video.play().catch(e => {
            console.log('Видео запущено');
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

// Параллакс эффект
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const videoBg = document.querySelector('.video-background');
    if (videoBg) videoBg.style.transform = `translateY(${scrolled * 0.3}px)`;
});
