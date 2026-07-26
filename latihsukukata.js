// ================================================================
// LATIHSUKUKATA.JS – Aktiviti Suku Kata (Fill Blank, Membaca, Warna)
// ================================================================

// ----- SOALAN ISI TEMPAT KOSONG (SUKU KATA PENUH) -----
// (Bank soalan yang sama – saya pendekkan di sini, tapi anda boleh guna penuh)
// Untuk menjimatkan ruang, saya sertakan semula bank penuh seperti sebelum ini.
// ================================================================

const fillBlankQuestions = [
    // Haiwan
    { image: '🐘', word: 'gajah', missing: 'ga', display: '__jah' },
    { image: '🐘', word: 'gajah', missing: 'jah', display: 'ga__' },
    { image: '🐱', word: 'kucing', missing: 'cing', display: 'ku__' },
    { image: '🐱', word: 'kucing', missing: 'ku', display: '__cing' },
    { image: '🐶', word: 'anjing', missing: 'an', display: '__jing' },
    { image: '🐶', word: 'anjing', missing: 'jing', display: 'an__' },
    { image: '🐟', word: 'ikan', missing: 'kan', display: 'i__' },
    { image: '🐦', word: 'burung', missing: 'bu', display: '__rung' },
    { image: '🐦', word: 'burung', missing: 'rung', display: 'bu__' },
    { image: '🐢', word: 'kura', missing: 'ku', display: '__ra' },
    { image: '🐢', word: 'kura', missing: 'ra', display: 'ku__' },
    { image: '🦁', word: 'singa', missing: 'si', display: '__nga' },
    { image: '🦁', word: 'singa', missing: 'nga', display: 'si__' },
    { image: '🐒', word: 'monyet', missing: 'mo', display: '__nyet' },
    { image: '🐒', word: 'monyet', missing: 'nyet', display: 'mo__' },
    { image: '🐄', word: 'lembu', missing: 'lem', display: '__bu' },
    { image: '🐄', word: 'lembu', missing: 'bu', display: 'lem__' },
    { image: '🐐', word: 'kambing', missing: 'kam', display: '__bing' },
    { image: '🐐', word: 'kambing', missing: 'bing', display: 'kam__' },
    { image: '🐯', word: 'harimau', missing: 'ha', display: '__rimau' },
    { image: '🐯', word: 'harimau', missing: 'rimau', display: 'ha__' },
    { image: '🦓', word: 'zebra', missing: 'ku', display: '__da belang' },
    { image: '🦓', word: 'zebra', missing: 'be', display: 'kuda __lang' },
    { image: '🦌', word: 'rusa', missing: 'ru', display: '__sa' },
    { image: '🦌', word: 'rusa', missing: 'sa', display: 'ru__' },
    { image: '🦊', word: 'musang', missing: 'mu', display: '__sang' },
    { image: '🦊', word: 'musang', missing: 'sang', display: 'mu__' },
    { image: '🐿️', word: 'tupai', missing: 'tu', display: '__pai' },
    { image: '🐿️', word: 'tupai', missing: 'pai', display: 'tu__' },
    { image: '🐇', word: 'arnab', missing: 'ar', display: '__nab' },
    { image: '🐇', word: 'arnab', missing: 'nab', display: 'ar__' },
    { image: '🦆', word: 'itik', missing: 'tik', display: 'i__' },
    { image: '🐔', word: 'ayam', missing: 'yam', display: 'a__' },
    { image: '🐍', word: 'ular', missing: 'lar', display: 'u__' },
    { image: '🐊', word: 'buaya', missing: 'bu', display: '__aya' },
    { image: '🐊', word: 'buaya', missing: 'aya', display: 'bu__' },
    // Bunga
    { image: '🌹', word: 'mawar', missing: 'ma', display: '__war' },
    { image: '🌹', word: 'mawar', missing: 'war', display: 'ma__' },
    { image: '🌺', word: 'melati', missing: 'me', display: '__lati' },
    { image: '🌺', word: 'melati', missing: 'lati', display: 'me__' },
    { image: '🌸', word: 'anggrek', missing: 'ang', display: '__grek' },
    { image: '🌸', word: 'anggrek', missing: 'grek', display: 'ang__' },
    { image: '🌷', word: 'tulip', missing: 'tu', display: '__lip' },
    { image: '🌷', word: 'tulip', missing: 'lip', display: 'tu__' },
    { image: '🌻', word: 'kembang', missing: 'kem', display: '__bang' },
    { image: '🌻', word: 'kembang', missing: 'bang', display: 'kem__' },
    // Kenderaan
    { image: '🚗', word: 'kereta', missing: 'ke', display: '__reta' },
    { image: '🚗', word: 'kereta', missing: 'reta', display: 'ke__' },
    { image: '🏍️', word: 'motosikal', missing: 'mo', display: '__tosikal' },
    { image: '🏍️', word: 'motosikal', missing: 'sikal', display: 'moto__' },
    { image: '🚲', word: 'basikal', missing: 'ba', display: '__sikal' },
    { image: '🚲', word: 'basikal', missing: 'kal', display: 'basi__' },
    { image: '🚚', word: 'lori', missing: 'lo', display: '__ri' },
    { image: '🚚', word: 'lori', missing: 'ri', display: 'lo__' },
    { image: '✈️', word: 'kapal', missing: 'ka', display: '__pal' },
    { image: '✈️', word: 'kapal', missing: 'pal', display: 'ka__' },
    { image: '🚁', word: 'helikopter', missing: 'kop', display: 'heli__ter' },
    { image: '🚁', word: 'helikopter', missing: 'ter', display: 'helikop__' },
    // Perbuatan
    { image: '🍽️', word: 'makan', missing: 'ma', display: '__kan' },
    { image: '🍽️', word: 'makan', missing: 'kan', display: 'ma__' },
    { image: '🥤', word: 'minum', missing: 'mi', display: '__num' },
    { image: '🥤', word: 'minum', missing: 'num', display: 'mi__' },
    { image: '😴', word: 'tidur', missing: 'ti', display: '__dur' },
    { image: '😴', word: 'tidur', missing: 'dur', display: 'ti__' },
    { image: '🏃', word: 'lari', missing: 'la', display: '__ri' },
    { image: '🏃', word: 'lari', missing: 'ri', display: 'la__' },
    { image: '🏊', word: 'renang', missing: 're', display: '__nang' },
    { image: '🏊', word: 'renang', missing: 'nang', display: 're__' },
    { image: '📖', word: 'baca', missing: 'ba', display: '__ca' },
    { image: '📖', word: 'baca', missing: 'ca', display: 'ba__' },
    { image: '✍️', word: 'tulis', missing: 'tu', display: '__lis' },
    { image: '✍️', word: 'tulis', missing: 'lis', display: 'tu__' },
    { image: '🎨', word: 'lukis', missing: 'lu', display: '__kis' },
    { image: '🎨', word: 'lukis', missing: 'kis', display: 'lu__' },
    { image: '🎤', word: 'nyanyi', missing: 'nya', display: '__nyi' },
    { image: '🎤', word: 'nyanyi', missing: 'nyi', display: 'nya__' },
    { image: '💃', word: 'tari', missing: 'ta', display: '__ri' },
    { image: '💃', word: 'tari', missing: 'ri', display: 'ta__' },
    { image: '🧸', word: 'main', missing: 'ma', display: '__in' },
    { image: '🧸', word: 'main', missing: 'in', display: 'ma__' },
    { image: '🦘', word: 'lompat', missing: 'lom', display: '__pat' },
    { image: '🦘', word: 'lompat', missing: 'pat', display: 'lom__' },
    { image: '🧘', word: 'duduk', missing: 'du', display: '__duk' },
    { image: '🧘', word: 'duduk', missing: 'duk', display: 'du__' },
    { image: '🧍', word: 'berdiri', missing: 'ber', display: '__diri' },
    { image: '🧍', word: 'berdiri', missing: 'diri', display: 'ber__' },
    { image: '🌅', word: 'bangun', missing: 'bang', display: '__un' },
    { image: '🌅', word: 'bangun', missing: 'un', display: 'bang__' },
    { image: '🚿', word: 'mandi', missing: 'man', display: '__di' },
    { image: '🚿', word: 'mandi', missing: 'di', display: 'man__' },
    { image: '🧼', word: 'basuh', missing: 'bas', display: '__uh' },
    { image: '🧼', word: 'basuh', missing: 'uh', display: 'bas__' },
    { image: '🧹', word: 'sapu', missing: 'sa', display: '__pu' },
    { image: '🧹', word: 'sapu', missing: 'pu', display: 'sa__' },
    { image: '🍳', word: 'masak', missing: 'ma', display: '__sak' },
    { image: '🍳', word: 'masak', missing: 'sak', display: 'ma__' },
    { image: '🧵', word: 'jahit', missing: 'ja', display: '__hit' },
    { image: '🧵', word: 'jahit', missing: 'hit', display: 'ja__' },
    // Warna
    { image: '🔴', word: 'merah', missing: 'me', display: '__rah' },
    { image: '🔴', word: 'merah', missing: 'rah', display: 'me__' },
    { image: '🔵', word: 'biru', missing: 'bi', display: '__ru' },
    { image: '🔵', word: 'biru', missing: 'ru', display: 'bi__' },
    { image: '🟢', word: 'hijau', missing: 'hi', display: '__jau' },
    { image: '🟢', word: 'hijau', missing: 'jau', display: 'hi__' },
    { image: '🟡', word: 'kuning', missing: 'ku', display: '__ning' },
    { image: '🟡', word: 'kuning', missing: 'ning', display: 'ku__' },
    { image: '🟣', word: 'ungu', missing: 'un', display: '__gu' },
    { image: '🟣', word: 'ungu', missing: 'gu', display: 'un__' },
    { image: '🟠', word: 'oren', missing: 'ren', display: 'o__' },
    { image: '⚫', word: 'hitam', missing: 'hi', display: '__tam' },
    { image: '⚫', word: 'hitam', missing: 'tam', display: 'hi__' },
    { image: '⚪', word: 'putih', missing: 'pu', display: '__tih' },
    { image: '⚪', word: 'putih', missing: 'tih', display: 'pu__' },
    { image: '🥈', word: 'perak', missing: 'pe', display: '__rak' },
    { image: '🥈', word: 'perak', missing: 'rak', display: 'pe__' },
    { image: '🥇', word: 'emas', missing: 'mas', display: 'e__' },
    { image: '🟤', word: 'coklat', missing: 'co', display: '__klat' },
    { image: '🟤', word: 'coklat', missing: 'klat', display: 'co__' },
    { image: '⬜', word: 'kelabu', missing: 'ke', display: '__labu' },
    { image: '⬜', word: 'kelabu', missing: 'labu', display: 'ke__' },
    // Bentuk
    { image: '⭕', word: 'bulat', missing: 'bu', display: '__lat' },
    { image: '⭕', word: 'bulat', missing: 'lat', display: 'bu__' },
    { image: '🔺', word: 'segitiga', missing: 'se', display: '__gitiga' },
    { image: '🔺', word: 'segitiga', missing: 'tiga', display: 'segi__' },
    { image: '🔲', word: 'segiempat', missing: 'seg', display: '__iempat' },
    { image: '🔲', word: 'segiempat', missing: 'pat', display: 'segiem__' },
    { image: '⬛', word: 'bujur', missing: 'bu', display: '__jur' },
    { image: '⬛', word: 'bujur', missing: 'jur', display: 'bu__' },
    { image: '⚽', word: 'sfera', missing: 'sfe', display: '__ra' },
    { image: '⚽', word: 'sfera', missing: 'ra', display: 'sfe__' },
    { image: '🧊', word: 'kubus', missing: 'ku', display: '__bus' },
    { image: '🧊', word: 'kubus', missing: 'bus', display: 'ku__' },
    { image: '🥫', word: 'silinder', missing: 'si', display: '__linder' },
    { image: '🥫', word: 'silinder', missing: 'der', display: 'silin__' },
    // Saiz
    { image: '📏', word: 'tinggi', missing: 'ting', display: '__gi' },
    { image: '📏', word: 'tinggi', missing: 'gi', display: 'ting__' },
    { image: '📏', word: 'rendah', missing: 'ren', display: '__dah' },
    { image: '📏', word: 'rendah', missing: 'dah', display: 'ren__' },
    { image: '📏', word: 'panjang', missing: 'pan', display: '__jang' },
    { image: '📏', word: 'panjang', missing: 'jang', display: 'pan__' },
    { image: '📏', word: 'pendek', missing: 'pen', display: '__dek' },
    { image: '📏', word: 'pendek', missing: 'dek', display: 'pen__' },
    { image: '📏', word: 'lebar', missing: 'le', display: '__bar' },
    { image: '📏', word: 'lebar', missing: 'bar', display: 'le__' },
    { image: '📏', word: 'sempit', missing: 'sem', display: '__pit' },
    { image: '📏', word: 'sempit', missing: 'pit', display: 'sem__' },
    { image: '📏', word: 'tebal', missing: 'te', display: '__bal' },
    { image: '📏', word: 'tebal', missing: 'bal', display: 'te__' },
    { image: '📏', word: 'nipis', missing: 'ni', display: '__pis' },
    { image: '📏', word: 'nipis', missing: 'pis', display: 'ni__' }
];

