// ================================================================
// SUKUKATA.JS – Data & Render Suku Kata (dengan warna & bunyi)
// ================================================================

// ----- DATA SUKU KATA -----
// Konsonan (termasuk q dan x)
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
// Susunan vokal: a, e, i, o, u
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Perkataan contoh untuk setiap konsonan
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

// Hasilkan cvData (semua suku kata)
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

// ================================================================
// RENDER: KAD SUKU KATA (dengan dua butang bunyi)
// ================================================================

function renderCV() {
    const grid = document.getElementById('cvGrid');
    if (!grid) return;

    let html = '';
    for (let i = 0; i < cvData.length; i++) {
        const item = cvData[i];
        const colorClass = 'color-' + ((i % 5) + 1);
        html += `<div class="cv-card ${colorClass}" data-syl="${item.syl}" data-idx="${i}">
            <div class="cv-syllable">${item.syl}</div>
            <div class="cv-examples">${item.examples.join(' ')}</div>
            <div style="font-size:1rem;color:#3a6a5a;">${item.words.join(' · ')}</div>
            <div style="margin-top:6px;">
                <button class="sound-btn" data-syl="${item.syl}" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:4px 14px;font-size:1rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:2px;">🔊 Suku Kata</button>
                <button class="sound-word" data-word="${item.words[0]}" style="background:#2a6a3a;color:white;border:none;border-radius:40px;padding:4px 14px;font-size:1rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:2px;">🔊 Perkataan</button>
            </div>
        </div>`;
    }
    grid.innerHTML = html;

    // ===== Klik kad -> buka modal =====
    document.querySelectorAll('#cvGrid .cv-card').forEach(card => {
        card.addEventListener('click', function(e) {
            // Jangan buka modal jika klik pada butang
            if (e.target.classList.contains('sound-btn') || e.target.classList.contains('sound-word')) return;

            const idx = parseInt(this.dataset.idx);
            const item = cvData[idx];
            if (!item) return;

            let modalHtml = `<div class="modal-title">🔡 Suku Kata "${item.syl}"</div>
                <div style="text-align:center;font-size:3rem;margin:10px 0;">${item.examples.join(' ')}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
                <div style="background:#f0f8ff;border-radius:30px;padding:15px;"><h3>📝 Perkataan</h3>`;
            for (const w of item.words) modalHtml += `<div style="font-size:1.6rem;padding:6px;">${w}</div>`;
            modalHtml += `</div><div style="background:#f0f8f0;border-radius:30px;padding:15px;"><h3>🎯 Contoh Ayat</h3>`;
            const sentences = item.words.map(w => `Saya suka ${w}.`);
            for (const s of sentences) modalHtml += `<div style="font-size:1.4rem;padding:6px;">${s}</div>`;
            modalHtml += `</div></div>`;
            modalHtml += `<div style="text-align:center;margin-top:15px;">
                <button onclick="speak('${item.syl}','ms-MY')" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:10px 28px;font-size:1.6rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 Suku Kata</button>
                <button onclick="speak('${item.words[0]}','ms-MY')" style="background:#2a6a3a;color:white;border:none;border-radius:40px;padding:10px 28px;font-size:1.6rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 Perkataan Contoh</button>
            </div>`;
            openModal(modalHtml);
        });
    });

    // ===== Butang "Suku Kata" pada kad =====
    document.querySelectorAll('#cvGrid .sound-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            speak(this.dataset.syl, 'ms-MY');
        });
    });

    // ===== Butang "Perkataan" pada kad =====
    document.querySelectorAll('#cvGrid .sound-word').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            speak(this.dataset.word, 'ms-MY');
        });
    });
}

// ================================================================
// RENDER: JADUAL SUKU KATA (dengan warna & klik zum)
// ================================================================

function renderSukuKataTable() {
    const container = document.getElementById('sukuKataTable');
    if (!container) return;

    // Susunan vokal: a, e, i, o, u (seperti yang diminta)
    const vowelOrder = ['a', 'e', 'i', 'o', 'u'];
    // Susunan konsonan (termasuk q dan x)
    const consonantOrder = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

    // Warna untuk setiap vokal (keseluruhan suku kata)
    const vowelColors = {
        'a': '#e74c3c', // merah
        'e': '#2ecc71', // hijau
        'i': '#3498db', // biru
        'o': '#f39c12', // oren
        'u': '#9b59b6'  // ungu
    };

    let html = `
        <div style="background:#f5faff; border-radius:50px; padding:20px 15px; border:5px solid #b8d8e8; box-shadow:0 10px 25px rgba(0,0,0,0.06); margin-bottom:25px;">
            <h2 style="text-align:center; font-size:2.8rem; color:#1a4a5c; margin-bottom:10px; font-family:'Patrick Hand',cursive;">📖 JADUAL SUKU KATA</h2>
            <div style="overflow-x:auto; -webkit-overflow-scrolling:touch;">
                <table style="width:100%; border-collapse:collapse; font-family:'Patrick Hand',cursive; font-size:2rem; text-align:center; min-width:500px;">
                    <thead>
                        <tr style="background:#6a1b4d; color:white; border-radius:20px 20px 0 0;">
                            <th style="padding:14px 8px; border:3px solid #4a1a3a; border-radius:20px 0 0 0; font-size:2rem;">Konsonan</th>`;

    // Header vokal dengan warna (a, e, i, o, u)
    for (const v of vowelOrder) {
        const color = vowelColors[v];
        html += `<th style="padding:14px 8px; border:3px solid #4a1a3a; font-size:2rem; color:${color};">${v}</th>`;
    }

    html += `</tr></thead><tbody>`;

    // Warna latar belakang baris
    const rowColors = ['#fff0f0','#f0fff0','#f0f0ff','#fff5e0','#f5f0ff'];
    for (let i = 0; i < consonantOrder.length; i++) {
        const c = consonantOrder[i];
        const bg = rowColors[i % rowColors.length];
        html += `<tr style="background:${bg}; border-bottom:3px solid #e0e0e0;">`;
        html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-weight:bold; font-size:2.6rem; color:#4a1e3a; background:#ffffffdd;">${c}</td>`;

        for (const v of vowelOrder) {
            const syl = c + v;
            const color = vowelColors[v];
            html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-size:2.4rem; cursor:pointer; transition:0.15s; background:#ffffffcc; color:${color}; font-weight:bold;" 
                        class="syllable-cell" data-syl="${syl}"
                        onmouseover="this.style.background='#ffe6b0'" 
                        onmouseout="this.style.background='#ffffffcc'">
                        ${syl}
                    </td>`;
        }
        html += `</tr>`;
    }

    html += `</tbody></table></div>
        <p style="text-align:center; margin-top:14px; font-size:1.4rem; color:#7a6a6a;">👆 Klik pada mana-mana suku kata untuk lihat contoh perkataan, ayat & dengar sebutan.</p>
    </div>`;

    container.innerHTML = html;

    // ===== Event listener untuk setiap sel dalam jadual =====
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
                <button onclick="speak('${item.syl}','ms-MY')" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:10px 28px;font-size:1.6rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 Suku Kata</button>
                <button onclick="speak('${item.words[0]}','ms-MY')" style="background:#2a6a3a;color:white;border:none;border-radius:40px;padding:10px 28px;font-size:1.6rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 Perkataan Contoh</button>
            </div>`;
            openModal(modalHtml);
        });
    });
}
