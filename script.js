// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем прелоадер через 2 секунды
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
        document.getElementById('enterScreen').style.display = 'flex';
    }, 2000);
});

// Переменные
let isSoundOn = true;
let currentSection = 'steam';

// Вход на сайт
function enterSite() {
    const enterScreen = document.getElementById('enterScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Анимация исчезновения
    enterScreen.style.opacity = '0';
    enterScreen.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        enterScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Запускаем видео
        initVideo();
        
        // Показываем первую секцию
        showSection('steam');
    }, 500);
}

// Инициализация видео
function initVideo() {
    const video = document.getElementById('bgVideo');
    if (video) {
        video.muted = !isSoundOn;
        video.play().catch(e => {
            console.log('Видео запущено');
        });
    }
}

// Переключение звука
function toggleSound() {
    const video = document.getElementById('bgVideo');
    const soundBtn = document.getElementById('soundBtn');
    
    if (video) {
        isSoundOn = !isSoundOn;
        video.muted = !isSoundOn;
        
        soundBtn.innerHTML = isSoundOn ? 
            '<i class="fas fa-volume-up"></i>' : 
            '<i class="fas fa-volume-mute"></i>';
    }
}

// Переключение мобильного меню
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Показать секцию
function showSection(sectionId) {
    // Скрываем все секции
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Убираем активный класс у всех ссылок
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Показываем выбранную секцию
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Активируем соответствующую ссылку
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    currentSection = sectionId;
    
    // На мобильных закрываем меню после выбора
    if (window.innerWidth <= 768) {
        toggleMobileMenu();
    }
}

// Открытие ссылок
function openLink(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

// Копирование email
function copyEmail() {
    const email = 'Anton4iko2@yandex.ru';
    navigator.clipboard.writeText(email).then(() => {
        // Создаем уведомление
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = 'Email скопирован!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }).catch(() => {
        alert('Email: ' + email);
    });
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для навигационных ссылок
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
           
