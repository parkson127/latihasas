// ===== SUKU KATA DATA =====
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
const vowels = ['a','e','i','o','u'];
const cvExampleMap = {
    b: ['bola','bekas','bintang','botol','buku'],
    c: ['cawan','cek','cili','coklat','cuka'],
    d: ['durian','dewan','dinding','dompet','duit'],
    f: ['feri','fesyen','filem','foto','futur'],
    g: ['gajah','gelas','gigi','goreng','gula'],
    h: ['hari','hewan','hijau','hotel','hujan'],
    j: ['jatuh','jeruk','jiran','jodoh','juta'],
    k: ['kambing','kecil','kiri','kotak','kucing'],
    l: ['lapan','lebar','limau','lompat','lukis'],
    m: ['makan','meja','mimpi','motor','mulut'],
    n: ['nasi','negeri','nipis','nombor','nuri'],
    p: ['pagi','pecah','piring','potong','pulau'],
    q: ['qari','qasidah','qiam','quran','qutub'],
    r: ['rama','rehat','ringan','robot','ruang'],
    s: ['sarang','sekolah','sikat','sopan','surat'],
    t: ['tangan','tebal','tiga','tomat','tulang'],
    v: ['vaksin','van','vila','vokal','voli'],
    w: ['warna','wedding','wira','wol','wujud'],
    x: ['xenon','xilem','xilofon','x-ray'],
    y: ['yakin','yatim','yoga','yoyo','yuran'],
    z: ['zaman','zebra','ziarah','zombi','zon']
};

function buildCVData() {
    const list = [];
    for (const c of consonants) {
        const words = cvExampleMap[c] || ['contoh'];
        for (let i = 0; i < vowels.length; i++) {
            const v = vowels[i];
            const syl = c + v;
            const w1 = words[i % words.length];
            const w2 = words[(i+1) % words.length];
            const w3 = words[(i+2) % words.length];
            list.push({ syl, examples: ['🌟','⭐','🌈'], words: [w1, w2, w3] });
        }
    }
    return list;
}
const cvData = buildCVData();

// ===== RENDER =====
function renderCV() {
    const grid = document.getElementById('cvGrid');
    let html = '';
    for (let i = 0; i < cvData.length; i++) {
        const item = cvData[i];
        const colorClass = 'color-' + ((i % 5) + 1);
        html += `<div class="cv-card ${colorClass}" data-syl="${item.syl}" data-idx="${i}">
            <div class="cv-syllable">${item.syl}</div>
            <div class="cv-examples">${item.examples.join(' ')}</div>
            <div style="font-size:1rem;color:#3a6a5a;">${item.words.join(' · ')}</div>
            <button class="sound-btn" data-syl="${item.syl}">🔊 Bunyi</button>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#cvGrid .cv-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('sound-btn')) return;
            const idx = parseInt(this.dataset.idx);
            const item = cvData[idx];
            if (!item) return;
            let html = `<div class="modal-title">🔡 Suku Kata "${item.syl}"</div>
                <div style="text-align:center;font-size:3rem;margin:10px 0;">${item.examples.join(' ')}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                <div style="background:#f0f8ff;border-radius:30px;padding:15px;"><h3>📝 Perkataan</h3>`;
            for (const w of item.words) html += `<div style="font-size:1.6rem;padding:6px;">${w}</div>`;
            html += `</div><div style="background:#f0f8f0;border-radius:30px;padding:15px;"><h3>🎯 Contoh Ayat</h3>`;
            const sentences = item.words.map(w => `Saya suka ${w}.`);
            for (const s of sentences) html += `<div style="font-size:1.4rem;padding:6px;">${s}</div>`;
            html += `</div></div>`;
            openModal(html);
        });
    });

    document.querySelectorAll('#cvGrid .sound-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            speak(this.dataset.syl, 'ms-MY');
        });
    });
}