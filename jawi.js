// ============================================================
// jawi.js - Data Tulisan Arab + Emoji + Iqra (Pecahan Suku Kata)
// Versi dengan Event Delegation & Debug Console
// ============================================================

const jawiData = [
  // ===== 28 HURUF ARAB =====
  { char: 'ا', examples: [{ ar: 'أَرْنَب', emoji: '🐇', iqra: 'ar-nab' }, { ar: 'أُمّ', emoji: '👩', iqra: 'umm' }, { ar: 'أَسَد', emoji: '🦁', iqra: 'a-sad' }] },
  { char: 'ب', examples: [{ ar: 'بُولَة', emoji: '⚽', iqra: 'bu-lah' }, { ar: 'بِنْت', emoji: '👧', iqra: 'bint' }, { ar: 'بَاب', emoji: '🚪', iqra: 'baab' }] },
  { char: 'ت', examples: [{ ar: 'تِلْمِيذ', emoji: '🧑‍🎓', iqra: 'til-miiz' }, { ar: 'تُمَام', emoji: '✅', iqra: 'tu-maam' }, { ar: 'تِين', emoji: '🍇', iqra: 'tiin' }] },
  { char: 'ث', examples: [{ ar: 'ثَعْلَب', emoji: '🦊', iqra: 'tsa-lab' }, { ar: 'ثَمَر', emoji: '🍎', iqra: 'tsa-mar' }, { ar: 'ثُوم', emoji: '🧄', iqra: 'tsuum' }] },
  { char: 'ج', examples: [{ ar: 'جَمَل', emoji: '🐫', iqra: 'ja-mal' }, { ar: 'جُبْن', emoji: '🧀', iqra: 'jubn' }, { ar: 'جَامِعَة', emoji: '🏫', iqra: 'ja-mi-ah' }] },
  { char: 'ح', examples: [{ ar: 'حَلِيب', emoji: '🥛', iqra: 'ha-lib' }, { ar: 'حُوت', emoji: '🐳', iqra: 'huut' }, { ar: 'حَجّ', emoji: '🕋', iqra: 'hajj' }] },
  { char: 'خ', examples: [{ ar: 'خُبْز', emoji: '🍞', iqra: 'khubz' }, { ar: 'خَرُوف', emoji: '🐏', iqra: 'kha-ruuf' }, { ar: 'خِيَار', emoji: '🥒', iqra: 'khi-yar' }] },
  { char: 'د', examples: [{ ar: 'دِيك', emoji: '🐓', iqra: 'diik' }, { ar: 'دُبّ', emoji: '🐻', iqra: 'dubb' }, { ar: 'دَوْر', emoji: '🔄', iqra: 'daur' }] },
  { char: 'ذ', examples: [{ ar: 'ذَنَب', emoji: '🐕', iqra: 'dza-nab' }, { ar: 'ذَهَب', emoji: '💛', iqra: 'dza-hab' }, { ar: 'ذِرَاع', emoji: '💪', iqra: 'dhi-raa' }] },
  { char: 'ر', examples: [{ ar: 'رَجُل', emoji: '🧑', iqra: 'ra-jul' }, { ar: 'رِيح', emoji: '💨', iqra: 'riih' }, { ar: 'رُمّان', emoji: '🍎', iqra: 'rum-man' }] },
  { char: 'ز', examples: [{ ar: 'زَهْرَة', emoji: '🌺', iqra: 'zah-rah' }, { ar: 'زَيْتُون', emoji: '🫒', iqra: 'zai-tuun' }, { ar: 'زَمَن', emoji: '⏳', iqra: 'za-man' }] },
  { char: 'س', examples: [{ ar: 'سَمَك', emoji: '🐟', iqra: 'sa-mak' }, { ar: 'سَلَام', emoji: '🕊️', iqra: 'sa-laam' }, { ar: 'سُكَّر', emoji: '🍭', iqra: 'suk-kar' }] },
  { char: 'ش', examples: [{ ar: 'شَمْس', emoji: '☀️', iqra: 'syams' }, { ar: 'شَاي', emoji: '🍵', iqra: 'syaay' }, { ar: 'شَرَاب', emoji: '🥤', iqra: 'sya-raab' }] },
  { char: 'ص', examples: [{ ar: 'صَبْر', emoji: '🧘', iqra: 'shabr' }, { ar: 'صَوْت', emoji: '🔊', iqra: 'shawt' }, { ar: 'صَحْرَاء', emoji: '🏜️', iqra: 'sah-raa' }] },
  { char: 'ض', examples: [{ ar: 'ضِفْدَع', emoji: '🐸', iqra: 'dhif-da' }, { ar: 'ضَوْء', emoji: '💡', iqra: 'dhau' }, { ar: 'ضِرْس', emoji: '🦷', iqra: 'dhir-s' }] },
  { char: 'ط', examples: [{ ar: 'طَائِر', emoji: '🐦', iqra: 'thaa-ir' }, { ar: 'طُول', emoji: '📏', iqra: 'thuul' }, { ar: 'طِبّ', emoji: '💉', iqra: 'thibb' }] },
  { char: 'ظ', examples: [{ ar: 'ظِلّ', emoji: '🌳', iqra: 'zhill' }, { ar: 'ظُفْر', emoji: '💅', iqra: 'zhufr' }, { ar: 'ظَهْر', emoji: '🤝', iqra: 'zahr' }] },
  { char: 'ع', examples: [{ ar: 'عَيْن', emoji: '👁️', iqra: 'ayn' }, { ar: 'عَسَل', emoji: '🍯', iqra: 'a-sal' }, { ar: 'عِلْم', emoji: '📚', iqra: 'ilm' }] },
  { char: 'غ', examples: [{ ar: 'غَيْمَة', emoji: '☁️', iqra: 'ghay-mah' }, { ar: 'غَزَال', emoji: '🦌', iqra: 'gha-zaal' }, { ar: 'غُرُوب', emoji: '🌅', iqra: 'ghu-ruub' }] },
  { char: 'ف', examples: [{ ar: 'فِيل', emoji: '🐘', iqra: 'fiil' }, { ar: 'فَرَاشَة', emoji: '🦋', iqra: 'fa-raa-shah' }, { ar: 'فَم', emoji: '👄', iqra: 'fam' }] },
  { char: 'ق', examples: [{ ar: 'قَمَر', emoji: '🌙', iqra: 'qa-mar' }, { ar: 'قَلَم', emoji: '✏️', iqra: 'qa-lam' }, { ar: 'قَرْن', emoji: '🦏', iqra: 'qarn' }] },
  { char: 'ك', examples: [{ ar: 'كَلْب', emoji: '🐶', iqra: 'kalb' }, { ar: 'كِتَاب', emoji: '📖', iqra: 'ki-taab' }, { ar: 'كَأْس', emoji: '🥤', iqra: 'kas' }] },
  { char: 'ل', examples: [{ ar: 'لَيْل', emoji: '🌙', iqra: 'layl' }, { ar: 'لَبَن', emoji: '🥛', iqra: 'la-ban' }, { ar: 'لَوْن', emoji: '🎨', iqra: 'lawn' }] },
  { char: 'م', examples: [{ ar: 'مَاء', emoji: '💧', iqra: 'maa' }, { ar: 'مَدْرَسَة', emoji: '🏫', iqra: 'mad-ra-sah' }, { ar: 'مِكْنَسَة', emoji: '🧹', iqra: 'mik-na-sah' }] },
  { char: 'ن', examples: [{ ar: 'نُور', emoji: '✨', iqra: 'nuur' }, { ar: 'نَجْم', emoji: '⭐', iqra: 'najm' }, { ar: 'نَوْم', emoji: '😴', iqra: 'nawm' }] },
  { char: 'و', examples: [{ ar: 'وَرْدَة', emoji: '🌹', iqra: 'war-dah' }, { ar: 'وَجْه', emoji: '😊', iqra: 'wajh' }, { ar: 'وَزْن', emoji: '⚖️', iqra: 'wazn' }] },
  { char: 'ه', examples: [{ ar: 'هَدِيَّة', emoji: '🎁', iqra: 'ha-diy-yah' }, { ar: 'هَوَاء', emoji: '🌬️', iqra: 'ha-waa' }, { ar: 'هَاتِف', emoji: '📱', iqra: 'ha-tif' }] },
  { char: 'ي', examples: [{ ar: 'يَد', emoji: '🖐️', iqra: 'yad' }, { ar: 'يَوْم', emoji: '📅', iqra: 'yawm' }, { ar: 'يَمِين', emoji: '👉', iqra: 'ya-min' }] },

  // ===== 4 HURUF TAMBAHAN JAWI MELAYU =====
  { char: 'چ', examples: [{ ar: 'جَاوَنْ', emoji: '☕', iqra: 'ja-wan' }, { ar: 'جِجَق', emoji: '🦎', iqra: 'ji-jaq' }, { ar: 'جِنْتَا', emoji: '❤️', iqra: 'jin-ta' }] },
  { char: 'ڤ', examples: [{ ar: 'بَايَڠ', emoji: '☂️', iqra: 'ba-yang' }, { ar: 'بِنْسِل', emoji: '✏️', iqra: 'bin-sil' }, { ar: 'بَاسِير', emoji: '🏖️', iqra: 'ba-sir' }] },
  { char: 'ݢ', examples: [{ ar: 'جَاجَه', emoji: '🐘', iqra: 'ja-jah' }, { ar: 'جَارَم', emoji: '🧂', iqra: 'ja-ram' }, { ar: 'جَوْل', emoji: '⚽', iqra: 'jawl' }] },
  { char: 'ڠ', examples: [{ ar: 'نْجِيلُو', emoji: '🦷', iqra: 'nji-lu' }, { ar: 'نْجَارَڠ', emoji: '🍽️', iqra: 'nja-rang' }, { ar: 'نْجَاڠ', emoji: '👄', iqra: 'njang' }] }
];

