// ===== JAWI DATA =====
// Setiap huruf ada 3-4 contoh (Melayu, Arab, emoji)
const jawiData = [
    { char: 'ا', examples: [{ ms: 'ابو', ar: 'أَب', emoji: '👨' }, { ms: 'ان', ar: 'أَنَّ', emoji: '🌟' }, { ms: 'ام', ar: 'أُمّ', emoji: '👩' }] },
    { char: 'ب', examples: [{ ms: 'بابو', ar: 'بَاب', emoji: '🚪' }, { ms: 'بولا', ar: 'بُولَة', emoji: '⚽' }, { ms: 'بنت', ar: 'بِنْت', emoji: '👧' }] },
    { char: 'ت', examples: [{ ms: 'تيدور', ar: 'تِيدُور', emoji: '😴' }, { ms: 'تومت', ar: 'طَمَاطِم', emoji: '🍅' }, { ms: 'تلج', ar: 'تَلْج', emoji: '❄️' }] },
    { char: 'ث', examples: [{ ms: 'ثعلب', ar: 'ثَعْلَب', emoji: '🦊' }, { ms: 'ثمر', ar: 'ثَمَر', emoji: '🍎' }, { ms: 'ثوم', ar: 'ثُوم', emoji: '🧄' }] },
    { char: 'ج', examples: [{ ms: 'جاجي', ar: 'جَامِعَة', emoji: '🏫' }, { ms: 'جمل', ar: 'جَمَل', emoji: '🐫' }, { ms: 'جبن', ar: 'جُبْن', emoji: '🧀' }] },
    { char: 'ح', examples: [{ ms: 'حاجي', ar: 'حَاجّ', emoji: '🕋' }, { ms: 'حليب', ar: 'حَلِيب', emoji: '🥛' }, { ms: 'حوت', ar: 'حُوت', emoji: '🐳' }] },
    { char: 'خ', examples: [{ ms: 'خبز', ar: 'خُبْز', emoji: '🍞' }, { ms: 'خروف', ar: 'خَرُوف', emoji: '🐏' }, { ms: 'خيار', ar: 'خِيَار', emoji: '🥒' }] },
    { char: 'د', examples: [{ ms: 'دوري', ar: 'دَوْر', emoji: '🔄' }, { ms: 'ديك', ar: 'دِيك', emoji: '🐓' }, { ms: 'دب', ar: 'دُبّ', emoji: '🐻' }] },
    { char: 'ذ', examples: [{ ms: 'ذنب', ar: 'ذَنَب', emoji: '🐕' }, { ms: 'ذهب', ar: 'ذَهَب', emoji: '💛' }, { ms: 'ذراع', ar: 'ذِرَاع', emoji: '💪' }] },
    { char: 'ر', examples: [{ ms: 'روم', ar: 'رُوم', emoji: '🛏️' }, { ms: 'رجل', ar: 'رَجُل', emoji: '🧑' }, { ms: 'ريح', ar: 'رِيح', emoji: '💨' }] },
    { char: 'ز', examples: [{ ms: 'زيت', ar: 'زَيْت', emoji: '🫒' }, { ms: 'زهرة', ar: 'زَهْرَة', emoji: '🌺' }, { ms: 'زمن', ar: 'زَمَن', emoji: '⏳' }] },
    { char: 'س', examples: [{ ms: 'سلام', ar: 'سَلَام', emoji: '🕊️' }, { ms: 'سمك', ar: 'سَمَك', emoji: '🐟' }, { ms: 'سكر', ar: 'سُكَّر', emoji: '🍭' }] },
    { char: 'ش', examples: [{ ms: 'شمس', ar: 'شَمْس', emoji: '☀️' }, { ms: 'شاي', ar: 'شَاي', emoji: '🍵' }, { ms: 'شراب', ar: 'شَرَاب', emoji: '🥤' }] },
    { char: 'ص', examples: [{ ms: 'صبر', ar: 'صَبْر', emoji: '🧘' }, { ms: 'صوت', ar: 'صَوْت', emoji: '🔊' }, { ms: 'صنم', ar: 'صَنَم', emoji: '🗿' }] },
    { char: 'ض', examples: [{ ms: 'ضوء', ar: 'ضَوْء', emoji: '💡' }, { ms: 'ضفدع', ar: 'ضِفْدِع', emoji: '🐸' }, { ms: 'ضرس', ar: 'ضِرْس', emoji: '🦷' }] },
    { char: 'ط', examples: [{ ms: 'طب', ar: 'طِبّ', emoji: '💉' }, { ms: 'طائر', ar: 'طَائِر', emoji: '🐦' }, { ms: 'طول', ar: 'طُول', emoji: '📏' }] },
    { char: 'ظ', examples: [{ ms: 'ظل', ar: 'ظِلّ', emoji: '🌳' }, { ms: 'ظفر', ar: 'ظُفْر', emoji: '💅' }, { ms: 'ظهير', ar: 'ظَهِير', emoji: '🤝' }] },
    { char: 'ع', examples: [{ ms: 'علم', ar: 'عِلْم', emoji: '📚' }, { ms: 'عين', ar: 'عَيْن', emoji: '👁️' }, { ms: 'عسل', ar: 'عَسَل', emoji: '🍯' }] },
    { char: 'غ', examples: [{ ms: 'غروب', ar: 'غُرُوب', emoji: '🌅' }, { ms: 'غيمة', ar: 'غَيْمَة', emoji: '☁️' }, { ms: 'غزال', ar: 'غَزَال', emoji: '🦌' }] },
    { char: 'ف', examples: [{ ms: 'فضل', ar: 'فَضْل', emoji: '🎁' }, { ms: 'فراشة', ar: 'فَرَاشَة', emoji: '🦋' }, { ms: 'فيل', ar: 'فِيل', emoji: '🐘' }] },
    { char: 'ق', examples: [{ ms: 'قمر', ar: 'قَمَر', emoji: '🌙' }, { ms: 'قلم', ar: 'قَلَم', emoji: '✏️' }, { ms: 'قرن', ar: 'قَرْن', emoji: '🦏' }] },
    { char: 'ك', examples: [{ ms: 'كتاب', ar: 'كِتَاب', emoji: '📖' }, { ms: 'كلب', ar: 'كَلْب', emoji: '🐶' }, { ms: 'كأس', ar: 'كَأْس', emoji: '🥤' }] },
    { char: 'ل', examples: [{ ms: 'ليل', ar: 'لَيْل', emoji: '🌙' }, { ms: 'لبن', ar: 'لَبَن', emoji: '🥛' }, { ms: 'لون', ar: 'لَوْن', emoji: '🎨' }] },
    { char: 'م', examples: [{ ms: 'ماء', ar: 'مَاء', emoji: '💧' }, { ms: 'ماكن', ar: 'مَاكَن', emoji: '🍽️' }, { ms: 'مدرسة', ar: 'مَدْرَسَة', emoji: '🏫' }] },
    { char: 'ن', examples: [{ ms: 'نور', ar: 'نُور', emoji: '✨' }, { ms: 'نوم', ar: 'نَوْم', emoji: '😴' }, { ms: 'نجم', ar: 'نَجْم', emoji: '⭐' }] },
    { char: 'و', examples: [{ ms: 'وردة', ar: 'وَرْدَة', emoji: '🌹' }, { ms: 'وزن', ar: 'وَزْن', emoji: '⚖️' }, { ms: 'وجه', ar: 'وَجْه', emoji: '😊' }] },
    { char: 'ه', examples: [{ ms: 'هدية', ar: 'هَدِيَّة', emoji: '🎁' }, { ms: 'هواء', ar: 'هَوَاء', emoji: '🌬️' }, { ms: 'هاتف', ar: 'هَاتِف', emoji: '📱' }] },
    { char: 'ي', examples: [{ ms: 'يمين', ar: 'يَمِين', emoji: '👉' }, { ms: 'يد', ar: 'يَد', emoji: '🖐️' }, { ms: 'يوم', ar: 'يَوْم', emoji: '📅' }] }
];

