const desejos = [
    "Comprar uma casa nova",
    "Conseguir um emprego dos sonhos",
    "Viajar pelo mundo"
];

const afirmacoes = [
    "Eu sou digno de sucesso e atraio oportunidades incríveis.",
    "Eu atraio abundância e prosperidade em minha vida.",
    "Eu sou saudável, feliz e cheio de energia.",
    "Eu mereço amor e respeito."
];

const desafios = [
    "Liste cinco coisas pelas quais você é grato neste momento.",
    "Escreva uma carta para você mesmo no futuro, descrevendo sua vida ideal.",
    "Compartilhe uma história de um momento em que você manifestou algo positivo.",
    "Faça uma lista de dez coisas que você ama em sua vida."
];

function sortear(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

function generateAffirmation() {
    const afirmacao = sortear(afirmacoes);
    document.getElementById('affirmation').innerText = afirmacao;
}

function generateChallenge() {
    const desafio = sortear(desafios);
    document.getElementById('challenge').innerText = desafio;
}

function generateGoal() {
    const desejo = sortear(desejos);
    document.getElementById('goal').innerText = desejo;
}

function addAffirmation() {
    const newAffirmation = document.getElementById('newAffirmation').value;
    if (newAffirmation) {
        afirmacoes.push(newAffirmation);
        document.getElementById('newAffirmation').value = '';
        alert('Afirmação adicionada com sucesso!');
    }
}

function addChallenge() {
    const newChallenge = document.getElementById('newChallenge').value;
    if (newChallenge) {
        desafios.push(newChallenge);
        document.getElementById('newChallenge').value = '';
        alert('Desafio adicionado com sucesso!');
    }
}

function addGoal() {
    const newGoal = document.getElementById('newGoal').value;
    if (newGoal) {
        desejos.push(newGoal);
        document.getElementById('newGoal').value = '';
        alert('Desejo/Objetivo adicionado com sucesso!');
    }
}
