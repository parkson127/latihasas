// ================================================================
// LATIHSUKUKATA.JS – Aktiviti Suku Kata (Isi Tempat Kosong, Mengeja, Cerita)
// ================================================================

// ----- SOALAN ISI TEMPAT KOSONG (SUKU KATA PENUH) -----
// Setiap soalan: { image, word, missing, display }
// missing = satu suku kata yang hilang (contoh: 'ga', 'jah')
// display = perkataan dengan '__' di tempat missing (contoh: '__jah' atau 'ga__')
const fillBlankQuestions = [
    // ===== HAIWAN =====
    { image: '🐘', word: 'gajah', missing: 'ga', display: '__jah' },
    { image: '🐘', word: 'gajah', missing: 'jah', display: 'ga__' },
    { image: '🐱', word: 'kucing', missing: 'ku', display: '__cing' },
    { image: '🐱', word: 'kucing', missing: 'cing', display: 'ku__' },
    { image: '🐶', word: 'anjing', missing: 'an', display: '__jing' },
    { image: '🐶', word: 'anjing', missing: 'jing', display: 'an__' },
    { image: '🐟', word: 'ikan', missing: 'i', display: '__kan' }, // 'ikan' suku kata: i-kan, tapi 'i' satu huruf, kita guna 'kan' sebagai missing? Actually 'ikan' = i + kan, but 'i' is a single letter, we can blank 'kan' instead.
    // Better: use 'kan' as missing
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
    { image: '🐯', word: 'harimau', missing: 'ri', display: 'ha__mau' },
    { image: '🦓', word: 'zebra', missing: 'ku', display: '__da belang' },
    { image: '🦓', word: 'zebra', missing: 'be', display: 'kuda __lang ' },
    { image: '🦌', word: 'rusa', missing: 'ru', display: '__sa' },
    { image: '🦌', word: 'rusa', missing: 'sa', display: 'ru__' },
    { image: '🦊', word: 'musang', missing: 'mu', display: '__sang' },
    { image: '🦊', word: 'musang', missing: 'sang', display: 'mu__' },
    { image: '🐿️', word: 'tupai', missing: 'tu', display: '__pai' },
    { image: '🐿️', word: 'tupai', missing: 'pai', display: 'tu__' },
    { image: '🐇', word: 'arnab', missing: 'ar', display: '__nab' },
    { image: '🐇', word: 'arnab', missing: 'nab', display: 'ar__' },
    { image: '🦆', word: 'itik', missing: 'i', display: '__tik' }, // 'itik' = i+tik, kita blank 'tik'
    { image: '🦆', word: 'itik', missing: 'tik', display: 'i__' },
    { image: '🐔', word: 'ayam', missing: 'a', display: '__yam' }, // 'ayam' = a+yam, blank 'yam'
    { image: '🐔', word: 'ayam', missing: 'yam', display: 'a__' },
    { image: '🐍', word: 'ular', missing: 'u', display: '__lar' },
    { image: '🐍', word: 'ular', missing: 'lar', display: 'u__' },
    { image: '🐊', word: 'buaya', missing: 'bu', display: '__aya' },
    { image: '🐊', word: 'buaya', missing: 'aya', display: 'bu__' },
    // ===== BUNGA =====
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
    // ===== KENDERAAN =====
    { image: '🚗', word: 'kereta', missing: 'ke', display: '__reta' },
    { image: '🚗', word: 'kereta', missing: 'reta', display: 'ke__' },
    { image: '🏍️', word: 'motosikal', missing: 'mo', display: '__tosikal' },
    { image: '🏍️', word: 'motosikal', missing: 'sikal', display: 'moto__' },
    { image: '🚲', word: 'basikal', missing: 'ba', display: '__sikal' },
    { image: '🚲', word: 'basikal', missing: 'si', display: 'ba__kal' },
    { image: '🚚', word: 'lori', missing: 'lo', display: '__ri' },
    { image: '🚚', word: 'lori', missing: 'ri', display: 'lo__' },
    { image: '✈️', word: 'kapal', missing: 'ka', display: '__pal' },
    { image: '✈️', word: 'kapal', missing: 'pal', display: 'ka__' },
    { image: '🚁', word: 'helikopter', missing: 'he', display: '__likopter' },
    { image: '🚁', word: 'helikopter', missing: 'li', display: 'he__kopter' }, // 'pter' bukan suku kata Melayu, kita guna 'ter'?
    // Betulkan: helikopter = he-li-kop-ter, kita blank 'kop' atau 'ter'
    { image: '🚁', word: 'helikopter', missing: 'kop', display: 'heli__ter' },
    { image: '🚁', word: 'helikopter', missing: 'ter', display: 'helikop__' },
    // ===== PERBUATAN / AKTIVITI =====
    { image: '🍽️', word: 'makan', missing: 'ma', display: '__kan' },
    { image: '🍽️', word: 'makan', missing: 'kan', display: 'ma__' },
    { image: '🥤', word: 'minum', missing: 'mi', display: '__num' },
    { image: '🥤', word: 'minum', missing: 'num', display: 'mi__' },
    { image: '😴', word: 'tidur', missing: 'ti', display: '__dur' },
    { image: '😴', word: 'tidur', missing: 'dur', display: 'ti__' },
    { image: '🏃', word: 'lari', missing: 'la', display: '__ri' },
    { image: '🏃', word: 'lari', missing: 'ri', display: 'la__' },
    { image: '🏊', word: 'renang', missing: 're', display: 'be__nang' },
    { image: '🏊', word: 'renang', missing: 'nang', display: 'bere__' },
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
    { image: '🌅', word: 'bangun', missing: 'ba', display: '__ngun' },
    { image: '🌅', word: 'bangun', missing: 'ngun', display: 'ba__' },
    { image: '🚿', word: 'mandi', missing: 'man', display: '__di' },
    { image: '🚿', word: 'mandi', missing: 'di', display: 'man__' },
    { image: '🧼', word: 'basuh', missing: 'ba', display: '__suh' },
    { image: '🧼', word: 'basuh', missing: 'suh', display: 'ba__' },
    { image: '🧹', word: 'sapu', missing: 'sa', display: '__pu' },
    { image: '🧹', word: 'sapu', missing: 'pu', display: 'sa__' },
    { image: '🍳', word: 'masak', missing: 'ma', display: '__sak' },
    { image: '🍳', word: 'masak', missing: 'sak', display: 'ma__' },
    { image: '🧵', word: 'jahit', missing: 'ja', display: '__hit' },
    { image: '🧵', word: 'jahit', missing: 'hit', display: 'ja__' },
    // ===== WARNA =====
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
    { image: '🟠', word: 'oren', missing: 'o', display: '__ren' },
    { image: '🟠', word: 'oren', missing: 'ren', display: 'o__' },
    { image: '⚫', word: 'hitam', missing: 'hi', display: '__tam' },
    { image: '⚫', word: 'hitam', missing: 'tam', display: 'hi__' },
    { image: '⚪', word: 'putih', missing: 'pu', display: '__tih' },
    { image: '⚪', word: 'putih', missing: 'tih', display: 'pu__' },
    { image: '🥈', word: 'perak', missing: 'pe', display: '__rak' },
    { image: '🥈', word: 'perak', missing: 'rak', display: 'pe__' },
    { image: '🥇', word: 'emas', missing: 'e', display: '__mas' },
    { image: '🥇', word: 'emas', missing: 'mas', display: 'e__' },
    { image: '🟤', word: 'coklat', missing: 'co', display: '__klat' },
    { image: '🟤', word: 'coklat', missing: 'klat', display: 'co__' },
    { image: '⬜', word: 'kelabu', missing: 'ke', display: '__labu' },
    { image: '⬜', word: 'kelabu', missing: 'labu', display: 'ke__' },
    // ===== BENTUK =====
    { image: '⭕', word: 'bulat', missing: 'bu', display: '__lat' },
    { image: '⭕', word: 'bulat', missing: 'lat', display: 'bu__' },
    { image: '🔺', word: 'segitiga', missing: 'se', display: '__gitiga' },
    { image: '🔺', word: 'segitiga', missing: 'tiga', display: 'segi__' },
    { image: '🔲', word: 'segiempat', missing: 'segi', display: '__empat' },
    { image: '🔲', word: 'segiempat', missing: 'pat', display: 'segiem__' },
    { image: '⬛', word: 'bujur', missing: 'bu', display: '__jur' },
    { image: '⬛', word: 'bujur', missing: 'jur', display: 'bu__' },
    { image: '⚽', word: 'sfera', missing: 'sfe', display: '__ra' }, // 'sfera' = sfe-ra, kita blank 'sfe'
    { image: '⚽', word: 'sfera', missing: 'ra', display: 'sfe__' },
    { image: '🧊', word: 'kubus', missing: 'ku', display: '__bus' },
    { image: '🧊', word: 'kubus', missing: 'bus', display: 'ku__' },
    { image: '🥫', word: 'silinder', missing: 'si', display: '__linder' },
    { image: '🥫', word: 'silinder', missing: 'der', display: 'silin__' },
    // ===== SAIZ / DIMENSI =====
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

// ----- FUNGSI UTAMA -----
function renderCVActivities() {
    const container = document.getElementById('cvActivities');
    if (!container) return;

    const seed = getDateSeed();

    // ============================================================
    // 1. ISI TEMPAT KOSONG – TUKAR ANGKA '20' DI SINI UNTUK UBAH BILANGAN SOALAN
    // ============================================================
    const NUMBER_OF_FILL_BLANK = 10; // <-- Ubah nilai ini (contoh: 10, 15, 20, atau fillBlankQuestions.length)
    const shuffled = shuffleArray(fillBlankQuestions, seed);
    const selectedFill = shuffled.slice(0, NUMBER_OF_FILL_BLANK);

    let html = '';

    // --- Bahagian 1: Isi Tempat Kosong ---
    html += `<div class="cv-activity-card">
        <h3>✏️ Isi Tempat Kosong (lihat gambar)</h3>
        <p style="font-size:1.2rem; color:#5a6a5a;">Tulis <strong>suku kata</strong> yang hilang (bukan huruf).</p>`;

    for (const q of selectedFill) {
        html += `<div style="margin:15px 0; font-size:1.8rem; display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap;">
            <span style="font-size:3.2rem;">${q.image}</span>
            <span style="font-weight:bold;">${q.display}</span>
            <input type="text" class="answer-input" data-answer="${q.missing}" placeholder="?" style="width:140px; font-size:1.8rem; border-radius:40px; border:3px solid #b8c8b8; padding:6px 14px; text-align:center; font-family:'Patrick Hand',cursive;">
            <button class="check-fill" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:6px 20px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="fill-feedback" style="margin-left:8px; font-size:1.4rem;"></span>
        </div>`;
    }
    html += `</div>`;

    // --- Bahagian 2: Mengeja ---
    const spellingWords = ['bola','kucing','rumah','buku','gajah','pisang','nasi','kereta','baju','tangan','merah','biru','hijau'];
    const shuffledSpell = shuffleArray(spellingWords, seed + 1);
    const selectedSpell = shuffledSpell.slice(0, 3);

    html += `<div class="cv-activity-card">
        <h3>🔊 Mengeja</h3>
        <p style="font-size:1.2rem;">Klik butang dengar, kemudian taip ejaan dengan betul.</p>`;
    for (const w of selectedSpell) {
        html += `<div style="margin:12px 0; font-size:1.8rem; display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
            <button class="speak-spell" data-word="${w}" style="background:#f7d4a0; border:none; border-radius:40px; padding:6px 18px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">🔊 Dengar</button>
            <span style="font-weight:bold;">${w}</span>
            <input type="text" class="spell-input" data-word="${w}" placeholder="Tulis..." style="width:150px; font-size:1.6rem; border-radius:40px; border:3px solid #b8c8b8; padding:6px 14px; text-align:center; font-family:'Patrick Hand',cursive;">
            <button class="check-spell" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:6px 18px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">Semak</button>
            <span class="spell-feedback" style="margin-left:8px; font-size:1.4rem;"></span>
        </div>`;
    }
    html += `</div>`;

    // --- Bahagian 3: Pilih Cerita (dengan ikon) ---
// Tunjukkan 16 ikon cerita dalam grid
html += `<div class="cv-activity-card" id="storySelector">
    <h3>📖 Pilih Cerita</h3>
    <p style="font-size:1.2rem; color:#5a6a5a;">Klik pada ikon untuk membaca cerita.</p>
    <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(70px, 1fr)); gap:10px; margin:10px 0;">
        ${shortStories.map((story, index) => `
            <div class="story-icon" data-index="${index}" style="font-size:2.8rem; cursor:pointer; text-align:center; padding:8px; background:#f8f0f5; border-radius:20px; border:3px solid #e8d0dc; transition:0.2s;" 
                onmouseover="this.style.background='#ffe6b0'" 
                onmouseout="this.style.background='#f8f0f5'">
                ${story.icon}
            </div>
        `).join('')}
    </div>
    <div id="storyDisplay" style="margin-top:15px; display:none;">
        <h4 id="storyTitle" style="font-size:1.8rem; color:#4a1e3a;"></h4>
        <div id="storyText" class="story-text"></div>
        <div style="margin-top:10px;">
            <button id="readStoryBtn" style="background:#2a6a3a; color:white; border:none; border-radius:40px; padding:8px 24px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive;">🔊 Baca Cerita</button>
        </div>
    </div>
</div>`;

    container.innerHTML = html;

    // ============================================================
    // EVENT LISTENERS
    // ============================================================

    // 1. Semak Isi Tempat Kosong
    document.querySelectorAll('.check-fill').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            const input = parent.querySelector('.answer-input');
            const feedback = parent.querySelector('.fill-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.answer.toLowerCase();

            if (user === correct) {
                feedback.textContent = '✅ Betul!';
                feedback.style.color = 'green';
                // Mainkan bunyi perkataan penuh untuk galakan
                const fullWord = fillBlankQuestions.find(q => q.missing === correct)?.word || '';
                if (fullWord) speak(fullWord, 'ms-MY');
            } else {
                feedback.textContent = `❌ Cuba lagi. (Petunjuk: ${correct})`;
                feedback.style.color = 'red';
            }
        });
    });

    // 2. Dengar untuk mengeja
    document.querySelectorAll('.speak-spell').forEach(btn => {
        btn.addEventListener('click', function() {
            speak(this.dataset.word, 'ms-MY');
        });
    });

    // 3. Semak Ejaan
    document.querySelectorAll('.check-spell').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            const input = parent.querySelector('.spell-input');
            const feedback = parent.querySelector('.spell-feedback');
            const user = input.value.trim().toLowerCase();
            const correct = input.dataset.word.toLowerCase();

            if (user === correct) {
                feedback.textContent = '✅ Betul!';
                feedback.style.color = 'green';
                speak(correct, 'ms-MY');
            } else {
                feedback.textContent = `❌ Ejaan yang betul: ${correct}`;
                feedback.style.color = 'red';
            }
        });
    });

    // 4. Klik pada perkataan highlight dalam cerita
    document.querySelectorAll('.story-text .highlight').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function() {
            const word = this.textContent.trim();
            speak(word, 'ms-MY');
        });
    });
}
