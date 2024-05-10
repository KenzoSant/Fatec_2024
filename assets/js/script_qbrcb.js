function checkSolution() {
    var sortedBlocks = document.querySelectorAll('.sortable-item');
    var expectedOrder = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6'];
    var isCorrect = true;

    sortedBlocks.forEach(function(block, index) {
        if (block.id !== expectedOrder[index]) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        document.getElementById('result').innerHTML = 'Parabéns! A ordem dos blocos está correta! <br> <button onclick="goToPGR()" class="pgr">Ir para PGR</button>';
    } else {
        document.getElementById('result').innerHTML = 'Ops! A ordem dos blocos está incorreta. Tente novamente.';
    }
}

function goToPGR() {
    window.location.href = 'index.html';
}

// Função para embaralhar os itens da lista
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shufflePuzzle() {
    var sortableList = document.getElementById('sortable');
    var items = Array.from(sortableList.children);
    shuffle(items);
    sortableList.innerHTML = '';
    items.forEach(function(item) {
        sortableList.appendChild(item);
    });
}

// Restaurar o estado do quebra-cabeça
document.addEventListener("DOMContentLoaded", function() {
    var sortableList = document.getElementById('sortable');
    var items = Array.from(sortableList.children);
    shuffle(items);
    sortableList.innerHTML = '';
    items.forEach(function(item) {
        sortableList.appendChild(item);
    });

    new Sortable(sortableList, {
        animation: 150,
        ghostClass: 'sortable-ghost',
        onUpdate: function(evt) {
            checkSolution();
        }
    });
});
