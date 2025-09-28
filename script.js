// ПАРОЛЬ ДЛЯ РЕДАКТИРОВАНИЯ
const EDIT_PASSWORD = "19259";

// База данных социальных сетей
const socialNetworks = {
    'telegram': { name: 'Telegram', icon: 'fab fa-telegram', color: '#0088cc' },
    'steam': { name: 'Steam', icon: 'fab fa-steam', color: '#000000' },
    'discord': { name: 'Discord', icon: 'fab fa-discord', color: '#5865f2' },
    'email': { name: 'Email', icon: 'fas fa-envelope', color: '#ea4335' },
    'tiktok': { name: 'TikTok', icon: 'fab fa-tiktok', color: '#ff0050' },
    'vk': { name: 'VK', icon: 'fab fa-vk', color: '#4a76a8' },
    'other': { name: 'Ссылка', icon: 'fas fa-link', color: '#ff0066' }
};

// Мои кенты
const myFriends = [
    { username: '@CRIATIV_TRABKA', name: 'CRIATIV_TRABKA' },
    { username: '@KingOfTheKnife', name: 'KingOfTheKnife' },
    { username: '@Achenw', name: 'Achenw' },
    { username: '@PowluVsenaxy', name: 'PowluVsenaxy' },
    { username: '@Daniyar_Isimov', name: 'Daniyar Isimov' },
    { username: '@Nev2rot', name: 'Nev2rot' }
];

// Начальные данные
let userData = {
    texts: {
        siteTitle: 'REAL_NEFORMAL',
        siteSubtitle: 'Все мои ссылки в одном месте',
        profileName: 'REAL_NEFORMAL',
        profileStatus: 'Создатель контента',
        linksDescription: 'Мои социальные сети и важные ссылки',
        friendsDescription: 'Мои близкие друзья и проверенные люди',
        footerText: 'Данный сайт является моим био и здесь собрана информация про меня. Так что смотрите и изучайте :)'
    },
    socialLinks: [],
    design: {
        mainColor: '#ff0066',
        bgColor: '#0a0a0a',
        textColor: '#ffffff',
        blurAmount: 10,
        glowAmount: 20
    },
    media: {
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4',
        tgAvatarUrl: ''
    }
};

// Видео пресеты
const videoPresets = {
    'neon': 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4',
    'abstract': 'https://assets.mixkit.co/videos/preview/mixkit-abstract-light-particles-1175-large.mp4',
    'particles': 'https://assets.mixkit.co/videos/preview/mixkit-fast-moving-particles-1177-large.mp4'
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    applyAllSettings();
    startAnimations();
});

// Проверка пароля
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const error = document.getElementById('passwordError');
    
    if (password === EDIT_PASSWORD) {
        document.getElementById('passwordProtection').style.display = 'none';
        document.getElementById('editPanel').style.display = 'block';
        loadSettingsToForm();
    } else {
        error.style.display = 'block';
        error.textContent = 'Неверный пароль!';
        setTimeout(() => { error.style.display = 'none'; }, 3000);
    }
}

// Загрузка данных
function loadData() {
    const saved = localStorage.getItem('realNeformalData');
    if (saved) {
        userData = JSON.parse(saved);
    }
}

// Сохранение данных
function saveData() {
    localStorage.setItem('realNeformalData', JSON.stringify(userData));
}

// Применение всех настроек
function applyAllSettings() {
    applyTexts();
    applyDesign();
    applyMedia();
    renderSocialLinks();
    renderFriends();
}

// Применение текстов
function applyTexts() {
    const texts = userData.texts;
    
    document.getElementById('mainTitle').textContent = texts.siteTitle;
    document.getElementById('mainSubtitle').textContent = texts.siteSubtitle;
    document.getElementById('profileNameDisplay').textContent = texts.profileName;
    document.getElementById('profileStatusDisplay').textContent = texts.profileStatus;
    document.getElementById('linksDescriptionDisplay').textContent = texts.linksDescription;
    document.getElementById('friendsDescriptionDisplay').textContent = texts.friendsDescription;
    document.getElementById('footerTextDisplay').textContent = texts.footerText;
}

// Применение дизайна
function applyDesign() {
    const design = userData.design;
    
    document.documentElement.style.setProperty('--accent-color', design.mainColor);
    document.documentElement.style.setProperty('--bg-primary', design.bgColor);
    document.documentElement.style.setProperty('--text-primary', design.textColor);
    document.documentElement.style.setProperty('--blur-amount', design.blurAmount + 'px');
    
    // Обновляем свечение
    document.documentElement.style.setProperty('--accent-glow', 
        `0 0 ${design.glowAmount}px ${design.mainColor}80`);
}

// Применение медиа
function applyMedia() {
    const media = userData.media;
    
    // Видео фон
    const video = document.getElementById('bgVideo');
    if (media.videoUrl && video.src
