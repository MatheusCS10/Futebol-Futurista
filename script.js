const players = [
    { name: "Neo", position: { x: 10, y: 50 }, role: "GK", rating: 5, photo: "Camisa.jpg", enhancements: ["Reflexos Quânticos"], description: "O goleiro do time com reflexos incomparáveis." },
    { name: "Morpheus", position: { x: 30, y: 20 }, role: "DEF", rating: 4, photo: "Camisa.jpg", enhancements: ["Visão 360°"], description: "Lateral direito com uma visão de jogo excepcional." },
    { name: "Trinity", position: { x: 30, y: 40 }, role: "DEF", rating: 4, photo: "Camisa.jpg", enhancements: ["Teletransporte Tático"], description: "Zagueira central com a habilidade de se teletransportar." },
    { name: "Cypher", position: { x: 30, y: 60 }, role: "DEF", rating: 4, photo: "Camisa.jpg", enhancements: ["Campo de Força"], description: "Zagueiro central com a capacidade de criar um campo de força." },
    { name: "Oracle", position: { x: 30, y: 80 }, role: "DEF", rating: 4, photo: "Camisa.jpg", enhancements: ["Previsão de Jogadas"], description: "Lateral esquerdo com habilidades de previsão avançadas." },
    { name: "Agent Smith", position: { x: 50, y: 30 }, role: "MID", rating: 5, photo: "Camisa.jpg", enhancements: ["Replicação"], description: "Volante com a habilidade de se replicar." },
    { name: "Niobe", position: { x: 50, y: 50 }, role: "MID", rating: 5, photo: "Camisa.jpg", enhancements: ["Controle Mental"], description: "Meio-campista ofensiva com a capacidade de controlar a mente dos adversários." },
    { name: "Seraph", position: { x: 50, y: 70 }, role: "MID", rating: 5, photo: "Camisa.jpg", enhancements: ["Manipulação do Tempo"], description: "Meio-campista com habilidades para manipular o tempo." },
    { name: "Mouse", position: { x: 75, y: 20 }, role: "FWD", rating: 4, photo: "Camisa.jpg", enhancements: ["Invisibilidade"], description: "Extremo esquerdo com a habilidade de se tornar invisível." },
    { name: "Dozer", position: { x: 75, y: 50 }, role: "FWD", rating: 5, photo: "Camisa.jpg", enhancements: ["Super Força"], description: "Atacante com força sobre-humana." },
    { name: "Switch", position: { x: 75, y: 80 }, role: "FWD", rating: 4, photo: "Camisa.jpg", enhancements: ["Alteração de Realidade"], description: "Extremo direito com a habilidade de alterar a realidade." }
];

let currentTabIndex = 0;
const tabs = ['tactics', 'players', 'simulation', 'analysis', 'history', 'minigames'];
let currentFormation = '4-3-3';
let currentFieldShape = 'rectangle';
let currentGravity = 'normal';

const formations = {
    '4-3-3': [
        { x: 10, y: 50 },
        { x: 30, y: 20 }, { x: 30, y: 40 }, { x: 30, y: 60 }, { x: 30, y: 80 },
        { x: 50, y: 30 }, { x: 50, y: 50 }, { x: 50, y: 70 },
        { x: 75, y: 20 }, { x: 75, y: 50 }, { x: 75, y: 80 }
    ],
    '3-4-3': [
        { x: 10, y: 50 },
        { x: 30, y: 30 }, { x: 30, y: 50 }, { x: 30, y: 70 },
        { x: 50, y: 20 }, { x: 50, y: 40 }, { x: 50, y: 60 }, { x: 50, y: 80 },
        { x: 75, y: 30 }, { x: 75, y: 50 }, { x: 75, y: 70 }
    ],
    '5-3-2': [
        { x: 10, y: 50 },
        { x: 25, y: 20 }, { x: 25, y: 35 }, { x: 25, y: 50 }, { x: 25, y: 65 }, { x: 25, y: 80 },
        { x: 50, y: 30 }, { x: 50, y: 50 }, { x: 50, y: 70 },
        { x: 75, y: 40 }, { x: 75, y: 60 }
    ]
};

