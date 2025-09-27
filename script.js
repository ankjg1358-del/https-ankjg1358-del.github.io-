* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --accent-color: #ff0066;
    --accent-glow: 0 0 20px rgba(255, 0, 102, 0.5);
    --text-primary: #ffffff;
    --text-secondary: #888888;
    --card-bg: rgba(20, 20, 20, 0.8);
    --card-border: 1px solid rgba(255, 255, 255, 0.1);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
}

/* Анимированный фон */
.background-animation {
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

.particles::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(255, 0, 102, 0.1) 2px, transparent 0),
        radial-gradient(circle at 80% 70%, rgba(0, 255, 255, 0.1) 2px, transparent 0);
    background-size: 50px 50px;
    animation: particlesMove 20s linear infinite;
}

@keyframes particlesMove {
    from { transform: translateY(0px) }
    to { transform: translateY(-50px) }
}

/* Контейнер */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

/* Шапка */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
}

.edit-toggle {
    background: var(--accent-color);
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

.edit-toggle:hover {
    transform: scale(1.1);
}

.header-content {
    text-align: center;
}

.site-title {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(45deg, var(--accent-color), #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: var(--accent-glow);
    margin-bottom: 0.5rem;
}

.site-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

.stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-color);
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
}

/* Сетка карточек */
.main-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin-bottom: 3rem;
}

/* Карточки */
.card {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: var(--card-border);
    border-radius: 15px;
    padding: 1.5rem;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.6s;
}

.card:hover::before {
    left: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--accent-glow);
    border-color: rgba(255, 0, 102, 0.3);
}

/* Карточка профиля */
.profile-card .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--accent-color), #ff00ff);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
}

.profile-info h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.profile-info p {
    color: var(--text-secondary);
}

.profile-stats {
    display: flex;
    gap: 2rem;
}

.profile-stats .stat {
    text-align: center;
}

.profile-stats .number {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-color);
}

.profile-stats .label {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* Заголовки карточек */
.card-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1.5rem;
}

.card-title i {
    color: var(--accent-color);
    font-size: 1.2rem;
}

.card-title h3 {
    font-size: 1.3rem;
}

/* Социальные сети */
.socials-grid {
    display: grid;
    gap: 12px;
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
    border-color: var(--accent-color);
    transform: translateX(5px);
}

.social-item i {
    font-size: 1.5rem;
    width: 30px;
    text-align: center;
}

.social-item .fa-telegram { color: #0088cc; }
.social-item .fa-tiktok { color: #ff0050; }
.social-item .fa-steam { color: #000000; }
.social-item .fa-vk { color: #4a76a8; }
.social-item .fa-yandex { color: #ff0000; }
.social-item .fa-discord { color: #5865f2; }

/* Быстрые ссылки */
.quick-links {
    display: grid;
    gap: 12px;
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
    color: var(--accent-color);
}

/* Статистика */
.status-badge {
    display: inline-block;
    padding: 8px 16px;
    background: var(--accent-color);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.progress-container {
    margin-top: 1rem;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-bottom: 0.5rem;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-color), #ff00ff);
    border-radius: 3px;
    transition: width 0.3s ease;
}

/* Панель редактирования */
.edit-panel {
    position: fixed;
    top: 0;
    right: -400px;
    width: 380px;
    height: 100vh;
    background: var(--bg-secondary);
    border-left: var(--card-border);
    z-index: 1000;
    transition: right 0.3s ease;
    overflow-y: auto;
}

.edit-panel.active {
    right: 0;
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: var(--card-border);
}

.close-btn {
    background: none;
    border: none;
    color: var(--text-primary);
    font-size: 1.5rem;
    cursor: pointer;
}

.panel-tabs {
    display: flex;
    border-bottom: var(--card-border);
}

.tab-btn {
    flex: 1;
    background: none;
    border: none;
    padding: 1rem;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab-btn.active {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
}

.tab-content {
    padding: 1.5rem;
}

.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
}

.form-group {
    margin-bottom: 2rem;
}

.form-group h4 {
    margin-bottom: 1rem;
    color: var(--accent-color);
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: var(--card-border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
}

.add-btn {
    width: 100%;
    background: var(--accent-color);
    border: none;
    padding: 1rem;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-btn:hover {
    background: #e5005c;
}

.links-list h4 {
    margin-bottom: 1rem;
    color: var(--accent-color);
}

/* Футер */
.footer {
    text-align: center;
    padding: 2rem 0;
    color: var(--text-secondary);
    border-top: var(--card-border);
}

/* Адаптивность */
@media (max-width: 768px) {
    .main-grid {
        grid-template-columns: 1fr;
    }
    
    .header {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    
    .site-title {
        font-size: 2.5rem;
    }
    
    .edit-panel {
        width: 100vw;
        right: -100vw;
    }
}
