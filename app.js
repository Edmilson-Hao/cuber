// Banco de dados completo
const listaCasos = [
    { id: "oll_01", tipo: "OLL", nome: "Caso 01", algoritmo: "R U R' U R U2 R'", imagem: "imagens/oll-caso-01.png" },
    { id: "oll_02", tipo: "OLL", nome: "Caso 02", algoritmo: "R' U' R U' R' U2 R", imagem: "imagens/oll-caso-02.png" },
    { id: "oll_03", tipo: "OLL", nome: "Caso 03", algoritmo: "R U R' U R U' R' U R U2 R'", imagem: "imagens/oll-caso-03.png" },
    { id: "oll_04", tipo: "OLL", nome: "Caso 04", algoritmo: "R U2 R2 U' R2 U' R2 U2 R", imagem: "imagens/oll-caso-04.png" },
    { id: "oll_05", tipo: "OLL", nome: "Caso 05", algoritmo: "Rw U R’ U’ Rw’ F R F’", imagem: "imagens/oll-caso-05.png" },
    { id: "oll_06", tipo: "OLL", nome: "Caso 06", algoritmo: "F' Rw U R' U' Rw' F R", imagem: "imagens/oll-caso-06.png" },
    { id: "oll_07", tipo: "OLL", nome: "Caso 07", algoritmo: "R2 D' R U2 R' D R U2 R", imagem: "imagens/oll-caso-07.png" },
    { id: "pll_u_h", tipo: "PLL", nome: "Caso U horário", algoritmo: "R' U R' U' R' U' R' U R U R2", imagem: "imagens/pll-caso-u-h-01.png" },
    { id: "pll_u_a", tipo: "PLL", nome: "Caso U anti-horário", algoritmo: "R2 U' R' U' R U R U R U' R", imagem: "imagens/pll-caso-u-a-01.png" },
    { id: "pll_a_h", tipo: "PLL", nome: "Caso A horário", algoritmo: "x R' U R' D2 R U' R' D2 R2 x'", imagem: "imagens/pll-caso-a-h-01.png" },
    { id: "pll_a_a", tipo: "PLL", nome: "Caso A anti-horário", algoritmo: "x R2' D2 R U R' D2 R U' R x'", imagem: "imagens/pll-caso-a-a-01.png" },
    { id: "pll_h", tipo: "PLL", nome: "Caso H", algoritmo: "M2 U M2 U2 M2 U M2", imagem: "imagens/pll-caso-h-01.png" },
    { id: "pll_z", tipo: "PLL", nome: "Caso Z", algoritmo: "M2 U M2 U M' U2 M2 U2 M'", imagem: "imagens/pll-caso-z-01.png" },
    { id: "pll_t", tipo: "PLL", nome: "Caso T", algoritmo: "R U R' U' R' F R2 U' R' U' R U R' F'", imagem: "imagens/pll-caso-t-01.png" },
    { id: "pll_f", tipo: "PLL", nome: "Caso F", algoritmo: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R", imagem: "imagens/pll-caso-f-01.png" },
    { id: "pll_y", tipo: "PLL", nome: "Caso Y", algoritmo: "F R U' R' U' R U R' F' R U R' U' R' F R F'", imagem: "imagens/pll-caso-y-01.png" },
    { id: "pll_e", tipo: "PLL", nome: "Caso E", algoritmo: "x' R U' R' D R U R' D' R U R' D R U' R' D' x", imagem: "imagens/pll-caso-e-01.png" },
    { id: "pll_v", tipo: "PLL", nome: "Caso V", algoritmo: "R' U R' Dw' R' F' R2 U' R' U R' F R F", imagem: "imagens/pll-caso-v-01.png" },
    { id: "pll_r1", tipo: "PLL", nome: "Caso R1", algoritmo: "R U' R' U' R U R D R' U' R D' R' U2 R' U'", imagem: "imagens/pll-caso-r1-01.png" },
    { id: "pll_r2", tipo: "PLL", nome: "Caso R2", algoritmo: "R' U2 R U2' R' F R U R' U' R' F' R2 U'", imagem: "imagens/pll-caso-r2-01.png" },
    { id: "pll_j1", tipo: "PLL", nome: "Caso J1", algoritmo: "x R2 F R F' R U2 Rw' U Rw U2 x'", imagem: "imagens/pll-caso-j1-01.png" },
    { id: "pll_j2", tipo: "PLL", nome: "Caso J2", algoritmo: "R U R' F' R U R' U' R' F R2 U' R' U'", imagem: "imagens/pll-caso-j2-01.png" },
    { id: "pll_n1", tipo: "PLL", nome: "Caso N1", algoritmo: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'", imagem: "imagens/pll-caso-n1-01.png" },
    { id: "pll_n2", tipo: "PLL", nome: "Caso N2", algoritmo: "R' U R U' R' F' U' F R U R' F R' F' R U' R", imagem: "imagens/pll-caso-n2-01.png" },
    { id: "pll_g1", tipo: "PLL", nome: "Caso G1", algoritmo: "R2' Uw R' U R' U' R Uw' R2 y' R' U R", imagem: "imagens/pll-caso-g1-01.png" },
    { id: "pll_g2", tipo: "PLL", nome: "Caso G2", algoritmo: "R' U' R U D' R2 U R' U R U' R U' R2 D U'", imagem: "imagens/pll-caso-g2-01.png" },
    { id: "pll_g3", tipo: "PLL", nome: "Caso G3", algoritmo: "R2 U' R U' R U R' U R2 D' U R U' R' D U'", imagem: "imagens/pll-caso-g3-01.png" },
    { id: "pll_g4", tipo: "PLL", nome: "Caso G4", algoritmo: "R U R' y' R2 Uw' R U' R' U R' Uw R2", imagem: "imagens/pll-caso-g4-01.png" }
];

// Estados Globais
let modoAtual = 'estudar';
let casoAtual = null;
let identificadoresEstudados = JSON.parse(localStorage.getItem('cubo_estudados')) || [];
let listaTempos = JSON.parse(localStorage.getItem('cubo_ranking_tempos')) || [];

// Elementos DOM
const elCasoCard = document.getElementById('caso-card');
const elMensagemVazia = document.getElementById('mensagem-vazia');
const elTextoVazio = document.getElementById('texto-vazio');
const elModoGerenciar = document.getElementById('modo-gerenciar');
const elModoTimer = document.getElementById('modo-timer');
const elModoTempos = document.getElementById('modo-tempos');
const elScrambleTexto = document.getElementById('scramble-texto');
const elListaTemposOl = document.getElementById('lista-melhores-tempos');

const elTipo = document.getElementById('caso-tipo');
const elNome = document.getElementById('caso-nome');
const elImagem = document.getElementById('caso-imagem');
const elAlgoritmo = document.getElementById('caso-algoritmo');
const elControlesEstudar = document.getElementById('controles-estudar');
const elControlesRevisar = document.getElementById('controles-revisar');
const elQtdEstudados = document.getElementById('qtd-estudados');
const elQtdTotal = document.getElementById('qtd-total');

// Cronômetro
const elAreaToque = document.getElementById('area-toque-timer');
const elCronometro = document.getElementById('cronometro');
const elTimerTop = document.getElementById('timer-display-top');
let timerEstado = "parado";
let tempoInicial = 0;
let tempoFinalCalculado = 0;
let intervaloTimer = null;
let segurandoTimeout = null;

function inicializar() {
    if (localStorage.getItem('cubo_darkmode') === 'true') {
        document.body.classList.add('dark');
        document.getElementById('btn-theme').innerText = "☀️ Light Mode";
    }
    atualizarStats();
    gerarListasGerenciamento();
    renderizarProximo();
    configurarEventosTimer();
}

function alternarTema() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('cubo_darkmode', isDark);
    document.getElementById('btn-theme').innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function atualizarStats() {
    elQtdEstudados.innerText = identificadoresEstudados.length;
    elQtdTotal.innerText = listaCasos.length;
}

function mudarModo(modo) {
    modoAtual = modo;
    document.getElementById('btn-estudar').classList.toggle('active', modo === 'estudar');
    document.getElementById('btn-revisar').classList.toggle('active', modo === 'revisar');
    document.getElementById('btn-timer').classList.toggle('active', modo === 'timer');
    document.getElementById('btn-tempos').classList.toggle('active', modo === 'tempos');
    document.getElementById('btn-gerenciar').classList.toggle('active', modo === 'gerenciar');
    
    elCasoCard.classList.add('hidden');
    elMensagemVazia.classList.add('hidden');
    elModoGerenciar.classList.add('hidden');
    elModoTimer.classList.add('hidden');
    elModoTempos.classList.add('hidden');
    elControlesEstudar.classList.add('hidden');
    elControlesRevisar.classList.add('hidden');

    resetarTimerVisual();

    if (modo === 'estudar' || modo === 'revisar') {
        if (modo === 'estudar') elControlesEstudar.classList.remove('hidden');
        if (modo === 'revisar') elControlesRevisar.classList.remove('hidden');
        renderizarProximo();
    } else if (modo === 'timer') {
        elModoTimer.classList.remove('hidden');
        atualizarScramble();
    } else if (modo === 'tempos') {
        elModoTempos.classList.remove('hidden');
        renderizarRankingTempos();
    } else if (modo === 'gerenciar') {
        elModoGerenciar.classList.remove('hidden');
        atualizarCheckboxesGerenciar();
    }
}

function renderizarProximo() {
    if (modoAtual === 'estudar') {
        const disponiveis = listaCasos.filter(c => !identificadoresEstudados.includes(c.id));
        if (disponiveis.length > 0) {
            casoAtual = disponiveis[0];
            exibirCaso(casoAtual);
        } else {
            exibirAvisoVazio("Todos os casos foram estudados! Vá para o modo Revisar.");
        }
    } else if (modoAtual === 'revisar') {
        const disponiveis = listaCasos.filter(c => identificadoresEstudados.includes(c.id));
        if (disponiveis.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
            casoAtual = disponiveis[indiceAleatorio];
            exibirCaso(casoAtual);
        } else {
            exibirAvisoVazio("Nenhum caso estudado ainda. Use a aba Estudar ou Gerenciar.");
        }
    }
}

function exibirCaso(caso) {
    elCasoCard.classList.remove('hidden');
    elMensagemVazia.classList.add('hidden');
    elTipo.innerText = caso.tipo;
    elNome.innerText = caso.nome;
    elImagem.src = caso.imagem;
    elAlgoritmo.innerText = caso.algoritmo;
}

function exibirAvisoVazio(mensagem) {
    elCasoCard.classList.add('hidden');
    elMensagemVazia.classList.remove('hidden');
    elTextoVazio.innerText = mensagem;
}

function concluirEstudo() {
    if (casoAtual && !identificadoresEstudados.includes(casoAtual.id)) {
        identificadoresEstudados.push(casoAtual.id);
        salvarProgresso();
        renderizarProximo();
    }
}

function proximaRevisao(acertou) {
    renderizarProximo();
}

// GERADOR WCA SCRAMBLE
function gerarScrambleWCA() {
    const movimentos = ["U", "D", "R", "L", "F", "B"];
    const modificadores = ["", "'", "2"];
    let scramble = [];
    let ultimoEixo = -1;
    for (let i = 0; i < 21; i++) {
        let eixoEscolhido;
        do { eixoEscolhido = Math.floor(Math.random() * movimentos.length); } while (eixoEscolhido === ultimoEixo);
        scramble.push(movimentos[eixoEscolhido] + modificadores[Math.floor(Math.random() * modificadores.length)]);
        ultimoEixo = eixoEscolhido;
    }
    return scramble.join(" ");
}

function atualizarScramble() {
    elScrambleTexto.innerText = gerarScrambleWCA();
}

// CRONÔMETRO REESTRUTURADO (Área de Toque Ampla)
function configurarEventosTimer() {
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && modoAtual === 'timer') {
            e.preventDefault();
            dispararAperto();
        }
    });

    window.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && modoAtual === 'timer') {
            e.preventDefault();
            dispararSoltura();
        }
    });

    // Eventos mapeados para toda a div cinza de toque
    elAreaToque.addEventListener('mousedown', dispararAperto);
    elAreaToque.addEventListener('mouseup', dispararSoltura);
    elAreaToque.addEventListener('touchstart', (e) => { e.preventDefault(); dispararAperto(); });
    elAreaToque.addEventListener('touchend', (e) => { e.preventDefault(); dispararSoltura(); });
}

