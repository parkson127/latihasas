// ================================================================
// DATA – Ubah suai di sini untuk tambah/ubah contoh
// ================================================================

// ---------- Alphabet: setiap huruf ada 4 Inggeris + 4 Melayu + emoji ----------
const alphabetData = {
    A: { en: ['Apple', 'Ant', 'Airplane', 'Alligator'], ms: ['Api', 'Angsa', 'Awan', 'Alpukat'] },
    B: { en: ['Ball', 'Banana', 'Bird', 'Boat'], ms: ['Bola', 'Pisang', 'Burung', 'Bot'] },
    C: { en: ['Cat', 'Car', 'Cake', 'Cow'], ms: ['Kucing', 'Kereta', 'Kek', 'Lembu'] },
    D: { en: ['Dog', 'Dolphin', 'Door', 'Duck'], ms: ['Anjing', 'Lumba-lumba', 'Pintu', 'Itik'] },
    E: { en: ['Elephant', 'Egg', 'Eye', 'Eagle'], ms: ['Gajah', 'Telur', 'Mata', 'Helang'] },
    F: { en: ['Fish', 'Flower', 'Fire', 'Fox'], ms: ['Ikan', 'Bunga', 'Api', 'Musang'] },
    G: { en: ['Guitar', 'Giraffe', 'Grape', 'Goat'], ms: ['Gitar', 'Zirafah', 'Anggur', 'Kambing'] },
    H: { en: ['House', 'Horse', 'Honey', 'Hippo'], ms: ['Rumah', 'Kuda', 'Madu', 'Badak'] },
    I: { en: ['Ice cream', 'Island', 'Iguana', 'Ice'], ms: ['Ais krim', 'Pulau', 'Biawak', 'Ais'] },
    J: { en: ['Juice', 'Jellyfish', 'Jacket', 'Jam'], ms: ['Jus', 'Ubur-ubur', 'Jaket', 'Jem'] },
    K: { en: ['Kite', 'Koala', 'Key', 'King'], ms: ['Layang-layang', 'Koala', 'Kunci', 'Raja'] },
    L: { en: ['Lion', 'Lemon', 'Ladybug', 'Moon'], ms: ['Singa', 'Lemon', 'Kumbang', 'Bulan'] },
    M: { en: ['Monkey', 'Mushroom', 'Car', 'Mouse'], ms: ['Monyet', 'Cendawan', 'Kereta', 'Tikus'] },
    N: { en: ['Nest', 'Nut', 'Owl', 'Needle'], ms: ['Sarang', 'Kacang', 'Burung hantu', 'Jarum'] },
    O: { en: ['Octopus', 'Orange', 'Owl', 'Ball'], ms: ['Sotong', 'Oren', 'Burung hantu', 'Bola'] },
    P: { en: ['Penguin', 'Pizza', 'Parrot', 'Pencil'], ms: ['Penguin', 'Pizza', 'Bebek', 'Pensil'] },
    Q: { en: ['Queen', 'Quail', 'Question', 'Quilt'], ms: ['Ratu', 'Burung puyuh', 'Soalan', 'Selimut'] },
    R: { en: ['Rabbit', 'Rainbow', 'Rocket', 'Rat'], ms: ['Arnab', 'Pelangi', 'Roket', 'Tikus'] },
    S: { en: ['Snake', 'Star', 'Sea', 'Sun'], ms: ['Ular', 'Bintang', 'Laut', 'Matahari'] },
    T: { en: ['Tiger', 'Tomato', 'Train', 'Tree'], ms: ['Harimau', 'Tomato', 'Kereta api', 'Pokok'] },
    U: { en: ['Umbrella', 'Unicorn', 'Up', 'Utensil'], ms: ['Payung', 'Unikorn', 'Naik', 'Alat makan'] },
    V: { en: ['Volleyball', 'Violin', 'Volcano', 'Van'], ms: ['Bola tampar', 'Biola', 'Gunung berapi', 'Van'] },
    W: { en: ['Whale', 'Water', 'Wagon', 'Watermelon'], ms: ['Paus', 'Air', 'Kereta kuda', 'Tembikai'] },
    X: { en: ['X-ray', 'Xylophone', 'Xenops', 'Xerus'], ms: ['X-ray', 'Gambang', 'Burung xenops', 'Tupai'] },
    Y: { en: ['Yarn', 'Yellow', 'Yogurt', 'Yak'], ms: ['Benang', 'Kuning', 'Yogurt', 'Yak'] },
    Z: { en: ['Zebra', 'Zigzag', 'Zipper', 'Zoo'], ms: ['Zebra', 'Zig-zag', 'Zip', 'Zoo'] }
};

