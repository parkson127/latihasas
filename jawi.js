// ================================================================
// jawi.js - Data Jawi + Popup Guna Modal Global + Makna
// ================================================================

// ===== DATA HURUF (32 huruf) =====
// Setiap contoh kini ada medan 'makna' (terjemahan Melayu)
const jawiData = [
    // 28 Huruf Arab
    { char: 'ا', name: { ar: 'أَلِف', rumi: 'Alif' }, examples: [
        { ar: 'أَرْنَب', emoji: '🐇', makna: 'Arnab' },
        { ar: 'أُمّ', emoji: '👩', makna: 'Ibu' },
        { ar: 'أَسَد', emoji: '🦁', makna: 'Singa' }
    ] },
    { char: 'ب', name: { ar: 'بَاء', rumi: 'Ba' }, examples: [
        { ar: 'بُولَة', emoji: '⚽', makna: 'Bola' },
        { ar: 'بِنْت', emoji: '👧', makna: 'Anak perempuan' },
        { ar: 'بَاب', emoji: '🚪', makna: 'Pintu' }
    ] },
    { char: 'ت', name: { ar: 'تَاء', rumi: 'Ta' }, examples: [
        { ar: 'تِلْمِيذ', emoji: '🧑‍🎓', makna: 'Murid' },
        { ar: 'تُمَام', emoji: '✅', makna: 'Sempurna' },
        { ar: 'تِين', emoji: '🍇', makna: 'Buah tin' }
    ] },
    { char: 'ث', name: { ar: 'ثَاء', rumi: 'Tsa' }, examples: [
        { ar: 'ثَعْلَب', emoji: '🦊', makna: 'Musang' },
        { ar: 'ثَمَر', emoji: '🍎', makna: 'Buah' },
        { ar: 'ثُوم', emoji: '🧄', makna: 'Bawang putih' }
    ] },
    { char: 'ج', name: { ar: 'جِيم', rumi: 'Jim' }, examples: [
        { ar: 'جَمَل', emoji: '🐫', makna: 'Unta' },
        { ar: 'جُبْن', emoji: '🧀', makna: 'Keju' },
        { ar: 'جَامِعَة', emoji: '🏫', makna: 'Universiti' }
    ] },
    { char: 'ح', name: { ar: 'حَاء', rumi: 'Ha' }, examples: [
        { ar: 'حَلِيب', emoji: '🥛', makna: 'Susu' },
        { ar: 'حُوت', emoji: '🐳', makna: 'Paus' },
        { ar: 'حَجّ', emoji: '🕋', makna: 'Haji' }
    ] },
    { char: 'خ', name: { ar: 'خَاء', rumi: 'Kho' }, examples: [
        { ar: 'خُبْز', emoji: '🍞', makna: 'Roti' },
        { ar: 'خَرُوف', emoji: '🐏', makna: 'Kambing biri-biri' },
        { ar: 'خِيَار', emoji: '🥒', makna: 'Timun' }
    ] },
    { char: 'د', name: { ar: 'دَال', rumi: 'Dal' }, examples: [
        { ar: 'دِيك', emoji: '🐓', makna: 'Ayam jantan' },
        { ar: 'دُبّ', emoji: '🐻', makna: 'Beruang' },
        { ar: 'دَوْر', emoji: '🔄', makna: 'Giliran' }
    ] },
    { char: 'ذ', name: { ar: 'ذَال', rumi: 'Dzal' }, examples: [
        { ar: 'ذَنَب', emoji: '🐕', makna: 'Ekor' },
        { ar: 'ذَهَب', emoji: '💛', makna: 'Emas' },
        { ar: 'ذِرَاع', emoji: '💪', makna: 'Lengan' }
    ] },
    { char: 'ر', name: { ar: 'رَاء', rumi: 'Ra' }, examples: [
        { ar: 'رَجُل', emoji: '🧑', makna: 'Lelaki' },
        { ar: 'رِيح', emoji: '💨', makna: 'Angin' },
        { ar: 'رُمّان', emoji: '🍎', makna: 'Delima' }
    ] },
    { char: 'ز', name: { ar: 'زَاي', rumi: 'Zay' }, examples: [
        { ar: 'زَهْرَة', emoji: '🌺', makna: 'Bunga' },
        { ar: 'زَيْتُون', emoji: '🫒', makna: 'Zaitun' },
        { ar: 'زَمَن', emoji: '⏳', makna: 'Masa' }
    ] },
    { char: 'س', name: { ar: 'سِين', rumi: 'Sin' }, examples: [
        { ar: 'سَمَك', emoji: '🐟', makna: 'Ikan' },
        { ar: 'سَلَام', emoji: '🕊️', makna: 'Damai' },
        { ar: 'سُكَّر', emoji: '🍭', makna: 'Gula' }
    ] },
    { char: 'ش', name: { ar: 'شِين', rumi: 'Syin' }, examples: [
        { ar: 'شَمْس', emoji: '☀️', makna: 'Matahari' },
        { ar: 'شَاي', emoji: '🍵', makna: 'Teh' },
        { ar: 'شَرَاب', emoji: '🥤', makna: 'Minuman' }
    ] },
    { char: 'ص', name: { ar: 'صَاد', rumi: 'Shod' }, examples: [
        { ar: 'صَبْر', emoji: '🧘', makna: 'Sabar' },
        { ar: 'صَوْت', emoji: '🔊', makna: 'Suara' },
        { ar: 'صَحْرَاء', emoji: '🏜️', makna: 'Padang pasir' }
    ] },
    { char: 'ض', name: { ar: 'ضَاد', rumi: 'Dhod' }, examples: [
        { ar: 'ضِفْدَع', emoji: '🐸', makna: 'Katak' },
        { ar: 'ضَوْء', emoji: '💡', makna: 'Cahaya' },
        { ar: 'ضِرْس', emoji: '🦷', makna: 'Geraham' }
    ] },
    { char: 'ط', name: { ar: 'طَاء', rumi: 'Tho' }, examples: [
        { ar: 'طَائِر', emoji: '🐦', makna: 'Burung' },
        { ar: 'طُول', emoji: '📏', makna: 'Panjang' },
        { ar: 'طِبّ', emoji: '💉', makna: 'Perubatan' }
    ] },
    { char: 'ظ', name: { ar: 'ظَاء', rumi: 'Zho' }, examples: [
        { ar: 'ظِلّ', emoji: '🌳', makna: 'Bayang-bayang' },
        { ar: 'ظُفْر', emoji: '💅', makna: 'Kuku' },
        { ar: 'ظَهْر', emoji: '🤝', makna: 'Belakang' }
    ] },
    { char: 'ع', name: { ar: 'عَيْن', rumi: 'Ain' }, examples: [
        { ar: 'عَيْن', emoji: '👁️', makna: 'Mata' },
        { ar: 'عَسَل', emoji: '🍯', makna: 'Madu' },
        { ar: 'عِلْم', emoji: '📚', makna: 'Ilmu' }
    ] },
    { char: 'غ', name: { ar: 'غَيْن', rumi: 'Ghayn' }, examples: [
        { ar: 'غَيْمَة', emoji: '☁️', makna: 'Awan' },
        { ar: 'غَزَال', emoji: '🦌', makna: 'Kijang' },
        { ar: 'غُرُوب', emoji: '🌅', makna: 'Senja' }
    ] },
    { char: 'ف', name: { ar: 'فَاء', rumi: 'Fa' }, examples: [
        { ar: 'فِيل', emoji: '🐘', makna: 'Gajah' },
        { ar: 'فَرَاشَة', emoji: '🦋', makna: 'Rama-rama' },
        { ar: 'فَم', emoji: '👄', makna: 'Mulut' }
    ] },
    { char: 'ق', name: { ar: 'قَاف', rumi: 'Qaf' }, examples: [
        { ar: 'قَمَر', emoji: '🌙', makna: 'Bulan' },
        { ar: 'قَلَم', emoji: '✏️', makna: 'Pen' },
        { ar: 'قَرْن', emoji: '🦏', makna: 'Tanduk' }
    ] },
    { char: 'ك', name: { ar: 'كَاف', rumi: 'Kaf' }, examples: [
        { ar: 'كَلْب', emoji: '🐶', makna: 'Anjing' },
        { ar: 'كِتَاب', emoji: '📖', makna: 'Buku' },
        { ar: 'كَأْس', emoji: '🥤', makna: 'Cawan' }
    ] },
    { char: 'ل', name: { ar: 'لَام', rumi: 'Lam' }, examples: [
        { ar: 'لَيْل', emoji: '🌙', makna: 'Malam' },
        { ar: 'لَبَن', emoji: '🥛', makna: 'Susu' },
        { ar: 'لَوْن', emoji: '🎨', makna: 'Warna' }
    ] },
    { char: 'م', name: { ar: 'مِيم', rumi: 'Mim' }, examples: [
        { ar: 'مَاء', emoji: '💧', makna: 'Air' },
        { ar: 'مَدْرَسَة', emoji: '🏫', makna: 'Sekolah' },
        { ar: 'مِكْنَسَة', emoji: '🧹', makna: 'Penyapu' }
    ] },
    { char: 'ن', name: { ar: 'نُون', rumi: 'Nun' }, examples: [
        { ar: 'نُور', emoji: '✨', makna: 'Cahaya' },
        { ar: 'نَجْم', emoji: '⭐', makna: 'Bintang' },
        { ar: 'نَوْم', emoji: '😴', makna: 'Tidur' }
    ] },
    { char: 'و', name: { ar: 'وَاو', rumi: 'Waw' }, examples: [
        { ar: 'وَرْدَة', emoji: '🌹', makna: 'Bunga ros' },
        { ar: 'وَجْه', emoji: '😊', makna: 'Muka' },
        { ar: 'وَزْن', emoji: '⚖️', makna: 'Berat' }
    ] },
    { char: 'ه', name: { ar: 'هَاء', rumi: 'Ha' }, examples: [
        { ar: 'هَدِيَّة', emoji: '🎁', makna: 'Hadiah' },
        { ar: 'هَوَاء', emoji: '🌬️', makna: 'Udara' },
        { ar: 'هَاتِف', emoji: '📱', makna: 'Telefon' }
    ] },
    { char: 'ي', name: { ar: 'يَاء', rumi: 'Ya' }, examples: [
        { ar: 'يَد', emoji: '🖐️', makna: 'Tangan' },
        { ar: 'يَوْم', emoji: '📅', makna: 'Hari' },
        { ar: 'يَمِين', emoji: '👉', makna: 'Kanan' }
    ] },
    // 4 Huruf Tambahan Jawi Melayu
    { char: 'چ', name: { ar: 'چَا', rumi: 'Ca' }, examples: [
        { ar: 'جَاوَنْ', emoji: '☕', makna: 'Cawan' },
        { ar: 'جِجَق', emoji: '🦎', makna: 'Cicak' },
        { ar: 'جِنْتَا', emoji: '❤️', makna: 'Cinta' }
    ] },
    { char: 'ڤ', name: { ar: 'ڤَا', rumi: 'Pa' }, examples: [
        { ar: 'بَايَڠ', emoji: '☂️', makna: 'Payung' },
        { ar: 'بِنْسِل', emoji: '✏️', makna: 'Pensil' },
        { ar: 'بَاسِير', emoji: '🏖️', makna: 'Pasir' }
    ] },
    { char: 'ݢ', name: { ar: 'ݢَا', rumi: 'Ga' }, examples: [
        { ar: 'جَاجَه', emoji: '🐘', makna: 'Gajah' },
        { ar: 'جَارَم', emoji: '🧂', makna: 'Garam' },
        { ar: 'جَوْل', emoji: '⚽', makna: 'Gol' }
    ] },
    { char: 'ڠ', name: { ar: 'ڠَا', rumi: 'Nga' }, examples: [
        { ar: 'نْجِيلُو', emoji: '🦷', makna: 'Ngilu' },
        { ar: 'نْجَارَڠ', emoji: '🍽️', makna: 'Lapar' },
        { ar: 'نْجَاڠ', emoji: '👄', makna: 'Nganga' }
    ] }
];