function renderPlayers() {
    const field = document.getElementById('soccer-field');
    field.innerHTML = `
        <div class="field-line" style="width: 100%; height: 2px; top: 50%;"></div>
        <div class="field-line" style="width: 2px; height: 100%; left: 50%;"></div>
        <div class="center-circle"></div>
    `;
    players.forEach((player, index) => {
        const position = formations[currentFormation][index];
        const playerElement = document.createElement('div');
        playerElement.className = 'player';
        playerElement.style.left = `${position.x}%`;
        playerElement.style.top = `${position.y}%`;
        playerElement.style.backgroundImage = `url(${player.photo})`;
        playerElement.draggable = true;
        playerElement.addEventListener('dragstart', drag);

        const nameElement = document.createElement('div');
        nameElement.className = 'player-name';
        nameElement.textContent = player.name;

        playerElement.appendChild(nameElement);
        field.appendChild(playerElement);
    });
}

function renderPlayerGallery() {
    const gallery = document.querySelector('.player-gallery');
    gallery.innerHTML = '';
    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.photo}" alt="${player.name}">
            <div class="player-card-info">
                <h3>${player.name}</h3>
                <p>${player.role}</p>
                <p>${player.enhancements.join(', ')}</p>
            </div>
        `;
        card.addEventListener('click', () => displayPlayerDetails(player));
        gallery.appendChild(card);
    });
}

function displayPlayerDetails(player) {
    const details = document.querySelector('.player-details');
    details.classList.remove('hidden');
    details.innerHTML = `
        <h2>${player.name}</h2>
        <img src="${player.photo}" alt="${player.name}" style="width: 100%; max-width: 300px; height: auto; border-radius: 10px; margin-bottom: 15px;">
        <p><strong>Posição:</strong> ${player.role}</p>
        <p><strong>Descrição:</strong> ${player.description}</p>
        <p><strong>Melhorias:</strong> ${player.enhancements.join(', ')}</p>
        <div id="player-stats"></div>
    `;

    renderPlayerStats(player);
    renderPlayerTimeline(player);
    renderEnhancementSimulator(player);
}
function renderPlayerStats(player) {
    const statsContainer = document.getElementById('player-stats');
    statsContainer.innerHTML = '<h3>Estatísticas</h3>';
    const stats = [
        { name: 'Velocidade', short: 'VEL', color: '#FF4136' },
        { name: 'Força', short: 'FOR', color: '#FF851B' },
        { name: 'Técnica', short: 'TEC', color: '#FFDC00' },
        { name: 'Inteligência', short: 'INT', color: '#2ECC40' },
        { name: 'Quantum', short: 'QNT', color: '#0074D9' }
    ];

    const statContainer = document.createElement('div');
    statContainer.style.display = 'flex';
    statContainer.style.justifyContent = 'space-between';
    statContainer.style.width = '100%';
    statContainer.style.marginTop = '20px';

    stats.forEach(stat => {
        const statValue = Math.floor(Math.random() * 100);
        const statElement = document.createElement('div');
        statElement.style.textAlign = 'center';
        statElement.style.width = '18%';
        statElement.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;" title="${stat.name}">${stat.short}</div>
            <div style="width: 100%; height: 150px; background-color: rgba(255,255,255,0.1); position: relative; border-radius: 5px; overflow: hidden;">
                <div style="position: absolute; bottom: 0; width: 100%; height: ${statValue}%; background-color: ${stat.color}; transition: height 0.5s;"></div>
                <div style="position: absolute; width: 100%; text-align: center; top: 50%; transform: translateY(-50%); font-size: 18px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.7);">${statValue}</div>
            </div>
        `;
        statContainer.appendChild(statElement);
    });

    statsContainer.appendChild(statContainer);
}

function renderPlayerTimeline(player) {
    const timeline = document.querySelector('.player-timeline');
    timeline.innerHTML = '';
    const events = [
        { year: 2020, description: 'Início da carreira' },
        { year: 2022, description: 'Primeira melhoria quântica' },
        { year: 2024, description: 'MVP da Liga Quântica' }
    ];
    events.forEach((event, index) => {
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.style.left = `${index * 50}%`;
        point.title = `${event.year}: ${event.description}`;
        timeline.appendChild(point);
    });
}

function renderEnhancementSimulator(player) {
    const simulator = document.querySelector('.enhancement-simulator');
    simulator.innerHTML = '<h4>Simulador de Melhorias</h4>';
    player.enhancements.forEach(enhancement => {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '100';
        slider.value = '50';
        slider.className = 'enhancement-slider';
        slider.addEventListener('input', updatePlayerStats);
        const label = document.createElement('label');
        label.textContent = enhancement;
        simulator.appendChild(label);
        simulator.appendChild(slider);
    });
}

function updatePlayerStats() {
    const statBars = document.querySelectorAll('.stat-fill');
    statBars.forEach(bar => {
        const newValue = Math.floor(Math.random() * 100);
        bar.style.height = `${newValue}%`;
    });
}

