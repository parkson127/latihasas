// ================================================================
// SUKUKATA.JS – Jadual Suku Kata (dengan contoh perkataan & bunyi)
// ================================================================

// ----- KONSONAN & VOKAL -----
const consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
// Vokal: a, e (taling), i, o, u, ê (pepet)
const vowels = ['a', 'e', 'i', 'o', 'u', 'ê'];

// Warna vokal
const vowelColors = {
    'a': '#e74c3c', // merah
    'e': '#2ecc71', // hijau (taling)
    'i': '#3498db', // biru
    'o': '#f39c12', // oren
    'u': '#9b59b6', // ungu
    'ê': '#f1c40f'  // kuning (pepet)
};

// ----- DATA PERKATAAN MENGIKUT SUKU KATA -----
// Untuk setiap suku kata (contoh: 'ba'), senarai 3-4 perkataan yang bermula dengannya.
// Sertakan emoji dan terjemahan Inggeris (jika ada).
const syllableWordMap = {
    // b
    'ba': [
        { word: 'baju', emoji: '👕', en: 'shirt' },
        { word: 'basikal', emoji: '🚲', en: 'bicycle' },
        { word: 'batu', emoji: '🪨', en: 'stone' }
    ],
    'be': [ // e taling
        { word: 'berat', emoji: '⚖️', en: 'heavy' },
        { word: 'belum', emoji: '⏳', en: 'not yet' },
        { word: 'besar', emoji: '🐘', en: 'big' }
    ],
    'bê': [ // e pepet
        { word: 'bebek', emoji: '🦆', en: 'duck' },
        { word: 'beras', emoji: '🍚', en: 'rice' },
        { word: 'beli', emoji: '🛒', en: 'buy' }
    ],
    'bi': [
        { word: 'bintang', emoji: '⭐', en: 'star' },
        { word: 'biru', emoji: '🔵', en: 'blue' },
        { word: 'biji', emoji: '🌱', en: 'seed' }
    ],
    'bo': [
        { word: 'botol', emoji: '🧴', en: 'bottle' },
        { word: 'bola', emoji: '⚽', en: 'ball' },
        { word: 'bon', emoji: '📄', en: 'coupon' }
    ],
    'bu': [
        { word: 'buku', emoji: '📖', en: 'book' },
        { word: 'burung', emoji: '🐦', en: 'bird' },
        { word: 'buah', emoji: '🍎', en: 'fruit' }
    ],
    // c
    'ca': [
        { word: 'cawan', emoji: '☕', en: 'cup' },
        { word: 'capati', emoji: '🥞', en: 'chapati' },
        { word: 'cakap', emoji: '🗣️', en: 'speak' }
    ],
    'ce': [
        { word: 'cek', emoji: '💳', en: 'cheque' },
        { word: 'cerah', emoji: '☀️', en: 'bright' },
        { word: 'cepat', emoji: '🏃', en: 'fast' }
    ],
    'cê': [
        { word: 'cerek', emoji: '🫖', en: 'kettle' },
        { word: 'cermin', emoji: '🪞', en: 'mirror' },
        { word: 'celah', emoji: '🕳️', en: 'gap' }
    ],
    'ci': [
        { word: 'cili', emoji: '🌶️', en: 'chili' },
        { word: 'cinta', emoji: '❤️', en: 'love' },
        { word: 'cincin', emoji: '💍', en: 'ring' }
    ],
    'co': [
        { word: 'coklat', emoji: '🍫', en: 'chocolate' },
        { word: 'comel', emoji: '🥰', en: 'cute' },
        { word: 'corak', emoji: '🎨', en: 'pattern' }
    ],
    'cu': [
        { word: 'cuka', emoji: '🧂', en: 'vinegar' },
        { word: 'curi', emoji: '🦹', en: 'steal' },
        { word: 'cubit', emoji: '🤏', en: 'pinch' }
    ],
    // d
    'da': [
        { word: 'dapur', emoji: '🍳', en: 'kitchen' },
        { word: 'dahan', emoji: '🌿', en: 'branch' },
        { word: 'dada', emoji: '🦴', en: 'chest' }
    ],
    'de': [
        { word: 'dewan', emoji: '🏛️', en: 'hall' },
        { word: 'dengar', emoji: '👂', en: 'listen' },
        { word: 'depan', emoji: '👉', en: 'front' }
    ],
    'dê': [
        { word: 'dekat', emoji: '📍', en: 'near' },
        { word: 'delima', emoji: '🍎', en: 'pomegranate' },
        { word: 'demam', emoji: '🤒', en: 'fever' }
    ],
    'di': [
        { word: 'dinding', emoji: '🧱', en: 'wall' },
        { word: 'diri', emoji: '🧍', en: 'self' },
        { word: 'diam', emoji: '🤐', en: 'quiet' }
    ],
    'do': [
        { word: 'dompet', emoji: '👛', en: 'wallet' },
        { word: 'doktor', emoji: '👨‍⚕️', en: 'doctor' },
        { word: 'dosa', emoji: '😈', en: 'sin' }
    ],
    'du': [
        { word: 'duit', emoji: '💰', en: 'money' },
        { word: 'durian', emoji: '🍈', en: 'durian' },
        { word: 'dunia', emoji: '🌍', en: 'world' }
    ],
    // f
    'fa': [
        { word: 'fail', emoji: '📁', en: 'file' },
        { word: 'faham', emoji: '🧠', en: 'understand' },
        { word: 'fajar', emoji: '🌅', en: 'dawn' }
    ],
    'fe': [
        { word: 'feri', emoji: '⛴️', en: 'ferry' },
        { word: 'fesyen', emoji: '👗', en: 'fashion' },
        { word: 'fenomena', emoji: '🌌', en: 'phenomenon' }
    ],
    'fê': [
        { word: 'fesyen', emoji: '👗', en: 'fashion' }, // sama, tapi boleh ganti
        { word: 'fetus', emoji: '👶', en: 'fetus' },
        { word: 'feudal', emoji: '🏰', en: 'feudal' }
    ],
    'fi': [
        { word: 'filem', emoji: '🎬', en: 'film' },
        { word: 'fikir', emoji: '🤔', en: 'think' },
        { word: 'figur', emoji: '🧘', en: 'figure' }
    ],
    'fo': [
        { word: 'foto', emoji: '📸', en: 'photo' },
        { word: 'forum', emoji: '💬', en: 'forum' },
        { word: 'fobia', emoji: '😨', en: 'phobia' }
    ],
    'fu': [
        { word: 'futur', emoji: '🔮', en: 'future' },
        { word: 'fungsi', emoji: '⚙️', en: 'function' },
        { word: 'futbal', emoji: '⚽', en: 'football' }
    ],
    // g
    'ga': [
        { word: 'gajah', emoji: '🐘', en: 'elephant' },
        { word: 'gambar', emoji: '🖼️', en: 'picture' },
        { word: 'garam', emoji: '🧂', en: 'salt' }
    ],
    'ge': [
        { word: 'gelas', emoji: '🥛', en: 'glass' },
        { word: 'gerak', emoji: '🏃', en: 'move' },
        { word: 'gebu', emoji: '☁️', en: 'fluffy' }
    ],
    'gê': [
        { word: 'gemuk', emoji: '🐷', en: 'fat' },
        { word: 'gelap', emoji: '🌑', en: 'dark' },
        { word: 'genting', emoji: '🌉', en: 'narrow' }
    ],
    'gi': [
        { word: 'gigi', emoji: '🦷', en: 'tooth' },
        { word: 'gila', emoji: '🤪', en: 'crazy' },
        { word: 'gitar', emoji: '🎸', en: 'guitar' }
    ],
    'go': [
        { word: 'goreng', emoji: '🍳', en: 'fry' },
        { word: 'guna', emoji: '🔧', en: 'use' },
        { word: 'gotong', emoji: '🤝', en: 'carry together' }
    ],
    'gu': [
        { word: 'gula', emoji: '🍬', en: 'sugar' },
        { word: 'guru', emoji: '👨‍🏫', en: 'teacher' },
        { word: 'gunung', emoji: '⛰️', en: 'mountain' }
    ],
    // h
    'ha': [
        { word: 'hari', emoji: '📅', en: 'day' },
        { word: 'hujan', emoji: '🌧️', en: 'rain' },
        { word: 'hati', emoji: '❤️', en: 'heart' }
    ],
    'he': [
        { word: 'hebat', emoji: '💪', en: 'great' },
        { word: 'helai', emoji: '📄', en: 'sheet' },
        { word: 'hembus', emoji: '💨', en: 'blow' }
    ],
    'hê': [
        { word: 'hemah', emoji: '🧠', en: 'manners' },
        { word: 'hendak', emoji: '🤲', en: 'want' },
        { word: 'heran', emoji: '😮', en: 'amazed' }
    ],
    'hi': [
        { word: 'hijau', emoji: '🟩', en: 'green' },
        { word: 'hilang', emoji: '🔍', en: 'lost' },
        { word: 'hidup', emoji: '🌱', en: 'live' }
    ],
    'ho': [
        { word: 'hotel', emoji: '🏨', en: 'hotel' },
        { word: 'horang', emoji: '🧑', en: 'person' },
        { word: 'homestay', emoji: '🏡', en: 'homestay' }
    ],
    'hu': [
        { word: 'hujan', emoji: '🌧️', en: 'rain' }, // ulang
        { word: 'hulu', emoji: '⬆️', en: 'upstream' },
        { word: 'hukum', emoji: '⚖️', en: 'law' }
    ],
    // j
    'ja': [
        { word: 'jatuh', emoji: '💫', en: 'fall' },
        { word: 'jalan', emoji: '🛤️', en: 'road' },
        { word: 'jari', emoji: '🖐️', en: 'finger' }
    ],
    'je': [
        { word: 'jeruk', emoji: '🥒', en: 'pickle' },
        { word: 'jendela', emoji: '🪟', en: 'window' },
        { word: 'jernih', emoji: '💧', en: 'clear' }
    ],
    'jê': [
        { word: 'jepit', emoji: '🦀', en: 'pinch' },
        { word: 'jelas', emoji: '🔍', en: 'clear' },
        { word: 'jemput', emoji: '🤝', en: 'invite' }
    ],
    'ji': [
        { word: 'jiran', emoji: '🏘️', en: 'neighbor' },
        { word: 'jimat', emoji: '💲', en: 'thrifty' },
        { word: 'jinak', emoji: '🦮', en: 'tame' }
    ],
    'jo': [
        { word: 'jodoh', emoji: '💑', en: 'match' },
        { word: 'joget', emoji: '💃', en: 'dance' },
        { word: 'joran', emoji: '🎣', en: 'fishing rod' }
    ],
    'ju': [
        { word: 'juta', emoji: '💰', en: 'million' },
        { word: 'jumaat', emoji: '📅', en: 'Friday' },
        { word: 'jurus', emoji: '🧭', en: 'direction' }
    ],
    // k
    'ka': [
        { word: 'kambing', emoji: '🐐', en: 'goat' },
        { word: 'kakak', emoji: '👧', en: 'sister' },
        { word: 'kayu', emoji: '🪵', en: 'wood' }
    ],
    'ke': [
        { word: 'kelas', emoji: '🏫', en: 'class' },
        { word: 'kecil', emoji: '🐤', en: 'small' },
        { word: 'kereta', emoji: '🚗', en: 'car' }
    ],
    'kê': [
        { word: 'kek', emoji: '🍰', en: 'cake' },
        { word: 'kelapa', emoji: '🥥', en: 'coconut' },
        { word: 'kenal', emoji: '🤝', en: 'know' }
    ],
    'ki': [
        { word: 'kiri', emoji: '⬅️', en: 'left' },
        { word: 'kitar', emoji: '🔄', en: 'cycle' },
        { word: 'kismis', emoji: '🍇', en: 'raisin' }
    ],
    'ko': [
        { word: 'kotak', emoji: '📦', en: 'box' },
        { word: 'kota', emoji: '🏙️', en: 'city' },
        { word: 'kompang', emoji: '🥁', en: 'drum' }
    ],
    'ku': [
        { word: 'kucing', emoji: '🐱', en: 'cat' },
        { word: 'kuku', emoji: '💅', en: 'nail' },
        { word: 'kura-kura', emoji: '🐢', en: 'turtle' }
    ],
    // l
    'la': [
        { word: 'lapan', emoji: '8️⃣', en: 'eight' },
        { word: 'laut', emoji: '🌊', en: 'sea' },
        { word: 'lama', emoji: '⏳', en: 'old' }
    ],
    'le': [
        { word: 'lebar', emoji: '📏', en: 'wide' },
        { word: 'lembu', emoji: '🐄', en: 'cow' },
        { word: 'lemah', emoji: '😴', en: 'weak' }
    ],
    'lê': [
        { word: 'lekat', emoji: '🧲', en: 'stick' },
        { word: 'lemak', emoji: '🥓', en: 'fat' },
        { word: 'lepas', emoji: '🕊️', en: 'release' }
    ],
    'li': [
        { word: 'limau', emoji: '🍋', en: 'lime' },
        { word: 'lilin', emoji: '🕯️', en: 'candle' },
        { word: 'lipat', emoji: '📄', en: 'fold' }
    ],
    'lo': [
        { word: 'lompat', emoji: '🦘', en: 'jump' },
        { word: 'lorong', emoji: '🛤️', en: 'lane' },
        { word: 'logam', emoji: '🔩', en: 'metal' }
    ],
    'lu': [
        { word: 'lukis', emoji: '🎨', en: 'draw' },
        { word: 'lumba', emoji: '🏎️', en: 'race' },
        { word: 'lupa', emoji: '🤔', en: 'forget' }
    ],
    // m
    'ma': [
        { word: 'makan', emoji: '🍽️', en: 'eat' },
        { word: 'mata', emoji: '👁️', en: 'eye' },
        { word: 'malam', emoji: '🌙', en: 'night' }
    ],
    'me': [
        { word: 'meja', emoji: '🪑', en: 'table' },
        { word: 'merah', emoji: '🔴', en: 'red' },
        { word: 'mesti', emoji: '🔒', en: 'must' }
    ],
    'mê': [
        { word: 'mekar', emoji: '🌺', en: 'bloom' },
        { word: 'mentega', emoji: '🧈', en: 'butter' },
        { word: 'mesin', emoji: '⚙️', en: 'machine' }
    ],
    'mi': [
        { word: 'mimpi', emoji: '💭', en: 'dream' },
        { word: 'minta', emoji: '🙏', en: 'ask' },
        { word: 'minum', emoji: '🥤', en: 'drink' }
    ],
    'mo': [
        { word: 'motor', emoji: '🏍️', en: 'motorcycle' },
        { word: 'moden', emoji: '📱', en: 'modern' },
        { word: 'monyet', emoji: '🐒', en: 'monkey' }
    ],
    'mu': [
        { word: 'mulut', emoji: '👄', en: 'mouth' },
        { word: 'murah', emoji: '💰', en: 'cheap' },
        { word: 'musim', emoji: '🌦️', en: 'season' }
    ],
    // n
    'na': [
        { word: 'nasi', emoji: '🍚', en: 'rice' },
        { word: 'naik', emoji: '⬆️', en: 'up' },
        { word: 'nama', emoji: '📛', en: 'name' }
    ],
    'ne': [
        { word: 'negeri', emoji: '🗺️', en: 'state' },
        { word: 'neka', emoji: '💪', en: 'determined' },
        { word: 'netral', emoji: '⚖️', en: 'neutral' }
    ],
    'nê': [
        { word: 'nekat', emoji: '🔥', en: 'reckless' },
        { word: 'nenek', emoji: '👵', en: 'grandma' },
        { word: 'nenda', emoji: '👴', en: 'grandpa' }
    ],
    'ni': [
        { word: 'nipis', emoji: '📄', en: 'thin' },
        { word: 'nikmat', emoji: '😊', en: 'enjoyment' },
        { word: 'niat', emoji: '🎯', en: 'intention' }
    ],
    'no': [
        { word: 'nombor', emoji: '🔢', en: 'number' },
        { word: 'nota', emoji: '📝', en: 'note' },
        { word: 'noktah', emoji: '⏹️', en: 'full stop' }
    ],
    'nu': [
        { word: 'nuri', emoji: '🦜', en: 'parrot' },
        { word: 'nukil', emoji: '✍️', en: 'quote' },
        { word: 'nurani', emoji: '💖', en: 'conscience' }
    ],
    // p
    'pa': [
        { word: 'pagi', emoji: '🌅', en: 'morning' },
        { word: 'pasar', emoji: '🛒', en: 'market' },
        { word: 'padang', emoji: '🏟️', en: 'field' }
    ],
    'pe': [
        { word: 'pecah', emoji: '💥', en: 'break' },
        { word: 'pelangi', emoji: '🌈', en: 'rainbow' },
        { word: 'pena', emoji: '🖊️', en: 'pen' }
    ],
    'pê': [
        { word: 'pekat', emoji: '☕', en: 'thick' },
        { word: 'pelan', emoji: '🐢', en: 'slow' },
        { word: 'perang', emoji: '⚔️', en: 'war' }
    ],
    'pi': [
        { word: 'piring', emoji: '🍽️', en: 'plate' },
        { word: 'pisang', emoji: '🍌', en: 'banana' },
        { word: 'pintu', emoji: '🚪', en: 'door' }
    ],
    'po': [
        { word: 'potong', emoji: '✂️', en: 'cut' },
        { word: 'pokok', emoji: '🌳', en: 'tree' },
        { word: 'pondok', emoji: '🏚️', en: 'hut' }
    ],
    'pu': [
        { word: 'pulau', emoji: '🏝️', en: 'island' },
        { word: 'putih', emoji: '⬜', en: 'white' },
        { word: 'pukul', emoji: '⏰', en: 'hit' }
    ],
    // r
    'ra': [
        { word: 'ramai', emoji: '👨‍👩‍👦', en: 'crowded' },
        { word: 'rajin', emoji: '💪', en: 'diligent' },
        { word: 'ratus', emoji: '💯', en: 'hundred' }
    ],
    're': [
        { word: 'rehat', emoji: '😌', en: 'rest' },
        { word: 'renang', emoji: '🏊', en: 'swim' },
        { word: 'reka', emoji: '🧩', en: 'design' }
    ],
    'rê': [
        { word: 'rekod', emoji: '📼', en: 'record' },
        { word: 'remaja', emoji: '🧑', en: 'teenager' },
        { word: 'reput', emoji: '🍂', en: 'rot' }
    ],
    'ri': [
        { word: 'ringan', emoji: '🕊️', en: 'light' },
        { word: 'risau', emoji: '😰', en: 'worried' },
        { word: 'rimba', emoji: '🌳', en: 'jungle' }
    ],
    'ro': [
        { word: 'robot', emoji: '🤖', en: 'robot' },
        { word: 'roti', emoji: '🍞', en: 'bread' },
        { word: 'rompak', emoji: '🏴‍☠️', en: 'rob' }
    ],
    'ru': [
        { word: 'ruang', emoji: '🛋️', en: 'space' },
        { word: 'runtuh', emoji: '🏚️', en: 'collapse' },
        { word: 'rindu', emoji: '🥺', en: 'miss' }
    ],
    // s
    'sa': [
        { word: 'sarang', emoji: '🪹', en: 'nest' },
        { word: 'salam', emoji: '🤝', en: 'greeting' },
        { word: 'sapu', emoji: '🧹', en: 'broom' }
    ],
    'se': [
        { word: 'sekolah', emoji: '🏫', en: 'school' },
        { word: 'sejuk', emoji: '❄️', en: 'cold' },
        { word: 'senyum', emoji: '😊', en: 'smile' }
    ],
    'sê': [
        { word: 'sekat', emoji: '🚧', en: 'barrier' },
        { word: 'selam', emoji: '🤿', en: 'dive' },
        { word: 'senap', emoji: '🔫', en: 'gun' }
    ],
    'si': [
        { word: 'sikat', emoji: '🪥', en: 'comb' },
        { word: 'simpul', emoji: '🪢', en: 'knot' },
        { word: 'sini', emoji: '📍', en: 'here' }
    ],
    'so': [
        { word: 'sopan', emoji: '🙇', en: 'polite' },
        { word: 'sotong', emoji: '🐙', en: 'squid' },
        { word: 'sorak', emoji: '📣', en: 'cheer' }
    ],
    'su': [
        { word: 'surat', emoji: '✉️', en: 'letter' },
        { word: 'suka', emoji: '❤️', en: 'like' },
        { word: 'susu', emoji: '🥛', en: 'milk' }
    ],
    // t
    'ta': [
        { word: 'tangan', emoji: '🖐️', en: 'hand' },
        { word: 'taman', emoji: '🌳', en: 'park' },
        { word: 'tali', emoji: '🪢', en: 'rope' }
    ],
    'te': [
        { word: 'tebal', emoji: '📚', en: 'thick' },
        { word: 'telur', emoji: '🥚', en: 'egg' },
        { word: 'tepi', emoji: '⬅️', en: 'side' }
    ],
    'tê': [
        { word: 'tekap', emoji: '🖼️', en: 'cover' },
        { word: 'teman', emoji: '👫', en: 'friend' },
        { word: 'tenang', emoji: '😌', en: 'calm' }
    ],
    'ti': [
        { word: 'tiga', emoji: '3️⃣', en: 'three' },
        { word: 'tikus', emoji: '🐭', en: 'mouse' },
        { word: 'timur', emoji: '🌄', en: 'east' }
    ],
    'to': [
        { word: 'tomat', emoji: '🍅', en: 'tomato' },
        { word: 'tokoh', emoji: '🧑‍🎓', en: 'figure' },
        { word: 'tolong', emoji: '🙏', en: 'help' }
    ],
    'tu': [
        { word: 'tulang', emoji: '🦴', en: 'bone' },
        { word: 'tumbuhan', emoji: '🌿', en: 'plant' },
        { word: 'tunai', emoji: '💵', en: 'cash' }
    ],
    // w
    'wa': [
        { word: 'warna', emoji: '🎨', en: 'color' },
        { word: 'wang', emoji: '💵', en: 'money' },
        { word: 'wajah', emoji: '😊', en: 'face' }
    ],
    'we': [
        { word: 'web', emoji: '🌐', en: 'web' },
        { word: 'wenak', emoji: '😋', en: 'delicious' },
        { word: 'wet', emoji: '💧', en: 'wet' }
    ],
    'wê': [
        { word: 'wedding', emoji: '💒', en: 'wedding' },
        { word: 'wet', emoji: '💧', en: 'wet' },
        { word: 'wereng', emoji: '🐛', en: 'pest' }
    ],
    'wi': [
        { word: 'wira', emoji: '🦸', en: 'hero' },
        { word: 'wiski', emoji: '🥃', en: 'whisky' },
        { word: 'win', emoji: '🏆', en: 'win' }
    ],
    'wo': [
        { word: 'wol', emoji: '🧶', en: 'wool' },
        { word: 'wok', emoji: '🍳', en: 'wok' },
        { word: 'wow', emoji: '😮', en: 'wow' }
    ],
    'wu': [
        { word: 'wujud', emoji: '🌌', en: 'exist' },
        { word: 'wulan', emoji: '🌙', en: 'moon' },
        { word: 'wushu', emoji: '🥋', en: 'wushu' }
    ],
    // y
    'ya': [
        { word: 'yakin', emoji: '💪', en: 'confident' },
        { word: 'yatim', emoji: '🧒', en: 'orphan' },
        { word: 'yayasan', emoji: '🏛️', en: 'foundation' }
    ],
    'ye': [
        { word: 'yemen', emoji: '🇾🇪', en: 'Yemen' },
        { word: 'yeti', emoji: '❄️', en: 'yeti' },
        { word: 'ye', emoji: '👍', en: 'yes' }
    ],
    'yê': [
        { word: 'yeti', emoji: '❄️', en: 'yeti' },
        { word: 'yek', emoji: '🤝', en: 'okay' },
        { word: 'yeks', emoji: '✅', en: 'yes' }
    ],
    'yi': [
        { word: 'yoga', emoji: '🧘', en: 'yoga' },
        { word: 'yoyo', emoji: '🪀', en: 'yo-yo' },
        { word: 'yis', emoji: '🧫', en: 'yeast' }
    ],
    'yo': [
        { word: 'yoyo', emoji: '🪀', en: 'yo-yo' },
        { word: 'yogurt', emoji: '🥛', en: 'yogurt' },
        { word: 'yola', emoji: '💡', en: 'yola' }
    ],
    'yu': [
        { word: 'yuran', emoji: '💳', en: 'fee' },
        { word: 'yusuf', emoji: '🧔', en: 'Joseph' },
        { word: 'yum', emoji: '😋', en: 'yum' }
    ],
    // z
    'za': [
        { word: 'zaman', emoji: '⌛', en: 'era' },
        { word: 'zebra', emoji: '🦓', en: 'zebra' },
        { word: 'ziarah', emoji: '🕌', en: 'visit' }
    ],
    'ze': [
        { word: 'zebra', emoji: '🦓', en: 'zebra' },
        { word: 'zen', emoji: '🧘', en: 'zen' },
        { word: 'zeta', emoji: '🇬🇷', en: 'zeta' }
    ],
    'zê': [
        { word: 'zeus', emoji: '⚡', en: 'Zeus' },
        { word: 'zero', emoji: '0️⃣', en: 'zero' },
        { word: 'zest', emoji: '🍋', en: 'zest' }
    ],
    'zi': [
        { word: 'ziarah', emoji: '🕌', en: 'visit' },
        { word: 'zim', emoji: '🧬', en: 'zyme' },
        { word: 'zip', emoji: '🤐', en: 'zip' }
    ],
    'zo': [
        { word: 'zombi', emoji: '🧟', en: 'zombie' },
        { word: 'zon', emoji: '🌍', en: 'zone' },
        { word: 'zoo', emoji: '🐾', en: 'zoo' }
    ],
    'zu': [
        { word: 'zuhal', emoji: '🪐', en: 'Saturn' },
        { word: 'zulkifli', emoji: '🧔', en: 'Zulkifli' },
        { word: 'zuppa', emoji: '🍲', en: 'soup' }
    ]
};

