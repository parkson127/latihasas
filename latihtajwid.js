// ===== LATIHAN TAJWID =====
function renderTajwidExercise() {
    // Kita letak dalam section yang sama, tiada container khas, tapi boleh tambah
    // Saya letak di bawah tajwidGrid sebagai bonus
    const container = document.getElementById('tajwidGrid');
    // Kita tambah kuiz di bawah
    const seed = getDateSeed();
    const shuffled = shuffleArray(tajwidData, seed);
    const selected = shuffled.slice(0, 3);

    let html = `<div style="margin-top:25px;background:#f0f8f0;border-radius:40px;padding:20px;border:3px solid #b8d8b8;">
        <h4 style="font-size:1.8rem;color:#2a5a3a;text-align:center;">📝 Kuiz Tajwid</h4>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:10px;">`;
    for (const t of selected) {
        html += `<div style="background:white;border-radius:30px;padding:15px;text-align:center;">
            <div style="font-size:2.2rem;font-family:'Traditional Arabic',serif;">${t.arab}</div>
            <div style="font-size:1.2rem;">${t.example}</div>
            <input type="text" class="tajwid-answer" data-answer="${t.rule}" placeholder="Nama hukum..." style="width:100%;font-size:1.4rem;border-radius:30px;border:3px solid #b8c8b8;padding:6px 12px;text-align:center;font-family:'Patrick Hand',cursive;margin-top:6px;">
            <button class="check-tajwid" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 16px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin-top:6px;">Semak</button>
            <span class="tajwid-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div></div>`;
    // Append ke dalam tajwidGrid
    container.insertAdjacentHTML('afterend', html);

    // Event listeners
    document.querySelectorAll('.check-tajwid').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.tajwid-answer');
            const feedback = this.parentElement.querySelector('.tajwid-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.answer.toLowerCase();
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
