// ===== TAJWID DATA =====
const tajwidData = [
    { rule: 'Izhar Halqi', arab: 'أَخْرَجَ', example: 'مِنْ أَجْلِ', meaning: 'jelas sebutan' },
    { rule: 'Idgham Bighunnah', arab: 'يَغْنَمُ', example: 'مِنْ نَعِيمٍ', meaning: 'dengung' },
    { rule: 'Idgham Bilaghunnah', arab: 'لاَ غُنَّةَ', example: 'مِنْ لَدُنْ', meaning: 'tanpa dengung' },
    { rule: 'Iqlab', arab: 'إِقْلَاب', example: 'مِنْ بَعْدِ', meaning: 'tukar jadi mim' },
    { rule: 'Ikhfa Haqiqi', arab: 'إِخْفَاء', example: 'مِنْ تَحْتِ', meaning: 'samar-samar' }
];

function renderTajwid() {
    const grid = document.getElementById('tajwidGrid');
    let html = '';
    for (const t of tajwidData) {
        html += `<div class="tajwid-card">
            <div class="tajwid-ar">${t.arab}</div>
            <div class="tajwid-rule">${t.rule}</div>
            <div class="tajwid-ex">${t.example} — ${t.meaning}</div>
        </div>`;
    }
    grid.innerHTML = html;
}