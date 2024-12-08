const inputText = document.getElementById('inputText');
const container = document.getElementById('container');
const addButton = document.getElementById('addButton');
const countButton = document.getElementById('countButton');

let lineCount = 0;

// Adiciona um parágrafo ao container
addButton.addEventListener('click', () => {
    const text = inputText.value.trim();
    if (text) {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
        inputText.value = '';
        lineCount++;
    } else {
        alert('Por favor, insira um texto!');
    }
});

// Mostra a quantidade de linhas adicionadas
countButton.addEventListener('click', () => {
    alert(`${lineCount} linha${lineCount !== 1 ? 's' : ''} foram adicionada${lineCount !== 1 ? 's' : ''}.`);
});