// ----- CERITA (dengan ikon) -----
// ================================================================
// 1. RENDER FILL IN THE BLANKS (VERSI BAHARU – DENGAN RINGKASAN JAWAPAN)
// ================================================================

function renderFillBlank() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    const seed = getDateSeed();
    const TOTAL_QUESTIONS = 20;

    // Pilih 20 soalan rawak
    const shuffled = shuffleArray(fillBlankQuestions, seed);
    const selectedQuestions = shuffled.slice(0, TOTAL_QUESTIONS);

    // Simpan rekod jawapan pengguna
    let userRecords = []; // setiap elemen: { question, selected, correct, attempts, answered }

    let currentIndex = 0;

    // Fungsi untuk menghasilkan pilihan jawapan (rawak)
    function generateOptions(correctAnswer, questionIndex) {
        const allMissing = [...new Set(fillBlankQuestions.map(q => q.missing))];
        let distractors = allMissing.filter(m => m !== correctAnswer);
        // Kocok distraktor dengan benih berbeza untuk setiap soalan
        const shuffledDist = shuffleArray(distractors, seed + 100 + questionIndex);
        const selectedDist = shuffledDist.slice(0, 3);
        let options = [correctAnswer, ...selectedDist];
        // Jika kurang daripada 4, tambah '?' (tapi sepatutnya cukup)
        while (options.length < 4) options.push('?');
        // Kocok pilihan dengan benih berbeza lagi
        return shuffleArray(options, seed + 200 + questionIndex);
    }

    // Fungsi untuk memaparkan soalan semasa
    function renderQuestion(index) {
        // Jika sudah melepasi soalan terakhir, paparkan ringkasan
        if (index >= selectedQuestions.length) {
            showSummary();
            return;
        }

        const q = selectedQuestions[index];
        // Init rekod jika belum ada
        if (!userRecords[index]) {
            userRecords[index] = { question: q, selected: null, correct: null, attempts: 0, answered: false };
        }

        let attempts = 0;
        let answered = false;
        const options = generateOptions(q.missing, index);

        let html = `<div class="cv-activity-card" id="fillBlankSection">
            <h3>✏️ Isi Tempat Kosong (${index+1}/${selectedQuestions.length})</h3>
            <div style="text-align:center; margin:20px 0;">
                <div style="font-size:4rem;">${q.image}</div>
                <div style="font-size:2.8rem; font-weight:bold; margin:15px 0;">${q.display}</div>
                <p style="font-size:1.2rem; color:#5a6a5a;">Pilih jawapan yang betul.</p>
            </div>
            <div id="optionsContainer" style="display:grid; grid-template-columns:1fr 1fr; gap:15px; max-width:500px; margin:0 auto;">`;

        options.forEach((opt) => {
            html += `<button class="option-btn" data-value="${opt}" style="
                background:#f0f4f8; 
                border:4px solid #b8c8d8; 
                border-radius:40px; 
                padding:18px 10px; 
                font-size:2rem; 
                cursor:pointer; 
                font-family:'Patrick Hand',cursive; 
                transition:0.15s;
                box-shadow: 0 6px 0 #b0c0d0;
                color:#1a3a5a;
                text-align:center;
                width:100%;
            ">${opt}</button>`;
        });

        html += `</div>
            <div id="feedbackArea" style="margin:20px 0; min-height:80px; text-align:center; font-size:2rem;"></div>
            <div id="nextButtonContainer" style="text-align:center; display:none;">
                <button id="nextQuestionBtn" style="background:#2a6a3a; color:white; border:none; border-radius:60px; padding:12px 40px; font-size:1.8rem; cursor:pointer; font-family:'Patrick Hand',cursive; box-shadow:0 4px 0 #1a4a2a;">➡️ Seterusnya</button>
            </div>
        </div>`;

        let existingSection = document.getElementById('fillBlankSection');
        if (existingSection) {
            existingSection.outerHTML = html;
        } else {
            container.insertAdjacentHTML('beforeend', html);
        }

        const optionButtons = document.querySelectorAll('#fillBlankSection .option-btn');
        const feedbackArea = document.getElementById('feedbackArea');
        const nextContainer = document.getElementById('nextButtonContainer');

        function disableOptions() { optionButtons.forEach(btn => btn.disabled = true); }
        function highlightCorrect() {
            optionButtons.forEach(btn => {
                if (btn.dataset.value === q.missing) {
                    btn.style.background = '#a8e6cf';
                    btn.style.borderColor = '#2ecc71';
                    btn.style.boxShadow = '0 0 0 4px #2ecc71';
                }
            });
        }
        function markWrong(btn) {
            btn.style.background = '#f8d7da';
            btn.style.borderColor = '#e74c3c';
            btn.style.boxShadow = '0 0 0 4px #e74c3c';
        }

        // Event listener untuk setiap pilihan
        optionButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                if (answered || this.disabled) return;
                const isCorrect = (this.dataset.value === q.missing);
                // Simpan rekod
                const record = userRecords[index];
                record.selected = this.dataset.value;
                record.correct = isCorrect;
                record.attempts++;

                if (isCorrect) {
                    answered = true;
                    disableOptions();
                    highlightCorrect();
                    feedbackArea.innerHTML = `<span style="color:#2ecc71;">✅ Betul! 🎉</span><div style="font-size:3rem; animation: spin 1s infinite;">🌟⭐🌟</div>`;
                    if (!document.getElementById('starSpinStyle')) {
                        const style = document.createElement('style');
                        style.id = 'starSpinStyle';
                        style.textContent = `@keyframes spin { 0%{transform:rotate(0deg) scale(1);} 50%{transform:rotate(180deg) scale(1.5);} 100%{transform:rotate(360deg) scale(1);} }`;
                        document.head.appendChild(style);
                    }
                    nextContainer.style.display = 'block';
                    speak(q.word, 'ms-MY');
                } else {
                    markWrong(this);
                    if (record.attempts === 1) {
                        feedbackArea.innerHTML = `<span style="color:#e74c3c;">❌ Salah! Cuba lagi.</span>`;
                        this.disabled = true;
                    } else if (record.attempts === 2) {
                        answered = true;
                        disableOptions();
                        highlightCorrect();
                        feedbackArea.innerHTML = `<span style="color:#e74c3c;">❌ Jawapan yang betul: <strong>${q.missing}</strong></span>`;
                        nextContainer.style.display = 'block';
                        // Rekodkan bahawa pengguna telah nampak jawapan
                        record.correct = false; // tetap salah
                    }
                }
            });
        });

        // Event listener untuk butang Seterusnya
        const nextBtn = document.getElementById('nextQuestionBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                // Simpan rekod bahawa soalan ini telah selesai (answered)
                userRecords[index].answered = true;
                // Seterusnya
                currentIndex++;
                renderQuestion(currentIndex);
            });
        }
    }

    // ===== FUNGSI UNTUK PAPAR RINGKASAN =====
    function showSummary() {
        // Kosongkan container
        container.innerHTML = '';

        let correctCount = userRecords.filter(r => r.correct === true).length;
        let wrongCount = userRecords.filter(r => r.correct === false).length;

        let html = `<div class="cv-activity-card" style="background:#f5faff; border:4px solid #b8d8e8;">
            <h3>📊 Ringkasan Jawapan Anda</h3>
            <p style="font-size:1.4rem; margin:5px 0;">
                ✅ Betul: <strong style="color:#2ecc71;">${correctCount}</strong> &nbsp;|&nbsp; 
                ❌ Salah: <strong style="color:#e74c3c;">${wrongCount}</strong>
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-top:15px;">`;

        userRecords.forEach((record, idx) => {
            const q = record.question;
            const status = record.correct === true ? '✅' : (record.correct === false ? '❌' : '⏳');
            const color = record.correct === true ? '#2ecc71' : (record.correct === false ? '#e74c3c' : '#f39c12');
            const userAns = record.selected || 'Tidak dijawab';
            const correctAns = q.missing;
            html += `<div style="background:#fff; border-radius:30px; padding:15px; border:2px solid ${color};">
                <div style="display:flex; align-items:center; gap:8px; font-size:1.6rem;">
                    <span>${q.image}</span>
                    <span>${q.display}</span>
                </div>
                <div style="font-size:1.2rem; margin-top:5px;">
                    <span>Jawapan anda: <strong>${userAns}</strong></span><br>
                    <span>Jawapan betul: <strong>${correctAns}</strong></span><br>
                    <span style="color:${color}; font-weight:bold;">${status} ${record.correct === true ? 'Betul' : (record.correct === false ? 'Salah' : '')}</span>
                </div>
            </div>`;
        });

        html += `</div>
            <div style="text-align:center; margin-top:25px;">
                <button id="goToMembacaFromSummary" style="background:#2a6a3a; color:white; border:none; border-radius:60px; padding:14px 40px; font-size:1.8rem; cursor:pointer; font-family:'Patrick Hand',cursive; box-shadow:0 4px 0 #1a4a2a;">📖 Teruskan ke Membaca</button>
            </div>
        </div>`;

        container.innerHTML = html;

        // Event listener untuk butang ke Membaca
        document.getElementById('goToMembacaFromSummary').addEventListener('click', function() {
            // Kosongkan container dan panggil renderMembaca()
            container.innerHTML = '';
            renderMembaca();
        });
    }

    // Mula dengan soalan pertama
    renderQuestion(0);
}
                