// ---------- Jawi: 28 huruf, setiap huruf ada 3-4 contoh Melayu (dengan emoji) ----------
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

// ---------- Tajwid ----------
const tajwidData = [
    { rule: 'Izhar Halqi', arab: 'أَخْرَجَ', example: 'مِنْ أَجْلِ', meaning: 'jelas sebutan' },
    { rule: 'Idgham Bighunnah', arab: 'يَغْنَمُ', example: 'مِنْ نَعِيمٍ', meaning: 'dengung' },
    { rule: 'Idgham Bilaghunnah', arab: 'لاَ غُنَّةَ', example: 'مِنْ لَدُنْ', meaning: 'tanpa dengung' },
    { rule: 'Iqlab', arab: 'إِقْلَاب', example: 'مِنْ بَعْدِ', meaning: 'tukar jadi mim' },
    { rule: 'Ikhfa Haqiqi', arab: 'إِخْفَاء', example: 'مِنْ تَحْتِ', meaning: 'samar-samar' }
];

// ---------- Arabic daily activities (lebih banyak) ----------
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

// ---------- Suku Kata: data untuk semua konsonan+vokal ----------
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
const vowels = ['a','e','i','o','u'];
// Peta perkataan contoh untuk setiap konsonan (3-4 perkataan)
const cvExampleMap = {
    b: ['bola', 'bekas', 'bintang', 'botol', 'buku'],
    c: ['cawan', 'cek', 'cili', 'coklat', 'cuka'],
    d: ['durian', 'dewan', 'dinding', 'dompet', 'duit'],
    f: ['feri', 'fesyen', 'filem', 'foto', 'futur'],
    g: ['gajah', 'gelas', 'gigi', 'goreng', 'gula'],
    h: ['hari', 'hewan', 'hijau', 'hotel', 'hujan'],
    j: ['jatuh', 'jeruk', 'jiran', 'jodoh', 'juta'],
    k: ['kambing', 'kecil', 'kiri', 'kotak', 'kucing'],
    l: ['lapan', 'lebar', 'limau', 'lompat', 'lukis'],
    m: ['makan', 'meja', 'mimpi', 'motor', 'mulut'],
    n: ['nasi', 'negeri', 'nipis', 'nombor', 'nuri'],
    p: ['pagi', 'pecah', 'piring', 'potong', 'pulau'],
    q: ['qari', 'qasidah', 'qiam', 'quran', 'qutub'],
    r: ['rama', 'rehat', 'ringan', 'robot', 'ruang'],
    s: ['sarang', 'sekolah', 'sikat', 'sopan', 'surat'],
    t: ['tangan', 'tebal', 'tiga', 'tomat', 'tulang'],
    v: ['vaksin', 'van', 'vila', 'vokal', 'voli'],
    w: ['warna', 'wedding', 'wira', 'wol', 'wujud'],
    x: ['xenon', 'xilem', 'xilofon', 'x-ray'],
    y: ['yakin', 'yatim', 'yoga', 'yoyo', 'yuran'],
    z: ['zaman', 'zebra', 'ziarah', 'zombi', 'zon']
};

// Hasilkan cvData (senarai semua suku kata)
function buildCVData() {
    const list = [];
    for (const c of consonants) {
        const words = cvExampleMap[c] || ['contoh'];
        for (let i = 0; i < vowels.length; i++) {
            const v = vowels[i];
            const syl = c + v;
            // pilih 3 perkataan berdasarkan indeks
            const w1 = words[i % words.length];
            const w2 = words[(i+1) % words.length];
            const w3 = words[(i+2) % words.length];
            list.push({ syl, examples: ['🌟','⭐','🌈'], words: [w1, w2, w3] });
        }
    }
    return list;
}
const cvData = buildCVData();