// ================================================================
// FUNGSI BUNYI (Text-to-Speech)
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
        if (wrapper) waveBox = wrapper.querySelector('.wave-box');
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

    utterance.onend = () => {
        if (btnElement) {
            btnElement.classList.remove('playing');
            if (waveBox) waveBox.classList.remove('active');
        }
    };
    utterance.onerror = () => {
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
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// ================================================================
// GUNAKAN MODAL GLOBAL DARI INDEX.HTML
// ================================================================
function showGlobalModal(title, contentHtml) {
    const overlay = document.getElementById('modalOverlay');
    const contentBox = document.getElementById('modalContent');
    if (!overlay || !contentBox) {
        console.warn('Modal global tidak dijumpai!');
        return;
    }
    let html = `<div class="modal-title">${title}</div>`;
    html += `<div class="modal-examples">${contentHtml}</div>`;
    contentBox.innerHTML = html;
    overlay.classList.add('active');
}

// Fungsi tutup modal global (dari index.html sudah ada, kita guna semula)
// Pastikan index.html ada event close untuk #modalClose dan #modalOverlay

// ================================================================
// RENDER GRID JAWI (GUNAKAN MODAL GLOBAL)
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
        const firstExample = item.examples[0] || { ar: '', emoji: '🔤', makna: '' };
        const delay = (index % 10) * 0.12;
        html += `
            <div class="jawi-card" data-char="${item.char}" style="background:${bgColor}; animation-delay: ${delay}s;">
                <div class="jawi-char">${item.char}</div>
                <div class="letter-name">${item.name.rumi}</div>
                <div class="sample-word">${firstExample.ar || ''}</div>
                <div class="audio-wrapper">
                    <button class="audio-btn" data-letter="${item.char}" data-name="${item.name.rumi}" data-ar-name="${item.name.ar}" title="Dengar sebutan ${item.name.rumi}">🔊</button>
                    <div class="wave-box"><span></span><span></span><span></span></div>
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

    // ----- Event: Klik kad -> Popup guna modal global -----
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

        // Bina kandungan untuk modal global
        let contentHtml = '';
        for (const ex of item.examples) {
            contentHtml += `
                <div class="example-item" style="background:#fcf7f0;border-radius:35px;padding:16px;text-align:center;border:2px solid #efe4d6;">
                    <div style="font-size:2.8rem;font-family:'Traditional Arabic','Amiri',serif;">${ex.ar}</div>
                    <div style="font-size:3.2rem;margin:6px 0;">${ex.emoji}</div>
                    <div style="font-size:1.4rem;font-weight:bold;color:#4a6a3a;background:#e6f0e6;border-radius:30px;padding:2px 14px;display:inline-block;margin-top:6px;">
                        📖 Makna: ${ex.makna}
                    </div>
                    <button class="audio-btn-sm" onclick="speakText('${ex.ar}','ar-SA');" style="background:#ffb347;border:none;border-radius:50%;width:44px;height:44px;font-size:1.8rem;cursor:pointer;box-shadow:0 4px 0 #c77d1a;display:inline-flex;align-items:center;justify-content:center;margin-top:8px;">🔊</button>
                </div>
            `;
        }

        // Tajuk modal
        const title = `${item.char} - ${item.name.rumi}`;
        showGlobalModal(title, contentHtml);
    });
}

// ================================================================
// JALANKAN RENDER
// ================================================================
document.addEventListener('DOMContentLoaded', renderJawi);