function dispararAperto() {
    if (timerEstado === "rodando") {
        pararTimer();
        salvarNovoTempo(tempoFinalCalculado);
        atualizarScramble();
    } else if (timerEstado === "parado") {
        timerEstado = "inspecionando";
        elCronometro.className = "timer-main preparando";
        segurandoTimeout = setTimeout(() => {
            timerEstado = "pronto";
            elCronometro.className = "timer-main pronto";
            elCronometro.innerText = "0.00";
        }, 500);
    }
}

function dispararSoltura() {
    clearTimeout(segurandoTimeout);
    if (timerEstado === "pronto") {
        iniciarTimer();
    } else if (timerEstado === "inspecionando") {
        timerEstado = "parado";
        elCronometro.className = "timer-main";
    }
}

function iniciarTimer() {
    timerEstado = "rodando";
    elCronometro.className = "timer-main rodando";
    tempoInicial = performance.now();
    
    intervaloTimer = setInterval(() => {
        tempoFinalCalculado = (performance.now() - tempoInicial) / 1000;
        const stringTempo = tempoFinalCalculado.toFixed(2);
        elCronometro.innerText = stringTempo;
        elTimerTop.innerText = stringTempo;
    }, 10);
}

function pararTimer() {
    clearInterval(intervaloTimer);
    timerEstado = "parado";
    elCronometro.className = "timer-main";
}

