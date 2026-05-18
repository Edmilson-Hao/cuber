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

// Estados Globais Inteligentes
let modoAtual = 'estudar';
let casoAtual = null;
let scrambleAtual = "Sem scramble";

// Migração e carregamento do progresso com sistema de erros embutido
let progressoCasos = JSON.parse(localStorage.getItem('cubo_progresso_v2')) || {};
let listaTempos = JSON.parse(localStorage.getItem('cubo_ranking_tempos_v2')) || [];

// Se houver dados da versão antiga de array simples, migra automaticamente
if (localStorage.getItem('cubo_estudados') && Object.keys(progressoCasos).length === 0) {
    const antigos = JSON.parse(localStorage.getItem('cubo_estudados'));
    antigos.forEach(id => { progressoCasos[id] = { estudado: true, erros: 0 }; });
    localStorage.setItem('cubo_progresso_v2', JSON.stringify(progressoCasos));
}

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

function obterIdsEstudados() {
    return Object.keys(progressoCasos).filter(id => progressoCasos[id].estudado);
}

function atualizarStats() {
    elQtdEstudados.innerText = obterIdsEstudados().length;
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
        const estudados = obterIdsEstudados();
        const disponiveis = listaCasos.filter(c => !estudados.includes(c.id));
        if (disponiveis.length > 0) {
            casoAtual = disponiveis[0];
            exibirCaso(casoAtual);
        } else {
            exibirAvisoVazio("Todos os casos foram estudados! Vá para o modo Revisar.");
        }
    } else if (modoAtual === 'revisar') {
        const estudados = obterIdsEstudados();
        const disponiveis = listaCasos.filter(c => estudados.includes(c.id));
        
        if (disponiveis.length > 0) {
            casoAtual = selecionarCasoPorPrioridadeDeErros(disponiveis);
            exibirCaso(casoAtual);
        } else {
            exibirAvisoVazio("Nenhum caso estudado ainda. Use a aba Estudar ou Gerenciar.");
        }
    }
}

// ALGORITMO DE PRIORIDADE BASEADO NOS SEUS ERROS
function selecionarCasoPorPrioridadeDeErros(casosDisponiveis) {
    let poolSelecao = [];
    
    casosDisponiveis.forEach(caso => {
        const dados = progressoCasos[caso.id] || { erros: 0 };
        // Peso padrão é 1. Cada erro adiciona +3 de peso (chances) no sorteio
        const peso = 1 + (dados.erros * 3);
        
        for (let i = 0; i < peso; i++) {
            poolSelecao.push(caso);
        }
    });

    const indiceSorteado = Math.floor(Math.random() * poolSelecao.length);
    return poolSelecao[indiceSorteado];
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
    if (casoAtual) {
        if (!progressoCasos[casoAtual.id]) {
            progressoCasos[casoAtual.id] = { estudado: true, erros: 0 };
        } else {
            progressoCasos[casoAtual.id].estudado = true;
        }
        salvarProgresso();
        renderizarProximo();
    }
}

function proximaRevisao(acertou) {
    if (casoAtual && !acertou) {
        if (!progressoCasos[casoAtual.id]) {
            progressoCasos[casoAtual.id] = { estudado: true, erros: 1 };
        } else {
            progressoCasos[casoAtual.id].erros = (progressoCasos[casoAtual.id].erros || 0) + 1;
        }
        salvarProgresso();
    }
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
    scrambleAtual = gerarScrambleWCA();
    elScrambleTexto.innerText = scrambleAtual;
}

// CRONÔMETRO
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

// SALVA O TEMPO, A DATA ATUAL E O SCRAMBLE DE FORMA ESTRUTURADA
function salvarNovoTempo(novoTempo) {
    const agora = new Date();
    const dataFormatada = `${String(agora.getDate()).padStart(2, '0')}/${String(agora.getMonth() + 1).padStart(2, '0')} ${String(agora.getHours()).padStart(2, '0')}:${String(agora.getMinutes()).padStart(2, '0')}`;
    
    const objetoTempo = {
        tempo: novoTempo,
        data: dataFormatada,
        scramble: scrambleAtual
    };

    listaTempos.push(objetoTempo);
    listaTempos.sort((a, b) => a.tempo - b.tempo);
    localStorage.setItem('cubo_ranking_tempos_v2', JSON.stringify(listaTempos));
}

function renderizarRankingTempos() {
    elListaTemposOl.innerHTML = "";
    const top10 = listaTempos.slice(0, 10);

    if (top10.length === 0) {
        elListaTemposOl.innerHTML = "<p style='font-size:0.95rem;color:#888;'>Nenhum tempo registrado.</p>";
        return;
    }

    top10.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = "ranking-item-container";
        li.innerHTML = `
            <div class="ranking-linha-principal" onclick="alternarDetalhesTempo(${index})">
                <span>${index + 1}. &nbsp;&nbsp; <strong>${item.tempo.toFixed(2)}s</strong></span>
                <div style="display:flex; align-items:center; gap: 15px;">
                    <span class="ranking-data-resumida">${item.data}</span>
                    <button class="btn-delete-tempo" onclick="event.stopPropagation(); deletarTempoPorIndice(${index})">&times;</button>
                </div>
            </div>
            <div id="detalhes-tempo-${index}" class="ranking-detalhes hidden">
                <p><strong>Scramble:</strong> ${item.scramble || 'Não registrado'}</p>
            </div>
        `;
        elListaTemposOl.appendChild(li);
    });
}

function alternarDetalhesTempo(index) {
    const painel = document.getElementById(`detalhes-tempo-${index}`);
    if (painel) {
        painel.classList.toggle('hidden');
    }
}

function deletarTempoPorIndice(index) {
    const confirmar = confirm("Tem certeza que deseja deletar este tempo?");
    if (confirmar) {
        listaTempos.splice(index, 1);
        localStorage.setItem('cubo_ranking_tempos_v2', JSON.stringify(listaTempos));
        renderizarRankingTempos();
    }
}

// GERENCIAMENTO MANUAL
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
        if (checkbox) {
            checkbox.checked = progressoCasos[caso.id] ? progressoCasos[caso.id].estudado : false;
        }
    });
}

function toggleErrosInfoGerenciar() { /* Opcional: Adicionar exibição visual de erros na lista se desejar */ }

function determinarErrosPorId(id) {
    return progressoCasos[id] ? (progressoCasos[id].erros || 0) : 0;
}

function alternarStatusCasoManual(id, marcarComoEstudado) {
    if (!progressoCasos[id]) {
        progressoCasos[id] = { estudado: marcarComoEstudado, erros: 0 };
    } else {
        progressoCasos[id].estudado = marcarComoEstudado;
    }
    salvarProgresso();
}

function salvarProgresso() {
    localStorage.setItem('cubo_progresso_v2', JSON.stringify(progressoCasos));
    atualizarStats();
}

window.onload = inicializar;
