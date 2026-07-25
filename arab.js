// ===== ARABIC DATA =====
const activityData = [
    { ar: 'جُلُوس', ms: 'duduk', emoji: '🧘' },
    { ar: 'وُقُوف', ms: 'berdiri', emoji: '🧍' },
    { ar: 'اِسْتِيقَاظ', ms: 'bangun', emoji: '🌅' },
    { ar: 'أَكْل', ms: 'makan', emoji: '🍽️' },
    { ar: 'شُرْب', ms: 'minum', emoji: '🥤' },
    { ar: 'نَوْم', ms: 'tidur', emoji: '😴' },
    { ar: 'لَعِب', ms: 'bermain', emoji: '🧸' },
    { ar: 'غَسْل', ms: 'basuh', emoji: '🧼' },
    { ar: 'صَلَاة', ms: 'solat', emoji: '🕌' },
    { ar: 'ذَهَبَ', ms: 'pergi', emoji: '🚶' },
    { ar: 'جَاءَ', ms: 'datang', emoji: '🚶‍♂️' },
    { ar: 'قَرَأَ', ms: 'baca', emoji: '📖' },
    { ar: 'كَتَبَ', ms: 'tulis', emoji: '✍️' },
    { ar: 'رَسَمَ', ms: 'lukis', emoji: '🎨' },
    { ar: 'سَمِعَ', ms: 'dengar', emoji: '👂' },
    { ar: 'نَظَرَ', ms: 'lihat', emoji: '👀' }
];

function renderArabic() {
    const grid = document.getElementById('activityGrid');
    let html = '';
    for (const item of activityData) {
        html += `<div class="activity-card" data-ar="${item.ar}">
            <div class="act-emoji">${item.emoji}</div>
            <div class="act-ar">${item.ar}</div>
            <div class="act-ms">${item.ms}</div>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#activityGrid .activity-card').forEach(card => {
        card.addEventListener('click', function() {
            const ar = this.dataset.ar;
            const item = activityData.find(d => d.ar === ar);
            if (!item) return;
            let html = `<div class="modal-title">🌙 ${item.ms}</div>
                <div style="font-size:5rem;text-align:center;">${item.emoji}</div>
                <div style="font-size:3.2rem;text-align:center;font-family:'Traditional Arabic',serif;">${item.ar}</div>
                <div style="font-size:1.8rem;text-align:center;">Bahasa Melayu: ${item.ms}</div>
                <div style="text-align:center;margin-top:10px;font-size:1.4rem;">Contoh: Saya ${item.ms} setiap hari.</div>
                <div style="text-align:center;margin-top:10px;">
                    <button onclick="speak('${item.ar}','ar-SA')" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:8px 20px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;">🔊 Arab</button>
                    <button onclick="speak('${item.ms}','ms-MY')" style="background:#2a6a3a;color:white;border:none;border-radius:40px;padding:8px 20px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;">🔊 Melayu</button>
                </div>`;
            openModal(html);
        });
    });
}