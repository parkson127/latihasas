// ================================================================
// jawi.js - Data + Logik Penuh Jawi (Warna, Bunyi, Animasi, Popup)
// Edit fail ini sahaja untuk sebarang perubahan.
// ================================================================

// ===== DATA HURUF (32 huruf) =====
const jawiData = [
    // 28 Huruf Arab
    { char: 'ا', name: { ar: 'أَلِف', rumi: 'Alif' }, examples: [{ ar: 'أَرْنَب', emoji: '🐇', iqra: 'ar-nab' }, { ar: 'أُمّ', emoji: '👩', iqra: 'umm' }, { ar: 'أَسَد', emoji: '🦁', iqra: 'a-sad' }] },
    { char: 'ب', name: { ar: 'بَاء', rumi: 'Ba' }, examples: [{ ar: 'بُولَة', emoji: '⚽', iqra: 'bu-lah' }, { ar: 'بِنْت', emoji: '👧', iqra: 'bint' }, { ar: 'بَاب', emoji: '🚪', iqra: 'baab' }] },
    { char: 'ت', name: { ar: 'تَاء', rumi: 'Ta' }, examples: [{ ar: 'تِلْمِيذ', emoji: '🧑‍🎓', iqra: 'til-miiz' }, { ar: 'تُمَام', emoji: '✅', iqra: 'tu-maam' }, { ar: 'تِين', emoji: '🍇', iqra: 'tiin' }] },
    { char: 'ث', name: { ar: 'ثَاء', rumi: 'Tsa' }, examples: [{ ar: 'ثَعْلَب', emoji: '🦊', iqra: 'tsa-lab' }, { ar: 'ثَمَر', emoji: '🍎', iqra: 'tsa-mar' }, { ar: 'ثُوم', emoji: '🧄', iqra: 'tsuum' }] },
    { char: 'ج', name: { ar: 'جِيم', rumi: 'Jim' }, examples: [{ ar: 'جَمَل', emoji: '🐫', iqra: 'ja-mal' }, { ar: 'جُبْن', emoji: '🧀', iqra: 'jubn' }, { ar: 'جَامِعَة', emoji: '🏫', iqra: 'ja-mi-ah' }] },
    { char: 'ح', name: { ar: 'حَاء', rumi: 'Ha' }, examples: [{ ar: 'حَلِيب', emoji: '🥛', iqra: 'ha-lib' }, { ar: 'حُوت', emoji: '🐳', iqra: 'huut' }, { ar: 'حَجّ', emoji: '🕋', iqra: 'hajj' }] },
    { char: 'خ', name: { ar: 'خَاء', rumi: 'Kho' }, examples: [{ ar: 'خُبْز', emoji: '🍞', iqra: 'khubz' }, { ar: 'خَرُوف', emoji: '🐏', iqra: 'kha-ruuf' }, { ar: 'خِيَار', emoji: '🥒', iqra: 'khi-yar' }] },
    { char: 'د', name: { ar: 'دَال', rumi: 'Dal' }, examples: [{ ar: 'دِيك', emoji: '🐓', iqra: 'diik' }, { ar: 'دُبّ', emoji: '🐻', iqra: 'dubb' }, { ar: 'دَوْر', emoji: '🔄', iqra: 'daur' }] },
    { char: 'ذ', name: { ar: 'ذَال', rumi: 'Dzal' }, examples: [{ ar: 'ذَنَب', emoji: '🐕', iqra: 'dza-nab' }, { ar: 'ذَهَب', emoji: '💛', iqra: 'dza-hab' }, { ar: 'ذِرَاع', emoji: '💪', iqra: 'dhi-raa' }] },
    { char: 'ر', name: { ar: 'رَاء', rumi: 'Ra' }, examples: [{ ar: 'رَجُل', emoji: '🧑', iqra: 'ra-jul' }, { ar: 'رِيح', emoji: '💨', iqra: 'riih' }, { ar: 'رُمّان', emoji: '🍎', iqra: 'rum-man' }] },
    { char: 'ز', name: { ar: 'زَاي', rumi: 'Zay' }, examples: [{ ar: 'زَهْرَة', emoji: '🌺', iqra: 'zah-rah' }, { ar: 'زَيْتُون', emoji: '🫒', iqra: 'zai-tuun' }, { ar: 'زَمَن', emoji: '⏳', iqra: 'za-man' }] },
    { char: 'س', name: { ar: 'سِين', rumi: 'Sin' }, examples: [{ ar: 'سَمَك', emoji: '🐟', iqra: 'sa-mak' }, { ar: 'سَلَام', emoji: '🕊️', iqra: 'sa-laam' }, { ar: 'سُكَّر', emoji: '🍭', iqra: 'suk-kar' }] },
    { char: 'ش', name: { ar: 'شِين', rumi: 'Syin' }, examples: [{ ar: 'شَمْس', emoji: '☀️', iqra: 'syams' }, { ar: 'شَاي', emoji: '🍵', iqra: 'syaay' }, { ar: 'شَرَاب', emoji: '🥤', iqra: 'sya-raab' }] },
    { char: 'ص', name: { ar: 'صَاد', rumi: 'Shod' }, examples: [{ ar: 'صَبْر', emoji: '🧘', iqra: 'shabr' }, { ar: 'صَوْت', emoji: '🔊', iqra: 'shawt' }, { ar: 'صَحْرَاء', emoji: '🏜️', iqra: 'sah-raa' }] },
    { char: 'ض', name: { ar: 'ضَاد', rumi: 'Dhod' }, examples: [{ ar: 'ضِفْدَع', emoji: '🐸', iqra: 'dhif-da' }, { ar: 'ضَوْء', emoji: '💡', iqra: 'dhau' }, { ar: 'ضِرْس', emoji: '🦷', iqra: 'dhir-s' }] },
    { char: 'ط', name: { ar: 'طَاء', rumi: 'Tho' }, examples: [{ ar: 'طَائِر', emoji: '🐦', iqra: 'thaa-ir' }, { ar: 'طُول', emoji: '📏', iqra: 'thuul' }, { ar: 'طِبّ', emoji: '💉', iqra: 'thibb' }] },
    { char: 'ظ', name: { ar: 'ظَاء', rumi: 'Zho' }, examples: [{ ar: 'ظِلّ', emoji: '🌳', iqra: 'zhill' }, { ar: 'ظُفْر', emoji: '💅', iqra: 'zhufr' }, { ar: 'ظَهْر', emoji: '🤝', iqra: 'zahr' }] },
    { char: 'ع', name: { ar: 'عَيْن', rumi: 'Ain' }, examples: [{ ar: 'عَيْن', emoji: '👁️', iqra: 'ayn' }, { ar: 'عَسَل', emoji: '🍯', iqra: 'a-sal' }, { ar: 'عِلْم', emoji: '📚', iqra: 'ilm' }] },
    { char: 'غ', name: { ar: 'غَيْن', rumi: 'Ghayn' }, examples: [{ ar: 'غَيْمَة', emoji: '☁️', iqra: 'ghay-mah' }, { ar: 'غَزَال', emoji: '🦌', iqra: 'gha-zaal' }, { ar: 'غُرُوب', emoji: '🌅', iqra: 'ghu-ruub' }] },
    { char: 'ف', name: { ar: 'فَاء', rumi: 'Fa' }, examples: [{ ar: 'فِيل', emoji: '🐘', iqra: 'fiil' }, { ar: 'فَرَاشَة', emoji: '🦋', iqra: 'fa-raa-shah' }, { ar: 'فَم', emoji: '👄', iqra: 'fam' }] },
    { char: 'ق', name: { ar: 'قَاف', rumi: 'Qaf' }, examples: [{ ar: 'قَمَر', emoji: '🌙', iqra: 'qa-mar' }, { ar: 'قَلَم', emoji: '✏️', iqra: 'qa-lam' }, { ar: 'قَرْن', emoji: '🦏', iqra: 'qarn' }] },
    { char: 'ك', name: { ar: 'كَاف', rumi: 'Kaf' }, examples: [{ ar: 'كَلْب', emoji: '🐶', iqra: 'kalb' }, { ar: 'كِتَاب', emoji: '📖', iqra: 'ki-taab' }, { ar: 'كَأْس', emoji: '🥤', iqra: 'kas' }] },
    { char: 'ل', name: { ar: 'لَام', rumi: 'Lam' }, examples: [{ ar: 'لَيْل', emoji: '🌙', iqra: 'layl' }, { ar: 'لَبَن', emoji: '🥛', iqra: 'la-ban' }, { ar: 'لَوْن', emoji: '🎨', iqra: 'lawn' }] },
    { char: 'م', name: { ar: 'مِيم', rumi: 'Mim' }, examples: [{ ar: 'مَاء', emoji: '💧', iqra: 'maa' }, { ar: 'مَدْرَسَة', emoji: '🏫', iqra: 'mad-ra-sah' }, { ar: 'مِكْنَسَة', emoji: '🧹', iqra: 'mik-na-sah' }] },
    { char: 'ن', name: { ar: 'نُون', rumi: 'Nun' }, examples: [{ ar: 'نُور', emoji: '✨', iqra: 'nuur' }, { ar: 'نَجْم', emoji: '⭐', iqra: 'najm' }, { ar: 'نَوْم', emoji: '😴', iqra: 'nawm' }] },
    { char: 'و', name: { ar: 'وَاو', rumi: 'Waw' }, examples: [{ ar: 'وَرْدَة', emoji: '🌹', iqra: 'war-dah' }, { ar: 'وَجْه', emoji: '😊', iqra: 'wajh' }, { ar: 'وَزْن', emoji: '⚖️', iqra: 'wazn' }] },
    { char: 'ه', name: { ar: 'هَاء', rumi: 'Ha' }, examples: [{ ar: 'هَدِيَّة', emoji: '🎁', iqra: 'ha-diy-yah' }, { ar: 'هَوَاء', emoji: '🌬️', iqra: 'ha-waa' }, { ar: 'هَاتِف', emoji: '📱', iqra: 'ha-tif' }] },
    { char: 'ي', name: { ar: 'يَاء', rumi: 'Ya' }, examples: [{ ar: 'يَد', emoji: '🖐️', iqra: 'yad' }, { ar: 'يَوْم', emoji: '📅', iqra: 'yawm' }, { ar: 'يَمِين', emoji: '👉', iqra: 'ya-min' }] },
    // 4 Huruf Tambahan Jawi Melayu
    { char: 'چ', name: { ar: 'چَا', rumi: 'Ca' }, examples: [{ ar: 'جَاوَنْ', emoji: '☕', iqra: 'ja-wan' }, { ar: 'جِجَق', emoji: '🦎', iqra: 'ji-jaq' }, { ar: 'جِنْتَا', emoji: '❤️', iqra: 'jin-ta' }] },
    { char: 'ڤ', name: { ar: 'ڤَا', rumi: 'Pa' }, examples: [{ ar: 'بَايَڠ', emoji: '☂️', iqra: 'ba-yang' }, { ar: 'بِنْسِل', emoji: '✏️', iqra: 'bin-sil' }, { ar: 'بَاسِير', emoji: '🏖️', iqra: 'ba-sir' }] },
    { char: 'ݢ', name: { ar: 'ݢَا', rumi: 'Ga' }, examples: [{ ar: 'جَاجَه', emoji: '🐘', iqra: 'ja-jah' }, { ar: 'جَارَم', emoji: '🧂', iqra: 'ja-ram' }, { ar: 'جَوْل', emoji: '⚽', iqra: 'jawl' }] },
    { char: 'ڠ', name: { ar: 'ڠَا', rumi: 'Nga' }, examples: [{ ar: 'نْجِيلُو', emoji: '🦷', iqra: 'nji-lu' }, { ar: 'نْجَارَڠ', emoji: '🍽️', iqra: 'nja-rang' }, { ar: 'نْجَاڠ', emoji: '👄', iqra: 'njang' }] }
];

