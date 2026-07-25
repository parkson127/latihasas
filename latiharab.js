// ===== LATIHAN ARAB =====
function renderArabicExercise() {
    const container = document.getElementById('arabExercise');
    if (!container) return;
    const seed = getDateSeed();
    const shuffled = shuffleArray(activityData, seed);
    const selected = shuffled.slice(0, 4);

    let html = `<div style="background:#f0f4e8;border-radius:40px;padding:20px;border:3px solid #b8c8a8;">
        <h4 style="font-size:1.8rem;color:#2a5a3a;text-align:center;">📝 Apakah maksudnya?</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px;">`;
    for (const item of selected) {
        html += `<div style="background:white;border-radius:30px;padding:15px;text-align:center;">
            <div style="font-size:3.2rem;">${item.emoji}</div>
            <div style="font-size:2rem;font-family:'Traditional Arabic',serif;">${item.ar}</div>
            <input type="text" class="arab-answer" data-answer="${item.ms}" placeholder="Taip jawapan..." style="width:100%;font-size:1.4rem;border-radius:30px;border:3px solid #b8c8b8;padding:6px 12px;text-align:center;font-family:'Patrick Hand',cursive;margin-top:6px;">
            <button class="check-arab" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 16px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin-top:6px;">Semak</button>
            <span class="arab-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div></div>`;
    container.innerHTML = html;

    document.querySelectorAll('.check-arab').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.arab-answer');
            const feedback = this.parentElement.querySelector('.arab-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.answer;
            if (user === correct) {
                feedback.textContent = '✅ Betul!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = `❌ Jawapan: ${correct}`;
                feedback.style.color = 'red';
            }
        });
    });
}