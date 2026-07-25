// ===== AKTIVITI SUKU KATA =====
// Data: soalan isi tempat kosong dengan emoji
const fillBlankQuestions = [
    { image: '🦶', word: 'kaki', missing: 'ki', display: '__ki' },
    { image: '⚽', word: 'bola', missing: 'bo', display: 'bo__' },
    { image: '🐱', word: 'kucing', missing: 'cu', display: 'ku__ng' },
    { image: '🏠', word: 'rumah', missing: 'ma', display: 'ru__h' },
    { image: '🍎', word: 'epal', missing: 'pa', display: 'e__l' },
    { image: '🚗', word: 'kereta', missing: 're', display: 'ke__ta' },
    { image: '🌙', word: 'bulan', missing: 'la', display: 'bu__n' },
    { image: '🐟', word: 'ikan', missing: 'ka', display: 'i__n' },
    { image: '🧸', word: 'beruang', missing: 'ru', display: 'be__ang' },
    { image: '📖', word: 'buku', missing: 'ku', display: 'bu__' }
];

// Cerita pendek
const shortStories = [
    { title: 'Kucing dan Bola', text: 'Kucing suka <span class="highlight">bola</span>. Dia main <span class="highlight">bola</span> di <span class="highlight">rumah</span>. Bola itu <span class="highlight">merah</span> dan <span class="highlight">bulat</span>. Kucing <span class="highlight">gembira</span>.' },
    { title: 'Pagi di Sekolah', text: 'Pagi ini <span class="highlight">cerah</span>. Saya <span class="highlight">bangun</span> awal. Saya <span class="highlight">makan</span> nasi. Saya <span class="highlight">pergi</span> ke sekolah. Saya <span class="highlight">belajar</span> dan <span class="highlight">bermain</span>.' },
    { title: 'Buah-buahan', text: 'Saya suka <span class="highlight">epal</span> dan <span class="highlight">pisang</span>. <span class="highlight">Epal</span> merah dan <span class="highlight">pisang</span> kuning. Saya <span class="highlight">makan</span> buah setiap <span class="highlight">hari</span>. Buah <span class="highlight">sedap</span> dan <span class="highlight">sihat</span>.' }
];

function renderCVActivities() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    const seed = getDateSeed();
    // Pilih 3 soalan isi tempat kosong secara rawak
    const shuffled = shuffleArray(fillBlankQuestions, seed);
    const selected = shuffled.slice(0, 3);

    let html = '';
    // Bahagian 1: Isi tempat kosong dengan gambar
    html += `<div class="cv-activity-card">
        <h3>✏️ Isi Tempat Kosong (lihat gambar)</h3>`;
    for (const q of selected) {
        html += `<div style="margin:12px 0;font-size:1.8rem;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;">
            <span style="font-size:3rem;">${q.image}</span>
            <span>${q.display}</span>
            <input type="text" class="answer-input" data-answer="${q.missing}" placeholder="?" style="width:100px;font-size:1.6rem;border-radius:30px;border:3px solid #b8c8b8;padding:4px 12px;text-align:center;font-family:'Patrick Hand',cursive;">
            <button class="check-fill" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 16px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="fill-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div>`;

    // 2. Mengeja
    const spellingWords = ['bola','kucing','rumah','buku','gajah','pisang'];
    const shuffledSpell = shuffleArray(spellingWords, seed + 1);
    const spell = shuffledSpell.slice(0, 2);
    html += `<div class="cv-activity-card">
        <h3>🔊 Mengeja</h3>
        <p style="font-size:1.2rem;">Klik butang dengar, kemudian taip ejaan.</p>`;
    for (const w of spell) {
        html += `<div style="margin:12px 0;font-size:1.8rem;display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;">
            <button class="speak-spell" data-word="${w}" style="background:#f7d4a0;border:none;border-radius:40px;padding:4px 16px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;">🔊 Dengar</button>
            <input type="text" class="spell-input" data-word="${w}" placeholder="Tulis..." style="width:120px;font-size:1.6rem;border-radius:30px;border:3px solid #b8c8b8;padding:4px 12px;text-align:center;font-family:'Patrick Hand',cursive;">
            <button class="check-spell" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 16px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="spell-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div>`;

    // 3. Cerita
    const story = shortStories[Math.floor(seed % shortStories.length)];
    html += `<div class="cv-activity-card">
        <h3>📖 Membaca Cerita</h3>
        <div class="story-text">${story.text}</div>
        <p style="margin-top:8px;font-size:1.2rem;color:#5a5a3a;">👆 Cuba baca dengan sebutan yang betul.</p>
    </div>`;

    container.innerHTML = html;

    // Event listeners
    document.querySelectorAll('.check-fill').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.answer-input');
            const feedback = this.parentElement.querySelector('.fill-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.answer;
            if (user === correct) {
                feedback.textContent = '✅ Betul!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = `❌ Cuba lagi. Jawapan: ${correct}`;
                feedback.style.color = 'red';
            }
        });
    });

    document.querySelectorAll('.speak-spell').forEach(btn => {
        btn.addEventListener('click', function() {
            speak(this.dataset.word, 'ms-MY');
        });
    });

    document.querySelectorAll('.check-spell').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.spell-input');
            const feedback = this.parentElement.querySelector('.spell-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.word;
            if (user === correct) {
                feedback.textContent = '✅ Betul!';
                feedback.style.color = 'green';
            } else {
                feedback.textContent = `❌ Ejaan yang betul: ${correct}`;
                feedback.style.color = 'red';
            }
        });
    });
}