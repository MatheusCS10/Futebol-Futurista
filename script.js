




const players = [

    {

        name: "Neo",

        position: { x: 10, y: 50 },

        role: "GK",

        rating: 5,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Reflexos Quânticos"],

        description: "O goleiro do time com reflexos incomparáveis. Sua habilidade em defender chutes é quase sobrenatural."

    },

    {

        name: "Morpheus",

        position: { x: 30, y: 20 },

        role: "RB",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Visão 360°"],

        description: "Lateral direito com uma visão de jogo excepcional, capaz de cobrir todo o campo com eficácia."

    },

    {

        name: "Trinity",

        position: { x: 30, y: 40 },

        role: "CB",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Teletransporte Tático"],

        description: "Zagueira central com a habilidade de se teletransportar estrategicamente para bloquear ataques adversários."

    },

    {

        name: "Cypher",

        position: { x: 30, y: 60 },

        role: "CB",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Campo de Força"],

        description: "Zagueiro central com a capacidade de criar um campo de força para proteger a área defensiva."

    },

    {

        name: "Oracle",

        position: { x: 30, y: 80 },

        role: "LB",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Previsão de Jogadas"],

        description: "Lateral esquerdo com habilidades de previsão avançadas, capaz de antecipar e neutralizar jogadas adversárias."

    },

    {

        name: "Agent Smith",

        position: { x: 50, y: 50 },

        role: "CDM",

        rating: 5,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Replicação"],

        description: "Volante com a habilidade de se replicar e dominar o meio-campo, tornando-se um adversário formidável."

    },

    {

        name: "Niobe",

        position: { x: 60, y: 30 },

        role: "CAM",

        rating: 5,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Controle Mental"],

        description: "Meio-campista ofensiva com a capacidade de controlar a mente dos adversários e criar jogadas brilhantes."

    },

    {

        name: "Seraph",

        position: { x: 60, y: 70 },

        role: "CAM",

        rating: 5,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Manipulação do Tempo"],

        description: "Meio-campista com habilidades para manipular o tempo e alterar o ritmo do jogo a seu favor."

    },

    {

        name: "Mouse",

        position: { x: 75, y: 20 },

        role: "LW",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Invisibilidade"],

        description: "Extremo esquerdo com a habilidade de se tornar invisível e surpreender os defensores adversários."

    },

    {

        name: "Dozer",

        position: { x: 80, y: 50 },

        role: "ST",

        rating: 5,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Super Força"],

        description: "Atacante com força sobre-humana, capaz de derrubar adversários e marcar gols com facilidade."

    },

    {

        name: "Switch",

        position: { x: 75, y: 80 },

        role: "RW",

        rating: 4,

        photo: "https://img.freepik.com/fotos-premium/modelo-de-camisa-de-futebol-realista-stuttgart-2023-para-footbool-ai-gerado_950989-160.jpg?w=740",

        enhancements: ["Alteração de Realidade"],

        description: "Extremo direito com a habilidade de alterar a realidade e criar situações favoráveis para o time."

    }

];
let currentTabIndex = 0;
const tabs = ['tactics', 'players', 'simulation', 'analysis', 'history', 'minigames'];
let currentFormation = '4-3-3';
let currentFieldShape = 'rectangle';
let currentGravity = 'normal';

const formations = {
    '4-3-3': [
        { x: 10, y: 50 }, // GK
        { x: 30, y: 20 }, { x: 30, y: 40 }, { x: 30, y: 60 }, { x: 30, y: 80 }, // Defenders
        { x: 50, y: 30 }, { x: 50, y: 50 }, { x: 50, y: 70 }, // Midfielders
        { x: 75, y: 20 }, { x: 80, y: 50 }, { x: 75, y: 80 } // Forwards
    ],
    '3-4-3': [
        { x: 10, y: 50 },
        { x: 30, y: 30 }, { x: 30, y: 50 }, { x: 30, y: 70 },
        { x: 50, y: 20 }, { x: 50, y: 40 }, { x: 50, y: 60 }, { x: 50, y: 80 },
        { x: 75, y: 30 }, { x: 80, y: 50 }, { x: 75, y: 70 }
    ],
    '5-3-2': [
        { x: 10, y: 50 },
        { x: 25, y: 20 }, { x: 25, y: 35 }, { x: 25, y: 50 }, { x: 25, y: 65 }, { x: 25, y: 80 },
        { x: 50, y: 30 }, { x: 50, y: 50 }, { x: 50, y: 70 },
        { x: 80, y: 40 }, { x: 80, y: 60 }
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
        playerElement.title = `${player.name} (${player.role}) - ${player.enhancements.join(', ')}`;
        playerElement.draggable = true;
        playerElement.addEventListener('dragstart', drag);
        field.appendChild(playerElement);
    });
}

