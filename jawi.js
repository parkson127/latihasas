// ============================================================
// jawi.js - Data Tulisan Arab + Emoji + Pecahan (Tajwid)
// Untuk kanak-kanak 3-4 tahun (Tiada campuran Bahasa Melayu)
// ============================================================

// ===== DATA HURUF =====
const jawiData = [
  // 1. Alif
  {
    char: 'ا',
    examples: [
      { ar: 'أَرْنَب', emoji: '🐇', pecahan: 'ar-nab' },
      { ar: 'أُمّ', emoji: '👩', pecahan: 'umm' },
      { ar: 'أَسَد', emoji: '🦁', pecahan: 'a-sad' }
    ]
  },
  // 2. Ba
  {
    char: 'ب',
    examples: [
      { ar: 'بُولَة', emoji: '⚽', pecahan: 'bu-lah' },
      { ar: 'بِنْت', emoji: '👧', pecahan: 'bint' },
      { ar: 'بَاب', emoji: '🚪', pecahan: 'baab' }
    ]
  },
  // 3. Ta
  {
    char: 'ت',
    examples: [
      { ar: 'تِلْمِيذ', emoji: '🧑‍🎓', pecahan: 'til-miiz' },
      { ar: 'تُمَام', emoji: '✅', pecahan: 'tu-maam' },
      { ar: 'تِين', emoji: '🍇', pecahan: 'tiin' }
    ]
  },
  // 4. Tsa
  {
    char: 'ث',
    examples: [
      { ar: 'ثَعْلَب', emoji: '🦊', pecahan: 'tsa-lab' },
      { ar: 'ثَمَر', emoji: '🍎', pecahan: 'tsa-mar' },
      { ar: 'ثُوم', emoji: '🧄', pecahan: 'tsuum' }
    ]
  },
  // 5. Jim
  {
    char: 'ج',
    examples: [
      { ar: 'جَمَل', emoji: '🐫', pecahan: 'ja-mal' },
      { ar: 'جُبْن', emoji: '🧀', pecahan: 'jubn' },
      { ar: 'جَامِعَة', emoji: '🏫', pecahan: 'ja-mi-ah' }
    ]
  },
  // 6. Ha (ح)
  {
    char: 'ح',
    examples: [
      { ar: 'حَلِيب', emoji: '🥛', pecahan: 'ha-lib' },
      { ar: 'حُوت', emoji: '🐳', pecahan: 'huut' },
      { ar: 'حَجّ', emoji: '🕋', pecahan: 'hajj' }
    ]
  },
  // 7. Kho
  {
    char: 'خ',
    examples: [
      { ar: 'خُبْز', emoji: '🍞', pecahan: 'khubz' },
      { ar: 'خَرُوف', emoji: '🐏', pecahan: 'kha-ruuf' },
      { ar: 'خِيَار', emoji: '🥒', pecahan: 'khi-yar' }
    ]
  },
  // 8. Dal
  {
    char: 'د',
    examples: [
      { ar: 'دِيك', emoji: '🐓', pecahan: 'diik' },
      { ar: 'دُبّ', emoji: '🐻', pecahan: 'dubb' },
      { ar: 'دَوْر', emoji: '🔄', pecahan: 'daur' }
    ]
  },
  // 9. Dzal
  {
    char: 'ذ',
    examples: [
      { ar: 'ذَنَب', emoji: '🐕', pecahan: 'dza-nab' },
      { ar: 'ذَهَب', emoji: '💛', pecahan: 'dza-hab' },
      { ar: 'ذِرَاع', emoji: '💪', pecahan: 'dhi-raa' }
    ]
  },
  // 10. Ra
  {
    char: 'ر',
    examples: [
      { ar: 'رَجُل', emoji: '🧑', pecahan: 'ra-jul' },
      { ar: 'رِيح', emoji: '💨', pecahan: 'riih' },
      { ar: 'رُمّان', emoji: '🍎', pecahan: 'rum-man' } // Delima
    ]
  },
  // 11. Zay
  {
    char: 'ز',
    examples: [
      { ar: 'زَهْرَة', emoji: '🌺', pecahan: 'zah-rah' },
      { ar: 'زَيْتُون', emoji: '🫒', pecahan: 'zai-tuun' },
      { ar: 'زَمَن', emoji: '⏳', pecahan: 'za-man' }
    ]
  },
  // 12. Sin
  {
    char: 'س',
    examples: [
      { ar: 'سَمَك', emoji: '🐟', pecahan: 'sa-mak' },
      { ar: 'سَلَام', emoji: '🕊️', pecahan: 'sa-laam' },
      { ar: 'سُكَّر', emoji: '🍭', pecahan: 'suk-kar' }
    ]
  },
  // 13. Syin
  {
    char: 'ش',
    examples: [
      { ar: 'شَمْس', emoji: '☀️', pecahan: 'syams' },
      { ar: 'شَاي', emoji: '🍵', pecahan: 'syaay' },
      { ar: 'شَرَاب', emoji: '🥤', pecahan: 'sya-raab' }
    ]
  },
  // 14. Shod
  {
    char: 'ص',
    examples: [
      { ar: 'صَبْر', emoji: '🧘', pecahan: 'shabr' },
      { ar: 'صَوْت', emoji: '🔊', pecahan: 'shawt' },
      { ar: 'صَحْرَاء', emoji: '🏜️', pecahan: 'sah-raa' }
    ]
  },
  // 15. Dhod
  {
    char: 'ض',
    examples: [
      { ar: 'ضِفْدَع', emoji: '🐸', pecahan: 'dhif-da' },
      { ar: 'ضَوْء', emoji: '💡', pecahan: 'dhau' },
      { ar: 'ضِرْس', emoji: '🦷', pecahan: 'dhir-s' }
    ]
  },
  // 16. Tho
  {
    char: 'ط',
    examples: [
      { ar: 'طَائِر', emoji: '🐦', pecahan: 'thaa-ir' },
      { ar: 'طُول', emoji: '📏', pecahan: 'thuul' },
      { ar: 'طِبّ', emoji: '💉', pecahan: 'thibb' }
    ]
  },
  // 17. Zho
  {
    char: 'ظ',
    examples: [
      { ar: 'ظِلّ', emoji: '🌳', pecahan: 'zhill' },
      { ar: 'ظُفْر', emoji: '💅', pecahan: 'zhufr' },
      { ar: 'ظَهْر', emoji: '🤝', pecahan: 'zahr' }
    ]
  },
  // 18. Ain
  {
    char: 'ع',
    examples: [
      { ar: 'عَيْن', emoji: '👁️', pecahan: 'ayn' },
      { ar: 'عَسَل', emoji: '🍯', pecahan: 'a-sal' },
      { ar: 'عِلْم', emoji: '📚', pecahan: 'ilm' }
    ]
  },
  // 19. Ghayn
  {
    char: 'غ',
    examples: [
      { ar: 'غَيْمَة', emoji: '☁️', pecahan: 'ghay-mah' },
      { ar: 'غَزَال', emoji: '🦌', pecahan: 'gha-zaal' },
      { ar: 'غُرُوب', emoji: '🌅', pecahan: 'ghu-ruub' }
    ]
  },
  // 20. Fa
  {
    char: 'ف',
    examples: [
      { ar: 'فِيل', emoji: '🐘', pecahan: 'fiil' },
      { ar: 'فَرَاشَة', emoji: '🦋', pecahan: 'fa-raa-shah' },
      { ar: 'فَم', emoji: '👄', pecahan: 'fam' }
    ]
  },
  // 21. Qaf
  {
    char: 'ق',
    examples: [
      { ar: 'قَمَر', emoji: '🌙', pecahan: 'qa-mar' },
      { ar: 'قَلَم', emoji: '✏️', pecahan: 'qa-lam' },
      { ar: 'قَرْن', emoji: '🦏', pecahan: 'qarn' }
    ]
  },
  // 22. Kaf
  {
    char: 'ك',
    examples: [
      { ar: 'كَلْب', emoji: '🐶', pecahan: 'kalb' },
      { ar: 'كِتَاب', emoji: '📖', pecahan: 'ki-taab' },
      { ar: 'كَأْس', emoji: '🥤', pecahan: 'kas' }
    ]
  },
  // 23. Lam
  {
    char: 'ل',
    examples: [
      { ar: 'لَيْل', emoji: '🌙', pecahan: 'layl' },
      { ar: 'لَبَن', emoji: '🥛', pecahan: 'la-ban' },
      { ar: 'لَوْن', emoji: '🎨', pecahan: 'lawn' }
    ]
  },
  // 24. Mim
  {
    char: 'م',
    examples: [
      { ar: 'مَاء', emoji: '💧', pecahan: 'maa' },
      { ar: 'مَدْرَسَة', emoji: '🏫', pecahan: 'mad-ra-sah' },
      { ar: 'مِكْسَاح', emoji: '🧹', pecahan: 'mik-sah' } // penyapu
    ]
  },
  // 25. Nun
  {
    char: 'ن',
    examples: [
      { ar: 'نُور', emoji: '✨', pecahan: 'nuur' },
      { ar: 'نَجْم', emoji: '⭐', pecahan: 'najm' },
      { ar: 'نَوْم', emoji: '😴', pecahan: 'nawm' }
    ]
  },
  // 26. Waw
  {
    char: 'و',
    examples: [
      { ar: 'وَرْدَة', emoji: '🌹', pecahan: 'war-dah' },
      { ar: 'وَجْه', emoji: '😊', pecahan: 'wajh' },
      { ar: 'وَزْن', emoji: '⚖️', pecahan: 'wazn' }
    ]
  },
  // 27. Ha (ه)
  {
    char: 'ه',
    examples: [
      { ar: 'هَدِيَّة', emoji: '🎁', pecahan: 'ha-diy-yah' },
      { ar: 'هَوَاء', emoji: '🌬️', pecahan: 'ha-waa' },
      { ar: 'هَاتِف', emoji: '📱', pecahan: 'ha-tif' }
    ]
  },
  // 28. Ya
  {
    char: 'ي',
    examples: [
      { ar: 'يَد', emoji: '🖐️', pecahan: 'yad' },
      { ar: 'يَوْم', emoji: '📅', pecahan: 'yawm' },
      { ar: 'يَمِين', emoji: '👉', pecahan: 'ya-min' }
    ]
  },

  // ===== HURUF TAMBAHAN JAWI MELAYU =====
  // 29. Ca (چ)
  {
    char: 'چ',
    examples: [
      { ar: 'جَاوَنْ', emoji: '☕', pecahan: 'ja-wan' }, // Cawan (dalam Arab disebut Ja-wan)
      { ar: 'جِجَق', emoji: '🦎', pecahan: 'ji-jaq' }, // Cicak
      { ar: 'جَنْتَى', emoji: '❤️', pecahan: 'jan-ta' } // Cinta
    ]
  },
  // 30. Pa (ڤ)
  {
    char: 'ڤ',
    examples: [
      { ar: 'بَایَڠ', emoji: '☂️', pecahan: 'ba-yang' }, // Payung
      { ar: 'بِنْسِل', emoji: '✏️', pecahan: 'bin-sil' }, // Pensil
      { ar: 'بَاسِير', emoji: '🏖️', pecahan: 'ba-sir' } // Pasir
    ]
  },
  // 31. Ga (ݢ)
  {
    char: 'ݢ',
    examples: [
      { ar: 'جَاجَه', emoji: '🐘', pecahan: 'ja-jah' }, // Gajah
      { ar: 'جَارَم', emoji: '🧂', pecahan: 'ja-ram' }, // Garam
      { ar: 'جَوْل', emoji: '⚽', pecahan: 'jawl' } // Gol
    ]
  },
  // 32. Nga (ڠ)
  {
    char: 'ڠ',
    examples: [
      { ar: 'نْجِيلُو', emoji: '🦷', pecahan: 'nji-lu' }, // Ngilu
      { ar: 'نْجَارْڠ', emoji: '🍽️', pecahan: 'nja-rang' }, // Ngarg (lapar)
      { ar: 'نْجَاڠ', emoji: '👄', pecahan: 'njang' } // Nganga
    ]
  }
];

