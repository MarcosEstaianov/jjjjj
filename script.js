
const questions = {
    inicio: {
        tag: "🌌 INÍCIO DA AVENTURA",
        question: "Você acordou em um mundo onde todos os animes se misturaram. O que vai fazer?",
        description: "Escolha seu caminho e comece sua jornada!",
        answers: [
            { text: "⚔️ Procurar uma espada lendária", next: "espada", xp: 20 },
            { text: "🍜 Encontrar Naruto, Luffy ou Goku", next: "comida", xp: 15 },
            { text: "🔥 Treinar para ficar mais forte", next: "treino", xp: 25 }
        ]
    },
    espada: {
        tag: "⚔️ ESPADA LENDÁRIA",
        question: "Você encontrou uma espada misteriosa. O que fará?",
        description: "A espada parece possuir um poder especial.",
        answers: [
            { text: "🛡️ Proteger meus amigos", next: "heroi", xp: 20 },
            { text: "🔥 Desafiar o guerreiro mais forte", next: "guerreiro", xp: 25 },
            { text: "🔮 Descobrir o poder secreto", next: "misterio", xp: 30 }
        ]
    },
    comida: {
        tag: "🍜 ENCONTRO COM HERÓIS",
        question: "Qual personagem de anime você gostaria de encontrar?",
        description: "Sua escolha vai mudar sua aventura!",
        answers: [
            { text: "🍥 Naruto", next: "naruto", xp: 20 },
            { text: "🏴‍☠️ Luffy", next: "luffy", xp: 25 },
            { text: "💥 Goku", next: "goku", xp: 25 }
        ]
    },
    treino: {
        tag: "🔥 TREINAMENTO",
        question: "Qual habilidade você quer desenvolver?",
        description: "Escolha sua especialidade.",
        answers: [
            { text: "💪 Força e resistência", next: "forca", xp: 25 },
            { text: "⚡ Velocidade extrema", next: "velocidade", xp: 25 },
            { text: "🧠 Inteligência e estratégia", next: "estrategia", xp: 30 }
        ]
    },
    heroi: {
        tag: "🛡️ PROVA DE CORAGEM",
        question: "Um vilão ameaça destruir uma cidade. O que você faz?",
        description: "Todos estão esperando sua decisão.",
        answers: [
            { text: "⚔️ Enfrento o vilão", next: "resultado-heroi", xp: 30 },
            { text: "🤝 Reúno meus amigos", next: "resultado-lider", xp: 35 },
            { text: "🧠 Crio um plano de batalha", next: "resultado-estrategista", xp: 35 }
        ]
    },
    guerreiro: {
        tag: "⚔️ DESAFIO SUPREMO",
        question: "Um guerreiro poderoso aparece diante de você.",
        description: "Como você vai enfrentar esse desafio?",
        answers: [
            { text: "🔥 Aceito o combate", next: "resultado-guerreiro", xp: 35 },
            { text: "🔍 Descubro seus pontos fracos", next: "resultado-estrategista", xp: 30 },
            { text: "🤝 Tento conquistar seu respeito", next: "resultado-lider", xp: 30 }
        ]
    },
    misterio: {
        tag: "🔮 PODER SECRETO",
        question: "A espada começa a brilhar. Como você usa essa energia?",
        description: "Um poder extraordinário está despertando.",
        answers: [
            { text: "🔥 Libero todo o poder", next: "resultado-poder", xp: 40 },
            { text: "🧘 Aprendo a controlar a energia", next: "resultado-sabio", xp: 35 },
            { text: "🛡️ Guardo o poder para proteger alguém", next: "resultado-protetor", xp: 35 }
        ]
    },
    naruto: {
        tag: "🍥 CAMINHO NINJA",
        question: "Naruto pergunta qual é o seu maior sonho.",
        description: "O que realmente importa para você?",
        answers: [
            { text: "🏆 Ser reconhecido por todos", next: "resultado-ninja", xp: 30 },
            { text: "🛡️ Proteger quem amo", next: "resultado-protetor", xp: 35 },
            { text: "👑 Liderar e unir pessoas", next: "resultado-lider", xp: 35 }
        ]
    },
    luffy: {
        tag: "🏴‍☠️ AVENTURA PIRATA",
        question: "Luffy convida você para sua tripulação. Qual é sua resposta?",
        description: "O oceano está cheio de aventuras!",
        answers: [
            { text: "🏴‍☠️ Aceito e procuro tesouros", next: "resultado-pirata", xp: 35 },
            { text: "🧭 Quero ser o navegador", next: "resultado-navegador", xp: 30 },
            { text: "⚔️ Quero lutar ao lado da tripulação", next: "resultado-guerreiro", xp: 30 }
        ]
    },
    goku: {
        tag: "💥 TREINO SAIYAJIN",
        question: "Goku desafia você para um treinamento.",
        description: "Como você pretende ficar mais forte?",
        answers: [
            { text: "💪 Treinar até superar meus limites", next: "resultado-saiyajin", xp: 40 },
            { text: "🧠 Observar e aprender suas técnicas", next: "resultado-mestre", xp: 30 },
            { text: "⚡ Usar minha velocidade", next: "resultado-veloz", xp: 35 }
        ]
    },
    forca: {
        tag: "💪 FORÇA ABSOLUTA",
        question: "Você ficou muito mais forte. Qual será seu próximo objetivo?",
        description: "Sua força precisa de um propósito.",
        answers: [
            { text: "⚔️ Encontrar um adversário poderoso", next: "resultado-guerreiro", xp: 35 },
            { text: "🛡️ Defender minha cidade", next: "resultado-heroi", xp: 35 },
            { text: "🔥 Continuar treinando", next: "resultado-saiyajin", xp: 40 }
        ]
    },
    velocidade: {
        tag: "⚡ VELOCIDADE MÁXIMA",
        question: "Você se tornou extremamente veloz. Como usará essa habilidade?",
        description: "Seus adversários mal conseguem acompanhar você.",
        answers: [
            { text: "⚡ Derrotar inimigos rapidamente", next: "resultado-veloz", xp: 35 },
            { text: "🚑 Salvar pessoas em perigo", next: "resultado-heroi", xp: 35 },
            { text: "🎯 Combinar velocidade e estratégia", next: "resultado-estrategista", xp: 35 }
        ]
    },
    estrategia: {
        tag: "🧠 MENTE GENIAL",
        question: "Você se tornou um mestre da estratégia. Qual será sua especialidade?",
        description: "A inteligência pode superar a força.",
        answers: [
            { text: "♟️ Planejar batalhas", next: "resultado-estrategista", xp: 35 },
            { text: "🌑 Agir nas sombras", next: "resultado-misterioso", xp: 40 },
            { text: "👑 Liderar uma equipe", next: "resultado-lider", xp: 35 }
        ]
    }
};

