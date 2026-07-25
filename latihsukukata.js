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

// ================================================================
// 1. RENDER FILL IN THE BLANKS
// ================================================================
// ================================================================
// 1. RENDER FILL IN THE BLANKS – DENGAN PAGINATION (4 SOALAN SEHALAMAN)
// ================================================================

function renderFillBlank() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    const seed = getDateSeed();
    const TOTAL_QUESTIONS = 20;       // Jumlah soalan sehari
    const PER_PAGE = 4;              // Soalan setiap halaman

    // Pilih 20 soalan rawak
    const shuffled = shuffleArray(fillBlankQuestions, seed);
    const selectedFill = shuffled.slice(0, TOTAL_QUESTIONS);

    // Bahagikan kepada halaman (setiap halaman 4 soalan)
    const pages = [];
    for (let i = 0; i < selectedFill.length; i += PER_PAGE) {
        pages.push(selectedFill.slice(i, i + PER_PAGE));
    }

    let currentPage = 0;
    const totalPages = pages.length;

    // Fungsi untuk memaparkan halaman tertentu
    function renderPage(pageIndex) {
        const pageQuestions = pages[pageIndex];
        if (!pageQuestions) return;

        // Cari atau cipta container untuk halaman
        let pageContainer = document.getElementById('fillBlankPageContainer');
        if (!pageContainer) {
            pageContainer = document.createElement('div');
            pageContainer.id = 'fillBlankPageContainer';
            // Letakkan di dalam bahagian fill blank (kita akan bina semula)
            // Kita akan gantikan keseluruhan bahagian fill blank
        }

        // Bina HTML untuk halaman ini
        let html = `<div class="cv-activity-card" id="fillBlankSection">
            <h3>✏️ Isi Tempat Kosong (Halaman ${pageIndex+1} daripada ${totalPages})</h3>
            <p style="font-size:1.2rem; color:#5a6a5a;">Tulis <strong>suku kata</strong> yang hilang.</p>`;

        for (const q of pageQuestions) {
            html += `<div style="margin:15px 0; font-size:1.8rem; display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap;">
                <span style="font-size:3.2rem;">${q.image}</span>
                <span style="font-weight:bold;">${q.display}</span>
                <input type="text" class="answer-input" data-answer="${q.missing}" placeholder="?" style="width:140px; font-size:1.8rem; border-radius:40px; border:3px solid #b8c8b8; padding:6px 14px; text-align:center; font-family:'Patrick Hand',cursive;">
                <button class="check-fill" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:6px 20px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Semak</button>
                <span class="fill-feedback" style="margin-left:8px; font-size:1.4rem;"></span>
            </div>`;
        }

        // Butang navigasi
        html += `<div style="display:flex; justify-content:center; gap:15px; margin-top:20px;">`;
        if (pageIndex > 0) {
            html += `<button class="page-nav-btn" data-direction="prev" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:8px 24px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">⬅️ Sebelum</button>`;
        }
        if (pageIndex < totalPages - 1) {
            html += `<button class="page-nav-btn" data-direction="next" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:8px 24px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Seterusnya ➡️</button>`;
        }
        html += `</div>`;
        html += `<p style="margin-top:10px; font-size:1rem; color:#7a6a6a;">Soalan ${pageIndex*PER_PAGE+1} – ${Math.min((pageIndex+1)*PER_PAGE, TOTAL_QUESTIONS)} daripada ${TOTAL_QUESTIONS}</p>`;
        html += `</div>`;

        // Gantikan kandungan container fill blank (jika ada, atau tambah baru)
        // Kita akan letakkan dalam container utama, tetapi kita akan gantikan bahagian fill blank sahaja.
        // Cara mudah: cari div dengan id 'fillBlankSection', jika ada, gantikan innerHTML.
        let existingSection = document.getElementById('fillBlankSection');
        if (existingSection) {
            existingSection.outerHTML = html;
        } else {
            // Jika tiada, tambah di hujung container
            container.insertAdjacentHTML('beforeend', html);
        }

        // Pasang semula event listener untuk butang "Semak" pada halaman ini
        document.querySelectorAll('#fillBlankSection .check-fill').forEach(btn => {
            btn.addEventListener('click', function() {
                const parent = this.parentElement;
                const input = parent.querySelector('.answer-input');
                const feedback = parent.querySelector('.fill-feedback');
                const user = input.value.trim().toLowerCase();
                const correct = input.dataset.answer.toLowerCase();

                if (user === correct) {
                    feedback.textContent = '✅ Betul!';
                    feedback.style.color = 'green';
                    const fullWord = fillBlankQuestions.find(q => q.missing === correct)?.word || '';
                    if (fullWord) speak(fullWord, 'ms-MY');
                } else {
                    feedback.textContent = `❌ Cuba lagi. (Petunjuk: ${correct})`;
                    feedback.style.color = 'red';
                }
            });
        });

        // Pasang event listener untuk butang navigasi
        document.querySelectorAll('#fillBlankSection .page-nav-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const direction = this.dataset.direction;
                if (direction === 'next' && currentPage < totalPages - 1) {
                    currentPage++;
                    renderPage(currentPage);
                } else if (direction === 'prev' && currentPage > 0) {
                    currentPage--;
                    renderPage(currentPage);
                }
            });
        });
    }

    // Mula dengan halaman pertama
    renderPage(0);
}