// ---------- Cerita pendek untuk aktiviti membaca ----------
const shortStories = [
    { title: 'Kucing dan Bola', text: 'Kucing suka <span class="highlight">bola</span>. Dia main <span class="highlight">bola</span> di <span class="highlight">rumah</span>. Bola itu <span class="highlight">merah</span> dan <span class="highlight">bulat</span>. Kucing <span class="highlight">gembira</span>.' },
    { title: 'Pagi di Sekolah', text: 'Pagi ini <span class="highlight">cerah</span>. Saya <span class="highlight">bangun</span> awal. Saya <span class="highlight">makan</span> nasi. Saya <span class="highlight">pergi</span> ke sekolah. Saya <span class="highlight">belajar</span> dan <span class="highlight">bermain</span>.' },
    { title: 'Buah-buahan', text: 'Saya suka <span class="highlight">epal</span> dan <span class="highlight">pisang</span>. <span class="highlight">Epal</span> merah dan <span class="highlight">pisang</span> kuning. Saya <span class="highlight">makan</span> buah setiap <span class="highlight">hari</span>. Buah <span class="highlight">sedap</span> dan <span class="highlight">sihat</span>.' }
];

// ================================================================
// FUNGSI BANTU
// ================================================================

function getDateSeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function seededRandom(seed) {
    let s = seed;
    return function() {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

function shuffleArray(arr, seed) {
    const rng = seededRandom(seed);
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ================================================================
// MODAL SYSTEM
// ================================================================

const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(html) {
    modalContent.innerHTML = html;
    modalOverlay.classList.add('active');
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) closeModal();
});

// ================================================================
// RENDER: ALPHABET
// ================================================================

function renderAlphabet() {
    const grid = document.getElementById('alphabetGrid');
    let html = '';
    for (const [letter, data] of Object.entries(alphabetData)) {
        // ambil emoji pertama dari setiap contoh (gunakan emoji generik)
        const emojis = ['🍎','🐜','🚀','🐊']; // fallback
        html += `<div class="card" data-letter="${letter}">
            <div class="big">${letter}</div>
            <div class="emoji-row">${emojis.slice(0,4).join('')}</div>
            <div class="label">Klik untuk contoh</div>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#alphabetGrid .card').forEach(card => {
        card.addEventListener('click', function() {
            const letter = this.dataset.letter;
            const data = alphabetData[letter];
            if (!data) return;
            let html = `<div class="modal-title">🔤 Huruf ${letter}</div>`;
            html += `<div class="modal-examples">`;
            // English
            html += `<div style="background:#e8f0fe; border-radius:30px; padding:15px;">
                <h3 style="font-size:1.6rem; color:#1a4a6a;">🇬🇧 English</h3>`;
            for (const word of data.en) {
                html += `<div class="example-item"><span class="en">${word}</span></div>`;
            }
            html += `</div>`;
            // Malay
            html += `<div style="background:#e8f5e8; border-radius:30px; padding:15px;">
                <h3 style="font-size:1.6rem; color:#2a6a3a;">🇲🇾 Melayu</h3>`;
            for (const word of data.ms) {
                html += `<div class="example-item"><span class="ms">${word}</span></div>`;
            }
            html += `</div></div>`;
            openModal(html);
        });
    });
}

// ================================================================
// RENDER: SUKU KATA + AKTIVITI
// ================================================================

function renderCV() {
    const grid = document.getElementById('cvGrid');
    let html = '';
    for (let i = 0; i < cvData.length; i++) {
        const item = cvData[i];
        const colorClass = 'color-' + ((i % 5) + 1);
        html += `<div class="cv-card ${colorClass}" data-syl="${item.syl}" data-idx="${i}">
            <div class="cv-syllable">${item.syl}</div>
            <div class="cv-examples">${item.examples.join(' ')}</div>
            <div style="font-size:1rem; color:#3a6a5a;">${item.words.join(' · ')}</div>
            <button class="sound-btn" data-syl="${item.syl}">🔊 Bunyi</button>
        </div>`;
    }
    grid.innerHTML = html;

    // Klik kad -> modal dengan lebih banyak contoh dan ayat
    document.querySelectorAll('#cvGrid .cv-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('sound-btn')) return;
            const idx = parseInt(this.dataset.idx);
            const item = cvData[idx];
            if (!item) return;
            let html = `<div class="modal-title">🔡 Suku Kata "${item.syl}"</div>`;
            html += `<div style="text-align:center; font-size:3rem; margin:10px 0;">${item.examples.join(' ')}</div>`;
            html += `<div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">`;
            html += `<div style="background:#f0f8ff; border-radius:30px; padding:15px;"><h3>📝 Perkataan</h3>`;
            for (const w of item.words) {
                html += `<div style="font-size:1.6rem; padding:6px;">${w}</div>`;
            }
            html += `</div>`;
            html += `<div style="background:#f0f8f0; border-radius:30px; padding:15px;"><h3>🎯 Contoh Ayat</h3>`;
            // ayat unik untuk setiap perkataan
            const sentences = item.words.map(w => `Saya suka ${w}.`);
            for (const s of sentences) {
                html += `<div style="font-size:1.4rem; padding:6px;">${s}</div>`;
            }
            html += `</div></div>`;
            openModal(html);
        });
    });

    // Butang bunyi
    document.querySelectorAll('#cvGrid .sound-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const syl = this.dataset.syl;
            speak(syl);
        });
    });

    // Render aktiviti suku kata
    renderCVActivities();
}

