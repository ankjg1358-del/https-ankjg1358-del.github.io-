// База данных социальных сетей
const socialNetworks = {
    'telegram': { name: 'Telegram', icon: 'fab fa-telegram', color: '#0088cc' },
    'tiktok': { name: 'TikTok', icon: 'fab fa-tiktok', color: '#ff0050' },
    'steam': { name: 'Steam', icon: 'fab fa-steam', color: '#000000' },
    'vk': { name: 'VK', icon: 'fab fa-vk', color: '#4a76a8' },
    'yandex-music': { name: 'Яндекс.Музыка', icon: 'fab fa-yandex', color: '#ff0000' },
    'discord': { name: 'Discord', icon: 'fab fa-discord', color: '#5865f2' }
};

// Начальные данные
let userData = {
    profile: {
        name: 'Аноним',
        description: 'Создатель контента',
        followers: '1.2K'
    },
    socialLinks: [
        { type: 'telegram', url: 'https://t.me/ваш_аккаунт', name: 'Мой Telegram' },
        { type: 'tiktok', url: 'https://tiktok.com/@ваш_аккаунт', name: 'Мой TikTok' },
        { type: 'steam', url: 'https://steamcommunity.com/id/ваш_аккаунт', name: 'Steam' },
        { type: 'vk', url: 'https://vk.com/ваш_аккаунт', name: 'ВКонтакте' },
        { type: 'yandex-music', url: 'https://music.yandex.ru/users/ваш_аккаунт', name: 'Яндекс.Музыка' },
        { type: 'discord', url: 'https://discord.gg/ваша-ссылка', name: 'Discord' }
    ],
    design: {
        mainColor: '#ff0066',
        bgColor: '#0a0a0a'
    }
};

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    renderSocialLinks();
    updateOnlineCount();
    startAnimations();
});

// Загрузка данных из localStorage
function loadData() {
    const saved = localStorage.getItem('realNeformalData');
    if (saved) {
        userData = JSON.parse(saved);
    }
    applyData();
}

// Сохранение данных
function saveData() {
    localStorage.setItem('realNeformalData', JSON.stringify(userData));
}

// Применение данных к странице
function applyData() {
    // Профиль
    document.getElementById('profileNameDisplay').textContent = userData.profile.name;
    document.getElementById('profileDescDisplay').textContent = userData.profile.description;
    document.getElementById('followersDisplay').textContent = userData.profile.followers;
    
    // Дизайн
    document.documentElement.style.setProperty('--accent-color', userData.design.mainColor);
    document.documentElement.style.setProperty('--bg-primary', userData.design.bgColor);
}

// Рендер социальных сетей
function renderSocialLinks() {
    const grid = document.getElementById('socialsGrid');
    const currentLinks = document.getElementById('currentLinks');
    
    grid.innerHTML = '';
    currentLinks.innerHTML = '';
    
    userData.socialLinks.forEach((link, index) => {
        const network = socialNetworks[link.type];
        if (network) {
            // Основная сетка
            const socialItem = document.createElement('div');
            socialItem.className = 'social-item';
            socialItem.onclick = () => openLink(link.url);
            socialItem.innerHTML = `
                <i class="${network.icon}"></i>
                <span>${link.name}</span>
                <span style="margin-left: auto; opacity: 0.7;">→</span>
            `;
            grid.appendChild(socialItem);
            
            // Панель управления
            const linkItem = document.createElement('div');
            linkItem.className = 'social-item';
            linkItem.innerHTML = `
                <i class="${network.icon}"></i>
                <span>${link.name}</span>
                <button class="delete-btn" onclick="removeSocialLink(${index})">×</button>
            `;
            currentLinks.appendChild(linkItem);
        }
    });
}

// Открытие ссылки
function openLink(url) {
    if (url && url !== 'https://example.com') {
        window.open(url, '_blank');
    }
}

// Добавление социальной сети
function addSocialLink() {
    const type = document.getElementById('socialType').value;
    const url = document.getElementById('socialUrl').value;
    const name = document.getElementById('socialName').value;
    
    if (url && name) {
        userData.socialLinks.push({ type, url, name });
        renderSocialLinks();
        saveData();
        
        // Очистка полей
        document.getElementById('socialUrl').value = '';
        document.getElementById('socialName').value = '';
    }
}

// Удаление социальной сети
function removeSocialLink(index) {
    if (confirm('Удалить эту ссылку?')) {
        userData.socialLinks.splice(index, 1);
        renderSocialLinks();
        saveData();
    }
}

// Обновление профиля
function updateProfile() {
    userData.profile.name = document.getElementById('profileName').value || userData.profile.name;
    userData.profile.description = document.getElementById('profileDesc').value || userData.profile.description;
    userData.profile.followers = document.getElementById('followersCount').value || userData.profile.followers;
    
    applyData();
    saveData();
    alert('Профиль обновлен!');
}

// Обновление дизайна
function updateDesign() {
    userData.design.mainColor = document.getElementById('mainColor').value;
    userData.design.bgColor = document.getElementById('bgColor').value;
    
    applyData();
    saveData();
    alert('Дизайн обновлен!');
}

// Панель управления
function toggleEditPanel() {
    document.getElementById('editPanel').classList.toggle('active');
}

function openTab(tabName) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Убрать активный класс у всех кнопок
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Показать выбранную вкладку
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Обновление онлайн счета
function updateOnlineCount() {
    const count = Math.floor(Math.random() * 50) + 20;
    document.getElementById('onlineCount').textContent = count;
}

// Анимации
function startAnimations() {
    // Авто-обновление онлайн счета
    setInterval(updateOnlineCount, 30000);
    
    // Случайные анимации карточек
    setInterval(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (Math.random() > 0.8) {
                card.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    card.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    }, 5000);
}

// Генерация случайного свечения
setInterval(() => {
    const glow = document.querySelector('.site-title');
    glow.style.textShadow = `0 0 ${20 + Math.random() * 10}px rgba(255, 0, 102, ${0.3 + Math.random() * 0.3})`;
}, 2000);