function resetarTimerVisual() {
    clearInterval(intervaloTimer);
    timerEstado = "parado";
    elCronometro.className = "timer-main";
    elCronometro.innerText = "0.00";
    elTimerTop.innerText = "0.00";
}

// LOGICA DE SESSÕES E TEMPOS (RANKING TOP 10)
function salvarNovoTempo(novoTempo) {
    listaTempos.push(novoTempo);
    // Ordena do menor tempo para o maior
    listaTempos.sort((a, b) => a - b);
    localStorage.setItem('cubo_ranking_tempos', JSON.stringify(listaTempos));
}

function renderizarRankingTempos() {
    elListaTemposOl.innerHTML = "";
    
    // Filtra e pega apenas os 10 melhores tempos salvos
    const top10 = listaTempos.slice(0, 10);

    if (top10.length === 0) {
        elListaTemposOl.innerHTML = "<p style='font-size:0.95rem;color:#888;'>Nenhum tempo registrado.</p>";
        return;
    }

    top10.forEach((tempo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${index + 1}. &nbsp;&nbsp; <strong>${tempo.toFixed(2)}s</strong></span>
            <button class="btn-delete-tempo" onclick="deletarTempoPorIndice(${index})">&times;</button>
        `;
        elListaTemposOl.appendChild(li);
    });
}

function deletarTempoPorIndice(index) {
    const confirmar = confirm("Tem certeza que deseja deletar este tempo?");
    if (confirmar) {
        listaTempos.splice(index, 1);
        localStorage.setItem('cubo_ranking_tempos', JSON.stringify(listaTempos));
        renderizarRankingTempos();
    }
}

// GERENCIAMENTO MANUAL DE CASOS
function gerarListasGerenciamento() {
    const containerOll = document.getElementById('lista-gerenciar-oll');
    const containerPll = document.getElementById('lista-gerenciar-pll');
    containerOll.innerHTML = '';
    containerPll.innerHTML = '';

    listaCasos.forEach(caso => {
        const label = document.createElement('label');
        label.className = 'item-gerenciar';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `chk-${caso.id}`;
        checkbox.addEventListener('change', () => alternarStatusCasoManual(caso.id, checkbox.checked));

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(caso.nome));

        if (caso.tipo === 'OLL') containerOll.appendChild(label);
        else containerPll.appendChild(label);
    });
}

function atualizarCheckboxesGerenciar() {
    listaCasos.forEach(caso => {
        const checkbox = document.getElementById(`chk-${caso.id}`);
        if (checkbox) checkbox.checked = identificadoresEstudados.includes(caso.id);
    });
}

function alternarStatusCasoManual(id, marcarComoEstudado) {
    if (marcarComoEstudado) {
        if (!identificadoresEstudados.includes(id)) identificadoresEstudados.push(id);
    } else {
        identificadoresEstudados = identificadoresEstudados.filter(item => item !== id);
    }
    salvarProgresso();
}

function salvarProgresso() {
    localStorage.setItem('cubo_estudados', JSON.stringify(identificadoresEstudados));
    atualizarStats();
}

window.onload = inicializar;