// ================================================================
// FUNGSI BUNYI (Text-to-Speech) + Visualizer
// ================================================================
function speakText(text, lang = 'ar-SA', btnElement = null) {
    if (!window.speechSynthesis) {
        alert('Pelayar anda tidak sokong bunyi. Guna Chrome/Edge.');
        return;
    }
    window.speechSynthesis.cancel();

    let waveBox = null;
    if (btnElement) {
        const wrapper = btnElement.closest('.audio-wrapper') || btnElement.parentElement;
        if (wrapper) {
            waveBox = wrapper.querySelector('.wave-box');
        }
        btnElement.classList.add('playing');
        if (waveBox) waveBox.classList.add('active');
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1.1;

    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar'));
    if (arabicVoice) utterance.voice = arabicVoice;

    utterance.onend = function() {
        if (btnElement) {
            btnElement.classList.remove('playing');
            if (waveBox) waveBox.classList.remove('active');
        }
    };
    utterance.onerror = function() {
        if (btnElement) {
            btnElement.classList.remove('playing');
            if (waveBox) waveBox.classList.remove('active');
        }
    };

    window.speechSynthesis.speak(utterance);
}

// Pramuat suara
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// ================================================================
// FUNGSI TUTUP POPUP
// ================================================================
function closeModal(event) {
    const overlay = event.currentTarget.closest('.modal-overlay') || document.querySelector('.modal-overlay');
    if (overlay) overlay.remove();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
}

// ================================================================
// RENDER GRID JAWI
// ================================================================
function renderJawi() {
    const grid = document.getElementById('jawiGrid');
    if (!grid) {
        console.error('❌ #jawiGrid tidak dijumpai!');
        return;
    }

    const colors = [
        '#fce4d6', '#f8d7da', '#d4edda', '#cce5ff', '#fff3cd', '#f5c6cb',
        '#d6d8db', '#c3e6cb', '#b8d4e3', '#fdd0f2', '#d1ecf1', '#f8d7da',
        '#d4edda', '#cce5ff', '#fff3cd', '#f5c6cb', '#d6d8db', '#c3e6cb',
        '#b8d4e3', '#fdd0f2', '#d1ecf1', '#fce4d6', '#f8d7da', '#d4edda',
        '#cce5ff', '#fff3cd', '#f5c6cb', '#d6d8db', '#c3e6cb', '#b8d4e3',
        '#fdd0f2', '#d1ecf1'
    ];

    let html = '';
    jawiData.forEach((item, index) => {
        const bgColor = colors[index % colors.length];
        const firstExample = item.examples[0] || { ar: '', emoji: '🔤', iqra: '' };
        const delay = (index % 10) * 0.12;
        html += `
            <div class="jawi-card" data-char="${item.char}" style="background:${bgColor}; animation-delay: ${delay}s;">
                <div class="jawi-char">${item.char}</div>
                <div class="letter-name">${item.name.rumi}</div>
                <div class="sample-word">${firstExample.ar || ''}</div>
                <div class="audio-wrapper">
                    <button class="audio-btn" data-letter="${item.char}" data-name="${item.name.rumi}" data-ar-name="${item.name.ar}" title="Dengar sebutan ${item.name.rumi}">🔊</button>
                    <div class="wave-box">
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div class="click-hint">👆 klik kad</div>
            </div>
        `;
    });
    grid.innerHTML = html;

    // ----- Event: Butang audio -----
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const rumiName = this.dataset.name;
            speakText(rumiName, 'en-US', this);
            setTimeout(() => {
                const arName = this.dataset.arName;
                if (arName) speakText(arName, 'ar-SA', this);
            }, 700);
        });
    });

    // ----- Event: Klik kad -> Popup -----
    grid.addEventListener('click', function(e) {
        const card = e.target.closest('.jawi-card');
        if (!card) return;
        if (e.target.closest('.audio-btn') || e.target.closest('.wave-box')) return;

        const char = card.dataset.char;
        const item = jawiData.find(d => d.char === char);
        if (!item) {
            alert('Data tidak dijumpai.');
            return;
        }

        if (window.speechSynthesis) window.speechSynthesis.cancel();

        let modalHtml = `
            <div class="modal-overlay" onclick="closeModal(event)">
                <div class="modal-content" onclick="event.stopPropagation();">
                    <button class="modal-close" onclick="closeModal(event)">&times;</button>
                    <div class="modal-title">
                        <span class="big-char">${item.char}</span>
                        <span class="letter-name-big">${item.name.rumi}</span>
                        <button class="audio-btn-sm" onclick="speakText('${item.name.rumi}','en-US'); setTimeout(()=>speakText('${item.name.ar}','ar-SA'),700);">🔊</button>
                    </div>
                    <div class="example-grid">
        `;
        for (const ex of item.examples) {
            modalHtml += `
                <div class="example-item">
                    <div class="arabic-word">${ex.ar}</div>
                    <span class="emoji-big">${ex.emoji}</span>
                    <div class="iqra-text">📖 Iqra: ${ex.iqra}</div>
                    <button class="audio-btn-sm" onclick="speakText('${ex.ar}','ar-SA');">🔊</button>
                </div>
            `;
        }
        modalHtml += `
                    </div>
                </div>
            </div>
        `;

        const oldModal = document.querySelector('.modal-overlay');
        if (oldModal) oldModal.remove();
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    });
}

// ================================================================
// JALANKAN RENDER
// ================================================================
document.addEventListener('DOMContentLoaded', renderJawi);