// ================================================================
// 2. RENDER MEMBACA (CERITA DENGAN POPUP PENUH SKRIN & WARNA SUKU KATA)
// ================================================================
// ================================================================
// FUNGSI UNTUK MEWARNAKAN TEKS IKUT SUKU KATA (TANPA ROSAK HTML)
// ================================================================

function colorizeHtmlText(htmlText) {
    // Palet warna (anda boleh ubah suai)
    const colorPalette = ['#e74c3c', '#2ecc71', '#3498db', '#f1c40f', '#9b59b6', '#f39c12'];
    // Jika mahu merah putih selang-seli, guna: ['#e74c3c', '#ffffff'] tapi putih tak nampak. Saya cadangkan merah + biru.
    // Untuk merah putih, ganti dengan ['#e74c3c', '#f5f5f5'] (merah dan kelabu muda)

    // Bina DOM daripada HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;

    // Kumpulkan semua text node secara berurutan
    const textNodes = [];
    const walker = document.createTreeWalker(
        tempDiv,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }

    // Proses setiap text node
    let colorIndex = 0;

    for (const textNode of textNodes) {
        const text = textNode.textContent;
        // Pecah teks kepada perkataan (pisah ruang dan tanda baca)
        const words = text.split(/(\s+)/); // kekalkan ruang
        const fragment = document.createDocumentFragment();

        for (const token of words) {
            if (token.match(/^\s+$/)) {
                // Ruang kosong
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            // Bersihkan tanda baca untuk pemisahan suku kata, tapi kita akan simpan asal
            const cleanToken = token.replace(/[.,!?;:]/g, '');
            if (cleanToken.length === 0) {
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            // Dapatkan suku kata
            const syllables = splitIntoSyllables(cleanToken);
            if (syllables.length === 0) {
                fragment.appendChild(document.createTextNode(token));
                continue;
            }
            // Bina semula token dengan suku kata berwarna
            let tokenHtml = '';
            // Kita perlu letakkan semula tanda baca di akhir jika ada
            const punctuation = token.match(/[.,!?;:]+$/);
            const baseWord = punctuation ? token.slice(0, -punctuation[0].length) : token;

            // Jika baseWord sama dengan cleanToken, kita boleh proceed
            // Kita akan guna syllables dari cleanToken
            // Bina span untuk setiap suku kata
            let syllableIndex = 0;
            for (const syl of syllables) {
                const color = colorPalette[colorIndex % colorPalette.length];
                tokenHtml += `<span style="color:${color};">${syl}</span>`;
                colorIndex++;
                syllableIndex++;
            }
            // Tambah tanda baca jika ada
            if (punctuation) {
                tokenHtml += punctuation[0];
            }
            // Bungkus dalam span atau div? Kita akan masukkan sebagai HTML
            const wrapper = document.createElement('span');
            wrapper.innerHTML = tokenHtml;
            fragment.appendChild(wrapper);
        }

        // Gantikan text node dengan fragment
        textNode.parentNode.replaceChild(fragment, textNode);
    }

    return tempDiv.innerHTML;
}

// ----- Fungsi untuk papar cerita dalam popup penuh skrin (DIPERBAIKI) -----
function showFullScreenStory(story) {
    // Cek jika sudah ada overlay
    const existingOverlay = document.getElementById('fullScreenStoryOverlay');
    if (existingOverlay) existingOverlay.remove();

    // Warna teks (proses HTML dengan betul)
    const coloredHtml = colorizeHtmlText(story.text);

    // Bina overlay
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

    // Tambah keyframes animation jika belum ada
    if (!document.getElementById('storyFadeInStyle')) {
        const style = document.createElement('style');
        style.id = 'storyFadeInStyle';
        style.textContent = `
            @keyframes fadeIn {
                0% { opacity: 0; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
            }
            @keyframes fadeOut {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0.9); }
            }
        `;
        document.head.appendChild(style);
    }

    // Kandungan popup
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

    // Butang tutup
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
    closeBtn.addEventListener('mouseover', () => closeBtn.style.transform = 'scale(1.05)');
    closeBtn.addEventListener('mouseout', () => closeBtn.style.transform = 'scale(1)');
    closeBtn.addEventListener('click', hideFullScreenStory);

    // Tajuk
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

    // Teks cerita (dengan warna suku kata)
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

    // Butang baca
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
    readBtn.addEventListener('mouseover', () => readBtn.style.transform = 'scale(1.05)');
    readBtn.addEventListener('mouseout', () => readBtn.style.transform = 'scale(1)');
    readBtn.addEventListener('click', function() {
        const plainText = story.text.replace(/<[^>]*>/g, ' ');
        speak(plainText, 'ms-MY');
    });

    // Susun dalam content
    content.appendChild(closeBtn);
    content.appendChild(title);
    content.appendChild(textDiv);
    const btnWrapper = document.createElement('div');
    btnWrapper.style.cssText = 'text-align: center; margin-top: 10px;';
    btnWrapper.appendChild(readBtn);
    content.appendChild(btnWrapper);

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Tutup jika klik di luar content
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) hideFullScreenStory();
    });
}

function hideFullScreenStory() {
    const overlay = document.getElementById('fullScreenStoryOverlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}
        




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