// ================================================================
// 2. RENDER MEMBACA (CERITA DENGAN POPUP PENUH SKRIN & WARNA SUKU KATA)
// ================================================================
// ================================================================
// BAHAGIAN MEMBACA – (Popup Penuh Skrin + Warna Suku Kata)
// ================================================================

// ----- PASTIKAN shortStories HANYA SATU SALINAN (padam yang lain) -----
const shortStories = [
    { icon: '🐱', title: 'Kucing dan Bola', text: 'Kucing suka <span class="highlight">bola</span>. Dia main <span class="highlight">bola</span> di <span class="highlight">rumah</span>. Bola itu <span class="highlight">merah</span> dan <span class="highlight">bulat</span>. Kucing <span class="highlight">gembira</span>.' },
    { icon: '🚗', title: 'Kereta Baru', text: 'Ayah ada <span class="highlight">kereta</span> baru. <span class="highlight">Kereta</span> itu <span class="highlight">merah</span>. Kami <span class="highlight">pergi</span> ke <span class="highlight">sekolah</span> dengan <span class="highlight">kereta</span>. Saya <span class="highlight">suka</span> <span class="highlight">kereta</span>.' },
    { icon: '🐶', title: 'Anjing Comel', text: 'Saya ada <span class="highlight">anjing</span> comel. <span class="highlight">Anjing</span> itu <span class="highlight">bermain</span> di <span class="highlight">taman</span>. Dia <span class="highlight">lari</span> dan <span class="highlight">lompat</span>. Saya <span class="highlight">sayang</span> <span class="highlight">anjing</span> saya.' },
    { icon: '🍎', title: 'Buah-buahan', text: 'Saya suka <span class="highlight">epal</span> dan <span class="highlight">pisang</span>. <span class="highlight">Epal</span> merah dan <span class="highlight">pisang</span> kuning. Saya <span class="highlight">makan</span> buah setiap <span class="highlight">hari</span>. Buah <span class="highlight">sedap</span> dan <span class="highlight">sihat</span>.' },
    { icon: '🐄', title: 'Haiwan di Ladang', text: 'Di ladang ada <span class="highlight">lembu</span> dan <span class="highlight">kambing</span>. <span class="highlight">Lembu</span> makan <span class="highlight">rumput</span>. <span class="highlight">Kambing</span> suka <span class="highlight">melompat</span>. Budak <span class="highlight">gembira</span> melihat <span class="highlight">haiwan</span>.' },
    { icon: '🛝', title: 'Main di Taman', text: 'Saya <span class="highlight">main</span> di <span class="highlight">taman</span>. Saya <span class="highlight">bawa</span> <span class="highlight">bola</span>. Saya <span class="highlight">tendang</span> bola. Bola <span class="highlight">masuk</span> ke <span class="highlight">gawang</span>. Saya <span class="highlight">berlari</span> dan <span class="highlight">ketawa</span>.' },
    { icon: '🏫', title: 'Pagi di Sekolah', text: 'Pagi ini <span class="highlight">cerah</span>. Saya <span class="highlight">bangun</span> awal. Saya <span class="highlight">makan</span> nasi. Saya <span class="highlight">pergi</span> ke sekolah. Saya <span class="highlight">belajar</span> dan <span class="highlight">bermain</span>.' },
    { icon: '🐘', title: 'Gajah Besar', text: 'Saya lihat <span class="highlight">gajah</span> di zoo. <span class="highlight">Gajah</span> itu <span class="highlight">besar</span> dan <span class="highlight">kelabu</span>. Dia <span class="highlight">minum</span> air dengan <span class="highlight">belalai</span>. Saya <span class="highlight">kagum</span> dengan <span class="highlight">gajah</span>.' },
    { icon: '🌺', title: 'Bunga di Taman', text: 'Di taman ada <span class="highlight">bunga</span> yang cantik. <span class="highlight">Bunga</span> itu <span class="highlight">merah</span> dan <span class="highlight">kuning</span>. Saya <span class="highlight">cium</span> <span class="highlight">bunga</span>. Harum <span class="highlight">sekali</span>. Saya <span class="highlight">gembira</span> melihat <span class="highlight">bunga</span>.' },
    { icon: '🚲', title: 'Basikal Kecil', text: 'Kakak ada <span class="highlight">basikal</span> baru. <span class="highlight">Basikal</span> itu <span class="highlight">biru</span>. Kami <span class="highlight">kayuh</span> <span class="highlight">basikal</span> di <span class="highlight">taman</span>. Saya <span class="highlight">suka</span> <span class="highlight">basikal</span>.' },
    { icon: '🏊', title: 'Renang di Kolam', text: 'Hari ini <span class="highlight">panas</span>. Saya <span class="highlight">pergi</span> ke kolam <span class="highlight">renang</span>. Saya <span class="highlight">berenang</span> dengan <span class="highlight">gembira</span>. Saya <span class="highlight">main</span> air dan <span class="highlight">ketawa</span>. Saya <span class="highlight">suka</span> <span class="highlight">renang</span>.' },
    { icon: '🎨', title: 'Lukisan Saya', text: 'Saya <span class="highlight">lukis</span> gambar di <span class="highlight">sekolah</span>. Saya <span class="highlight">lukis</span> <span class="highlight">rumah</span> dan <span class="highlight">pokok</span>. <span class="highlight">Rumah</span> saya <span class="highlight">merah</span>. <span class="highlight">Pokok</span> saya <span class="highlight">hijau</span>. Guru <span class="highlight">puji</span> lukisan saya.' },
    { icon: '🐒', title: 'Monyet Nakal', text: 'Di zoo ada <span class="highlight">monyet</span> nakal. <span class="highlight">Monyet</span> itu <span class="highlight">lompat</span> dari <span class="highlight">pokok</span>. Dia <span class="highlight">makan</span> <span class="highlight">pisang</span>. Saya <span class="highlight">ketawa</span> melihat <span class="highlight">monyet</span>.' },
    { icon: '🚁', title: 'Helikopter', text: 'Ayah <span class="highlight">bawa</span> saya ke <span class="highlight">helikopter</span>. <span class="highlight">Helikopter</span> itu <span class="highlight">besar</span>. Kami <span class="highlight">terbang</span> tinggi di <span class="highlight">langit</span>. Saya <span class="highlight">takut</span> tetapi <span class="highlight">seronok</span>.' },
    { icon: '🌙', title: 'Malam Bulan', text: 'Malam ini <span class="highlight">bulan</span> terang. Saya <span class="highlight">lihat</span> <span class="highlight">bintang</span> di <span class="highlight">langit</span>. <span class="highlight">Bulan</span> seperti <span class="highlight">pisang</span>. Saya <span class="highlight">tidur</span> sambil <span class="highlight">mimpi</span>.' },
    { icon: '🧸', title: 'Mainan Saya', text: 'Saya ada banyak <span class="highlight">mainan</span>. Saya suka <span class="highlight">main</span> dengan <span class="highlight">bola</span> dan <span class="highlight">beruang</span>. Saya <span class="highlight">simpan</span> mainan di <span class="highlight">kotak</span>. Saya <span class="highlight">rapi</span> dan <span class="highlight">gembira</span>.' },
    { icon: '🍕', title: 'Piza Sedap', text: 'Ibu <span class="highlight">buat</span> <span class="highlight">piza</span> untuk <span class="highlight">makan</span>. <span class="highlight">Piza</span> itu ada <span class="highlight">keju</span> dan <span class="highlight">sayur</span>. Saya <span class="highlight">makan</span> <span class="highlight">piza</span> dengan <span class="highlight">gembira</span>. Saya <span class="highlight">suka</span> <span class="highlight">piza</span>.' }
];