// ===== RENDER =====
function renderJawi() {
    const grid = document.getElementById('jawiGrid');
    let html = '';
    for (const item of jawiData) {
        const ex = item.examples.slice(0,3);
        const exHtml = ex.map(e => `<span style="font-size:1.8rem;font-family:'Traditional Arabic',serif;display:inline-block;margin:0 4px;">${e.ms}</span>`).join('');
        html += `<div class="jawi-card" data-char="${item.char}">
            <div class="jawi-char">${item.char}</div>
            <div style="font-size:1.4rem;color:#3a5a3a;">${exHtml}</div>
            <div class="jawi-meaning">Klik untuk lebih</div>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#jawiGrid .jawi-card').forEach(card => {
        card.addEventListener('click', function() {
            const char = this.dataset.char;
            const item = jawiData.find(d => d.char === char);
            if (!item) return;
            let html = `<div class="modal-title">🕌 Huruf Jawi: ${item.char}</div>
                <div style="font-size:4rem;text-align:center;font-family:'Traditional Arabic',serif;">${item.char}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:15px;">`;
            for (const ex of item.examples) {
                html += `<div style="background:#f8f0e8;border-radius:30px;padding:12px;text-align:center;">
                    <div style="font-size:2.4rem;font-family:'Traditional Arabic',serif;">${ex.ms}</div>
                    <div style="font-size:1.6rem;">${ex.ar}</div>
                    <div style="font-size:2.6rem;">${ex.emoji}</div>
                </div>`;
            }
            html += `</div>`;
            openModal(html);
        });
    });
}