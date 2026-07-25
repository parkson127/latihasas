function renderSukuKataTable() {
    const container = document.getElementById('sukuKataTable');
    if (!container) return;

    const vowelOrder = ['a', 'e', 'i', 'o', 'u'];
    const consonantOrder = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'];

    // Peta warna untuk vokal
    const vowelColors = {
        'a': '#e74c3c', // merah
        'i': '#3498db', // biru
        'u': '#9b59b6', // ungu
        'e': '#2ecc71', // hijau
        'o': '#f39c12'  // oren
    };

    let html = `
        <div style="background:#f5faff; border-radius:50px; padding:20px 15px; border:5px solid #b8d8e8; box-shadow:0 10px 25px rgba(0,0,0,0.06); margin-bottom:25px;">
            <h2 style="text-align:center; font-size:2.8rem; color:#1a4a5c; margin-bottom:10px; font-family:'Patrick Hand',cursive;">📖 JADUAL SUKU KATA</h2>
            <div style="overflow-x:auto; -webkit-overflow-scrolling:touch;">
                <table style="width:100%; border-collapse:collapse; font-family:'Patrick Hand',cursive; font-size:2rem; text-align:center; min-width:500px;">
                    <thead>
                        <tr style="background:#6a1b4d; color:white; border-radius:20px 20px 0 0;">
                            <th style="padding:14px 8px; border:3px solid #4a1a3a; border-radius:20px 0 0 0; font-size:2rem;">Konsonan</th>`;

    // Header vokal dengan warna
    for (const v of vowelOrder) {
        const color = vowelColors[v];
        html += `<th style="padding:14px 8px; border:3px solid #4a1a3a; font-size:2rem; color:${color};">${v}</th>`;
    }

    html += `</tr></thead><tbody>`;

    const colors = ['#fff0f0','#f0fff0','#f0f0ff','#fff5e0','#f5f0ff'];
    for (let i = 0; i < consonantOrder.length; i++) {
        const c = consonantOrder[i];
        const color = colors[i % colors.length];
        html += `<tr style="background:${color}; border-bottom:3px solid #e0e0e0;">`;
        html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-weight:bold; font-size:2.6rem; color:#4a1e3a; background:#ffffffdd;">${c}</td>`;

        for (const v of vowelOrder) {
            const syl = c + v;
            // Pecah suku kata: konsonan + vokal
            const consonant = syl.slice(0, -1);
            const vowel = syl.slice(-1);
            const vowelColor = vowelColors[vowel] || '#000000';
            // Bina teks berwarna
            const coloredSyl = `<span style="color:#000000;">${consonant}</span><span style="color:${vowelColor};">${vowel}</span>`;

            html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-size:2.4rem; cursor:pointer; transition:0.15s; background:#ffffffcc;" 
                        class="syllable-cell" data-syl="${syl}"
                        onmouseover="this.style.background='#ffe6b0'" 
                        onmouseout="this.style.background='#ffffffcc'">
                        ${coloredSyl}
                    </td>`;
        }
        html += `</tr>`;
    }

    html += `</tbody></table></div>
        <p style="text-align:center; margin-top:14px; font-size:1.4rem; color:#7a6a6a;">👆 Klik pada mana-mana suku kata untuk lihat contoh perkataan, ayat & dengar sebutan.</p>
    </div>`;

    container.innerHTML = html;

    // Event listener untuk setiap sel
    document.querySelectorAll('.syllable-cell').forEach(cell => {
        cell.addEventListener('click', function() {
            const syl = this.dataset.syl;
            const item = cvData.find(d => d.syl === syl);
            if (!item) return;

            let modalHtml = `<div class="modal-title">🔡 Suku Kata "${item.syl}"</div>
                <div style="text-align:center;font-size:3rem;margin:10px 0;">${item.examples.join(' ')}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                <div style="background:#f0f8ff;border-radius:30px;padding:15px;"><h3>📝 Perkataan</h3>`;
            for (const w of item.words) modalHtml += `<div style="font-size:1.8rem;padding:6px;">${w}</div>`;
            modalHtml += `</div><div style="background:#f0f8f0;border-radius:30px;padding:15px;"><h3>🎯 Contoh Ayat</h3>`;
            const sentences = item.words.map(w => `Saya suka ${w}.`);
            for (const s of sentences) modalHtml += `<div style="font-size:1.6rem;padding:6px;">${s}</div>`;
            modalHtml += `</div></div>`;
            modalHtml += `<div style="text-align:center;margin-top:15px;">
                <button onclick="speak('${item.syl}','ms-MY')" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:10px 28px;font-size:1.6rem;cursor:pointer;font-family:'Patrick Hand',cursive;">🔊 Dengar Sebutan</button>
            </div>`;
            openModal(modalHtml);
        });
    });
}
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