function colorizeHtmlText(htmlText) {
    const colorPalette = ['#e74c3c', '#2ecc71', '#3498db', '#f1c40f', '#9b59b6', '#f39c12'];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    const textNodes = [];
    const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) textNodes.push(node);
    let colorIndex = 0;
    for (const textNode of textNodes) {
        const text = textNode.textContent;
        const words = text.split(/(\s+)/);
        const fragment = document.createDocumentFragment();
        for (const token of words) {
            if (token.match(/^\s+$/)) {
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            const cleanToken = token.replace(/[.,!?;:]/g, '');
            if (cleanToken.length === 0) {
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            const syllables = splitIntoSyllables(cleanToken);
            if (syllables.length === 0) {
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            const punctuation = token.match(/[.,!?;:]+$/);
            let tokenHtml = '';
            for (const syl of syllables) {
                const color = colorPalette[colorIndex % colorPalette.length];
                tokenHtml += `<span style="color:${color};">${syl}</span>`;
                colorIndex++;
            }
            if (punctuation) tokenHtml += punctuation[0];
            const wrapper = document.createElement('span');
            wrapper.innerHTML = tokenHtml;
            fragment.appendChild(wrapper);
        }
        textNode.parentNode.replaceChild(fragment, textNode);
    }
    return tempDiv.innerHTML;
}

function showFullScreenStory(story) {
    const existingOverlay = document.getElementById('fullScreenStoryOverlay');
    if (existingOverlay) existingOverlay.remove();

    const coloredHtml = colorizeHtmlText(story.text);

    const overlay = document.createElement('div');
    overlay.id = 'fullScreenStoryOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.92);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.4s ease;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
    `;

    if (!document.getElementById('storyFadeInStyle')) {
        const style = document.createElement('style');
        style.id = 'storyFadeInStyle';
        style.textContent = `
            @keyframes fadeIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
            @keyframes fadeOut { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.9); } }
        `;
        document.head.appendChild(style);
    }

    const content = document.createElement('div');
    content.style.cssText = `
        background: #fffdf8;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        border-radius: 60px;
        padding: 40px 35px;
        box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        border: 6px solid #f7d4e8;
        position: relative;
        overflow-y: auto;
        font-family: 'Patrick Hand', cursive;
        animation: fadeIn 0.5s ease;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ Kembali';
    closeBtn.style.cssText = `
        position: sticky;
        top: 0;
        float: right;
        background: #6a1b4d;
        color: white;
        border: none;
        border-radius: 60px;
        font-size: 1.6rem;
        padding: 8px 24px;
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 4px 0 #3d0f2c;
        transition: 0.15s;
        font-family: 'Patrick Hand', cursive;
        z-index: 10;
    `;
    closeBtn.addEventListener('click', hideFullScreenStory);

    const title = document.createElement('h2');
    title.textContent = `${story.icon} ${story.title}`;
    title.style.cssText = `
        font-size: 2.8rem;
        color: #4a1e3a;
        text-align: center;
        margin: 0 0 15px 0;
        border-bottom: 4px solid #f7d4e8;
        padding-bottom: 10px;
        clear: both;
    `;

    const textDiv = document.createElement('div');
    textDiv.innerHTML = coloredHtml;
    textDiv.style.cssText = `
        font-size: 2rem;
        line-height: 2.8rem;
        text-align: left;
        background: #fafafa;
        padding: 20px;
        border-radius: 30px;
        border: 2px solid #d0e0d0;
        margin: 15px 0;
        min-height: 150px;
    `;

    const readBtn = document.createElement('button');
    readBtn.textContent = '🔊 Baca Cerita';
    readBtn.style.cssText = `
        background: #2a6a3a;
        color: white;
        border: none;
        border-radius: 60px;
        padding: 12px 32px;
        font-size: 1.6rem;
        cursor: pointer;
        font-family: 'Patrick Hand', cursive;
        box-shadow: 0 4px 0 #1a4a2a;
        transition: 0.15s;
        display: inline-block;
        margin: 5px auto;
    `;
    readBtn.addEventListener('click', function() {
        const plainText = story.text.replace(/<[^>]*>/g, ' ');
        speak(plainText, 'ms-MY');
    });

    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(textDiv);
    const btnWrapper = document.createElement('div');
    btnWrapper.style.cssText = 'text-align: center; margin-top: 10px;';
    btnWrapper.appendChild(readBtn);
    content.appendChild(btnWrapper);

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) hideFullScreenStory();
    });
}

