const u = {
    score: 0,
    Btn: document.querySelector('#uBtn'),
    Span: document.querySelector('#you')
}
const e = {
    score: 0,
    Btn: document.querySelector('#eBtn'),
    Span: document.querySelector('#enemy')
}

const resetBtn = document.querySelector('#reset');
const target = document.querySelector('#playTo');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.Span.innerText = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.Span.classList.add('has-text-success');
            opponent.Span.classList.add('has-text-danger');
            player.Btn.disabled = true;
            opponent.Btn.disabled = true;
        }
    }
}

u.Btn.addEventListener('click', () => {
    updateScores(u,e)
})
    
e.Btn.addEventListener('click', () => {
    updateScores(e,u)

})

target.addEventListener('change', () => {
    winningScore = parseInt(target.value);
    reset();
})


resetBtn.addEventListener('click', reset)



function reset() {
    isGameOver = false;
    for (let p of [u, e]) {
        p.score = 0;
        p.Span.innerText = 0;
        p.Span.classList.remove('has-text-success', 'has-text-danger');
        p.Btn.disabled = false;
    }
}









