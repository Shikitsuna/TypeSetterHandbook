// ================= DATASET =================
// Generalized, standardized tags/emotions/categories for better tagging & search
const FONTS = [
  {
    name: 'CC Wild Words',
    source: 'commercial',
    embed: 'fonts/cc-wild-words.ttf',
    url: 'https://freefonts.co/fonts/cc-wild-words-roman',
    tags: ['dialogue', 'comic', 'neutral', 'clean'],
    emo: ['neutral', 'conversational', 'calm'],
    cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
    notes: 'Industry standard manga dialogue font; clean, legible, and professional.'
  },
  {
    name: 'Bangers',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Bangers',
    tags: ['sfx', 'comic', 'loud', 'impact'],
    emo: ['energetic', 'intense', 'shouting'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'Classic comic-style action font for loud SFX or impact words.'
  },
  {
    name: 'Rubik Glitch',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Rubik+Glitch',
    tags: ['sfx', 'glitch', 'digital', 'distorted'],
    emo: ['chaotic', 'intense', 'techy'],
    cat: ['display_distorted', 'tech_effect', 'experimental'],
    notes: 'Glitchy, distorted style suitable for digital effects or visual dissonance.'
  },
  {
    name: 'Shadows Into Light',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Shadows+Into+Light',
    tags: ['handwritten', 'casual', 'friendly', 'cute'],
    emo: ['warm', 'cheerful', 'sincere'],
    cat: ['handwriting_script', 'informal', 'lighthearted'],
    notes: 'A clean and flowing handwritten script; great for cheerful or sincere tone.'
  },
  {
    name: 'Caveat Brush',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Caveat+Brush',
    tags: ['handwritten', 'playful', 'childlike', 'friendly'],
    emo: ['joyful', 'casual', 'honest'],
    cat: ['brush_script', 'informal_handwriting', 'youthful'],
    notes: 'Free-flowing brush handwriting with a youthful, playful energy.'
  },
  {
    name: 'Rubik Wet Paint',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Rubik+Wet+Paint',
    tags: ['distressed', 'horror', 'grunge', 'artistic'],
    emo: ['uneasy', 'edgy', 'aggressive'],
    cat: ['display_distressed', 'horror_effect', 'experimental_artistic'],
    notes: 'Wet-paint dripping effect; ideal for horror, edgy or intense emotion scenes.'
  },
  // --- Appended List (50 Fonts) ---
  {
    name: 'Anime Ace',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/anime-ace.font',
    tags: ['dialogue', 'comic', 'classic', 'free'],
    emo: ['neutral', 'clear', 'standard'],
    cat: ['comic_standard', 'speech_bubble', 'scanlation_classic'],
    notes: 'The classic free scanlation font. Very popular and readable.'
  },
  {
    name: 'Manga Temple',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/manga-temple.font',
    tags: ['dialogue', 'comic', 'clean', 'open-source'],
    emo: ['neutral', 'clear', 'calm'],
    cat: ['comic_standard', 'speech_bubble', 'scanlation_classic'],
    notes: 'A very popular, clean, open-source alternative to Anime Ace.'
  },
  {
    name: 'CC Joe Kubert',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/joe-kubert',
    tags: ['dialogue', 'comic', 'professional', 'bold'],
    emo: ['neutral', 'strong', 'clear'],
    cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
    notes: 'Professional Comicraft font. Used in One-Punch Man and Bakuman.'
  },
  {
    name: 'CC Samaritan',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/samaritan',
    tags: ['dialogue', 'comic', 'professional', 'modern'],
    emo: ['neutral', 'calm', 'modern'],
    cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
    notes: 'Newer Comicraft font used in Mashle and Sakamoto Days.'
  },
  {
    name: 'CC Monologous',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/monologous',
    tags: ['dialogue', 'comic', 'professional', 'narration'],
    emo: ['neutral', 'narrative', 'serious'],
    cat: ['comic_standard', 'narration_box', 'professional_handlettered'],
    notes: 'Professional font used in Fire Force and Look Back.'
  },
  {
    name: 'CC Hush Hush',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/hush-hush',
    tags: ['dialogue', 'comic', 'professional', 'square'],
    emo: ['neutral', 'tense', 'compact'],
    cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
    notes: 'A tight, square-ish font used in Kaiju No. 8 and Choujin X.'
  },
  {
    name: 'Zud Juice',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/zud-juice.font',
    tags: ['dialogue', 'comic', 'hand-drawn', 'free'],
    emo: ['neutral', 'casual', 'friendly'],
    cat: ['comic_standard', 'speech_bubble', 'handwriting_casual'],
    notes: 'Common free font with a slightly more "hand-drawn" feel.'
  },
  {
    name: 'Komika Text',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/komika-text.font',
    tags: ['dialogue', 'comic', 'versatile', 'free'],
    emo: ['neutral', 'clear', 'casual'],
    cat: ['comic_standard', 'speech_bubble', 'handwriting_casual'],
    notes: 'A huge, versatile family. Komika Text is the main dialogue variant.'
  },
  {
    name: 'Blambot Pro',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/blambot-pro',
    tags: ['dialogue', 'comic', 'professional', 'clean'],
    emo: ['neutral', 'clear', 'standard'],
    cat: ['comic_standard', 'speech_bubble', 'professional_clean'],
    notes: 'A clean, all-purpose dialogue font from the Blambot foundry.'
  },
  {
    name: 'Alter Ego',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/alter-ego',
    tags: ['dialogue', 'comic', 'free_personal', 'clean'],
    emo: ['neutral', 'calm', 'slightly_different'],
    cat: ['comic_standard', 'speech_bubble', 'professional_clean'],
    notes: 'A common Blambot alternative, often used for a "different" main character.'
  },
  {
    name: 'CC Back Issues',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/back-issues',
    tags: ['dialogue', 'comic', 'vintage', 'rough'],
    emo: ['neutral', 'nostalgic', 'classic'],
    cat: ['comic_standard', 'speech_bubble', 'vintage_comic'],
    notes: 'Has a slightly rougher, "classic comic" feel.'
  },
  {
    name: 'VTC-Bad-Hand',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/vtc-bad-hand.font',
    tags: ['handwritten', 'narration', 'messy', 'personal'],
    emo: ['casual', 'personal', 'reflective'],
    cat: ['handwriting_script', 'narration_box', 'informal'],
    notes: 'Excellent for a personal, handwritten narration or thought bubble.'
  },
  {
    name: 'Augie',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/augie.font',
    tags: ['handwritten', 'notes', 'casual', 'messy'],
    emo: ['casual', 'friendly', 'personal'],
    cat: ['handwriting_script', 'informal', 'notes'],
    notes: 'A very popular choice for handwritten notes or journal entries.'
  },
  {
    name: 'Felt Tip Roman',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/felt-tip-roman.font',
    tags: ['handwritten', 'narration', 'soft', 'casual'],
    emo: ['calm', 'soft', 'personal'],
    cat: ['handwriting_script', 'narration_box', 'informal'],
    notes: 'A classic for a "softer" or handwritten narration box.'
  },
  {
    name: 'Digital Strip',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/digital-strip',
    tags: ['dialogue', 'comic', 'clean', 'modern', 'free_personal'],
    emo: ['neutral', 'clear', 'modern'],
    cat: ['comic_standard', 'speech_bubble', 'professional_clean'],
    notes: 'A very clean, modern, and readable dialogue font.'
  },
  {
    name: 'Badaboom',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/badaboom',
    tags: ['sfx', 'comic', 'loud', 'impact', 'free_personal'],
    emo: ['energetic', 'shouting', 'impact'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'The all-time classic comic book SFX font. Free for personal use.'
  },
  {
    name: 'Whizbang',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/whizbang',
    tags: ['sfx', 'comic', 'professional', 'impact', 'loud'],
    emo: ['energetic', 'shouting', 'action'],
    cat: ['display_comic', 'sfx_loud', 'professional_sfx'],
    notes: 'Pro-level font used for SFX in official releases of Naruto and Bleach.'
  },
  {
    name: 'Action Man',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/action-man.font',
    tags: ['sfx', 'comic', 'dynamic', 'bold', 'action'],
    emo: ['energetic', 'fast', 'shouting'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'A fantastic, bold, and dynamic SFX font.'
  },
  {
    name: 'Shonen Punk',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/shonen-punk',
    tags: ['sfx', 'comic', 'aggressive', 'scratchy', 'free_personal'],
    emo: ['angry', 'intense', 'energetic'],
    cat: ['display_distressed', 'sfx_loud', 'horror_effect'],
    notes: 'Very popular, has a "scratchy" and aggressive feel perfect for action.'
  },
  {
    name: 'Edo SZ',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/edo.font',
    tags: ['sfx', 'brush', 'japanese-style', 'artistic'],
    emo: ['energetic', 'artistic', 'impact'],
    cat: ['brush_script', 'sfx_impact', 'display_artistic'],
    notes: 'Has a "brush-stroke" feel that mimics Japanese calligraphy.'
  },
  {
    name: 'Permanent Marker',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Permanent+Marker',
    tags: ['sfx', 'handwritten', 'marker', 'bold'],
    emo: ['casual', 'energetic', 'personal'],
    cat: ['handwriting_script', 'sfx_casual', 'display_comic'],
    notes: 'A Google Font that works great for "hand-drawn" SFX.'
  },
  {
    name: 'Impact',
    source: 'system',
    embed: '',
    url: 'https://www.freefonts.io/impact-font/',
    tags: ['sfx', 'bold', 'condensed', 'classic', 'impact'],
    emo: ['loud', 'shouting', 'intense'],
    cat: ['display_bold', 'sfx_loud', 'system_font'],
    notes: 'Standard system font. Often used, stretched, and warped for heavy SFX.'
  },
  {
    name: 'SmackAttack',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/smack-attack',
    tags: ['sfx', 'comic', 'action', 'impact', 'free_personal'],
    emo: ['energetic', 'impact', 'fast'],
    cat: ['display_comic', 'sfx_impact', 'bold_exaggerated'],
    notes: 'A Blambot font designed specifically for action sounds.'
  },
  {
    name: 'Armor Piercing',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/armor-piercing.font',
    tags: ['sfx', 'sci-fi', 'sharp', 'futuristic', 'slice'],
    emo: ['intense', 'fast', 'techy'],
    cat: ['display_scifi', 'sfx_impact', 'tech_effect'],
    notes: 'A sharp, futuristic font great for sci-fi or "slice" sounds.'
  },
  {
    name: 'Komikaboom',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/komikaboom.font',
    tags: ['sfx', 'comic', 'explosion', 'loud', 'action'],
    emo: ['energetic', 'shouting', 'impact'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'Part of the Komika family, designed for explosions.'
  },
  {
    name: 'SF Action Force',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/sf-action-force.font',
    tags: ['sfx', 'sci-fi', 'blocky', 'futuristic', 'military'],
    emo: ['strong', 'techy', 'serious'],
    cat: ['display_scifi', 'display_bold', 'tech_effect'],
    notes: 'A blocky, futuristic font often used for mecha or military SFX.'
  },
  {
    name: 'Obelix Pro',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/obelixpro.font',
    tags: ['sfx', 'title', 'heavy', 'cartoony', 'fun'],
    emo: ['energetic', 'joyful', 'loud'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'A very heavy, cartoony, and "fun" font for big, goofy SFX.'
  },
  {
    name: 'Bar Brawl',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/bar-brawl',
    tags: ['sfx', 'distressed', 'rough', 'grunge', 'action'],
    emo: ['angry', 'aggressive', 'intense'],
    cat: ['display_distressed', 'sfx_impact', 'bold_exaggerated'],
    notes: 'A Blambot font that looks "rough" and "dirty."'
  },
  {
    name: 'Death Rattle',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/death-rattle',
    tags: ['sfx', 'horror', 'monster', 'creepy', 'free_personal'],
    emo: ['scared', 'uneasy', 'aggressive'],
    cat: ['horror_effect', 'sfx_special', 'display_distressed'],
    notes: 'A classic "horror" or "monster" SFX font.'
  },
  {
    name: 'Slatter',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/slatter.font',
    tags: ['horror', 'monster', 'creepy', 'distressed', 'speech'],
    emo: ['scared', 'uneasy', 'chaotic'],
    cat: ['horror_effect', 'speech_special', 'display_distressed'],
    notes: 'A "horror" font. Great for monster speech or creepy SFX.'
  },
  {
    name: 'Rougher',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/rougher.font',
    tags: ['horror', 'distressed', 'scratchy', 'creepy'],
    emo: ['uneasy', 'angry', 'intense'],
    cat: ['horror_effect', 'display_distressed', 'sfx_special'],
    notes: 'Another excellent horror font with a distressed, scratchy look.'
  },
  {
    name: 'Stranger Creature',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/stranger-creature.font',
    tags: ['horror', 'monster', 'alien', 'creepy', 'speech'],
    emo: ['scared', 'uneasy', 'alien'],
    cat: ['horror_effect', 'speech_special', 'display_scifi'],
    notes: 'Perfect for demonic or alien speech.'
  },
  {
    name: 'Kristen ITC',
    source: 'commercial',
    embed: '',
    url: 'https://www.fonts.com/font/itc/itc-kristen',
    tags: ['cutesy', 'childlike', 'playful', 'speech', 'shoujo'],
    emo: ['joyful', 'cheerful', 'playful'],
    cat: ['handwriting_script', 'speech_special', 'youthful'],
    notes: 'Often used for "cutesy" characters or flashback thoughts.'
  },
  {
    name: 'CC Grave Robber',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/grave-robber',
    tags: ['horror', 'creepy', 'dialogue', 'spooky'],
    emo: ['uneasy', 'scared', 'dark'],
    cat: ['horror_effect', 'speech_special', 'display_distressed'],
    notes: 'A "spooky" dialogue font from Comicraft.'
  },
  {
    name: 'Variansa',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/variansa.font',
    tags: ['shoujo', 'romance', 'elegant', 'dialogue', 'fancy'],
    emo: ['calm', 'romantic', 'warm'],
    cat: ['display_script', 'speech_special', 'shoujo_style'],
    notes: 'A more delicate, "Shoujo" style font.'
  },
  {
    name: 'Simply Pleasures',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/simply-pleasures.font',
    tags: ['shoujo', 'romance', 'handwritten', 'cute'],
    emo: ['romantic', 'warm', 'cheerful'],
    cat: ['handwriting_script', 'shoujo_style', 'informal'],
    notes: 'Another font with a "Shoujo" or "romance" feel.'
  },
  {
    name: 'Final Parade',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/final-parade.font',
    tags: ['fantasy', 'magic', 'elegant', 'speech'],
    emo: ['calm', 'mysterious', 'magical'],
    cat: ['display_script', 'speech_special', 'fantasy_style'],
    notes: 'A good choice for fantasy or magical speech.'
  },
  {
    name: 'Nebula Avenue',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/nebula-avenue',
    tags: ['sci-fi', 'retro', 'futuristic', 'dialogue', 'free_personal'],
    emo: ['techy', 'nostalgic', 'calm'],
    cat: ['display_scifi', 'speech_special', 'tech_effect'],
    notes: 'A retro, sci-fi font perfect for a futuristic setting.'
  },
  {
    name: 'Rapido Racers',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/rapido-racers',
    tags: ['sfx', 'speed', 'italic', 'action', 'sports', 'free_personal'],
    emo: ['energetic', 'fast', 'intense'],
    cat: ['sfx_impact', 'display_comic', 'sfx_speed'],
    notes: 'A fast-moving, italicized font great for sports manga or speed lines.'
  },
  {
    name: 'Boxer Punch',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/boxer-punch.font',
    tags: ['sfx', 'sports', 'bold', 'strong', 'action'],
    emo: ['energetic', 'strong', 'impact'],
    cat: ['display_bold', 'sfx_impact', 'display_comic'],
    notes: 'A strong, bold font perfect for sports or fighting manga.'
  },
  {
    name: 'Takatsuki Style',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/takatsuki-style.font',
    tags: ['handwritten', 'slice-of-life', 'light', 'cute', 'casual'],
    emo: ['calm', 'cheerful', 'lighthearted'],
    cat: ['handwriting_script', 'informal', 'youthful'],
    notes: 'A very light, handwritten font perfect for slice-of-life.'
  },
  {
    name: 'Green Leaf',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/green-leaf.font',
    tags: ['handwritten', 'gentle', 'wholesome', 'casual', 'cute'],
    emo: ['calm', 'warm', 'gentle'],
    cat: ['handwriting_script', 'informal', 'lighthearted'],
    notes: 'A "gentle" or "wholesome" font.'
  },
  {
    name: 'CC Letterer Simple',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/letterer-simple',
    tags: ['dialogue', 'thought', 'clean', 'simple', 'professional'],
    emo: ['neutral', 'calm', 'reflective'],
    cat: ['comic_standard', 'narration_box', 'professional_clean'],
    notes: 'A clean, simple font often used for thought bubbles.'
  },
  {
    name: 'Samaritan Tall',
    source: 'commercial',
    embed: '',
    url: 'https://comicbookfonts.com/products/samaritan',
    tags: ['dialogue', 'condensed', 'comic', 'professional', 'tall'],
    emo: ['neutral', 'calm', 'compact'],
    cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
    notes: 'A condensed version of Samaritan, great for fitting text in small bubbles.'
  },
  {
    name: 'ACME Secret Agent',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/acme-secret-agent.font',
    tags: ['narration', 'quirky', 'spy', 'comic', 'typewriter'],
    emo: ['mysterious', 'serious', 'quirky'],
    cat: ['display_serif', 'narration_box', 'special_effect'],
    notes: 'A "spy-thriller" font, good for quirky narration.'
  },
  {
    name: 'Comic Chuck',
    source: 'blambot',
    embed: '',
    url: 'https://blambot.com/products/comic-chuck',
    tags: ['dialogue', 'vintage', 'retro', 'comic', 'free_personal'],
    emo: ['neutral', 'nostalgic', 'classic'],
    cat: ['comic_standard', 'speech_bubble', 'vintage_comic'],
    notes: 'A vintage-style dialogue font.'
  },
  {
    name: 'Wezer',
    source: 'dafont',
    embed: '',
    url: 'https://www.dafont.com/wezer.font',
    tags: ['sfx', 'bold', 'strong', 'sans-serif', 'impact'],
    emo: ['strong', 'loud', 'serious'],
    cat: ['display_bold', 'sfx_loud', 'display_sans'],
    notes: 'A bold, strong sans-serif for powerful characters or SFX.'
  },
  {
    name: 'Ames',
    source: 'google',
    embed: '',
    url: 'https://fonts.google.com/specimen/Ames',
    tags: ['handwritten', 'dialogue', 'webtoon', 'clean', 'modern'],
    emo: ['neutral', 'casual', 'friendly'],
    cat: ['handwriting_script', 'speech_bubble', 'informal'],
    notes: 'A clean, modern, hand-drawn font with a "webtoon" feel.'
  }
];