// Fungsi sebutan (Speech Synthesis)
function speak(text) {
    if (!window.speechSynthesis) {
        alert('Maaf, penyemak imbas anda tidak sokong suara.');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ms-MY';
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
}

// Aktiviti suku kata: isi tempat kosong, mengeja, membaca cerita
function renderCVActivities() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    // 1. Isi tempat kosong (pilih suku kata yang hilang)
    const fillBlankQuestions = [
        { word: 'b_la', missing: 'bo', answer: 'bola' },
        { word: 'k_cing', missing: 'cu', answer: 'kucing' },
        { word: 's_rah', missing: 'ku', answer: 'sukah' }, // not real but for demo
        { word: '_kek', missing: 'be', answer: 'bekek' }
    ];
    // kita pilih 3 secara rawak berdasarkan tarikh
    const seed = getDateSeed();
    const shuffled = shuffleArray(fillBlankQuestions, seed);
    const selected = shuffled.slice(0, 3);

    let html = '';
    // Bahagian 1: Isi tempat kosong
    html += `<div class="cv-activity-card">
        <h3>✏️ Isi Tempat Kosong</h3>`;
    for (let i = 0; i < selected.length; i++) {
        const q = selected[i];
        const displayWord = q.word.replace('_', '___');
        html += `<div style="margin:12px 0; font-size:1.8rem;">
            <span>${displayWord}</span>
            <input type="text" class="answer-input" data-answer="${q.answer}" placeholder="?" style="width:100px; font-size:1.6rem; border-radius:30px; border:3px solid #b8c8b8; padding:4px 12px; text-align:center; font-family:'Patrick Hand',cursive;">
            <button class="check-fill" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:4px 16px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="fill-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div>`;

    // 2. Mengeja (dengar sebutan dan taip)
    const spellingWords = ['bola', 'kucing', 'rumah', 'buku'];
    const shuffledSpell = shuffleArray(spellingWords, seed + 1);
    const spell = shuffledSpell.slice(0, 2);
    html += `<div class="cv-activity-card">
        <h3>🔊 Mengeja</h3>
        <p style="font-size:1.2rem;">Klik butang dengar, kemudian taip ejaan.</p>`;
    for (let i = 0; i < spell.length; i++) {
        const w = spell[i];
        html += `<div style="margin:12px 0; font-size:1.8rem;">
            <button class="speak-spell" data-word="${w}" style="background:#f7d4a0; border:none; border-radius:40px; padding:4px 16px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">🔊 Dengar</button>
            <span style="margin:0 10px;">${w}</span>
            <input type="text" class="spell-input" data-word="${w}" placeholder="Tulis..." style="width:120px; font-size:1.6rem; border-radius:30px; border:3px solid #b8c8b8; padding:4px 12px; text-align:center; font-family:'Patrick Hand',cursive;">
            <button class="check-spell" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:4px 16px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="spell-feedback" style="margin-left:8px;"></span>
        </div>`;
    }
    html += `</div>`;

    // 3. Membaca cerita
    const story = shortStories[Math.floor(seed % shortStories.length)];
    html += `<div class="cv-activity-card">
        <h3>📖 Membaca Cerita</h3>
        <div class="story-text">${story.text}</div>
        <p style="margin-top:8px; font-size:1.2rem; color:#5a5a3a;">👆 Cuba baca dengan sebutan yang betul.</p>
    </div>`;

    container.innerHTML = html;

    // Event listeners untuk aktiviti
    // Semak isi tempat kosong
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

    // Dengar perkataan untuk mengeja
    document.querySelectorAll('.speak-spell').forEach(btn => {
        btn.addEventListener('click', function() {
            const word = this.dataset.word;
            speak(word);
        });
    });

    // Semak ejaan
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

// ================================================================
// RENDER: JAWI & TAJWID
// ================================================================

function renderJawi() {
    const grid = document.getElementById('jawiGrid');
    let html = '';
    for (const item of jawiData) {
        // tampilkan 3 contoh pertama
        const ex = item.examples.slice(0,3);
        const exHtml = ex.map(e => `<span style="font-size:1.8rem; font-family:'Traditional Arabic',serif; display:inline-block; margin:0 6px;">${e.ms}</span>`).join('');
        html += `<div class="jawi-card" data-char="${item.char}">
            <div class="jawi-char">${item.char}</div>
            <div style="font-size:1.4rem; color:#3a5a3a;">${exHtml}</div>
            <div class="jawi-meaning">Klik untuk lebih</div>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#jawiGrid .jawi-card').forEach(card => {
        card.addEventListener('click', function() {
            const char = this.dataset.char;
            const item = jawiData.find(d => d.char === char);
            if (!item) return;
            let html = `<div class="modal-title">🕌 Huruf Jawi: ${item.char}</div>`;
            html += `<div style="font-size:4rem; text-align:center; font-family:'Traditional Arabic',serif;">${item.char}</div>`;
            html += `<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:15px;">`;
            // Tunjukkan semua contoh
            for (const ex of item.examples) {
                html += `<div style="background:#f8f0e8; border-radius:30px; padding:12px; text-align:center;">
                    <div style="font-size:2.4rem; font-family:'Traditional Arabic',serif;">${ex.ms}</div>
                    <div style="font-size:1.6rem;">${ex.ar}</div>
                    <div style="font-size:2.6rem;">${ex.emoji}</div>
                </div>`;
            }
            html += `</div>`;
            openModal(html);
        });
    });

    // Tajwid
    const tajwidGrid = document.getElementById('tajwidGrid');
    let tajHtml = '';
    for (const t of tajwidData) {
        tajHtml += `<div class="tajwid-card">
            <div class="tajwid-ar">${t.arab}</div>
            <div class="tajwid-rule">${t.rule}</div>
            <div class="tajwid-ex">${t.example} — ${t.meaning}</div>
        </div>`;
    }
    tajwidGrid.innerHTML = tajHtml;
}

