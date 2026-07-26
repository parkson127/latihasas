// ================================================================
// HURUF.JS – Data dan Render Alphabet (dengan bunyi setiap contoh)
// ================================================================

// ----- DATA ALPHABET -----
const alphabetData = {
    A: { 
        en: ['Apple', 'Ant', 'Airplane', 'Alligator'], 
        ms: ['Api', 'Angsa', 'Awan', 'Arnab'], 
        emoji: ['🍎', '🐜', '✈️', '🐊'] 
    },
    B: { 
        en: ['Ball', 'Banana', 'Bird', 'Boat'], 
        ms: ['Bola', 'Betik', 'Burung', 'Bot'], 
        emoji: ['⚽', '🍌', '🐦', '🚤'] 
    },
    C: { 
        en: ['Cat', 'Car', 'Cake', 'Cow'], 
        ms: ['Cawan', 'Cili', 'Coklat', 'Cuka'],
        emoji: ['🐱', '🚗', '🎂', '🐄'] 
    },
    D: { 
        en: ['Dog', 'Dolphin', 'Door', 'Duck'], 
        ms: ['Dapur', 'Dewan', 'Dinding', 'Dompet'], 
        emoji: ['🐶', '🐬', '🚪', '🦆'] 
    },
    E: { 
        en: ['Elephant', 'Egg', 'Eye', 'Eagle'], 
        ms: ['Epal', 'Emas', 'Ekor', 'Enjin'], 
        emoji: ['🐘', '🥚', '👁️', '🦅'] 
    },
    F: { 
        en: ['Fish', 'Flower', 'Fire', 'Fox'], 
        ms: ['Feri', 'Fesyen', 'Filem', 'Foto'], 
        emoji: ['🐟', '🌸', '🔥', '🦊'] 
    },
    G: { 
        en: ['Guitar', 'Giraffe', 'Grape', 'Goat'], 
        ms: ['Gajah', 'Gelas', 'Gigi', 'Gula'], 
        emoji: ['🎸', '🦒', '🍇', '🐐'] 
    },
    H: { 
        en: ['House', 'Horse', 'Honey', 'Hippo'], 
        ms: ['Hari', 'Hujan', 'Hati', 'Helang'], 
        emoji: ['🏠', '🐴', '🍯', '🦛'] 
    },
    I: { 
        en: ['Ice cream', 'Island', 'Iguana', 'Ice'], 
        ms: ['Ikan', 'Itik', 'Ikat', 'Ibu'], 
        emoji: ['🍦', '🏝️', '🦎', '🧊'] 
    },
    J: { 
        en: ['Juice', 'Jellyfish', 'Jacket', 'Jam'], 
        ms: ['Jus', 'Jala', 'Jaket', 'Jem'], 
        emoji: ['🧃', '🪼', '🧥', '🍓'] 
    },
    K: { 
        en: ['Kite', 'Koala', 'Key', 'King'], 
        ms: ['Kucing', 'Kereta', 'Kek', 'Kambing'], 
        emoji: ['🪁', '🐨', '🔑', '👑'] 
    },
    L: { 
        en: ['Lion', 'Lemon', 'Ladybug', 'Lamp'], 
        ms: ['Lembu', 'Lilin', 'Lampu', 'Lapan'], 
        emoji: ['🦁', '🍋', '🐞', '💡'] 
    },
    M: { 
        en: ['Monkey', 'Mushroom', 'Moon', 'Mouse'], 
        ms: ['Monyet', 'Mata', 'Makan', 'Minum'], 
        emoji: ['🐒', '🍄', '🌙', '🐭'] 
    },
    N: { 
        en: ['Nest', 'Nut', 'Needle', 'Nose'], 
        ms: ['Nasi', 'Nombor', 'Nenek', 'Naga'], 
        emoji: ['🪹', '🥜', '🧵', '👃'] 
    },
    O: { 
        en: ['Octopus', 'Orange', 'Owl', 'Oven'], 
        ms: ['Oren', 'Otot', 'Ombak', 'Orang'], 
        emoji: ['🐙', '🍊', '🦉', '🔥'] 
    },
    P: { 
        en: ['Penguin', 'Pizza', 'Parrot', 'Pencil'], 
        ms: ['Pisang', 'Pensil', 'Pagi', 'Pintu'], 
        emoji: ['🐧', '🍕', '🦜', '✏️'] 
    },
    Q: { 
        en: ['Queen', 'Quail', 'Question', 'Quilt'], 
        ms: ['Qari', 'Qasidah', 'Qiam', 'Quran'], 
        emoji: ['👑', '🐦', '❓', '🧵'] 
    },
    R: { 
        en: ['Rabbit', 'Rainbow', 'Rocket', 'Rat'], 
        ms: ['Rumah', 'Renang', 'Roti', 'Rusa'], 
        emoji: ['🐇', '🌈', '🚀', '🐀'] 
    },
    S: { 
        en: ['Snake', 'Star', 'Sun', 'Ship'], 
        ms: ['Sukan', 'Sekolah', 'Sikat', 'Sapu'], 
        emoji: ['🐍', '⭐', '☀️', '⛵'] 
    },
    T: { 
        en: ['Tiger', 'Tomato', 'Train', 'Tree'], 
        ms: ['Tangan', 'Telur', 'Tikus', 'Tulang'], 
        emoji: ['🐯', '🍅', '🚂', '🌳'] 
    },
    U: { 
        en: ['Umbrella', 'Unicorn', 'Up', 'Utensil'], 
        ms: ['Ular', 'Ubi', 'Udang', 'Ujung'], 
        emoji: ['☂️', '🦄', '⬆️', '🍴'] 
    },
    V: { 
        en: ['Volleyball', 'Violin', 'Volcano', 'Van'], 
        ms: ['Vaksin', 'Van', 'Vila', 'Vokal'], 
        emoji: ['🏐', '🎻', '🌋', '🚐'] 
    },
    W: { 
        en: ['Whale', 'Watermelon', 'Wagon', 'Worm'], 
        ms: ['Warna', 'Wang', 'Wajah', 'Wira'], 
        emoji: ['🐳', '🍉', '🛒', '🐛'] 
    },
    X: { 
        en: ['X-ray', 'Xylophone', 'Xenops', 'Xerus'], 
        ms: ['X-ray', 'Xilem', 'Xilofon', 'Xenia'], 
        emoji: ['🩻', '🎷', '🐦', '🐿️'] 
    },
    Y: { 
        en: ['Yarn', 'Yellow', 'Yogurt', 'Yak'], 
        ms: ['Yakin', 'Yatim', 'Yoyo', 'Yuran'], 
        emoji: ['🧶', '🟡', '🥛', '🐂'] 
    },
    Z: { 
        en: ['Zebra', 'Zigzag', 'Zipper', 'Zoo'], 
        ms: ['Zaman', 'Zip', 'Ziarah', 'Zon'], 
        emoji: ['🦓', '〰️', '🤐', '🏞️'] 
    }
};

