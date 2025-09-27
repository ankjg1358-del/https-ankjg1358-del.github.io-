// ПАРОЛЬ ДЛЯ РЕДАКТИРОВАНИЯ
const EDIT_PASSWORD = "19259";

// База данных социальных сетей
const socialNetworks = {
    'telegram': { name: 'Telegram', icon: 'fab fa-telegram', color: '#0088cc' },
    'tiktok': { name: 'TikTok', icon: 'fab fa-tiktok', color: '#ff0050' },
    'steam': { name: 'Steam', icon: 'fab fa-steam', color: '#000000' },
    'vk': { name: 'VK', icon: 'fab fa-vk', color: '#4a76a8' },
    'yandex-music': { name: 'Яндекс.Музыка', icon: 'fab fa-yandex', color: '#ff0000' },
    'discord': { name: 'Discord', icon: 'fab fa-discord', color: '#5865f2' },
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
    socialLinks: [],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-1232-large.mp4'
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderSocialLinks();
    renderFriends();
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
    }
}

// Загрузка данных из localStorage
function loadData() {
    const saved = localStorage.getItem('realNeformalData');
    if (saved) {
        userData = JSON.parse(saved);
    }
    applyVideoBackground();
}

// Сохранение данных
function saveData() {
    localStorage.setItem('realNeformalData', JSON.stringify(userData));
}

// Применение видео фона
function applyVideoBackground() {
    const video = document.getElementById('bgVideo');
    if (userData.videoUrl) {
        video.src = userData.videoUrl;
    }
}

// Загрузка настроек в форму
function loadSettingsToForm() {
    document.getElementById('videoUrl').value = userData.videoUrl;
    renderCurrentLinks();
}

// Рендер социальных сетей
function renderSocialLinks() {
    const grid = document.getElementById('socialsGrid');
    
    grid.innerHTML = '';
    
    if (userData.socialLinks.length === 0) {
        grid.innerHTML = '<p style="text-align: center; opacity: 0.7; grid-column: 1/-1;">Добавьте ваши первые ссылки через панель управления</p>';
        return;
    }
    
    userData.socialLinks.forEach((link) => {
        const network = socialNetworks[link.type];
        
        const socialItem = document.createElement('div');
        socialItem.className = 'social-item';
        socialItem.onclick = () => openLink(link.url);
        socialItem.innerHTML = `
            <i class="${network.icon}"></i>
            <span>${link.name}</span>
            <span style="margin-left: auto; opacity: 0.7;">→</span>
        `;
        grid.appendChild(socialItem);
    });
}

// Рендер кентов
function renderFriends() {
    const grid = document.getElementById('friendsGrid');
    
    grid.innerHTML = '';
    
    myFriends.forEach((friend) => {
        const friendItem = document.createElement('div');
        friendItem.className = 'friend-item';
        friendItem.onclick = () => openTelegram(friend.username);
        friendItem.innerHTML = `
            <div class="friend-avatar">${friend.name.charAt(0)}</div>
            <div class="friend-info">
                <div class="friend-name">${friend.name}</div>
                <div class="friend-handle">${friend.username}</div>
            </div>
            <i class="fab fa-telegram"></i>
        `;
        grid.appendChild(friendItem);
    });
}

// Рендер ссылок в панели управления
function renderCurrentLinks() {
    const currentLinks = document.getElementById('currentLinks');
    currentLinks.innerHTML = '';
    
    if (userData.socialLinks.length === 0) {
        currentLinks.innerHTML = '<p style="text-align: center; opacity: 0.7;">Нет добавленных ссылок</p>';
        return;
    }
    
    userData.socialLinks.forEach((link, index) => {
        const network = socialNetworks[link.type];
        const linkItem = document.createElement('div');
        linkItem.className = 'social-item';
        linkItem.style.cursor = 'default';
        linkItem.innerHTML = `
            <i class="${network.icon}"></i>
            <span>${link.name}</span>
            <button class="delete-btn" onclick="removeSocialLink(${index})">×</button>
        `;
        currentLinks.appendChild(linkItem);
    });
}

// Открытие ссылки
function openLink(url) {
    if (url && url.startsWith('http')) {
        window.open(url, '_blank');
    }
}

// Открытие Telegram
function openTelegram(username) {
    window.open(`https://t.me/${username.replace('@', '')}`, '_blank');
}

// Добавление социальной сети
function addSocialLink() {
    const type = document.getElementById('socialType').value;
    const url = document.getElementById('socialUrl').value;
    const name = document.getElementById('socialName').value;
    
    if (url && name) {
        if (!url.startsWith('http')) {
            alert('Введите корректную ссылку (начинается с http:// или https://)');
            return;
        }
        
        userData.socialLinks.push({ type, url, name });
        renderSocialLinks();
        renderCurrentLinks();
        saveData();
        
        document.getElementById('socialUrl').value = '';
        document.getElementById('socialName').value = '';
    } else {
        alert('Заполните все поля');
    }
}

// Удаление социальной сети
function removeSocialLink(index) {
    if (confirm('Удалить эту ссылку?')) {
        userData.socialLinks.splice(index, 1);
        renderSocialLinks();
        renderCurrentLinks();
        saveData();
    }
}

// Смена видео фона
function changeVideo() {
    const url = document.getElementById('videoUrl').value;
    if (url) {
        userData.videoUrl = url;
        applyVideoBackground();
        saveData();
        alert('Видео фон обновлен!');
    }
}

// Переключение секций
function showSection(sectionName) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    event.target.classList.add('active');
    document.getElementById(sectionName + 'Section').classList.add('active');
}

// Панель управления
function toggleEditPanel() {
    document.getElementById('editPanel').classList.toggle('active');
}

// Анимации
function startAnimations() {
    // Случайное свечение заголовка
    setInterval(() => {
        const glow = document.querySelector('.site-title');
        glow.style.textShadow = `0 0 ${20 + Math.random() * 10}px rgba(255, 0, 102, ${0.3 + Math.random() * 0.3})`;
    }, 2000);
    
    // Анимация креста
    const cross = document.querySelector('.cross-icon');
    setInterval(() => {
        cross.style.transform = `scale(${1 + Math.random() * 0.1}) rotate(${Math.random() * 10}deg)`;
    }, 3000);
}