const results = {
    "resultado-heroi": {
        icon: "🦸",
        title: "Você seria um grande herói!",
        className: "Herói",
        ability: "Coragem, justiça e proteção.",
        text: "Você usa sua força para proteger as pessoas. Seus amigos sempre podem contar com você.",
        ending: "Sua lenda será lembrada por aqueles que você salvou."
    },
    "resultado-lider": {
        icon: "👑",
        title: "Você nasceu para liderar!",
        className: "Líder",
        ability: "Carisma, união e determinação.",
        text: "Você sabe unir pessoas e transformar uma equipe em uma verdadeira família.",
        ending: "Seus companheiros seguirão você em grandes aventuras."
    },
    "resultado-guerreiro": {
        icon: "⚔️",
        title: "Você seria um guerreiro lendário!",
        className: "Guerreiro",
        ability: "Combate, resistência e coragem.",
        text: "Você adora desafios e nunca desiste diante de um adversário poderoso.",
        ending: "Uma nova batalha está esperando por você."
    },
    "resultado-estrategista": {
        icon: "🧠",
        title: "Você é um estrategista genial!",
        className: "Estrategista",
        ability: "Inteligência, planejamento e análise.",
        text: "Você pensa vários passos à frente e encontra soluções que ninguém percebe.",
        ending: "Sua inteligência pode decidir o destino de uma batalha."
    },
    "resultado-poder": {
        icon: "🔥",
        title: "Você despertou um poder lendário!",
        className: "Despertado",
        ability: "Energia, força e potencial.",
        text: "Seu poder é extraordinário. Aprender a controlá-lo será seu maior desafio.",
        ending: "Uma nova transformação espera por você."
    },
    "resultado-sabio": {
        icon: "🔮",
        title: "Você seria um mestre sábio!",
        className: "Mestre",
        ability: "Autocontrole, disciplina e conhecimento.",
        text: "Você sabe que o verdadeiro poder exige paciência e equilíbrio.",
        ending: "Seu conhecimento inspirará novas gerações."
    },
    "resultado-ninja": {
        icon: "🍥",
        title: "Você seria um ninja extraordinário!",
        className: "Ninja",
        ability: "Agilidade, persistência e técnicas especiais.",
        text: "Você nunca desiste dos seus sonhos e supera obstáculos com determinação.",
        ending: "Sua história ninja está apenas começando."
    },
    "resultado-protetor": {
        icon: "🛡️",
        title: "Você seria o guardião da equipe!",
        className: "Protetor",
        ability: "Lealdade, defesa e amizade.",
        text: "Seus amigos são sua maior motivação. Você nunca abandona quem precisa de ajuda.",
        ending: "Sua maior vitória é manter seus amigos seguros."
    },
    "resultado-pirata": {
        icon: "🏴‍☠️",
        title: "Você seria um pirata aventureiro!",
        className: "Explorador",
        ability: "Liberdade, coragem e exploração.",
        text: "Você quer descobrir novos mundos, encontrar tesouros e viver grandes aventuras.",
        ending: "O próximo horizonte guarda uma aventura inesquecível."
    },
    "resultado-navegador": {
        icon: "🧭",
        title: "Você seria um navegador excepcional!",
        className: "Navegador",
        ability: "Orientação, observação e planejamento.",
        text: "Você encontra caminhos mesmo quando tudo parece perdido.",
        ending: "Nenhum oceano será grande demais para você."
    },
    "resultado-saiyajin": {
        icon: "💥",
        title: "Você seria um guerreiro Saiyajin!",
        className: "Saiyajin",
        ability: "Força, evolução e superação.",
        text: "Você transforma cada dificuldade em uma oportunidade para ficar mais forte.",
        ending: "Seu próximo nível de poder está por despertar."
    },
    "resultado-mestre": {
        icon: "🥋",
        title: "Você seria um mestre das técnicas!",
        className: "Aprendiz",
        ability: "Disciplina, precisão e aprendizado.",
        text: "Você aprende observando e praticando até dominar cada movimento.",
        ending: "Todo grande mestre já foi um aprendiz."
    },
    "resultado-veloz": {
        icon: "⚡",
        title: "Você seria uma lenda da velocidade!",
        className: "Velocista",
        ability: "Reflexos, agilidade e rapidez.",
        text: "Poucos conseguem acompanhar seus movimentos. Você age antes que seus adversários reajam.",
        ending: "Para você, o impossível está a um passo de distância."
    },
    "resultado-misterioso": {
        icon: "🌑",
        title: "Você seria uma lenda das sombras!",
        className: "Misterioso",
        ability: "Discrição, estratégia e surpresa.",
        text: "Você observa tudo e age no momento perfeito. Poucos conhecem seus verdadeiros planos.",
        ending: "Sua verdadeira história permanecerá um mistério."
    }
};