// ===== FUNGSI RENDER (dengan Event Delegation & Debug) =====
function renderJawi() {
  const grid = document.getElementById('jawiGrid');
  if (!grid) {
    console.error('❌ Elemen #jawiGrid tidak dijumpai!');
    return;
  }

  // Bina kad
  let html = '';
  for (const item of jawiData) {
    const exList = item.examples.slice(0, 3);
    const exHtml = exList.map(ex =>
      `<span style="font-size:1.8rem;font-family:'Traditional Arabic','Arabic Typesetting',serif;display:inline-block;margin:0 6px;background:#f0f0f0;padding:2px 10px;border-radius:20px;">${ex.ar}</span>`
    ).join('');

    html += `<div class="jawi-card" data-char="${item.char}">
      <div class="jawi-char">${item.char}</div>
      <div style="font-size:1.2rem;color:#3a5a3a;margin-top:4px;">${exHtml}</div>
      <div style="font-size:0.9rem;color:#888;margin-top:2px;">👆 Klik untuk lihat</div>
    </div>`;
  }
  grid.innerHTML = html;

  // -------- GUNA EVENT DELEGATION (lebih stabil) --------
  grid.addEventListener('click', function(e) {
    // Cari kad yang diklik (termasuk jika klik pada anaknya)
    const card = e.target.closest('.jawi-card');
    if (!card) return;

    const char = card.dataset.char;
    console.log('✅ Anda klik huruf:', char); // <-- Debug di konsol

    const item = jawiData.find(d => d.char === char);
    if (!item) {
      console.warn('⚠️ Huruf tidak dijumpai dalam data:', char);
      alert('Maaf, data untuk huruf ini tiada. Sila semak konsol (F12).');
      return;
    }

    // Bina Modal
    let modalHtml = `
      <div class="modal-overlay" onclick="closeModal(event)">
        <div class="modal-content" onclick="event.stopPropagation();">
          <span class="modal-close" onclick="closeModal(event)">&times;</span>
          <div style="text-align:center;font-size:4rem;font-family:'Traditional Arabic','Arabic Typesetting',serif;margin-bottom:10px;">${item.char}</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px,1fr));gap:16px;">
    `;

    for (const ex of item.examples) {
      modalHtml += `
        <div style="background:#f8f0e8;border-radius:30px;padding:15px 10px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
          <div style="font-size:2.4rem;font-family:'Traditional Arabic','Arabic Typesetting',serif;">${ex.ar}</div>
          <div style="font-size:3.2rem;margin:6px 0;">${ex.emoji}</div>
          <div style="font-size:1rem;color:#2a5a2a;background:#e6f0e6;border-radius:20px;padding:4px 12px;display:inline-block;font-weight:bold;">
            📖 Iqra: ${ex.iqra}
          </div>
        </div>
      `;
    }

    modalHtml += `
          </div>
        </div>
      </div>
    `;

    // Buang modal lama jika ada
    const oldModal = document.querySelector('.modal-overlay');
    if (oldModal) oldModal.remove();

    // Masukkan modal ke dalam body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    console.log('✅ Modal berjaya dipaparkan untuk huruf:', char);
  });

  console.log('✅ Jawi Grid berjaya diload. Jumlah huruf:', jawiData.length);
}

// ===== FUNGSI TUTUP MODAL =====
function closeModal(event) {
  const overlay = event.currentTarget.closest('.modal-overlay') || document.querySelector('.modal-overlay');
  if (overlay) overlay.remove();
}

// ===== JALANKAN RENDER SELEPAS DOM SIAP =====
document.addEventListener('DOMContentLoaded', renderJawi);