// ================================================================
// RENDER ALPHABET
// ================================================================

function renderAlphabet() {
    const grid = document.getElementById('alphabetGrid');
    if (!grid) return;

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

    // Event listener untuk setiap kad
    document.querySelectorAll('#alphabetGrid .card').forEach(card => {
        card.addEventListener('click', function() {
            const letter = this.dataset.letter;
            const data = alphabetData[letter];
            if (!data) return;

            let modalHtml = `<div class="modal-title">🔤 Huruf ${letter}</div>
                <div class="modal-examples">
                <div style="background:#e8f0fe; border-radius:30px; padding:15px;">
                    <h3 style="font-size:1.6rem; color:#1a4a6a;">🇬🇧 English</h3>`;

            // Setiap perkataan Inggeris dengan onclick
            for (const w of data.en) {
                modalHtml += `<div class="example-item" onclick="speak('${w}','en-US')" style="cursor:pointer; transition:0.15s; background:#dce8f5;" 
                                    onmouseover="this.style.background='#b0c8e8'" onmouseout="this.style.background='#dce8f5'">
                                <span class="en">${w}</span> 
                                <span style="font-size:1.2rem; color:#6a8aaa;">🔊</span>
                            </div>`;
            }

            modalHtml += `</div>
                <div style="background:#e8f5e8; border-radius:30px; padding:15px;">
                    <h3 style="font-size:1.6rem; color:#2a6a3a;">🇲🇾 Melayu</h3>`;

            // Setiap perkataan Melayu dengan onclick
            for (const w of data.ms) {
                modalHtml += `<div class="example-item" onclick="speak('${w}','ms-MY')" style="cursor:pointer; transition:0.15s; background:#d4ecd4;" 
                                    onmouseover="this.style.background='#a8d8a8'" onmouseout="this.style.background='#d4ecd4'">
                                <span class="ms">${w}</span> 
                                <span style="font-size:1.2rem; color:#3a7a3a;">🔊</span>
                            </div>`;
            }

            modalHtml += `</div></div>`;

            // Butang dengar (untuk keseluruhan bahasa) – tambahan
            modalHtml += `<div style="text-align:center; margin-top:15px;">
                <button onclick="speak('${data.en[0]}','en-US')" style="background:#6a1b4d; color:white; border:none; border-radius:40px; padding:8px 20px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:4px;">🔊 English</button>
                <button onclick="speak('${data.ms[0]}','ms-MY')" style="background:#2a6a3a; color:white; border:none; border-radius:40px; padding:8px 20px; font-size:1.2rem; cursor:pointer; font-family:'Patrick Hand',cursive; margin:4px;">🔊 Melayu</button>
            </div>`;

            openModal(modalHtml);
        });
    });
}