// ================================================================
// RENDER: ARABIC ACTIVITIES
// ================================================================

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
            let html = `<div class="modal-title">🌙 ${item.ms}</div>`;
            html += `<div style="font-size:5rem; text-align:center;">${item.emoji}</div>`;
            html += `<div style="font-size:3.2rem; text-align:center; font-family:'Traditional Arabic',serif;">${item.ar}</div>`;
            html += `<div style="font-size:1.8rem; text-align:center;">Bahasa Melayu: ${item.ms}</div>`;
            html += `<div style="text-align:center; margin-top:10px; font-size:1.4rem;">Contoh: Saya ${item.ms} setiap hari.</div>`;
            openModal(html);
        });
    });
}

// ================================================================
// MATH ENGINE
// ================================================================

let mathState = {
    operation: 'add',
    questions: [],
    score: 0,
    total: 20,
};

function generateMathQuestions(op, seed) {
    const rng = seededRandom(seed);
    const qs = [];
    const maxNum = op === 'mul' ? 5 : 10;
    for (let i = 0; i < 20; i++) {
        let a, b, answer, symbol;
        switch (op) {
            case 'add':
                a = Math.floor(rng() * maxNum) + 1;
                b = Math.floor(rng() * maxNum) + 1;
                answer = a + b;
                symbol = '+';
                break;
            case 'sub':
                a = Math.floor(rng() * maxNum) + 1;
                b = Math.floor(rng() * a) + 1;
                answer = a - b;
                symbol = '−';
                break;
            case 'mul':
                a = Math.floor(rng() * 5) + 1;
                b = Math.floor(rng() * 5) + 1;
                answer = a * b;
                symbol = '×';
                break;
        }
        qs.push({ a, b, answer, symbol, userAnswer: null, correct: null });
    }
    return qs;
}