function hideFullScreenStory() {
    const overlay = document.getElementById('fullScreenStoryOverlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    }
}

function renderMembaca() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    let html = `<div class="cv-activity-card" id="membacaSection">
        <h3>📖 Pilih Cerita</h3>
        <p style="font-size:1.2rem; color:#5a6a5a;">Klik pada ikon untuk membaca cerita dalam paparan penuh.</p>
        <div id="storyIconsContainer" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(70px, 1fr)); gap:10px; margin:10px 0;">`;

    shortStories.forEach((story, index) => {
        html += `<div class="story-icon" data-index="${index}" style="font-size:2.8rem; cursor:pointer; text-align:center; padding:8px; background:#f8f0f5; border-radius:20px; border:3px solid #e8d0dc; transition:0.2s;">
                    ${story.icon}
                </div>`;
    });

    html += `</div></div>`;
    container.insertAdjacentHTML('beforeend', html);

    // Event listener dengan pemeriksaan keselamatan
    const iconsContainer = document.getElementById('storyIconsContainer');
    if (iconsContainer) {
        iconsContainer.addEventListener('click', function(e) {
            const icon = e.target.closest('.story-icon');
            if (!icon) return;
            const index = parseInt(icon.dataset.index);
            const story = shortStories[index];
            if (story) showFullScreenStory(story);
        });
    }
}