function populatePlayerList() {
    const list = document.getElementById('player-list');
    list.innerHTML = '';
    players.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <div class="player-info">
                <div class="player-photo" style="background-image: url(${player.photo})"></div>
                <div class="player-details">
                    <span class="player-name">${player.name}</span>
                    <span class="player-role">${player.role}</span>
                    <span class="player-enhancements">${player.enhancements.join(', ')}</span>
                </div>
            </div>
            <div class="player-rating">
                ${'★'.repeat(player.rating)}${'☆'.repeat(5 - player.rating)}
            </div>
        `;
        list.appendChild(playerItem);
    });
}

function changeFormation(formation) {
    currentFormation = formation;
    renderPlayers();
    console.log(`Formação alterada para ${formation}`);
}

function simulateQuantumMatch() {
    const matchSimulation = document.getElementById('match-simulation');
    matchSimulation.innerHTML = '<h4>Simulação Quântica de Partida</h4>';

    let homeScore = 0;
    let awayScore = 0;
    let quantumEvents = ['Superposição de Gol', 'Túnel Quântico', 'Entrelaçamento de Passes', 'Flutuação do Vácuo'];

    for (let minute = 1; minute <= 90; minute++) {
        if (Math.random() < 0.15) {  // 15% chance de um evento a cada minuto
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
    document.querySelectorAll('.content-area').forEach(tab => tab.style.display = 'none');
    document.getElementById(`${tabName}-tab`).style.display = 'flex';
    document.getElementById('current-tab').textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
    currentTabIndex = tabs.indexOf(tabName);

    if (tabName === 'tactics') {
        renderPlayers();
    } else if (tabName === 'players') {
        populatePlayerList();
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

    // Desenhar o gráfico de radar
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

    // Desenhar os eixos e labels
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

// Função para busca de jogadores melhorada
function improvedPlayerSearch() {
    const searchInput = document.getElementById('player-search');
    const playerList = document.getElementById('player-list');
    const playerDetails = document.getElementById('player-details');

    searchInput.addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();

        // Filtra os jogadores com base na entrada de pesquisa
        const filteredPlayers = players.filter(p =>
            p.name.toLowerCase().includes(searchValue) ||
            p.role.toLowerCase().includes(searchValue) ||
            p.enhancements.some(e => e.toLowerCase().includes(searchValue))
        );

        // Limpa a lista de jogadores
        playerList.innerHTML = '';

        if (filteredPlayers.length > 0) {
            // Preenche a lista com os jogadores filtrados
            filteredPlayers.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.className = 'player-item';
                playerItem.innerHTML = `
                    <div class="player-info">
                        <div class="player-photo" style="background-image: url(${player.photo})"></div>
                        <div class="player-details">
                            <span class="player-name">${player.name}</span>
                            <span class="player-role">${player.role}</span>
                            <span class="player-enhancements">${player.enhancements.join(', ')}</span>
                        </div>
                    </div>
                    <div class="player-rating">
                        ${'★'.repeat(player.rating)}${'☆'.repeat(5 - player.rating)}
                    </div>
                `;
                playerItem.addEventListener('click', () => displayPlayerDetails(player));
                playerList.appendChild(playerItem);
            });

            // Exibe detalhes do primeiro jogador encontrado
            displayPlayerDetails(filteredPlayers[0]);
        } else {
            // Exibe mensagem se nenhum jogador for encontrado
            playerList.innerHTML = '<p>Nenhum jogador encontrado.</p>';
            playerDetails.classList.add('hidden');
        }
    });
}

// Função para exibir detalhes do jogador
function displayPlayerDetails(player) {
    const playerDetails = document.getElementById('player-details');

    document.getElementById('player-name').textContent = player.name;
    document.getElementById('player-photo').src = player.photo;
    document.getElementById('player-role').textContent = `Posição: ${player.role}`;
    document.getElementById('player-description').textContent = player.description;
    document.getElementById('player-enhancements').textContent = `Melhorias: ${player.enhancements.join(', ')}`;

    playerDetails.classList.remove('hidden');
}

// Minigame: Pênalti Quântico Aprimorado
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

// Inicialização
function init() {
    renderPlayers();
    populatePlayerList();
    showTab('tactics');
    improvedPlayerSearch();

    const field = document.getElementById('soccer-field');
    field.addEventListener('dragover', allowDrop);
    field.addEventListener('drop', drop);
}

// Iniciar o aplicativo
window.onload = init;
