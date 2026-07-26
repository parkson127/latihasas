// ================================================================
// UTILS.JS – Fungsi-fungsi asas untuk semua modul
// ================================================================

// ----- MODAL (Popup) -----
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

/**
 * Buka modal dengan kandungan HTML
 * @param {string} html - Kandungan HTML untuk dipaparkan dalam modal
 */
function openModal(html) {
    if (!modalContent || !modalOverlay) return;
    modalContent.innerHTML = html;
    modalOverlay.classList.add('active');
}

/**
 * Tutup modal
 */
function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
}

// Pasang event listener untuk butang tutup dan klik luar
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) closeModal();
    });
}

// ----- DATE SEED (untuk soalan berubah setiap hari) -----
/**
 * Dapatkan benih berdasarkan tarikh semasa (YYYYMMDD)
 * @returns {number} - Benih tarikh
 */
function getDateSeed() {
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

// ----- SEEDED RANDOM (untuk kebolehulangan) -----
/**
 * Penjana nombor rawak berasaskan benih
 * @param {number} seed - Benih awal
 * @returns {Function} - Fungsi yang mengembalikan nombor rawak 0-1
 */
function seededRandom(seed) {
    let s = seed;
    return function() {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

// ----- SHUFFLE ARRAY (dengan benih) -----
/**
 * Kocok array menggunakan benih untuk konsistensi harian
 * @param {Array} arr - Array yang hendak dikocok
 * @param {number} seed - Benih untuk pengocokan
 * @returns {Array} - Array baru yang telah dikocok
 */
function shuffleArray(arr, seed) {
    const rng = seededRandom(seed);
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ----- SPEECH SYNTHESIS (Multi-bahasa) -----
let voicesLoaded = false;
let voiceMap = {};

/**
 * Muatkan senarai suara yang tersedia (panggil sekali sahaja)
 * @returns {Promise} - Promise yang selesai apabila suara dimuatkan
 */
function loadVoices() {
    return new Promise((resolve) => {
        if (voicesLoaded) {
            resolve(voiceMap);
            return;
        }
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            voicesLoaded = true;
            voiceMap = {};
            for (const v of voices) {
                if (!voiceMap[v.lang]) voiceMap[v.lang] = [];
                voiceMap[v.lang].push(v);
            }
            resolve(voiceMap);
        } else {
            // Tunggu sehingga suara dimuatkan
            window.speechSynthesis.onvoiceschanged = function() {
                const voices2 = window.speechSynthesis.getVoices();
                voicesLoaded = true;
                voiceMap = {};
                for (const v of voices2) {
                    if (!voiceMap[v.lang]) voiceMap[v.lang] = [];
                    voiceMap[v.lang].push(v);
                }
                resolve(voiceMap);
            };
        }
    });
}

/**
 * Sebut teks dalam bahasa yang ditentukan
 * @param {string} text - Teks untuk disebut
 * @param {string} lang - Kod bahasa (contoh: 'ms-MY', 'en-US', 'ar-SA')
 */
function speak(text, lang = 'ms-MY') {
    if (!window.speechSynthesis) {
        console.warn('SpeechSynthesis tidak disokong oleh pelayar ini.');
        return;
    }
    // Pastikan suara dimuatkan
    loadVoices().then(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;

        // Cari suara yang sepadan dengan bahasa
        const voicesForLang = voiceMap[lang] || [];
        if (voicesForLang.length > 0) {
            utterance.voice = voicesForLang[0];
        }

        // Tetapkan kadar dan nada (sesuai untuk kanak-kanak)
        utterance.rate = 0.9;
        utterance.pitch = 1.1;

        window.speechSynthesis.speak(utterance);
    });
}

// Muatkan suara secara awal (jika pelayar menyokong)
if (window.speechSynthesis) {
    loadVoices();
}

// ----- EKSPORT KE GLOBAL (untuk akses dari modul lain) -----
window.getDateSeed = getDateSeed;
window.seededRandom = seededRandom;
window.shuffleArray = shuffleArray;
window.openModal = openModal;
window.closeModal = closeModal;
window.speak = speak;
window.loadVoices = loadVoices;

// ----- NOTA UNTUK PEMBANGUN -----
console.log('✅ utils.js dimuatkan. Fungsi tersedia: getDateSeed, shuffleArray, speak, openModal, closeModal');