// ================================================================
// FUNGSI UTAMA – PANGGIL SEMUA
// ================================================================
// (Pastikan renderCVActivities wujud dan panggil renderMembaca di dalamnya)
// Saya tidak letak semula fungsi utama di sini, anda boleh gunakan yang sedia ada.
// ================================================================
// 3. SUKU KATA BERWARNA – DENGAN PETA SUKU KATA DARI fillBlankQuestions
// ================================================================

// ----- Bina peta perkataan -> senarai suku kata (dari fillBlankQuestions) -----
function buildSyllableMap() {
    const map = {};
    for (const q of fillBlankQuestions) {
        const word = q.word;
        if (map[word]) continue; // sudah ada
        const missing = q.missing;
        const display = q.display;

        // Jika display mengandungi '__', kita boleh tentukan suku kata
        // Contoh: '__jah' -> missing='ga' -> suku kata pertama 'ga', kedua 'jah'
        //          'ga__'  -> missing='jah' -> suku kata pertama 'ga', kedua 'jah'
        //          'ku__ng' -> missing='cu' -> 'ku', 'cu', 'ng'? sebenarnya 'kucing' = 'ku' + 'cing', tetapi display 'ku__ng' kurang tepat.
        // Kita akan gunakan pendekatan: gantikan '__' dengan missing, dapatkan perkataan penuh.
        // Kemudian kita pecahkan berdasarkan kedudukan '__'.
        // Cara mudah: kita boleh tentukan suku kata secara manual untuk perkataan yang kerap.
        // Tapi kita ada banyak, jadi kita gunakan logik:
        // Jika display bermula dengan '__', maka missing adalah suku kata pertama.
        // Jika display berakhir dengan '__', maka missing adalah suku kata terakhir.
        // Jika di tengah, kita perlu cari indeks '__' dan pecahkan.
        // Namun, untuk kesederhanaan, kita akan gunakan pendekatan: cari semua soalan untuk perkataan yang sama,
        // dan gunakan maklumat missing untuk membina senarai suku kata.
    }
    // Memandangkan agak rumit, kita akan gunakan peta manual untuk perkataan yang kerap.
    // Tapi lebih baik kita gunakan data daripada fillBlankQuestions dengan cara:
    // Kumpulkan semua soalan untuk perkataan yang sama, dan ekstrak suku kata dari missing dan display.
    // Saya akan tulis fungsi yang lebih mudah: 
}

