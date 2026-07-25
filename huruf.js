// ===== ALPHABET DATA =====
// Setiap huruf ada 4 Inggeris, 4 Melayu, dan 4 emoji unik
const alphabetData = {
    A: { en: ['Apple','Ant','Airplane','Alligator'], ms: ['Api','Angsa','Awan','Alpukat'], emoji: ['🍎','🐜','✈️','🐊'] },
    B: { en: ['Ball','Banana','Bird','Boat'], ms: ['Bola','Pisang','Burung','Bot'], emoji: ['⚽','🍌','🐦','🚤'] },
    C: { en: ['Cat','Car','Cake','Cow'], ms: ['Kucing','Kereta','Kek','Lembu'], emoji: ['🐱','🚗','🎂','🐄'] },
    D: { en: ['Dog','Dolphin','Door','Duck'], ms: ['Anjing','Lumba-lumba','Pintu','Itik'], emoji: ['🐶','🐬','🚪','🦆'] },
    E: { en: ['Elephant','Egg','Eye','Eagle'], ms: ['Gajah','Telur','Mata','Helang'], emoji: ['🐘','🥚','👁️','🦅'] },
    F: { en: ['Fish','Flower','Fire','Fox'], ms: ['Ikan','Bunga','Api','Musang'], emoji: ['🐟','🌸','🔥','🦊'] },
    G: { en: ['Guitar','Giraffe','Grape','Goat'], ms: ['Gitar','Zirafah','Anggur','Kambing'], emoji: ['🎸','🦒','🍇','🐐'] },
    H: { en: ['House','Horse','Honey','Hippo'], ms: ['Rumah','Kuda','Madu','Badak'], emoji: ['🏠','🐴','🍯','🦛'] },
    I: { en: ['Ice cream','Island','Iguana','Ice'], ms: ['Ais krim','Pulau','Biawak','Ais'], emoji: ['🍦','🏝️','🦎','🧊'] },
    J: { en: ['Juice','Jellyfish','Jacket','Jam'], ms: ['Jus','Ubur-ubur','Jaket','Jem'], emoji: ['🧃','🪼','🧥','🍓'] },
    K: { en: ['Kite','Koala','Key','King'], ms: ['Layang-layang','Koala','Kunci','Raja'], emoji: ['🪁','🐨','🔑','👑'] },
    L: { en: ['Lion','Lemon','Ladybug','Moon'], ms: ['Singa','Lemon','Kumbang','Bulan'], emoji: ['🦁','🍋','🐞','🌙'] },
    M: { en: ['Monkey','Mushroom','Car','Mouse'], ms: ['Monyet','Cendawan','Kereta','Tikus'], emoji: ['🐒','🍄','🚗','🐭'] },
    N: { en: ['Nest','Nut','Owl','Needle'], ms: ['Sarang','Kacang','Burung hantu','Jarum'], emoji: ['🪹','🥜','🦉','🧵'] },
    O: { en: ['Octopus','Orange','Owl','Ball'], ms: ['Sotong','Oren','Burung hantu','Bola'], emoji: ['🐙','🍊','🦉','⚽'] },
    P: { en: ['Penguin','Pizza','Parrot','Pencil'], ms: ['Penguin','Pizza','Bebek','Pensil'], emoji: ['🐧','🍕','🦜','✏️'] },
    Q: { en: ['Queen','Quail','Question','Quilt'], ms: ['Ratu','Burung puyuh','Soalan','Selimut'], emoji: ['👑','🐦','❓','🧵'] },
    R: { en: ['Rabbit','Rainbow','Rocket','Rat'], ms: ['Arnab','Pelangi','Roket','Tikus'], emoji: ['🐇','🌈','🚀','🐀'] },
    S: { en: ['Snake','Star','Sea','Sun'], ms: ['Ular','Bintang','Laut','Matahari'], emoji: ['🐍','⭐','🌊','☀️'] },
    T: { en: ['Tiger','Tomato','Train','Tree'], ms: ['Harimau','Tomato','Kereta api','Pokok'], emoji: ['🐯','🍅','🚂','🌳'] },
    U: { en: ['Umbrella','Unicorn','Up','Utensil'], ms: ['Payung','Unikorn','Naik','Alat makan'], emoji: ['☂️','🦄','⬆️','🍴'] },
    V: { en: ['Volleyball','Violin','Volcano','Van'], ms: ['Bola tampar','Biola','Gunung berapi','Van'], emoji: ['🏐','🎻','🌋','🚐'] },
    W: { en: ['Whale','Water','Wagon','Watermelon'], ms: ['Paus','Air','Kereta kuda','Tembikai'], emoji: ['🐳','💧','🛒','🍉'] },
    X: { en: ['X-ray','Xylophone','Xenops','Xerus'], ms: ['X-ray','Gambang','Burung xenops','Tupai'], emoji: ['🩻','🎷','🐦','🐿️'] },
    Y: { en: ['Yarn','Yellow','Yogurt','Yak'], ms: ['Benang','Kuning','Yogurt','Yak'], emoji: ['🧶','🟡','🥛','🐂'] },
    Z: { en: ['Zebra','Zigzag','Zipper','Zoo'], ms: ['Zebra','Zig-zag','Zip','Zoo'], emoji: ['🦓','〰️','🤐','🏞️'] }
};

// ===== RENDER =====
function renderAlphabet() {
    const grid = document.getElementById('alphabetGrid');
    let html = '';
    for (const [letter, data] of Object.entries(alphabetData)) {
        const emojis = data.emoji.join('');
        html += `<div class="card" data-letter="${letter}">
            <div class="big">${letter}</div>
            <div class="emoji-row">${emojis}</div>
            <div class="label">Klik untuk contoh</div>
        </div>`;
    }
    grid.innerHTML = html;

    document.querySelectorAll('#alphabetGrid .card').forEach(card => {
        card.addEventListener('click', function() {
            const letter = this.dataset.letter;
            const data = alphabetData[letter];
            if (!data) return;
            let html = `<div class="modal-title">🔤 Huruf ${letter}</div>
                <div class="modal-examples">
                <div style="background:#e8f0fe;border-radius:30px;padding:15px;"><h3 style="font-size:1.6rem;color:#1a4a6a;">🇬🇧 English</h3>`;
            for (const w of data.en) html += `<div class="example-item"><span class="en">${w}</span></div>`;
            html += `</div><div style="background:#e8f5e8;border-radius:30px;padding:15px;"><h3 style="font-size:1.6rem;color:#2a6a3a;">🇲🇾 Melayu</h3>`;
            for (const w of data.ms) html += `<div class="example-item"><span class="ms">${w}</span></div>`;
            html += `</div></div>`;
            // Tambah butang dengar
            html += `<div style="text-align:center;margin-top:15px;">
                <button onclick="speak('${data.en[0]}','en-US')" style="background:#6a1b4d;color:white;border:none;border-radius:40px;padding:8px 20px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 English</button>
                <button onclick="speak('${data.ms[0]}','ms-MY')" style="background:#2a6a3a;color:white;border:none;border-radius:40px;padding:8px 20px;font-size:1.2rem;cursor:pointer;font-family:'Patrick Hand',cursive;margin:4px;">🔊 Melayu</button>
            </div>`;
            openModal(html);
        });
    });
}