const TOTAL_STAGES = 3;

let currentQuestion = "inicio";
let questionCount = 0;
let xp = 0;
let choiceHistory = [];
let locked = false;

const $ = id => document.getElementById(id);

function updateStats() {
    $("xp").textContent = `${xp} XP`;
    $("level").textContent = Math.floor(xp / 50) + 1;
    $("stage").textContent = Math.min(questionCount + 1, TOTAL_STAGES);
}

function showQuestion() {
    const data = questions[currentQuestion];

    if (!data) {
        console.error("Pergunta não encontrada:", currentQuestion);
        $("question").textContent = "Erro ao carregar a pergunta. Reinicie o jogo.";
        $("answers").innerHTML = "";
        return;
    }

    locked = false;

    $("question").textContent = data.question;
    $("question-description").textContent = data.description || "";
    $("story-tag").textContent = data.tag || "✨ SUA AVENTURA";
    $("question-number").textContent =
        `Etapa ${questionCount + 1} de ${TOTAL_STAGES}`;

    const progress = Math.min(questionCount / TOTAL_STAGES * 100, 100);
    $("progress-bar").style.width = `${progress}%`;
    $("progress-label").textContent = `${Math.round(progress)}%`;
    $("feedback").textContent = "";
    $("answers").innerHTML = "";

    data.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.textContent = answer.text;
        button.style.animationDelay = `${index * 70}ms`;

        button.addEventListener("click", () => chooseAnswer(answer, button));
        $("answers").appendChild(button);
    });

    updateStats();
}

function chooseAnswer(answer, selectedButton) {
    if (locked) return;

    locked = true;

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true;
    });

    selectedButton.classList.add("selected");

    xp += answer.xp || 20;
    questionCount++;
    choiceHistory.push(answer.text);

    $("feedback").textContent =
        `${answer.feedback || "Escolha registrada!"} +${answer.xp || 20} XP`;

    updateStats();

    window.setTimeout(() => {
        if (results[answer.next]) {
            showResult(answer.next);
        } else if (questions[answer.next]) {
            currentQuestion = answer.next;
            showQuestion();
        } else {
            console.error("Destino não encontrado:", answer.next);
            $("feedback").textContent =
                "Erro ao continuar. Reinicie sua aventura.";
            locked = false;
        }
    }, 450);
}

function showResult(resultKey) {
    const result = results[resultKey];

    if (!result) {
        console.error("Resultado não encontrado:", resultKey);
        return;
    }

    $("quiz").classList.add("hidden");
    $("result").classList.remove("hidden");

    $("result-icon").textContent = result.icon;
    $("result-title").textContent = result.title;
    $("result-text").textContent = result.text;
    $("result-ability").textContent = result.ability;

    $("result-history").textContent =
        `${result.ending}\n\nSua jornada: ${choiceHistory.join(" → ")}`;

    $("final-xp").textContent = `${xp} XP`;
    $("final-choices").textContent = choiceHistory.length;
    $("final-class").textContent = result.className;

    $("progress-bar").style.width = "100%";
    $("progress-label").textContent = "100%";
    $("question-number").textContent = "Aventura concluída!";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
    currentQuestion = "inicio";
    questionCount = 0;
    xp = 0;
    choiceHistory = [];
    locked = false;

    $("quiz").classList.remove("hidden");
    $("result").classList.add("hidden");

    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

$("restart-small").addEventListener("click", restartQuiz);
$("play-again").addEventListener("click", restartQuiz);

showQuestion();
