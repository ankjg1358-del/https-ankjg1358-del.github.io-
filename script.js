// ПАРОЛЬ ДЛЯ РЕДАКТИРОВАНИЯ - ЗАМЕНИТЕ НА СВОЙ!
const EDIT_PASSWORD = "real2024";

// Инициализация
AOS.init({ duration: 1000, once: true });

// База данных
let siteSettings = {
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-light-particles-1175-large.mp4",
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "REAL_NEFORMAL.RU",
    subtitle: "// всё самое важное в одном месте",
    footerText: "REAL_NEFORMAL.RU - ваше пространство в сети",
    mainColor: "#ff6b6b",
    blockOpacity: 0.1,
    fontSize: 16,
    socialLinks: [
        { type: 'telegram', url: 'https://t.me/ваш_аккаунт', title: 'Мой Telegram' },
        { type: 'tiktok', url: 'https://tiktok.com/@ваш_аккаунт', title: 'Мой TikTok' },
        { type: 'vk', url: 'https://vk.com/ваш_аккаунт', title: 'Моя страница VK' }
    ]
};

// Видео пресеты
const videoPresets = {
    abstract: "https://assets.mixkit.co/videos/preview/mixkit-abstract-light-particles-1175-large.mp4",
    nature: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
    city: "https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-city-street-1129-large.mp4",
    space: "https://assets.mixkit.co/videos/preview/mixkit-earth-in-space-1045-large.mp4"
};

// Проверка пароля редактирования
function checkEditPassword() {
    const password = document.getElementById('editPassword').value;
    const error = document.getElementById('passwordError');
    
    if (password === EDIT_PASSWORD) {
        document.getElementById('editProtection').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        loadSettingsToForm();
    } else {
        error.style.display = 'block';
        error.textContent = 'Неверный пароль!';
    }
}

// Блокировка редактирования
function lockEditing() {
    document.getElementById('editProtection').style.display = 'flex';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('editPassword').value = '';
    document.getElementById('passwordError').style.display = 'none';
}

// Переключение вкладок
function openTab(tabName) {
    document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Загрузка настроек в форму
function loadSettingsToForm() {
    document.getElementById('videoUrl').value = siteSettings.videoUrl;
    document.getElementById('siteTitle').value = siteSettings.title;
    document.getElementById('siteDescription').value = siteSettings.subtitle;
    document.getElementById('footerText').value = siteSettings.footerText;
    document.getElementById('mainColor').value = siteSettings.mainColor;
    document.getElementById('blockOpacity').value = siteSettings.blockOpacity;
    document.getElementById('fontSize').value = siteSettings.fontSize;
    
    renderSocialList();
}

// Установка видео пресета
function setVideoPreset(type) {
    if (videoPresets[type]) {
        document.getElementById('videoUrl').value = videoPresets[type];
        changeVideo();
    }
}

// Смена видео
function changeVideo() {
    const url = document.getElementById('videoUrl').value;
    if (url) {
        document.getElementById('bgVideo').src = url;
        siteSettings.videoUrl = url;
        saveSettings();
    }
}

// Обновление текстов
function updateTexts() {
    siteSettings.title = document.getElementById('siteTitle').value;
    siteSettings.subtitle = document.getElementById('siteDescription').value;
    siteSettings.footerText = document.getElementById('footerText').value;
    
    applySettings();
    saveSettings();
}

// Обновление стилей
function updateStyles() {
    siteSettings.mainColor = document.getElementById('mainColor').value;
    siteSettings.blockOpacity = document.getElementById('blockOpacity').value;
    siteSettings.fontSize = document.getElementById('fontSize').value;
    
    applySettings();
    saveSettings();
}

// Применение настроек к сайту
function applySettings() {
    document.getElementById('mainTitle').textContent = siteSettings.title;
    document.getElementById('mainSubtitle').textContent = siteSettings.subtitle;
    document.getElementById('footerText').textContent = siteSettings.footerText;
    
    // Применение стилей
    document.documentElement.style.setProperty('--main-color', siteSettings.mainColor);
    document.documentElement.style.setProperty('--block-opacity', siteSettings.blockOpacity);
    document.documentElement.style.setProperty('--font-size', siteSettings.fontSize + 'px');
    
    // Обновление счетчиков
    document.getElementById('linksCount').textContent = siteSettings.socialLinks.length;
    document.getElementById('onlineCount').textContent = Math.floor(Math.random() * 10) + 1;
    
    renderSocialGrid();
}

// Рендер списка соцсетей в админке
function renderSocialList() {
    const list = document.getElementById('socialList');
    list.innerHTML = '';
    
    siteSettings.socialLinks.forEach((link, index) => {
        const item = document.createElement('div');
        item.className = 'social-item';
        item.innerHTML = `
            <div>
                <strong>${link.title}</strong><br>
                <small>${link.url}</small>
            </div>
            <button onclick="removeSocialLink(${index})"><i class="fas fa-trash"></i></button>
        `;
        list.appendChild(item);
    });
}

// Рендер соцсетей на сайте
function renderSocialGrid() {
    const grid = document.getElementById('socialGrid');
    grid.innerHTML = '';
    
    siteSettings.socialLinks.forEach(link => {
        const card = document.createElement('div');
        card.className = 'social-card';
        card.onclick = () => window.open(link.url, '_blank');
        
        card.innerHTML = `
            <i class="fab fa-${link.type} fa-3x"></i>
            <h3>${link.title}</h3>
            <p>Нажмите для перехода</p>
        `;
        grid.appendChild(card);
    });
}

// Добавление соцсети
function addSocialLink() {
    const type = prompt('Тип (telegram, vk, tiktok, steam, etc):');
    const url = prompt('Полная ссылка:');
    const title = prompt('Название для отображения:');
    
    if (type && url && title) {
        siteSettings.socialLinks.push({ type, url, title });
        renderSocialList();
        renderSocialGrid();
        saveSettings();
    }
}

// Удаление соцсети
function removeSocialLink(index) {
    if (confirm('Удалить эту ссылку?')) {
        siteSettings.socialLinks.splice(index, 1);
        renderSocialList();
        renderSocialGrid();
        saveSettings();
    }
}

// Сохранение всех настроек
function saveAllSettings() {
    saveSettings();
    alert('Все настройки сохранены!');
}

// Сброс настроек
function resetSettings() {
    if (confirm('Сбросить все настройки к исходным?')) {
        localStorage.removeItem('realNeformalSettings');
        location.reload();
    }
}

// Сохранение в LocalStorage
function saveSettings() {
    localStorage.setItem('realNeformalSettings', JSON.stringify(siteSettings));
}

// Загрузка из LocalStorage
function loadSettings() {
    const saved = localStorage.getItem('realNeformalSettings');
    if (saved) {
        siteSettings = JSON.parse(saved);
    }
    applySettings();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    
    // Инициализация аудио
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isPlaying = false;
    
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            backgroundMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
    
    document.getElementById('volumeSlider').addEventListener('input', (e) => {
        backgroundMusic.volume = e.target.value;
    });
    
    // Навигация
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            
            link.classList.add('active');
            const target = link.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Обновление даты
    document.getElementById('updateDate').textContent = new Date().toLocaleDateString('ru-RU');
});