function renderMath() {
    const grid = document.getElementById('mathGrid');
    const scoreEl = document.getElementById('mathScore');
    const qs = mathState.questions;

    let html = '';
    for (let i = 0; i < qs.length; i++) {
        const q = qs[i];
        const isChecked = q.correct !== null;
        const resultClass = isChecked ? (q.correct ? 'math-result' : 'math-result wrong') : 'math-result';
        const resultText = isChecked ? (q.correct ? '✅' : '❌') : '?';
        const val = q.userAnswer !== null ? q.userAnswer : '';
        html += `<div class="math-item" data-idx="${i}">
            <div>${q.a} ${q.symbol} ${q.b} = </div>
            <div style="display:flex; align-items:center; justify-content:center; gap:6px; flex-wrap:wrap;">
                <input class="math-answer-input" type="number" id="mathInput_${i}" value="${val}" ${isChecked ? 'disabled' : ''} placeholder="?">
                <span class="${resultClass}">${resultText}</span>
            </div>
        </div>`;
    }
    grid.innerHTML = html;

    const total = qs.length;
    const correct = qs.filter(q => q.correct === true).length;
    mathState.score = correct;
    mathState.total = total;
    scoreEl.textContent = `⭐ Skor: ${correct} / ${total}`;

    // Event listeners
    document.querySelectorAll('#mathGrid .math-item').forEach((item, idx) => {
        const q = qs[idx];
        const inp = document.getElementById(`mathInput_${idx}`);
        if (inp && !inp.disabled) {
            inp.addEventListener('input', function() {
                const val = this.value.trim();
                if (val === '') q.userAnswer = null;
                else { const num = Number(val); if (!isNaN(num)) q.userAnswer = num; }
            });
            inp.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') checkSingleMath(idx);
            });
        }
        // Klik pada item (bukan input) untuk modal
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'INPUT') return;
            const q = mathState.questions[idx];
            if (q.correct !== null) {
                alert('Soalan ini sudah dijawab. Tekan "Soalan Baru" untuk cuba lagi.');
                return;
            }
            const currentVal = q.userAnswer !== null ? q.userAnswer : '';
            let modalHtml = `
                <div class="modal-title">🧮 Soalan ${idx+1}</div>
                <div style="font-size:4rem; text-align:center; margin:20px 0;">
                    ${q.a} ${q.symbol} ${q.b} = ?
                </div>
                <div style="text-align:center;">
                    <input type="number" id="modalMathInput" value="${currentVal}" style="font-size:3rem; padding:15px; width:200px; border-radius:40px; border:4px solid #b8d4e8; text-align:center; font-family:'Patrick Hand',cursive;">
                    <br><br>
                    <button id="modalMathSubmit" class="math-check-btn" style="font-size:1.8rem; padding:12px 40px;">✅ Jawab</button>
                </div>
            `;
            openModal(modalHtml);
            setTimeout(() => {
                const inpModal = document.getElementById('modalMathInput');
                if (inpModal) inpModal.focus();
            }, 100);
            document.getElementById('modalMathSubmit').addEventListener('click', function() {
                const inpVal = document.getElementById('modalMathInput').value.trim();
                if (inpVal === '') { alert('Sila masukkan jawapan.'); return; }
                const num = Number(inpVal);
                if (isNaN(num)) { alert('Sila masukkan nombor.'); return; }
                q.userAnswer = num;
                q.correct = (num === q.answer);
                closeModal();
                renderMath();
                updateScoreOnly();
            });
        });
    });
}

