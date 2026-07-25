// ===== LATIHAN JAWI =====
function renderJawiExercise() {
    const container = document.getElementById('jawiExercise');
    if (!container) return;
    const seed = getDateSeed();
    // Pilih 5 huruf rawak
    const shuffled = shuffleArray(jawiData, seed);
    const selected = shuffled.slice(0, 5);

    let html = `<div style="background:#f0f4e8;border-radius:40px;padding:20px;border:3px solid #b8c8a8;">
        <h4 style="font-size:1.8rem;color:#2a5a3a;text-align:center;">🔗 Padankan Huruf dengan Contoh</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px;">`;
    for (const item of selected) {
        const ex = item.examples[0]; // ambil contoh pertama
        html += `<div style="background:white;border-radius:30px;padding:15px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">
            <span style="font-size:2.8rem;font-family:'Traditional Arabic',serif;">${item.char}</span>
            <span style="font-size:2rem;">${ex.emoji}</span>
            <span style="font-size:1.6rem;font-family:'Traditional Arabic',serif;">${ex.ms}</span>
            <button class="jawi-speak" data-text="${ex.ar}" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 14px;font-size:1rem;cursor:pointer;font-family:'Patrick Hand',cursive;">🔊 Arab</button>
        </div>`;
    }
    html += `</div></div>`;
    container.innerHTML = html;

    document.querySelectorAll('.jawi-speak').forEach(btn => {
        btn.addEventListener('click', function() {
            speak(this.dataset.text, 'ar-SA');
        });
    });
}