function changeFormation(formation) {
    currentFormation = formation;
    renderPlayers();
}

function simulateQuantumMatch() {
    const matchSimulation = document.getElementById('match-simulation');
    matchSimulation.innerHTML = '<h4>Simulação Quântica de Partida</h4>';

    let homeScore = 0;
    let awayScore = 0;
    let quantumEvents = ['Superposição de Gol', 'Túnel Quântico', 'Entrelaçamento de Passes', 'Flutuação do Vácuo'];

    for (let minute = 1; minute <= 90; minute++) {
        if (Math.random() < 0.15) {
            const event = Math.random() < 0.7 ? 'Chance de gol' : 'Gol';
            const team = Math.random() < 0.5 ? 'Casa' : 'Visitante';
            const player = players[Math.floor(Math.random() * players.length)];
            const quantumEvent = quantumEvents[Math.floor(Math.random() * quantumEvents.length)];

            if (event === 'Gol') {
                if (team === 'Casa') homeScore++;
                else awayScore++;
            }

            matchSimulation.innerHTML += `<p>${minute}': ${event} para o time da ${team} (${player.name}) - ${quantumEvent}</p>`;

            if (event === 'Gol') {
                matchSimulation.innerHTML += `<p><strong>Placar Quântico: Casa ${homeScore} - ${awayScore} Visitante</strong></p>`;
            }
        }
    }

    matchSimulation.innerHTML += `<h4>Resultado Final Quântico: Casa ${homeScore} - ${awayScore} Visitante</h4>`;
    showTab('simulation');
}

function showTab(tabName) {
    document.querySelectorAll('.content-area').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(`${tabName}-tab`).classList.remove('hidden');
    document.getElementById('current-tab').textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    currentTabIndex = tabs.indexOf(tabName);

    if (tabName === 'tactics') {
        renderPlayers();
    } else if (tabName === 'players') {
        renderPlayerGallery();
        initPlayerSearch();
    } else if (tabName === 'analysis') {
        showMultidimensionalAnalysis();
    } else if (tabName === 'history') {
        showHistoryRewrite();
    } else if (tabName === 'minigames') {
        initQuantumPenaltyGame();
    }
}

function navigate(direction) {
    currentTabIndex = (currentTabIndex + direction + tabs.length) % tabs.length;
    showTab(tabs[currentTabIndex]);
}