// ===== FUNGSI RENDER =====
function renderJawi() {
  const grid = document.getElementById('jawiGrid');
  if (!grid) {
    console.error('Elemen #jawiGrid tidak dijumpai!');
    return;
  }

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

  // Event klik
  document.querySelectorAll('#jawiGrid .jawi-card').forEach(card => {
    card.addEventListener('click', function() {
      const char = this.dataset.char;
      const item = jawiData.find(d => d.char === char);
      if (!item) return;

      let modalHtml = `
        <div class="modal-overlay" onclick="closeModal(event)">
          <div class="modal-content" onclick="event.stopPropagation();">
            <span class="modal-close" onclick="closeModal(event)">&times;</span>
            <div style="text-align:center;font-size:4rem;font-family:'Traditional Arabic','Arabic Typesetting',serif;">${item.char}</div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px,1fr));gap:16px;margin-top:20px;">
      `;

      for (const ex of item.examples) {
        modalHtml += `
          <div style="background:#f8f0e8;border-radius:30px;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            <div style="font-size:2.4rem;font-family:'Traditional Arabic','Arabic Typesetting',serif;">${ex.ar}</div>
            <div style="font-size:3.2rem;margin:6px 0;">${ex.emoji}</div>
            <div style="font-size:1.1rem;color:#3a5a3a;background:#e6f0e6;border-radius:20px;padding:2px 12px;display:inline-block;">${ex.pecahan}</div>
          </div>
        `;
      }

      modalHtml += `
            </div>
          </div>
        </div>
      `;

      const existingModal = document.querySelector('.modal-overlay');
      if (existingModal) existingModal.remove();
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    });
  });
}

// ===== FUNGSI TUTUP MODAL =====
function closeModal(event) {
  const overlay = event.currentTarget.closest('.modal-overlay') || document.querySelector('.modal-overlay');
  if (overlay) overlay.remove();
}

// ===== AUTO-RENDER =====
document.addEventListener('DOMContentLoaded', renderJawi);