// ----- Fungsi pemisahan suku kata (guna peta) -----
const syllableMap = {
    // Haiwan
    'gajah': ['ga', 'jah'],
    'kucing': ['ku', 'cing'],
    'anjing': ['an', 'jing'],
    'ikan': ['i', 'kan'],
    'burung': ['bu', 'rung'],
    'kura': ['ku', 'ra'],
    'singa': ['si', 'nga'],
    'monyet': ['mo', 'nyet'],
    'lembu': ['lem', 'bu'],
    'kambing': ['kam', 'bing'],
    'harimau': ['ha', 'ri', 'mau'],
    'zebra': ['ze', 'bra'],
    'rusa': ['ru', 'sa'],
    'musang': ['mu', 'sang'],
    'tupai': ['tu', 'pai'],
    'arnab': ['ar', 'nab'],
    'itik': ['i', 'tik'],
    'ayam': ['a', 'yam'],
    'ular': ['u', 'lar'],
    'buaya': ['bu', 'a', 'ya'],
    // Bunga
    'mawar': ['ma', 'war'],
    'melati': ['me', 'la', 'ti'],
    'anggrek': ['ang', 'grek'],
    'tulip': ['tu', 'lip'],
    'kembang': ['kem', 'bang'],
    // Kenderaan
    'kereta': ['ke', 're', 'ta'],
    'motosikal': ['mo', 'to', 'si', 'kal'],
    'basikal': ['ba', 'si', 'kal'],
    'lori': ['lo', 'ri'],
    'kapal': ['ka', 'pal'],
    'helikopter': ['he', 'li', 'kop', 'ter'],
    // Perbuatan
    'makan': ['ma', 'kan'],
    'minum': ['mi', 'num'],
    'tidur': ['ti', 'dur'],
    'lari': ['la', 'ri'],
    'renang': ['re', 'nang'],
    'baca': ['ba', 'ca'],
    'tulis': ['tu', 'lis'],
    'lukis': ['lu', 'kis'],
    'nyanyi': ['nya', 'nyi'],
    'tari': ['ta', 'ri'],
    'main': ['ma', 'in'],
    'lompat': ['lom', 'pat'],
    'duduk': ['du', 'duk'],
    'berdiri': ['ber', 'di', 'ri'],
    'bangun': ['ba', 'ngun'],
    'mandi': ['man', 'di'],
    'basuh': ['ba', 'suh'],
    'sapu': ['sa', 'pu'],
    'masak': ['ma', 'sak'],
    'jahit': ['ja', 'hit'],
    // Warna
    'merah': ['me', 'rah'],
    'biru': ['bi', 'ru'],
    'hijau': ['hi', 'jau'],
    'kuning': ['ku', 'ning'],
    'ungu': ['un', 'gu'],
    'oren': ['o', 'ren'],
    'hitam': ['hi', 'tam'],
    'putih': ['pu', 'tih'],
    'perak': ['pe', 'rak'],
    'emas': ['e', 'mas'],
    'coklat': ['co', 'klat'],
    'kelabu': ['ke', 'la', 'bu'],
    // Bentuk
    'bulat': ['bu', 'lat'],
    'segitiga': ['se', 'gi', 'ti', 'ga'],
    'segiempat': ['se', 'gi', 'em', 'pat'],
    'bujur': ['bu', 'jur'],
    'sfera': ['sfe', 'ra'],
    'kubus': ['ku', 'bus'],
    'silinder': ['si', 'lin', 'der'],
    // Saiz
    'tinggi': ['ting', 'gi'],
    'rendah': ['ren', 'dah'],
    'panjang': ['pan', 'jang'],
    'pendek': ['pen', 'dek'],
    'lebar': ['le', 'bar'],
    'sempit': ['sem', 'pit'],
    'tebal': ['te', 'bal'],
    'nipis': ['ni', 'pis']
};

