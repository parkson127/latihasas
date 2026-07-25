// ===== MATEMATIK =====
let mathState = {
    operation: 'add',
    questions: [],
    score: 0,
    total: 20,
};

function generateMathQuestions(op, seed) {
    const rng = seededRandom(seed);
    const qs = [];
    const maxNum = op === 'mul' ? 5 : 10;
    for (let i = 0; i < 20; i++) {
        let a, b, answer, symbol;
        switch (op) {
            case 'add':
                a = Math.floor(rng() * maxNum) + 1;
                b = Math.floor(rng() * maxNum) + 1;
                answer = a + b;
                symbol = '+';
                break;
            case 'sub':
                a = Math.floor(rng() * maxNum) + 1;
                b = Math.floor(rng() * a) + 1;
                answer = a - b;
                symbol = '−';
                break;
            case 'mul':
                a = Math.floor(rng() * 5) + 1;
                b = Math.floor(rng() * 5) + 1;
                answer = a * b;
                symbol = '×';
                break;
        }
        qs.push({ a, b, answer, symbol, userAnswer: null, correct: null });
    }
    return qs;
}

function renderMath() {
    const grid = document.getElementById('mathGrid');
    const scoreEl = document.getElementById('mathScore');
    const qs = mathState.questions;

    let html = '';
    for (let i = 0; i < qs.length; i++) {
        const q = qs[i];
        const isChecked = q.correct !== null;
        const resultClass = isChecked ? (q.correct ? 'math-result' : 'math-result wrong') : 'math-result';
        const resultText = isChecked ? (q.correct ? '✅' : '❌') : '?';
        const val = q.userAnswer !== null ? q.userAnswer : '';
        html += `<div class="math-item" data-idx="${i}">
            <div>${q.a} ${q.symbol} ${q.b} = </div>
            <div style="display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;">
                <input class="math-answer-input" type="number" id="mathInput_${i}" value="${val}" ${isChecked ? 'disabled' : ''} placeholder="?">
                <span class="${resultClass}">${resultText}</span>
            </div>
        </div>`;
    }
    grid.innerHTML = html;

    const total = qs.length;
    const correct = qs.filter(q => q.correct === true).length;
    mathState.score = correct;
    mathState.total = total;
    scoreEl.textContent = `⭐ Skor: ${correct} / ${total}`;

    document.querySelectorAll('#mathGrid .math-item').forEach((item, idx) => {
        const q = qs[idx];
        const inp = document.getElementById(`mathInput_${idx}`);
        if (inp && !inp.disabled) {
            inp.addEventListener('input', function() {
                const val = this.value.trim();
                if (val === '') q.userAnswer = null;
                else { const num = Number(val); if (!isNaN(num)) q.userAnswer = num; }
            });
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') checkSingleMath(idx);
            });
        }
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'INPUT') return;
            const q = mathState.questions[idx];
            if (q.correct !== null) {
                alert('Soalan ini sudah dijawab. Tekan "Soalan Baru" untuk cuba lagi.');
                return;
            }
            const currentVal = q.userAnswer !== null ? q.userAnswer : '';
            let modalHtml = `
                <div class="modal-title">🧮 Soalan ${idx+1}</div>
                <div style="font-size:4rem;text-align:center;margin:20px 0;">
                    ${q.a} ${q.symbol} ${q.b} = ?
                </div>
                <div style="text-align:center;">
                    <input type="number" id="modalMathInput" value="${currentVal}" style="font-size:3rem;padding:15px;width:200px;border-radius:40px;border:4px solid #b8d4e8;text-align:center;font-family:'Patrick Hand',cursive;">
                    <br><br>
                    <button id="modalMathSubmit" class="math-check-btn" style="font-size:1.8rem;padding:12px 40px;">✅ Jawab</button>
                </div>
            `;
            openModal(modalHtml);
            setTimeout(() => {
                const inpModal = document.getElementById('modalMathInput');
                if (inpModal) inpModal.focus();
            }, 100);
            document.getElementById('modalMathSubmit').addEventListener('click', function() {
                const inpVal = document.getElementById('modalMathInput').value.trim();
                if (inpVal === '') { alert('Sila masukkan jawapan.'); return; }
                const num = Number(inpVal);
                if (isNaN(num)) { alert('Sila masukkan nombor.'); return; }
                q.userAnswer = num;
                q.correct = (num === q.answer);
                closeModal();
                renderMath();
                updateScoreOnly();
            });
        });
    });
}

function checkSingleMath(idx) {
    const q = mathState.questions[idx];
    if (q.correct !== null) return;
    if (q.userAnswer === null) { alert('✏️ Masukkan jawapan dulu!'); return; }
    q.correct = (q.userAnswer === q.answer);
    renderMath();
    updateScoreOnly();
}

function checkAllMath() {
    let allFilled = true;
    for (let i = 0; i < mathState.questions.length; i++) {
        const q = mathState.questions[i];
        if (q.correct !== null) continue;
        if (q.userAnswer === null) { allFilled = false; break; }
        q.correct = (q.userAnswer === q.answer);
    }
    if (!allFilled) {
        alert('📝 Sila jawab semua soalan dahulu!');
        return;
    }
    renderMath();
    updateScoreOnly();
    const correct = mathState.questions.filter(q => q.correct === true).length;
    const total = mathState.questions.length;
    if (correct === total) {
        setTimeout(() => alert('🎉 Tahniah! Semua jawapan betul! Hebat! 🌟'), 200);
    } else {
        const wrong = total - correct;
        setTimeout(() => alert(`📊 ${correct} betul, ${wrong} salah. Cuba lagi! 💪`), 200);
    }
}

function updateScoreOnly() {
    const scoreEl = document.getElementById('mathScore');
    const correct = mathState.questions.filter(q => q.correct === true).length;
    const total = mathState.questions.length;
    scoreEl.textContent = `⭐ Skor: ${correct} / ${total}`;
}

function resetMath(operation) {
    const seed = getDateSeed() + (operation === 'add' ? 1000 : operation === 'sub' ? 2000 : 3000);
    mathState.operation = operation;
    mathState.questions = generateMathQuestions(operation, seed);
    for (const q of mathState.questions) { q.userAnswer = null; q.correct = null; }
    renderMath();
    document.querySelectorAll('.math-oper-tabs button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mathop === operation);
    });
}

function initMath() {
    const seed = getDateSeed();
    mathState.operation = 'add';
    mathState.questions = generateMathQuestions('add', seed + 1000);
    for (const q of mathState.questions) { q.userAnswer = null; q.correct = null; }
    renderMath();

    document.querySelectorAll('.math-oper-tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            resetMath(this.dataset.mathop);
        });
    });
    document.getElementById('checkAllMath').addEventListener('click', checkAllMath);
    document.getElementById('resetMathBtn').addEventListener('click', function() {
        resetMath(mathState.operation);
        const box = document.getElementById('mathBox');
        box.classList.remove('pop');
        void box.offsetWidth;
        box.classList.add('pop');
    });

    // Auto refresh daily
    let lastDate = new Date().getDate();
    setInterval(() => {
        const now = new Date().getDate();
        if (now !== lastDate) {
            lastDate = now;
            resetMath(mathState.operation);
        }
    }, 60000);
}