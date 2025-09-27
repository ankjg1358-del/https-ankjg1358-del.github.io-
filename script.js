* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --accent: #ff0066;
    --accent-glow: 0 0 20px rgba(255, 0, 102, 0.5);
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --card-bg: rgba(20, 20, 20, 0.8);
    --border: 1px solid rgba(255, 255, 255, 0.1);
}

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
}

/* Анимированный фон */
.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.gradient-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e, #0a0a0a);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
}

/* Контейнер */
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

/* Хедер */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
}

.logo h1 {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ff0066, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 30px rgba(255, 0, 102, 0.5);
}

.logo span {
    color: var(--text-secondary);
    font-size: 0.9rem;
    letter-spacing: 2px;
}

.stats {
    display: flex;
    gap: 2rem;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
}

.stat-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Сетка карточек */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-top: 2rem;
}

/* Карточки */
.card {
    background: var(--card-bg);
    border: var(--border);
    border-radius: 15px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
}

.card:hover::before {
    left: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--accent-glow);
    border-color: rgba(255, 0, 102, 0.3);
}

.card-title {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--accent);
    display: flex;
    align-items: center;
    gap: 10px;
}

/* Профиль карточка */
.profile-card .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff0066, #ff00ff);
    position: relative;
}

.avatar::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: var(--bg-secondary);
    border-radius: 50%;
}

.profile-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.profile-info p {
    color: var(--text-secondary);
}

.card-stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-item .number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
}

.stat-item .label {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

/* Соцсети */
.socials-grid {
    display: grid;
    gap: 10px;
}

.social-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.social-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--accent);
    transform: translateX(5px);
}

.social-item i {
    font-size: 1.5rem;
    width: 30px;
    text-align: center;
}

.social-item.fa-telegram { color: #0088cc; }
.social-item.fa-tiktok { color: #ff0050; }
.social-item.fa-instagram { color: #e4405f; }
.social-item.fa-vk { color: #4a76a8; }
.social-item.fa-steam { color: #000000; }
.social-item.fa-youtube { color: #ff0000; }
.social-item.fa-discord { color: #5865f2; }

/* Быстрые ссылки */
.links-grid {
    display: grid;
    gap: 10px;
}

.link-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.link-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.link-item i {
    font-size: 1.5rem;
    color: var(--accent);
}

/* Статус */
.status-content {
    text-align: center;
}

.status {
    display: inline-block;
    padding: 5px 15px;
    background: var(--accent);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin: 1rem 0;
    overflow: hidden;
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #ff0066, #ff00ff);
    border-radius: 3px;
    transition: width 0.3s ease;
}

.progress-text {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

/* Медиа */
.media-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.media-item {
    text-align: center;
    cursor: pointer;
}

.media-thumb {
    width: 100%;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin-bottom: 5px;
    transition: all 0.3s ease;
}

.media-item:hover .media-thumb {
    background: rgba(255, 0, 102, 0.3);
}

.media-item span {
    font-size: 0.7rem;
    color: var(--text-secondary);
}

/* Панель админа */
.admin-panel {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}

.admin-btn {
    background: var(--accent);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: var(--accent-glow);
}

.admin-btn:hover {
    transform: scale(1.1);
}

.admin-menu {
    position: absolute;
    top: 60px;
    right: 0;
    background: var(--card-bg);
    border: var(--border);
    border-radius: 10px;
    padding: 1rem;
    width: 300px;
    display: none;
    backdrop-filter: blur(10px);
}

.admin-menu.show {
    display: block;
}

.admin-section {
    margin-bottom: 1rem;
}

.admin-section label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.admin-section input,
.admin-section select {
    width: 100%;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border: var(--border);
    border-radius: 5px;
    color: white;
    margin-bottom: 0.5rem;
}

.admin-section button {
    background: var(--accent);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 100%;
}

/* Адаптивность */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
    
    .header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .logo h1 {
        font-size: 2rem;
    }
    
    .admin-menu {
        width: 90vw;
        right: 5vw;
    }
}

/* Глитч эффект */
.glitch {
    position: relative;
    display: inline-block;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    animation: glitch-1 0.5s infinite linear alternate-reverse;
    color: #ff00ff;
}

.glitch::after {
    animation: glitch-2 0.5s infinite linear alternate-reverse;
    color: #00ffff;
}

@keyframes glitch-1 {
    0% { transform: translate(0) }
    20% { transform: translate(-2px, 2px) }
    40% { transform: translate(-2px, -2px) }
    60% { transform: translate(2px, 2px) }
    80% { transform: translate(2px, -2px) }
    100% { transform: translate(0) }
}

@keyframes glitch-2 {
    0% { transform: translate(0) }
    20% { transform: translate(2px, -2px) }
    40% { transform: translate(2px, 2px) }
    60% { transform: translate(-2px, -2px) }
    80% { transform: translate(-2px, 2px) }
    100% { transform: translate(0) }
}