function checkSingleMath(idx) {
    const q = mathState.questions[idx];
    if (q.correct !== null) return;
    if (q.userAnswer === null) { alert('✏️ Masukkan jawapan dulu!'); return; }
    q.correct = (q.userAnswer === q.answer);
    renderMath();
    updateScoreOnly();
}

function checkAllMath() {
    let allFilled = true;
    for (let i = 0; i < mathState.questions.length; i++) {
        const q = mathState.questions[i];
        if (q.correct !== null) continue;
        if (q.userAnswer === null) { allFilled = false; break; }
        q.correct = (q.userAnswer === q.answer);
    }
    if (!allFilled) {
        alert('📝 Sila jawab semua soalan dahulu!');
        return;
    }
    renderMath();
    updateScoreOnly();
    const correct = mathState.questions.filter(q => q.correct === true).length;
    const total = mathState.questions.length;
    if (correct === total) {
        setTimeout(() => alert('🎉 Tahniah! Semua jawapan betul! Hebat! 🌟'), 200);
    } else {
        const wrong = total - correct;
        setTimeout(() => alert(`📊 ${correct} betul, ${wrong} salah. Cuba lagi! 💪`), 200);
    }
}

function updateScoreOnly() {
    const scoreEl = document.getElementById('mathScore');
    const correct = mathState.questions.filter(q => q.correct === true).length;
    const total = mathState.questions.length;
    scoreEl.textContent = `⭐ Skor: ${correct} / ${total}`;
}

function resetMath(operation) {
    const seed = getDateSeed() + (operation === 'add' ? 1000 : operation === 'sub' ? 2000 : 3000);
    mathState.operation = operation;
    mathState.questions = generateMathQuestions(operation, seed);
    for (const q of mathState.questions) { q.userAnswer = null; q.correct = null; }
    renderMath();
    document.querySelectorAll('.math-oper-tabs button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mathop === operation);
    });
}

// ================================================================
// INIT
// ================================================================

function init() {
    renderAlphabet();
    renderCV();
    renderJawi();
    renderArabic();

    // Math default
    const seed = getDateSeed();
    mathState.operation = 'add';
    mathState.questions = generateMathQuestions('add', seed + 1000);
    for (const q of mathState.questions) { q.userAnswer = null; q.correct = null; }
    renderMath();

    // Math tab events
    document.querySelectorAll('.math-oper-tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            resetMath(this.dataset.mathop);
        });
    });
    document.getElementById('checkAllMath').addEventListener('click', checkAllMath);
    document.getElementById('resetMathBtn').addEventListener('click', function() {
        resetMath(mathState.operation);
        const box = document.getElementById('mathBox');
        box.classList.remove('pop');
        void box.offsetWidth;
        box.classList.add('pop');
    });

    // Nav tabs
    document.querySelectorAll('.nav-tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const target = this.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });

    // Auto-refresh math daily
    let lastDate = new Date().getDate();
    setInterval(() => {
        const now = new Date().getDate();
        if (now !== lastDate) {
            lastDate = now;
            resetMath(mathState.operation);
        }
    }, 60000);

    console.log('🌈 Belajar Suku Kata & Seronok! 🎉');
    console.log('📅 Soalan matematik berubah setiap hari.');
    console.log('💡 Klik pada mana-mana kad untuk zum dan lihat contoh.');
}

// Jalankan apabila dokumen siap
document.addEventListener('DOMContentLoaded', init);