function splitIntoSyllables(word) {
    // Jika ada dalam peta, gunakan
    if (syllableMap[word]) {
        return syllableMap[word];
    }
    // Jika tiada, gunakan algoritma asas (tapi kita cuba elakkan)
    // Algoritma asas: cari pola KV (konsonan-vokal)
    const patterns = [
        /^([bcdfghjklmnpqrstvwxyz]?[aiueoê])([bcdfghjklmnpqrstvwxyz]?[aiueoê])([bcdfghjklmnpqrstvwxyz]?[aiueoê]?)/,
        /^([bcdfghjklmnpqrstvwxyz]?[aiueoê])([bcdfghjklmnpqrstvwxyz]?[aiueoê]?)([bcdfghjklmnpqrstvwxyz]?[aiueoê]?)/
    ];
    for (const pattern of patterns) {
        const match = word.match(pattern);
        if (match) {
            const parts = match.slice(1).filter(p => p !== '');
            if (parts.length >= 2) return parts;
        }
    }
    return [word];
}

// ----- Ambil perkataan unik (tanpa ruang) -----
function getUniqueWords(count = 20) {
    const uniqueWords = [];
    const seen = new Set();
    for (const q of fillBlankQuestions) {
        const word = q.word;
        // Elakkan perkataan yang ada ruang (contoh: 'kapal terbang')
        if (word.includes(' ')) continue;
        if (!seen.has(word)) {
            seen.add(word);
            uniqueWords.push(word);
        }
    }
    const seed = getDateSeed();
    const shuffled = shuffleArray(uniqueWords, seed);
    return shuffled.slice(0, count);
}

// ----- Render Suku Kata Berwarna (dengan peta suku kata) -----
function renderSukuKataBerwarna() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    const activityDiv = document.createElement('div');
    activityDiv.id = 'sukuKataBerwarna';
    activityDiv.style.marginTop = '30px';
    container.appendChild(activityDiv);

    const words = getUniqueWords(20);
    let currentIndex = 0;

    function showWord(index) {
        const word = words[index];
        if (!word) return;

        const q = fillBlankQuestions.find(q => q.word === word);
        const emoji = q ? q.image : '📝';
        const syllables = splitIntoSyllables(word);
        const colorPalette = ['#e74c3c', '#f1c40f', '#2ecc71', '#3498db', '#9b59b6', '#f39c12'];
        const coloredSyllables = syllables.map((syl, i) => {
            const color = colorPalette[i % colorPalette.length];
            return `<span style="color:${color}; font-weight:bold; font-size:3.2rem; padding:0 4px;">${syl}</span>`;
        }).join(' + ');

        let html = `
            <div style="text-align:center; padding:20px; background:#f5faff; border-radius:40px; border:4px solid #b8d8e8;">
                <div style="font-size:4rem;">${emoji}</div>
                <div style="font-size:2.8rem; margin:15px 0;">
                    ${coloredSyllables}
                </div>
                <div style="font-size:2rem; color:#4a6a5a;">${word}</div>
                <div style="margin-top:15px;">
                    <button onclick="speak('${word}','ms-MY')" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:10px 28px; font-size:1.6rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:4px;">🔊 Dengar Perkataan</button>
                    <button class="next-word-btn" style="background:#2a6a3a; color:white; border:none; border-radius:40px; padding:10px 28px; font-size:1.6rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:4px;">➡️ Seterusnya</button>
                </div>
                <p style="margin-top:10px; font-size:1.2rem; color:#7a6a6a;">Perkataan ${index+1} daripada ${words.length}</p>
            </div>
        `;

        activityDiv.innerHTML = html;

        const nextBtn = activityDiv.querySelector('.next-word-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % words.length;
                showWord(currentIndex);
            });
        }
    }

    showWord(0);
}
// ================================================================
// 4. FUNGSI UTAMA – PANGGIL SEMUA (TANPA MENGEJA)
// ================================================================

function renderCVActivities() {
    const container = document.getElementById('cvActivities');
    if (container) container.innerHTML = '';

    // Urutan: Fill Blank → Membaca → Suku Kata Berwarna
    renderSukuKataBerwarna();
    renderFillBlank();
    renderMembaca();
     
}