function showMultidimensionalAnalysis() {
    const analysisContainer = document.getElementById('performance-analysis');
    analysisContainer.innerHTML = `
        <h4>Análise de Desempenho Multidimensional</h4>
        <canvas id="multidimensionalChart" width="400" height="400"></canvas>
    `;

    const ctx = document.getElementById('multidimensionalChart').getContext('2d');
    const dimensions = ['Velocidade', 'Força', 'Técnica', 'Inteligência', 'Quantum'];
    const teamData = dimensions.map(() => Math.random() * 100);

    ctx.beginPath();
    for (let i = 0; i < dimensions.length; i++) {
        const angle = (Math.PI * 2 * i) / dimensions.length;
        const length = teamData[i] * 1.5;
        const x = 200 + length * Math.cos(angle);
        const y = 200 + length * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(75, 192, 192, 0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgb(75, 192, 192)';
    ctx.stroke();

    dimensions.forEach((dim, i) => {
        const angle = (Math.PI * 2 * i) / dimensions.length;
        const x = 200 + 180 * Math.cos(angle);
        const y = 200 + 180 * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.stroke();
        ctx.fillStyle = 'white';
        ctx.fillText(dim, x, y);
    });
}

function showHistoryRewrite() {
    const historyContainer = document.getElementById('history-rewrite');
    historyContainer.innerHTML = `
        <select id="historic-moment">
            <option value="maradona">Maradona</option>
            <option value="zidane">Cabeçada de Zidane</option>
            <option value="brazil7x1">Brasil 1 x 7 Alemanha</option>
        </select>
        <button onclick="rewriteHistory()">Reescrever História</button>
        <div id="rewritten-history"></div>
    `;
}

function rewriteHistory() {
    const moment = document.getElementById('historic-moment').value;
    const rewrittenContainer = document.getElementById('rewritten-history');
    let rewrittenText = '';

    switch (moment) {
        case 'maradona':
            rewrittenText = "Em um giro inesperado dos eventos, Maradona usa teletransporte quântico para marcar o gol, deixando todos perplexos!";
            break;
        case 'zidane':
            rewrittenText = "Zidane ativa seu campo de força pessoal, transformando a tentativa de cabeçada em uma demonstração pacífica de física avançada.";
            break;
        case 'brazil7x1':
            rewrittenText = "O Brasil ativa seu 'Modo Superposição', jogando simultaneamente em 7 realidades paralelas e vencendo em 6 delas!";
            break;
    }

    rewrittenContainer.innerHTML = `<p>${rewrittenText}</p>`;
}

function changeFieldShape() {
    const shape = document.getElementById('field-shape').value;
    const field = document.getElementById('soccer-field');
    switch (shape) {
        case 'circle':
            field.style.borderRadius = '50%';
            break;
        case 'triangle':
            field.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            break;
        default:
            field.style.borderRadius = '5px';
            field.style.clipPath = 'none';
    }
    currentFieldShape = shape;
}

function changeGravity() {
    const gravity = document.getElementById('gravity-setting').value;
    const players = document.querySelectorAll('.player');
    players.forEach(player => {
        switch (gravity) {
            case 'low':
                player.style.transition = 'all 2s ease';
                break;
            case 'high':
                player.style.transition = 'all 0.1s ease';
                break;
            default:
                player.style.transition = 'all 0.3s ease';
        }
    });
    currentGravity = gravity;
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var player = document.getElementById(data);
    player.style.left = (ev.clientX - player.offsetWidth / 2) + 'px';
    player.style.top = (ev.clientY - player.offsetHeight / 2) + 'px';
}

function initPlayerSearch() {
    const searchInput = document.getElementById('player-search');
    const positionFilter = document.getElementById('position-filter');
    const enhancementFilter = document.getElementById('enhancement-filter');

    searchInput.addEventListener('input', filterPlayers);
    positionFilter.addEventListener('change', filterPlayers);
    enhancementFilter.addEventListener('change', filterPlayers);

    const allEnhancements = [...new Set(players.flatMap(p => p.enhancements))];
    allEnhancements.forEach(enhancement => {
        const option = document.createElement('option');
        option.value = enhancement;
        option.textContent = enhancement;
        enhancementFilter.appendChild(option);
    });
}

function filterPlayers() {
    const searchTerm = document.getElementById('player-search').value.toLowerCase();
    const positionFilter = document.getElementById('position-filter').value;
    const enhancementFilter = document.getElementById('enhancement-filter').value;

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm) &&
        (positionFilter === '' || player.role === positionFilter) &&
        (enhancementFilter === '' || player.enhancements.includes(enhancementFilter))
    );

    renderFilteredPlayers(filteredPlayers);
}

function renderFilteredPlayers(filteredPlayers) {
    const gallery = document.querySelector('.player-gallery');
    gallery.innerHTML = '';
    filteredPlayers.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.innerHTML = `
            <img src="${player.photo}" alt="${player.name}">
            <div class="player-card-info">
                <h3>${player.name}</h3>
                <p>${player.role}</p>
                <p>${player.enhancements.join(', ')}</p>
            </div>
        `;
        card.addEventListener('click', () => displayPlayerDetails(player));
        gallery.appendChild(card);
    });
}