// ----- FUNGSI BANTU -----
function getWordsForSyllable(syl) {
    // Jika ada dalam peta, pulangkan; jika tidak, cuba cari dengan konsonan + vokal yang sama
    // Untuk 'e' taling dan 'ê' pepet, kita gunakan 'e' dan 'ê'
    if (syllableWordMap[syl]) {
        return syllableWordMap[syl];
    }
    // Cuba cari dengan menggantikan 'e' dengan 'ê' atau sebaliknya? Tidak, kita pulangkan kosong
    return [];
}

// ----- RENDER: JADUAL SUKU KATA (dengan perkataan contoh & bunyi) -----
function renderSukuKataTable() {
    const container = document.getElementById('sukuKataTable');
    if (!container) return;

    const vowelOrder = ['a', 'e', 'i', 'o', 'u', 'ê'];
    const consonantOrder = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];

    const colors = {
        'a': '#e74c3c',
        'e': '#2ecc71',
        'i': '#3498db',
        'o': '#f39c12',
        'u': '#9b59b6',
        'ê': '#f1c40f'
    };

    // Display labels: 'e' untuk taling, 'é' untuk pepet
    const displayVowels = ['a', 'e', 'i', 'o', 'u', 'é'];

    let html = `
        <div style="background:#f5faff; border-radius:50px; padding:20px 15px; border:5px solid #b8d8e8; box-shadow:0 10px 25px rgba(0,0,0,0.06); margin-bottom:25px;">
            <h2 style="text-align:center; font-size:2.8rem; color:#1a4a5c; margin-bottom:10px; font-family:'Patrick Hand',cursive;">📖 JADUAL SUKU KATA</h2>
            <div style="overflow-x:auto; -webkit-overflow-scrolling:touch;">
                <table style="width:100%; border-collapse:collapse; font-family:'Patrick Hand',cursive; font-size:2rem; text-align:center; min-width:600px;">
                    <thead>
                        <tr style="background:#6a1b4d; color:white; border-radius:20px 20px 0 0;">
                            <th style="padding:14px 8px; border:3px solid #4a1a3a; border-radius:20px 0 0 0; font-size:2rem;">Konsonan</th>`;

    for (let i = 0; i < vowelOrder.length; i++) {
        const v = vowelOrder[i];
        const label = displayVowels[i];
        const color = colors[v];
        html += `<th style="padding:14px 8px; border:3px solid #4a1a3a; font-size:2rem; color:${color};">${label}</th>`;
    }

    html += `</tr></thead><tbody>`;

    const rowColors = ['#fff0f0','#f0fff0','#f0f0ff','#fff5e0','#f5f0ff'];
    for (let i = 0; i < consonantOrder.length; i++) {
        const c = consonantOrder[i];
        const bg = rowColors[i % rowColors.length];
        html += `<tr style="background:${bg}; border-bottom:3px solid #e0e0e0;">`;
        html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-weight:bold; font-size:2.6rem; color:#4a1e3a; background:#ffffffdd;">${c}</td>`;

        for (const v of vowelOrder) {
            const syl = c + ((v === 'ê') ? 'ê' : v); // untuk pepet, kita gunakan 'ê'
            const color = colors[v];
            // Gunakan display label yang sesuai untuk sel (tunjukkan 'e' untuk taling, 'é' untuk pepet)
            const displaySyl = c + ((v === 'ê') ? 'é' : v);
            html += `<td style="padding:16px 8px; border:2px solid #d0d0d0; font-size:2.4rem; cursor:pointer; transition:0.15s; background:#ffffffcc; color:${color}; font-weight:bold;" 
                        class="syllable-cell" data-syl="${syl}"
                        onmouseover="this.style.background='#ffe6b0'" 
                        onmouseout="this.style.background='#ffffffcc'">
                        ${displaySyl}
                    </td>`;
        }
        html += `</tr>`;
    }

    html += `</tbody></table></div>
        <p style="text-align:center; margin-top:14px; font-size:1.4rem; color:#7a6a6a;">👆 Klik pada mana-mana suku kata untuk lihat contoh perkataan, ayat & dengar sebutan.</p>
        <p style="text-align:center; font-size:1.2rem; color:#7a6a6a;">🔊 Dua jenis 'e': <span style="color:#2ecc71;">e (taling)</span> dan <span style="color:#f1c40f;">é (pepet)</span></p>
    </div>`;

    container.innerHTML = html;

    // ===== Event listener untuk setiap sel =====
    document.querySelectorAll('.syllable-cell').forEach(cell => {
        cell.addEventListener('click', function() {
            const syl = this.dataset.syl; // contoh: 'ba', 'bê'
            const words = getWordsForSyllable(syl);
            if (!words || words.length === 0) {
                // Jika tiada perkataan, beritahu
                alert('Maaf, tiada contoh perkataan untuk suku kata ini.');
                return;
            }

            // Bina modal
            let modalHtml = `<div class="modal-title">🔡 Suku Kata "${syl}"</div>
                <div style="text-align:center; font-size:1.6rem; margin-bottom:15px; color:#4a6a5a;">Klik pada mana-mana perkataan untuk dengar sebutan.</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">`;

            for (const item of words) {
                const word = item.word;
                const emoji = item.emoji || '';
                const en = item.en || '';
                // Butang bunyi BM dan EN
                modalHtml += `<div style="background:#f8f0f5; border-radius:30px; padding:15px; text-align:center; border:3px solid #e8d0dc;">
                    <div style="font-size:3rem;">${emoji}</div>
                    <div style="font-size:2.2rem; font-weight:bold;">${word}</div>
                    <div style="font-size:1.2rem; color:#7a5a6a;">${en}</div>
                    <div style="margin-top:8px;">
                        <button onclick="speak('${word}','ms-MY')" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:6px 16px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:2px;">🔊 BM</button>
                        ${en ? `<button onclick="speak('${en}','en-US')" style="background:#2a4a6a; color:white; border:none; border-radius:40px; padding:6px 16px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:2px;">🔊 EN</button>` : ''}
                    </div>
                </div>`;
            }

            modalHtml += `</div>`;
            openModal(modalHtml);
        });
    });
}

// ================================================================
// FUNGSI RENDER LAMA (TIDAK DIGUNAKAN LAGI) – disembunyikan
// ================================================================
// function renderCV() { ... } // tidak dipanggil

// Eksport fungsi utama (jika perlu)
// (Tiada eksport kerana kita gunakan dalam skrip global)