const quantumPenaltyGame = {
    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 300;
        this.ctx = this.canvas.getContext('2d');
        this.ballPosition = { x: 200, y: 250 };
        this.goalPosition = { x: 200, y: 50, width: 100, height: 50 };
        this.quantumState = 'superposition';
        this.score = 0;
        this.misses = 0;
        this.level = 1;
        this.quantumPowerups = ['entanglement', 'teleportation', 'superposition'];
        this.currentPowerup = null;
        this.goalkeeperPosition = { x: 200, y: 70 };
        this.goalkeeperWidth = 30;
        this.goalkeeperHeight = 40;

        this.canvas.addEventListener('click', this.shoot.bind(this));
        this.canvas.addEventListener('mousemove', this.updateBallPosition.bind(this));

        const gameContainer = document.getElementById('quantum-penalty-game');
        gameContainer.innerHTML = '';
        gameContainer.appendChild(this.canvas);

        this.powerupButton = document.createElement('button');
        this.powerupButton.textContent = 'Ativar Poder Quântico';
        this.powerupButton.addEventListener('click', this.activatePowerup.bind(this));
        gameContainer.appendChild(this.powerupButton);

        this.updateScore();
        this.draw();
    },

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Desenhar o gol
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.goalPosition.x - this.goalPosition.width / 2,
            this.goalPosition.y,
            this.goalPosition.width,
            this.goalPosition.height);

        // Desenhar o goleiro
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.goalkeeperPosition.x - this.goalkeeperWidth / 2,
            this.goalkeeperPosition.y,
            this.goalkeeperWidth,
            this.goalkeeperHeight);

        // Desenhar a bola
        this.ctx.fillStyle = this.quantumState === 'superposition' ? 'purple' : 'white';
        this.ctx.beginPath();
        this.ctx.arc(this.ballPosition.x, this.ballPosition.y, 10, 0, Math.PI * 2);
        this.ctx.fill();

        // Efeito de superposição
        if (this.quantumState === 'superposition') {
            this.ctx.globalAlpha = 0.5;
            this.ctx.beginPath();
            this.ctx.arc(this.ballPosition.x - 20, this.ballPosition.y, 10, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(this.ballPosition.x + 20, this.ballPosition.y, 10, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        }

        // Desenhar o poder atual
        this.ctx.fillStyle = 'yellow';
        this.ctx.font = '14px Arial';
        this.ctx.fillText(`Poder Atual: ${this.currentPowerup || 'Nenhum'}`, 10, 20);
    },

    updateBallPosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.ballPosition.x = event.clientX - rect.left;
        this.draw();
    },

    shoot() {
        if (this.quantumState === 'superposition') {
            this.quantumState = Math.random() < 0.5 ? 'left' : 'right';
        }

        let targetX = this.ballPosition.x;

        if (this.currentPowerup === 'teleportation') {
            targetX = Math.random() * this.canvas.width;
        } else if (this.currentPowerup === 'entanglement') {
            this.goalkeeperPosition.x = this.canvas.width - this.goalkeeperPosition.x;
        }

        this.animateShot(targetX);
    },

    animateShot(targetX) {
        const animate = () => {
            this.ballPosition.y -= 5;
            this.ballPosition.x += (targetX - this.ballPosition.x) * 0.1;
            this.moveGoalkeeper();
            this.draw();

            if (this.ballPosition.y > this.goalPosition.y) {
                requestAnimationFrame(animate);
            } else {
                this.checkGoal(targetX);
            }
        };

        animate();
    },

    moveGoalkeeper() {
        const speed = 2 + this.level * 0.5;
        if (this.goalkeeperPosition.x < this.ballPosition.x) {
            this.goalkeeperPosition.x += speed;
        } else {
            this.goalkeeperPosition.x -= speed;
        }
    },

    checkGoal(targetX) {
        const isGoal = Math.abs(targetX - this.goalkeeperPosition.x) > this.goalkeeperWidth / 2 &&
            targetX > this.goalPosition.x - this.goalPosition.width / 2 &&
            targetX < this.goalPosition.x + this.goalPosition.width / 2;

        if (isGoal) {
            this.score++;
            alert('Gol quântico!');
            if (this.score % 3 === 0) {
                this.level++;
                alert(`Nível aumentado para ${this.level}!`);
            }
        } else {
            this.misses++;
            alert('Errou! A defesa quântica prevaleceu.');
        }

        this.updateScore();
        this.reset();
    },

    reset() {
        this.ballPosition = { x: 200, y: 250 };
        this.quantumState = 'superposition';
        this.currentPowerup = null;
        this.goalkeeperPosition.x = 200;
        this.draw();
    },

    updateScore() {
        const scoreElement = document.getElementById('quantum-penalty-score');
        scoreElement.textContent = `Nível: ${this.level} | Gols: ${this.score} | Defesas: ${this.misses}`;
    },

    activatePowerup() {
        this.currentPowerup = this.quantumPowerups[Math.floor(Math.random() * this.quantumPowerups.length)];
        alert(`Poder ativado: ${this.currentPowerup}`);
        this.draw();
    }
};

function initQuantumPenaltyGame() {
    const gameContainer = document.createElement('div');
    gameContainer.id = 'quantum-penalty-game';
    gameContainer.innerHTML = `
        <h3>Pênalti Quântico Aprimorado</h3>
        <p>Mova o mouse para posicionar a bola. Clique para chutar. Use poderes quânticos para vencer o goleiro!</p>
        <div id="quantum-penalty-score"></div>
    `;

    const minigamesTab = document.getElementById('minigames-tab');
    if (minigamesTab) {
        minigamesTab.appendChild(gameContainer);
    } else {
        console.error('Elemento minigames-tab não encontrado');
    }

    quantumPenaltyGame.init();
}

function init() {
    renderPlayers();
    showTab('tactics');
    const field = document.getElementById('soccer-field');
    field.addEventListener('dragover', allowDrop);
    field.addEventListener('drop', drop);
}

window.onload = init;
