// ===============================================================
// FONTS DATASET — Manga/Comics Typesetter
// v3.0 — Revamped with full Google Fonts cloud embed support,
//         optimized manga/comics tags, and expanded taxonomy.
// ===============================================================

// ── TAG TAXONOMY ────────────────────────────────────────────────
// tags      : functional descriptor (what/where it's used)
// emo       : emotional tone (feeling conveyed)
// cat       : category group (role in a page layout)
// source    : 'google' | 'commercial' | 'dafont' | 'blambot' | 'system'
// embed     : Google Fonts CSS2 API URL (for source:'google'),
//             local path for commercial/dafont fonts,
//             or empty string if unavailable
// url       : specimen / purchase page

// ── GOOGLE FONTS EMBED HELPER ───────────────────────────────────
// For source:'google' fonts, use:
//   embed: buildGoogleFontUrl(family, weights)
// All Google fonts use the CSS2 API endpoint which can be dropped
// directly into a <link href="..."> tag.
const GF = 'https://fonts.googleapis.com/css2?family=';
const GF_SUFFIX = '&display=swap';

function buildGoogleFontUrl(family, weights = '400;700') {
  const encoded = family.replace(/ /g, '+');
  return `${GF}${encoded}:wght@${weights}${GF_SUFFIX}`;
}

// ── PRECONNECT TAGS (add once to <head> when using Google Fonts) ─
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

// ===============================================================
// DATASET
// ===============================================================
const FONTS = [

// ── SECTION 1: DIALOGUE / SPEECH BUBBLE ────────────────────────

{
  name: 'CC Wild Words',
  source: 'commercial',
  embed: 'fonts/cc-wild-words.ttf',
  url: 'https://freefonts.co/fonts/cc-wild-words-roman',
  tags: ['dialogue', 'comic', 'neutral', 'clean', 'standard', 'speech_bubble'],
  emo: ['neutral', 'conversational', 'calm'],
  cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
  notes: 'Industry standard manga dialogue font; clean, legible, and professional. Keep as primary fallback.'
},
{
  name: 'Bangers',
  source: 'google',
  embed: buildGoogleFontUrl('Bangers', '400'),
  url: 'https://fonts.google.com/specimen/Bangers',
  tags: ['sfx', 'comic', 'loud', 'impact', 'title', 'display'],
  emo: ['energetic', 'intense', 'shouting'],
  cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
  notes: 'Classic comic-style action font for loud SFX or impact words.'
},
{
  name: 'Caveat',
  source: 'google',
  embed: buildGoogleFontUrl('Caveat', '400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Caveat',
  tags: ['handwritten', 'dialogue', 'casual', 'thought_bubble', 'narration'],
  emo: ['casual', 'personal', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'narration_box'],
  notes: 'Variable-weight handwritten font. Great for thought bubbles and narration boxes.'
},
{
  name: 'Caveat Brush',
  source: 'google',
  embed: buildGoogleFontUrl('Caveat+Brush', '400'),
  url: 'https://fonts.google.com/specimen/Caveat+Brush',
  tags: ['handwritten', 'playful', 'childlike', 'friendly', 'casual'],
  emo: ['joyful', 'casual', 'honest'],
  cat: ['brush_script', 'informal_handwriting', 'youthful'],
  notes: 'Free-flowing brush handwriting with a youthful, playful energy.'
},
{
  name: 'Patrick Hand',
  source: 'google',
  embed: buildGoogleFontUrl('Patrick+Hand', '400'),
  url: 'https://fonts.google.com/specimen/Patrick+Hand',
  tags: ['dialogue', 'handwritten', 'comic', 'clean', 'legible', 'webtoon'],
  emo: ['neutral', 'clear', 'casual'],
  cat: ['comic_standard', 'speech_bubble', 'handwriting_casual'],
  notes: 'Very clean, highly legible handwritten-style font. Excellent webtoon dialogue replacement for Anime Ace.'
},
{
  name: 'Nanum Pen Script',
  source: 'google',
  embed: buildGoogleFontUrl('Nanum+Pen+Script', '400'),
  url: 'https://fonts.google.com/specimen/Nanum+Pen+Script',
  tags: ['handwritten', 'asian', 'casual', 'dialogue', 'webtoon'],
  emo: ['casual', 'friendly', 'personal'],
  cat: ['handwriting_script', 'informal', 'webtoon_style'],
  notes: 'Korean handwritten pen style. Works well for webtoons with Asian aesthetics.'
},
{
  name: 'Amatic SC',
  source: 'google',
  embed: buildGoogleFontUrl('Amatic+SC', '400;700'),
  url: 'https://fonts.google.com/specimen/Amatic+SC',
  tags: ['handwritten', 'condensed', 'display', 'title', 'cute'],
  emo: ['cheerful', 'charming', 'casual'],
  cat: ['handwriting_script', 'display_comic', 'youthful'],
  notes: 'Tall, condensed handwritten caps. Good for titles, chapter headings, or cute display text.'
},
{
  name: 'Permanent Marker',
  source: 'google',
  embed: buildGoogleFontUrl('Permanent+Marker', '400'),
  url: 'https://fonts.google.com/specimen/Permanent+Marker',
  tags: ['sfx', 'handwritten', 'marker', 'bold', 'graffiti'],
  emo: ['casual', 'energetic', 'personal'],
  cat: ['handwriting_script', 'sfx_casual', 'display_comic'],
  notes: 'A Google Font that works great for hand-drawn SFX or emphasis words.'
},
{
  name: 'Shadows Into Light',
  source: 'google',
  embed: buildGoogleFontUrl('Shadows+Into+Light', '400'),
  url: 'https://fonts.google.com/specimen/Shadows+Into+Light',
  tags: ['handwritten', 'casual', 'friendly', 'cute', 'narration'],
  emo: ['warm', 'cheerful', 'sincere'],
  cat: ['handwriting_script', 'informal', 'lighthearted'],
  notes: 'A clean, flowing handwritten script. Great for cheerful or sincere narration.'
},
{
  name: 'Shadows Into Light Two',
  source: 'google',
  embed: buildGoogleFontUrl('Shadows+Into+Light+Two', '400'),
  url: 'https://fonts.google.com/specimen/Shadows+Into+Light+Two',
  tags: ['handwritten', 'casual', 'friendly', 'narration'],
  emo: ['warm', 'sincere', 'calm'],
  cat: ['handwriting_script', 'narration_box', 'informal'],
  notes: 'Slightly more refined version of Shadows Into Light. Better for body narration text.'
},
{
  name: 'Just Me Again Down Here',
  source: 'google',
  embed: buildGoogleFontUrl('Just+Me+Again+Down+Here', '400'),
  url: 'https://fonts.google.com/specimen/Just+Me+Again+Down+Here',
  tags: ['handwritten', 'personal', 'reflective', 'thought_bubble', 'diary'],
  emo: ['introspective', 'casual', 'personal'],
  cat: ['handwriting_script', 'narration_box', 'informal'],
  notes: 'A very personal, diary-like handwriting. Ideal for thought bubbles and inner monologue.'
},
{
  name: 'Indie Flower',
  source: 'google',
  embed: buildGoogleFontUrl('Indie+Flower', '400'),
  url: 'https://fonts.google.com/specimen/Indie+Flower',
  tags: ['handwritten', 'cute', 'casual', 'friendly', 'dialogue'],
  emo: ['cheerful', 'warm', 'casual'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Friendly, cute handwriting. Very popular for casual slice-of-life manga.'
},
{
  name: 'Gochi Hand',
  source: 'google',
  embed: buildGoogleFontUrl('Gochi+Hand', '400'),
  url: 'https://fonts.google.com/specimen/Gochi+Hand',
  tags: ['handwritten', 'friendly', 'clean', 'dialogue', 'casual'],
  emo: ['cheerful', 'friendly', 'casual'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'A clean, bold, rounded handwritten font. Very legible for manga dialogue.'
},
{
  name: 'Coming Soon',
  source: 'google',
  embed: buildGoogleFontUrl('Coming+Soon', '400'),
  url: 'https://fonts.google.com/specimen/Coming+Soon',
  tags: ['handwritten', 'casual', 'clean', 'dialogue', 'neutral'],
  emo: ['neutral', 'casual', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Simple, neat handwriting. A solid free alternative for general manga dialogue.'
},
{
  name: 'Rock Salt',
  source: 'google',
  embed: buildGoogleFontUrl('Rock+Salt', '400'),
  url: 'https://fonts.google.com/specimen/Rock+Salt',
  tags: ['handwritten', 'rough', 'distressed', 'grunge', 'sfx'],
  emo: ['aggressive', 'casual', 'rough'],
  cat: ['handwriting_script', 'sfx_casual', 'display_distressed'],
  notes: 'Rough, marker-on-textured-surface feel. Good for gritty narration or rough SFX.'
},
{
  name: 'Kalam',
  source: 'google',
  embed: buildGoogleFontUrl('Kalam', '300;400;700'),
  url: 'https://fonts.google.com/specimen/Kalam',
  tags: ['handwritten', 'dialogue', 'clean', 'neutral', 'casual'],
  emo: ['neutral', 'casual', 'clear'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Natural handwriting with three weights. Well-balanced for dialogue across styles.'
},
{
  name: 'Reenie Beanie',
  source: 'google',
  embed: buildGoogleFontUrl('Reenie+Beanie', '400'),
  url: 'https://fonts.google.com/specimen/Reenie+Beanie',
  tags: ['handwritten', 'thin', 'cute', 'casual', 'thought_bubble'],
  emo: ['calm', 'gentle', 'personal'],
  cat: ['handwriting_script', 'informal', 'narration_box'],
  notes: 'Light, thin handwriting. Ideal for quiet thought bubbles or subtle narration.'
},
{
  name: 'Crafty Girls',
  source: 'google',
  embed: buildGoogleFontUrl('Crafty+Girls', '400'),
  url: 'https://fonts.google.com/specimen/Crafty+Girls',
  tags: ['handwritten', 'shoujo', 'cute', 'playful', 'childlike'],
  emo: ['joyful', 'cheerful', 'playful'],
  cat: ['handwriting_script', 'shoujo_style', 'youthful'],
  notes: 'Girlish handwriting style. Fits Shoujo manga and cute character moments.'
},
{
  name: 'Schoolbell',
  source: 'google',
  embed: buildGoogleFontUrl('Schoolbell', '400'),
  url: 'https://fonts.google.com/specimen/Schoolbell',
  tags: ['handwritten', 'childlike', 'cute', 'notes', 'casual'],
  emo: ['youthful', 'cheerful', 'casual'],
  cat: ['handwriting_script', 'youthful', 'informal'],
  notes: 'Childlike printed handwriting. Good for young characters or classroom scenes.'
},
{
  name: 'Kranky',
  source: 'google',
  embed: buildGoogleFontUrl('Kranky', '400'),
  url: 'https://fonts.google.com/specimen/Kranky',
  tags: ['comic', 'quirky', 'distorted', 'casual', 'display'],
  emo: ['quirky', 'chaotic', 'casual'],
  cat: ['display_comic', 'sfx_casual', 'experimental'],
  notes: 'Quirky, wobbly lettering. Great for comedic or chaotic moments.'
},
{
  name: 'Zilla Slab Highlight',
  source: 'google',
  embed: buildGoogleFontUrl('Zilla+Slab+Highlight', '400;700'),
  url: 'https://fonts.google.com/specimen/Zilla+Slab+Highlight',
  tags: ['display', 'title', 'bold', 'chapter', 'modern'],
  emo: ['strong', 'modern', 'serious'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Outlined slab-serif. Strong for chapter titles and manga cover text.'
},

// ── SECTION 2: SFX / ACTION ─────────────────────────────────────

{
  name: 'Rubik Glitch',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Glitch', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Glitch',
  tags: ['sfx', 'glitch', 'digital', 'distorted', 'sci-fi'],
  emo: ['chaotic', 'intense', 'techy'],
  cat: ['display_distorted', 'tech_effect', 'experimental'],
  notes: 'Glitchy, distorted style suitable for digital effects or visual dissonance.'
},
{
  name: 'Rubik Wet Paint',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Wet+Paint', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Wet+Paint',
  tags: ['distressed', 'horror', 'grunge', 'artistic', 'sfx'],
  emo: ['uneasy', 'edgy', 'aggressive'],
  cat: ['display_distressed', 'horror_effect', 'experimental_artistic'],
  notes: 'Wet-paint dripping effect; ideal for horror, edgy, or intense emotion scenes.'
},
{
  name: 'Rubik Bubbles',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Bubbles', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Bubbles',
  tags: ['display', 'sfx', 'bubbly', 'fun', 'cute', 'title'],
  emo: ['joyful', 'energetic', 'playful'],
  cat: ['display_comic', 'sfx_casual', 'bold_exaggerated'],
  notes: 'Rounded bubble letters. Fun for comedy SFX or youthful titles.'
},
{
  name: 'Rubik Dirt',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Dirt', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Dirt',
  tags: ['distressed', 'grunge', 'texture', 'sfx', 'rough'],
  emo: ['rough', 'earthy', 'intense'],
  cat: ['display_distressed', 'sfx_casual', 'experimental_artistic'],
  notes: 'Dirty, textured fill. Works for earthy or battle-worn SFX.'
},
{
  name: 'Rubik Burned',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Burned', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Burned',
  tags: ['sfx', 'fire', 'horror', 'distressed', 'intense'],
  emo: ['aggressive', 'uneasy', 'intense'],
  cat: ['display_distressed', 'horror_effect', 'sfx_special'],
  notes: 'Flame/burn texture fill. Perfect for fire-related SFX or demonic moments.'
},
{
  name: 'Rubik Storm',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Storm', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Storm',
  tags: ['sfx', 'storm', 'action', 'electric', 'intense'],
  emo: ['intense', 'energetic', 'chaotic'],
  cat: ['sfx_impact', 'display_distressed', 'experimental'],
  notes: 'Lightning/static texture. Good for electric or weather-based SFX.'
},
{
  name: 'Rubik Spray Paint',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Spray+Paint', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Spray+Paint',
  tags: ['sfx', 'graffiti', 'street', 'urban', 'rough'],
  emo: ['casual', 'rough', 'energetic'],
  cat: ['display_distressed', 'sfx_casual', 'sfx_impact'],
  notes: 'Spray-paint fill texture. Great for urban/street scenes or graffiti SFX.'
},
{
  name: 'Rubik Maze',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Maze', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Maze',
  tags: ['display', 'sci-fi', 'geometric', 'futuristic', 'title'],
  emo: ['techy', 'mysterious', 'modern'],
  cat: ['display_scifi', 'tech_effect', 'title_page'],
  notes: 'Maze-pattern fill. Interesting for sci-fi or puzzle-themed titles.'
},
{
  name: 'Rubik Moonrocks',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Moonrocks', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Moonrocks',
  tags: ['display', 'sci-fi', 'space', 'textured', 'title'],
  emo: ['mysterious', 'techy', 'calm'],
  cat: ['display_scifi', 'title_page', 'experimental'],
  notes: 'Rocky/crater texture fill. Space or alien-themed titles and headers.'
},
{
  name: 'Rubik Pixels',
  source: 'google',
  embed: buildGoogleFontUrl('Rubik+Pixels', '400'),
  url: 'https://fonts.google.com/specimen/Rubik+Pixels',
  tags: ['display', 'pixel', 'retro', 'game', 'digital', 'sci-fi'],
  emo: ['techy', 'nostalgic', 'energetic'],
  cat: ['display_scifi', 'tech_effect', 'sfx_special'],
  notes: 'Pixel-fill Rubik variant. Excellent for game-themed manga or retro digital effects.'
},
{
  name: 'Boogaloo',
  source: 'google',
  embed: buildGoogleFontUrl('Boogaloo', '400'),
  url: 'https://fonts.google.com/specimen/Boogaloo',
  tags: ['comic', 'display', 'fun', 'casual', 'title'],
  emo: ['joyful', 'energetic', 'casual'],
  cat: ['display_comic', 'bold_exaggerated', 'sfx_casual'],
  notes: 'Funky, slightly retro comic display font. Works for title text and moderate SFX.'
},
{
  name: 'Luckiest Guy',
  source: 'google',
  embed: buildGoogleFontUrl('Luckiest+Guy', '400'),
  url: 'https://fonts.google.com/specimen/Luckiest+Guy',
  tags: ['sfx', 'comic', 'retro', 'bold', 'display', 'impact'],
  emo: ['energetic', 'loud', 'retro'],
  cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
  notes: 'Bold retro outlined comic font. Great for loud retro SFX or chapter titles.'
},
{
  name: 'Titan One',
  source: 'google',
  embed: buildGoogleFontUrl('Titan+One', '400'),
  url: 'https://fonts.google.com/specimen/Titan+One',
  tags: ['display', 'bold', 'sfx', 'title', 'impact'],
  emo: ['strong', 'loud', 'energetic'],
  cat: ['display_bold', 'sfx_loud', 'title_page'],
  notes: 'Super bold, rounded display font. Excellent for chapter numbers and title pages.'
},
{
  name: 'Fredoka One',
  source: 'google',
  embed: buildGoogleFontUrl('Fredoka+One', '400'),
  url: 'https://fonts.google.com/specimen/Fredoka+One',
  tags: ['display', 'round', 'fun', 'title', 'cute', 'comic'],
  emo: ['cheerful', 'energetic', 'friendly'],
  cat: ['display_comic', 'bold_exaggerated', 'youthful'],
  notes: 'Soft, rounded display font. Ideal for Shounen or comedy manga titles.'
},
{
  name: 'Lilita One',
  source: 'google',
  embed: buildGoogleFontUrl('Lilita+One', '400'),
  url: 'https://fonts.google.com/specimen/Lilita+One',
  tags: ['display', 'bold', 'impact', 'title', 'sfx'],
  emo: ['strong', 'energetic', 'loud'],
  cat: ['display_bold', 'sfx_loud', 'title_page'],
  notes: 'Very heavy, condensed display font. Great for powerful impact titles.'
},
{
  name: 'Black Ops One',
  source: 'google',
  embed: buildGoogleFontUrl('Black+Ops+One', '400'),
  url: 'https://fonts.google.com/specimen/Black+Ops+One',
  tags: ['display', 'military', 'sci-fi', 'bold', 'futuristic', 'sfx'],
  emo: ['strong', 'serious', 'intense'],
  cat: ['display_scifi', 'display_bold', 'sfx_impact'],
  notes: 'Military/tactical stencil feel. Excellent for military manga, mecha, or action SFX.'
},
{
  name: 'Ultra',
  source: 'google',
  embed: buildGoogleFontUrl('Ultra', '400'),
  url: 'https://fonts.google.com/specimen/Ultra',
  tags: ['display', 'bold', 'heavy', 'sfx', 'impact', 'title'],
  emo: ['powerful', 'loud', 'intense'],
  cat: ['display_bold', 'sfx_loud', 'title_page'],
  notes: 'Extremely bold, fat serif. High-impact for chapter titles and dramatic SFX.'
},
{
  name: 'Righteous',
  source: 'google',
  embed: buildGoogleFontUrl('Righteous', '400'),
  url: 'https://fonts.google.com/specimen/Righteous',
  tags: ['display', 'retro', 'action', 'title', 'bold'],
  emo: ['energetic', 'confident', 'retro'],
  cat: ['display_comic', 'display_bold', 'title_page'],
  notes: 'Geometric retro display. Good for 70s-80s action or sports manga titles.'
},
{
  name: 'Press Start 2P',
  source: 'google',
  embed: buildGoogleFontUrl('Press+Start+2P', '400'),
  url: 'https://fonts.google.com/specimen/Press+Start+2P',
  tags: ['pixel', 'retro', 'game', 'digital', 'sci-fi', 'display'],
  emo: ['nostalgic', 'techy', 'energetic'],
  cat: ['display_scifi', 'tech_effect', 'sfx_special'],
  notes: 'Classic pixel/8-bit font. Use for game-world dialogue, digital screens, or isekai game panels.'
},
{
  name: 'Share Tech Mono',
  source: 'google',
  embed: buildGoogleFontUrl('Share+Tech+Mono', '400'),
  url: 'https://fonts.google.com/specimen/Share+Tech+Mono',
  tags: ['monospace', 'digital', 'sci-fi', 'terminal', 'tech'],
  emo: ['techy', 'calm', 'serious'],
  cat: ['tech_effect', 'display_scifi', 'speech_special'],
  notes: 'Terminal/computer monospace. Perfect for AI dialogue, hacking scenes, or digital displays.'
},
{
  name: 'VT323',
  source: 'google',
  embed: buildGoogleFontUrl('VT323', '400'),
  url: 'https://fonts.google.com/specimen/VT323',
  tags: ['pixel', 'retro', 'terminal', 'digital', 'sci-fi', 'display'],
  emo: ['nostalgic', 'techy', 'cold'],
  cat: ['tech_effect', 'display_scifi', 'sfx_special'],
  notes: 'Retro CRT/terminal pixel font. Excellent for computer screens or old-tech displays in manga.'
},

// ── SECTION 3: HORROR / DARK / TENSION ──────────────────────────

{
  name: 'Creepster',
  source: 'google',
  embed: buildGoogleFontUrl('Creepster', '400'),
  url: 'https://fonts.google.com/specimen/Creepster',
  tags: ['horror', 'creepy', 'dark', 'display', 'monster', 'speech'],
  emo: ['scared', 'uneasy', 'dark'],
  cat: ['horror_effect', 'display_distressed', 'speech_special'],
  notes: 'Drippy, horror-styled display font. Works for monster speech or horror SFX.'
},
{
  name: 'Eater',
  source: 'google',
  embed: buildGoogleFontUrl('Eater', '400'),
  url: 'https://fonts.google.com/specimen/Eater',
  tags: ['horror', 'dark', 'display', 'gothic', 'monster'],
  emo: ['scared', 'uneasy', 'dark'],
  cat: ['horror_effect', 'display_distressed', 'sfx_special'],
  notes: 'Jagged, sharp horror font. Great for titles in dark or supernatural manga.'
},
{
  name: 'Nosifer',
  source: 'google',
  embed: buildGoogleFontUrl('Nosifer', '400'),
  url: 'https://fonts.google.com/specimen/Nosifer',
  tags: ['horror', 'gothic', 'dark', 'vampire', 'display'],
  emo: ['dark', 'uneasy', 'dramatic'],
  cat: ['horror_effect', 'display_distressed', 'title_page'],
  notes: 'Gothic/vampire aesthetic display font. Ideal for dark fantasy or horror manga titles.'
},
{
  name: 'Henny Penny',
  source: 'google',
  embed: buildGoogleFontUrl('Henny+Penny', '400'),
  url: 'https://fonts.google.com/specimen/Henny+Penny',
  tags: ['fantasy', 'whimsical', 'display', 'storybook', 'cute'],
  emo: ['mysterious', 'whimsical', 'warm'],
  cat: ['fantasy_style', 'display_script', 'title_page'],
  notes: 'Fairytale/storybook display font. Perfect for fantasy or isekai manga titles.'
},
{
  name: 'Mystery Quest',
  source: 'google',
  embed: buildGoogleFontUrl('Mystery+Quest', '400'),
  url: 'https://fonts.google.com/specimen/Mystery+Quest',
  tags: ['mystery', 'horror', 'display', 'dark', 'gothic'],
  emo: ['mysterious', 'uneasy', 'dark'],
  cat: ['horror_effect', 'fantasy_style', 'title_page'],
  notes: 'Art-nouveau, horror-tinted display font. Good for mystery or psychological manga.'
},

// ── SECTION 4: ROMANCE / SHOUJO / ELEGANT ───────────────────────

{
  name: 'Dancing Script',
  source: 'google',
  embed: buildGoogleFontUrl('Dancing+Script', '400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Dancing+Script',
  tags: ['script', 'romance', 'elegant', 'shoujo', 'title', 'fancy'],
  emo: ['romantic', 'warm', 'elegant'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Classic elegant script. Ideal for Shoujo chapter titles, love letters, or romantic text overlays.'
},
{
  name: 'Great Vibes',
  source: 'google',
  embed: buildGoogleFontUrl('Great+Vibes', '400'),
  url: 'https://fonts.google.com/specimen/Great+Vibes',
  tags: ['script', 'romance', 'elegant', 'fancy', 'title', 'wedding'],
  emo: ['romantic', 'elegant', 'warm'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Beautiful calligraphic script. Perfect for romantic manga covers and title cards.'
},
{
  name: 'Sacramento',
  source: 'google',
  embed: buildGoogleFontUrl('Sacramento', '400'),
  url: 'https://fonts.google.com/specimen/Sacramento',
  tags: ['script', 'romance', 'elegant', 'thin', 'title'],
  emo: ['calm', 'romantic', 'gentle'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Thin, delicate calligraphy script. Best for single-word romance chapter titles at display size.'
},
{
  name: 'Pacifico',
  source: 'google',
  embed: buildGoogleFontUrl('Pacifico', '400'),
  url: 'https://fonts.google.com/specimen/Pacifico',
  tags: ['script', 'casual', 'retro', 'title', 'fun', 'warm'],
  emo: ['warm', 'casual', 'joyful'],
  cat: ['display_script', 'title_page', 'informal'],
  notes: 'Casual retro script. Laid-back feel, good for slice-of-life or beach/summer arcs.'
},
{
  name: 'Satisfy',
  source: 'google',
  embed: buildGoogleFontUrl('Satisfy', '400'),
  url: 'https://fonts.google.com/specimen/Satisfy',
  tags: ['script', 'romance', 'elegant', 'title', 'fancy'],
  emo: ['romantic', 'elegant', 'warm'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Clean, smooth script. Good balance between legibility and elegance for romance manga.'
},
{
  name: 'Pinyon Script',
  source: 'google',
  embed: buildGoogleFontUrl('Pinyon+Script', '400'),
  url: 'https://fonts.google.com/specimen/Pinyon+Script',
  tags: ['script', 'elegant', 'formal', 'fancy', 'title'],
  emo: ['elegant', 'formal', 'romantic'],
  cat: ['display_script', 'title_page', 'fantasy_style'],
  notes: 'Formal, high-class calligraphy. For noble characters, fantasy titles, or very formal speech.'
},
{
  name: 'Cinzel',
  source: 'google',
  embed: buildGoogleFontUrl('Cinzel', '400;700;900'),
  url: 'https://fonts.google.com/specimen/Cinzel',
  tags: ['serif', 'elegant', 'fantasy', 'title', 'epic', 'classical'],
  emo: ['serious', 'epic', 'elegant'],
  cat: ['display_serif', 'title_page', 'fantasy_style'],
  notes: 'Roman capitals-inspired serif. Excellent for epic fantasy, historical, or shounen title pages.'
},
{
  name: 'Cinzel Decorative',
  source: 'google',
  embed: buildGoogleFontUrl('Cinzel+Decorative', '400;700;900'),
  url: 'https://fonts.google.com/specimen/Cinzel+Decorative',
  tags: ['serif', 'elegant', 'fantasy', 'ornate', 'title'],
  emo: ['epic', 'elegant', 'dramatic'],
  cat: ['display_serif', 'title_page', 'fantasy_style'],
  notes: 'Ornate version of Cinzel. Use for climax chapter titles, arc names, or cover text.'
},
{
  name: 'IM Fell English',
  source: 'google',
  embed: buildGoogleFontUrl('IM+Fell+English', '400'),
  url: 'https://fonts.google.com/specimen/IM+Fell+English',
  tags: ['serif', 'vintage', 'gothic', 'narration', 'literary'],
  emo: ['serious', 'dark', 'nostalgic'],
  cat: ['display_serif', 'narration_box', 'vintage_comic'],
  notes: 'Old-press serif. Works for literary narration boxes, dark fantasy, or historical manga.'
},
{
  name: 'UnifrakturMaguntia',
  source: 'google',
  embed: buildGoogleFontUrl('UnifrakturMaguntia', '400'),
  url: 'https://fonts.google.com/specimen/UnifrakturMaguntia',
  tags: ['gothic', 'blackletter', 'display', 'dark', 'medieval', 'fantasy'],
  emo: ['dark', 'epic', 'formal'],
  cat: ['display_serif', 'horror_effect', 'fantasy_style'],
  notes: 'Blackletter/Fraktur font. For medieval fantasy, demonic speech, or German-style titles.'
},

// ── SECTION 5: SPECIAL USE / NARRATION ──────────────────────────

{
  name: 'Special Elite',
  source: 'google',
  embed: buildGoogleFontUrl('Special+Elite', '400'),
  url: 'https://fonts.google.com/specimen/Special+Elite',
  tags: ['typewriter', 'narration', 'vintage', 'serious', 'noir'],
  emo: ['serious', 'mysterious', 'nostalgic'],
  cat: ['narration_box', 'display_serif', 'vintage_comic'],
  notes: 'Typewriter-style font. Excellent for noir narration, detective stories, or thriller flashbacks.'
},
{
  name: 'Cutive Mono',
  source: 'google',
  embed: buildGoogleFontUrl('Cutive+Mono', '400'),
  url: 'https://fonts.google.com/specimen/Cutive+Mono',
  tags: ['typewriter', 'monospace', 'vintage', 'narration', 'document'],
  emo: ['serious', 'nostalgic', 'calm'],
  cat: ['narration_box', 'tech_effect', 'vintage_comic'],
  notes: 'Vintage monospace typewriter. Great for document text, coded messages, or old-style narration.'
},
{
  name: 'Courier Prime',
  source: 'google',
  embed: buildGoogleFontUrl('Courier+Prime', '400;700'),
  url: 'https://fonts.google.com/specimen/Courier+Prime',
  tags: ['typewriter', 'monospace', 'narration', 'document', 'clean'],
  emo: ['neutral', 'serious', 'formal'],
  cat: ['narration_box', 'tech_effect', 'vintage_comic'],
  notes: 'Refined typewriter. Use for reports, official documents, or computer terminal readouts.'
},
{
  name: 'Oswald',
  source: 'google',
  embed: buildGoogleFontUrl('Oswald', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Oswald',
  tags: ['condensed', 'bold', 'display', 'title', 'sans-serif'],
  emo: ['strong', 'serious', 'modern'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Condensed sans-serif with multiple weights. Clean chapter title option.'
},
{
  name: 'Bebas Neue',
  source: 'google',
  embed: buildGoogleFontUrl('Bebas+Neue', '400'),
  url: 'https://fonts.google.com/specimen/Bebas+Neue',
  tags: ['condensed', 'display', 'bold', 'title', 'modern', 'all-caps'],
  emo: ['strong', 'confident', 'modern'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Tall condensed all-caps display. Popular for modern manga/manhwa chapter titles.'
},
{
  name: 'Teko',
  source: 'google',
  embed: buildGoogleFontUrl('Teko', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Teko',
  tags: ['condensed', 'display', 'bold', 'title', 'geometric'],
  emo: ['modern', 'strong', 'confident'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Geometric condensed sans. Good for action manga chapter headers and SFX.'
},
{
  name: 'Archivo Black',
  source: 'google',
  embed: buildGoogleFontUrl('Archivo+Black', '400'),
  url: 'https://fonts.google.com/specimen/Archivo+Black',
  tags: ['display', 'bold', 'modern', 'title', 'clean'],
  emo: ['strong', 'modern', 'confident'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Strong black-weight grotesque. Clean for modern manga title lettering.'
},
{
  name: 'Alfa Slab One',
  source: 'google',
  embed: buildGoogleFontUrl('Alfa+Slab+One', '400'),
  url: 'https://fonts.google.com/specimen/Alfa+Slab+One',
  tags: ['slab', 'display', 'bold', 'western', 'impact', 'title'],
  emo: ['powerful', 'bold', 'nostalgic'],
  cat: ['display_serif', 'display_bold', 'title_page'],
  notes: 'Heavy slab serif. Suits western, action, or historical manga chapter titles.'
},
{
  name: 'Abril Fatface',
  source: 'google',
  embed: buildGoogleFontUrl('Abril+Fatface', '400'),
  url: 'https://fonts.google.com/specimen/Abril+Fatface',
  tags: ['display', 'bold', 'elegant', 'serif', 'title', 'dramatic'],
  emo: ['dramatic', 'elegant', 'bold'],
  cat: ['display_serif', 'title_page', 'chapter_heading'],
  notes: 'Fat display serif with elegance. Good for dramatic or stylish manga covers.'
},
{
  name: 'Playfair Display',
  source: 'google',
  embed: buildGoogleFontUrl('Playfair+Display', '400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Playfair+Display',
  tags: ['serif', 'elegant', 'title', 'drama', 'literary', 'romance'],
  emo: ['elegant', 'dramatic', 'serious'],
  cat: ['display_serif', 'title_page', 'shoujo_style'],
  notes: 'High-contrast serif with drama. Excellent for literary or drama manga titles and chapter headings.'
},
{
  name: 'Merriweather',
  source: 'google',
  embed: buildGoogleFontUrl('Merriweather', '300;400;700;900'),
  url: 'https://fonts.google.com/specimen/Merriweather',
  tags: ['serif', 'narration', 'readable', 'body', 'literary'],
  emo: ['calm', 'serious', 'neutral'],
  cat: ['narration_box', 'display_serif', 'comic_standard'],
  notes: 'Highly readable slab serif. Great for long narration boxes or caption text.'
},
{
  name: 'Noto Sans',
  source: 'google',
  embed: buildGoogleFontUrl('Noto+Sans', '400;700'),
  url: 'https://fonts.google.com/specimen/Noto+Sans',
  tags: ['sans-serif', 'neutral', 'clean', 'narration', 'universal'],
  emo: ['neutral', 'calm', 'clear'],
  cat: ['comic_standard', 'narration_box', 'speech_bubble'],
  notes: 'Universal coverage sans-serif. Useful as a clean narration or caption fallback.'
},
{
  name: 'Ames',
  source: 'google',
  embed: buildGoogleFontUrl('Ames', '400'),
  url: 'https://fonts.google.com/specimen/Ames',
  tags: ['handwritten', 'dialogue', 'webtoon', 'clean', 'modern'],
  emo: ['neutral', 'casual', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'A clean, modern, hand-drawn font with a "webtoon" feel.'
},

// ── SECTION 6: EXISTING NON-GOOGLE FONTS (kept) ─────────────────

{
  name: 'Anime Ace',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/anime-ace.font',
  tags: ['dialogue', 'comic', 'classic', 'free', 'speech_bubble'],
  emo: ['neutral', 'clear', 'standard'],
  cat: ['comic_standard', 'speech_bubble', 'scanlation_classic'],
  notes: 'The classic free scanlation font. Very popular and readable.'
},
{
  name: 'Manga Temple',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/manga-temple.font',
  tags: ['dialogue', 'comic', 'clean', 'open-source', 'speech_bubble'],
  emo: ['neutral', 'clear', 'calm'],
  cat: ['comic_standard', 'speech_bubble', 'scanlation_classic'],
  notes: 'Very popular, clean, open-source alternative to Anime Ace.'
},
{
  name: 'CC Joe Kubert',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/joe-kubert',
  tags: ['dialogue', 'comic', 'professional', 'bold', 'speech_bubble'],
  emo: ['neutral', 'strong', 'clear'],
  cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
  notes: 'Professional Comicraft font. Used in One-Punch Man and Bakuman.'
},
{
  name: 'CC Samaritan',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/samaritan',
  tags: ['dialogue', 'comic', 'professional', 'modern', 'speech_bubble'],
  emo: ['neutral', 'calm', 'modern'],
  cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
  notes: 'Newer Comicraft font used in Mashle and Sakamoto Days.'
},
{
  name: 'CC Monologous',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/monologous',
  tags: ['dialogue', 'comic', 'professional', 'narration', 'narration_box'],
  emo: ['neutral', 'narrative', 'serious'],
  cat: ['comic_standard', 'narration_box', 'professional_handlettered'],
  notes: 'Professional font used in Fire Force and Look Back.'
},
{
  name: 'CC Hush Hush',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/hush-hush',
  tags: ['dialogue', 'comic', 'professional', 'square', 'compact'],
  emo: ['neutral', 'tense', 'compact'],
  cat: ['comic_standard', 'speech_bubble', 'professional_handlettered'],
  notes: 'A tight, square-ish font used in Kaiju No. 8 and Choujin X.'
},
{
  name: 'Zud Juice',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/zud-juice.font',
  tags: ['dialogue', 'comic', 'hand-drawn', 'free', 'speech_bubble'],
  emo: ['neutral', 'casual', 'friendly'],
  cat: ['comic_standard', 'speech_bubble', 'handwriting_casual'],
  notes: 'Common free font with a slightly more "hand-drawn" feel.'
},
{
  name: 'Komika Text',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/komika-text.font',
  tags: ['dialogue', 'comic', 'versatile', 'free', 'speech_bubble'],
  emo: ['neutral', 'clear', 'casual'],
  cat: ['comic_standard', 'speech_bubble', 'handwriting_casual'],
  notes: 'A huge, versatile family. Komika Text is the main dialogue variant.'
},
{
  name: 'Blambot Pro',
  source: 'blambot',
  embed: '',
  url: 'https://blambot.com/products/blambot-pro',
  tags: ['dialogue', 'comic', 'professional', 'clean', 'speech_bubble'],
  emo: ['neutral', 'clear', 'standard'],
  cat: ['comic_standard', 'speech_bubble', 'professional_clean'],
  notes: 'A clean, all-purpose dialogue font from the Blambot foundry.'
},
{
  name: 'Alter Ego',
  source: 'blambot',
  embed: '',
  url: 'https://blambot.com/products/alter-ego',
  tags: ['dialogue', 'comic', 'free_personal', 'clean', 'speech_bubble'],
  emo: ['neutral', 'calm', 'slightly_different'],
  cat: ['comic_standard', 'speech_bubble', 'professional_clean'],
  notes: 'A common Blambot alternative, often used for a "different" main character.'
},
{
  name: 'CC Back Issues',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/back-issues',
  tags: ['dialogue', 'comic', 'vintage', 'rough', 'speech_bubble'],
  emo: ['neutral', 'nostalgic', 'classic'],
  cat: ['comic_standard', 'speech_bubble', 'vintage_comic'],
  notes: 'Has a slightly rougher, "classic comic" feel.'
},
{
  name: 'VTC-Bad-Hand',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/vtc-bad-hand.font',
  tags: ['handwritten', 'narration', 'messy', 'personal', 'thought_bubble'],
  emo: ['casual', 'personal', 'reflective'],
  cat: ['handwriting_script', 'narration_box', 'informal'],
  notes: 'Excellent for a personal, handwritten narration or thought bubble.'
},
{
  name: 'Augie',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/augie.font',
  tags: ['handwritten', 'notes', 'casual', 'messy', 'narration'],
  emo: ['casual', 'friendly', 'personal'],
  cat: ['handwriting_script', 'informal', 'notes'],
  notes: 'A very popular choice for handwritten notes or journal entries.'
},
{
  name: 'Felt Tip Roman',
  source: 'dafont',
  embed: '',
  url: 'https://www.dafont.com/felt-tip-roman.font',
  tags: ['handwritten', 'narration', 'soft', 'casual', 'thought_bubble'],
  emo: ['calm', 'soft', 'personal'],
  cat: ['handwriting_script', 'narration_box', 'informal'],
  notes: 'A classic for a "softer" or handwritten narration box.'
},
{
  name: 'Digital Strip',
  source: 'blambot',
  embed: '',
  url: 'https://blambot.com/products/digital-strip',
  tags: ['dialogue', 'comic', 'clean', 'modern', 'free_personal', 'speech_bubble'],
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
  tags: ['sfx', 'brush', 'japanese-style', 'artistic', 'calligraphy'],
  emo: ['energetic', 'artistic', 'impact'],
  cat: ['brush_script', 'sfx_impact', 'display_artistic'],
  notes: 'Has a "brush-stroke" feel that mimics Japanese calligraphy.'
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
  tags: ['horror', 'distressed', 'scratchy', 'creepy', 'sfx'],
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
  tags: ['fantasy', 'magic', 'elegant', 'speech', 'title'],
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
  tags: ['dialogue', 'thought', 'clean', 'simple', 'professional', 'thought_bubble'],
  emo: ['neutral', 'calm', 'reflective'],
  cat: ['comic_standard', 'narration_box', 'professional_clean'],
  notes: 'A clean, simple font often used for thought bubbles.'
},
{
  name: 'Samaritan Tall',
  source: 'commercial',
  embed: '',
  url: 'https://comicbookfonts.com/products/samaritan',
  tags: ['dialogue', 'condensed', 'comic', 'professional', 'compact'],
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
  tags: ['dialogue', 'vintage', 'retro', 'comic', 'free_personal', 'speech_bubble'],
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
  name: 'Impact',
  source: 'system',
  embed: '',
  url: 'https://www.freefonts.io/impact-font/',
  tags: ['sfx', 'bold', 'condensed', 'classic', 'impact', 'system'],
  emo: ['loud', 'shouting', 'intense'],
  cat: ['display_bold', 'sfx_loud', 'system_font'],
  notes: 'Standard system font. Often used, stretched, and warped for heavy SFX.'
},

// ── SECTION 7: ADDITIONAL GOOGLE FONTS — DISPLAY & DECORATIVE ──

{
  name: 'Architects Daughter',
  source: 'google',
  embed: buildGoogleFontUrl('Architects+Daughter', '400'),
  url: 'https://fonts.google.com/specimen/Architects+Daughter',
  tags: ['handwritten', 'casual', 'clean', 'dialogue', 'webtoon', 'sketch'],
  emo: ['casual', 'creative', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Inspired by architect blueprint lettering. Clean, slightly technical handwriting — great for slice-of-life or tech-themed webtoon dialogue.'
},
{
  name: 'Walter Turncoat',
  source: 'google',
  embed: buildGoogleFontUrl('Walter+Turncoat', '400'),
  url: 'https://fonts.google.com/specimen/Walter+Turncoat',
  tags: ['handwritten', 'casual', 'dialogue', 'personal', 'natural'],
  emo: ['casual', 'personal', 'neutral'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Very natural, lowercase handwriting style. Excellent for casual everyday manga dialogue with an organic feel.'
},
{
  name: 'Neucha',
  source: 'google',
  embed: buildGoogleFontUrl('Neucha', '400'),
  url: 'https://fonts.google.com/specimen/Neucha',
  tags: ['handwritten', 'casual', 'dialogue', 'friendly', 'cyrillic'],
  emo: ['friendly', 'casual', 'warm'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Casual Russian handwriting style. Surprisingly versatile for manga dialogue — feels natural and unforced.'
},
{
  name: 'Covered By Your Grace',
  source: 'google',
  embed: buildGoogleFontUrl('Covered+By+Your+Grace', '400'),
  url: 'https://fonts.google.com/specimen/Covered+By+Your+Grace',
  tags: ['handwritten', 'casual', 'dialogue', 'natural', 'personal'],
  emo: ['casual', 'warm', 'genuine'],
  cat: ['handwriting_script', 'speech_bubble', 'informal'],
  notes: 'Natural, moderately casual handwriting. Works well for dialogue across most manga genres.'
},
{
  name: 'Pangolin',
  source: 'google',
  embed: buildGoogleFontUrl('Pangolin', '400'),
  url: 'https://fonts.google.com/specimen/Pangolin',
  tags: ['handwritten', 'dialogue', 'clean', 'readable', 'comic'],
  emo: ['neutral', 'casual', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'comic_standard'],
  notes: 'A very clean, readable handwritten font. One of the best free Google Font alternatives to Anime Ace for manga lettering.'
},
{
  name: 'Nanum Gothic',
  source: 'google',
  embed: buildGoogleFontUrl('Nanum+Gothic', '400;700;800'),
  url: 'https://fonts.google.com/specimen/Nanum+Gothic',
  tags: ['sans-serif', 'dialogue', 'webtoon', 'clean', 'korean', 'modern'],
  emo: ['neutral', 'clear', 'modern'],
  cat: ['comic_standard', 'speech_bubble', 'webtoon_style'],
  notes: 'Clean Korean-Latin sans-serif. Extremely popular for Korean webtoons and manhwa; renders very well at small sizes.'
},
{
  name: 'Noto Sans JP',
  source: 'google',
  embed: buildGoogleFontUrl('Noto+Sans+JP', '400;700'),
  url: 'https://fonts.google.com/specimen/Noto+Sans+JP',
  tags: ['sans-serif', 'japanese', 'clean', 'dialogue', 'subtitle', 'universal'],
  emo: ['neutral', 'clear', 'modern'],
  cat: ['comic_standard', 'speech_bubble', 'webtoon_style'],
  notes: 'Complete Japanese character support. Essential if your manga project needs Japanese text alongside Latin lettering.'
},
{
  name: 'Noto Serif JP',
  source: 'google',
  embed: buildGoogleFontUrl('Noto+Serif+JP', '400;700'),
  url: 'https://fonts.google.com/specimen/Noto+Serif+JP',
  tags: ['serif', 'japanese', 'elegant', 'narration', 'formal'],
  emo: ['calm', 'serious', 'elegant'],
  cat: ['narration_box', 'display_serif', 'webtoon_style'],
  notes: 'Japanese serif for formal or literary narration. Use for historical manga, samurai stories, or elder-character speech.'
},
{
  name: 'M PLUS Rounded 1c',
  source: 'google',
  embed: buildGoogleFontUrl('M+PLUS+Rounded+1c', '400;700;900'),
  url: 'https://fonts.google.com/specimen/M+PLUS+Rounded+1c',
  tags: ['rounded', 'cute', 'friendly', 'dialogue', 'japanese', 'webtoon'],
  emo: ['cheerful', 'friendly', 'warm'],
  cat: ['speech_bubble', 'webtoon_style', 'youthful'],
  notes: 'Soft, rounded Japanese-Latin sans. Great for cute characters, Shoujo, or feel-good manga dialogue.'
},
{
  name: 'Dela Gothic One',
  source: 'google',
  embed: buildGoogleFontUrl('Dela+Gothic+One', '400'),
  url: 'https://fonts.google.com/specimen/Dela+Gothic+One',
  tags: ['display', 'bold', 'title', 'japanese', 'heavy', 'impact'],
  emo: ['powerful', 'strong', 'loud'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Extremely heavy Japanese-style gothic display font. Excellent for Shounen chapter titles and cover typography.'
},
{
  name: 'Yuji Syuku',
  source: 'google',
  embed: buildGoogleFontUrl('Yuji+Syuku', '400'),
  url: 'https://fonts.google.com/specimen/Yuji+Syuku',
  tags: ['serif', 'japanese', 'calligraphy', 'elegant', 'title', 'historical'],
  emo: ['calm', 'elegant', 'serious'],
  cat: ['display_serif', 'title_page', 'fantasy_style'],
  notes: 'Brush-calligraphy inspired Japanese serif. Perfect for samurai, historical, or martial arts manga titles.'
},
{
  name: 'Zen Dots',
  source: 'google',
  embed: buildGoogleFontUrl('Zen+Dots', '400'),
  url: 'https://fonts.google.com/specimen/Zen+Dots',
  tags: ['display', 'sci-fi', 'geometric', 'futuristic', 'pixel', 'tech'],
  emo: ['techy', 'modern', 'confident'],
  cat: ['display_scifi', 'tech_effect', 'title_page'],
  notes: 'Geometric rounded display with a futuristic feel. Suitable for sci-fi chapter titles, game UI panels, or tech displays in manga.'
},
{
  name: 'Orbitron',
  source: 'google',
  embed: buildGoogleFontUrl('Orbitron', '400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Orbitron',
  tags: ['display', 'sci-fi', 'futuristic', 'geometric', 'title', 'mecha'],
  emo: ['techy', 'intense', 'modern'],
  cat: ['display_scifi', 'title_page', 'tech_effect'],
  notes: 'The definitive futuristic sci-fi font. Ideal for mecha, space opera, or cyberpunk manga titles and HUD/screen text.'
},
{
  name: 'Rajdhani',
  source: 'google',
  embed: buildGoogleFontUrl('Rajdhani', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Rajdhani',
  tags: ['condensed', 'display', 'sci-fi', 'modern', 'title', 'clean'],
  emo: ['modern', 'confident', 'strong'],
  cat: ['display_bold', 'display_scifi', 'chapter_heading'],
  notes: 'Angular condensed sans with multiple weights. Works well for sci-fi/military manga headers.'
},
{
  name: 'Exo 2',
  source: 'google',
  embed: buildGoogleFontUrl('Exo+2', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Exo+2',
  tags: ['sci-fi', 'condensed', 'display', 'title', 'futuristic', 'modern'],
  emo: ['techy', 'modern', 'strong'],
  cat: ['display_scifi', 'chapter_heading', 'title_page'],
  notes: 'Geometric sci-fi sans with excellent weight range. Versatile for action, mecha, or modern sci-fi manga typography.'
},
{
  name: 'Audiowide',
  source: 'google',
  embed: buildGoogleFontUrl('Audiowide', '400'),
  url: 'https://fonts.google.com/specimen/Audiowide',
  tags: ['sci-fi', 'display', 'futuristic', 'title', 'tech'],
  emo: ['techy', 'cool', 'confident'],
  cat: ['display_scifi', 'title_page', 'tech_effect'],
  notes: 'Wide, futuristic sans-serif. Good for spaceship UI, tech overlays, or action sci-fi titles.'
},
{
  name: 'Quantico',
  source: 'google',
  embed: buildGoogleFontUrl('Quantico', '400;700'),
  url: 'https://fonts.google.com/specimen/Quantico',
  tags: ['sci-fi', 'military', 'stencil', 'display', 'title', 'bold'],
  emo: ['serious', 'strong', 'techy'],
  cat: ['display_scifi', 'display_bold', 'title_page'],
  notes: 'Military/stencil inspired font. Excellent for tactical, military, or government-themed manga.'
},
{
  name: 'Iceland',
  source: 'google',
  embed: buildGoogleFontUrl('Iceland', '400'),
  url: 'https://fonts.google.com/specimen/Iceland',
  tags: ['sci-fi', 'display', 'geometric', 'alien', 'futuristic'],
  emo: ['cold', 'techy', 'alien'],
  cat: ['display_scifi', 'speech_special', 'tech_effect'],
  notes: 'Angular, crystalline structure gives an alien or cold sci-fi feel. Use for AI/alien speech or spaceship interfaces.'
},
{
  name: 'Michroma',
  source: 'google',
  embed: buildGoogleFontUrl('Michroma', '400'),
  url: 'https://fonts.google.com/specimen/Michroma',
  tags: ['sci-fi', 'display', 'geometric', 'futuristic', 'title'],
  emo: ['techy', 'cold', 'modern'],
  cat: ['display_scifi', 'tech_effect', 'title_page'],
  notes: 'Clean geometric sci-fi display. Looks great on digital screens, holo-displays, and mecha control panels in manga.'
},
{
  name: 'Nova Square',
  source: 'google',
  embed: buildGoogleFontUrl('Nova+Square', '400'),
  url: 'https://fonts.google.com/specimen/Nova+Square',
  tags: ['sci-fi', 'display', 'square', 'geometric', 'futuristic'],
  emo: ['techy', 'modern', 'calm'],
  cat: ['display_scifi', 'tech_effect', 'title_page'],
  notes: 'Square-cut geometric display. Futuristic but readable, good for labels on tech or robot-related panels.'
},
{
  name: 'Poiret One',
  source: 'google',
  embed: buildGoogleFontUrl('Poiret+One', '400'),
  url: 'https://fonts.google.com/specimen/Poiret+One',
  tags: ['display', 'art-deco', 'elegant', 'thin', 'title', 'fantasy'],
  emo: ['elegant', 'mysterious', 'dramatic'],
  cat: ['display_serif', 'title_page', 'fantasy_style'],
  notes: 'Art-deco inspired thin display. Ideal for 1920s-era manga, mystery titles, or high-fashion character moments.'
},
{
  name: 'Cormorant Garamond',
  source: 'google',
  embed: buildGoogleFontUrl('Cormorant+Garamond', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Cormorant+Garamond',
  tags: ['serif', 'elegant', 'literary', 'title', 'narration', 'fantasy'],
  emo: ['elegant', 'calm', 'serious'],
  cat: ['display_serif', 'narration_box', 'title_page'],
  notes: 'High-contrast Garamond revival. Excellent for literary or philosophical narration boxes and fantasy/historical titles.'
},
{
  name: 'Libre Baskerville',
  source: 'google',
  embed: buildGoogleFontUrl('Libre+Baskerville', '400;700'),
  url: 'https://fonts.google.com/specimen/Libre+Baskerville',
  tags: ['serif', 'narration', 'readable', 'body', 'literary', 'neutral'],
  emo: ['calm', 'serious', 'neutral'],
  cat: ['narration_box', 'comic_standard', 'display_serif'],
  notes: 'Classic, highly readable Baskerville. Best for long narration boxes or caption text in literary manga.'
},
{
  name: 'Josefin Sans',
  source: 'google',
  embed: buildGoogleFontUrl('Josefin+Sans', '300;400;600;700'),
  url: 'https://fonts.google.com/specimen/Josefin+Sans',
  tags: ['display', 'elegant', 'geometric', 'title', 'clean', 'modern'],
  emo: ['elegant', 'modern', 'confident'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Geometric, elegant sans. Works for minimalist manga titles or chapter headings in a Shoujo or drama series.'
},
{
  name: 'Josefin Slab',
  source: 'google',
  embed: buildGoogleFontUrl('Josefin+Slab', '300;400;600;700'),
  url: 'https://fonts.google.com/specimen/Josefin+Slab',
  tags: ['slab', 'display', 'elegant', 'title', 'vintage', 'retro'],
  emo: ['elegant', 'nostalgic', 'warm'],
  cat: ['display_serif', 'title_page', 'vintage_comic'],
  notes: 'Geometric slab serif sibling of Josefin Sans. Good for retro or vintage-styled manga chapter titles.'
},
{
  name: 'Raleway',
  source: 'google',
  embed: buildGoogleFontUrl('Raleway', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Raleway',
  tags: ['display', 'elegant', 'title', 'clean', 'modern', 'thin'],
  emo: ['elegant', 'modern', 'calm'],
  cat: ['display_bold', 'title_page', 'chapter_heading'],
  notes: 'Elegant geometric sans with a wide weight range. Used for clean, stylish manga title pages and chapter markers.'
},
{
  name: 'Barlow Condensed',
  source: 'google',
  embed: buildGoogleFontUrl('Barlow+Condensed', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Barlow+Condensed',
  tags: ['condensed', 'display', 'title', 'modern', 'bold', 'clean'],
  emo: ['strong', 'modern', 'confident'],
  cat: ['display_bold', 'chapter_heading', 'title_page'],
  notes: 'Industrial condensed sans. Strong chapter title font with modern, no-nonsense feel for action or seinen manga.'
},
{
  name: 'Saira Condensed',
  source: 'google',
  embed: buildGoogleFontUrl('Saira+Condensed', '400;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Saira+Condensed',
  tags: ['condensed', 'display', 'bold', 'title', 'modern', 'action'],
  emo: ['strong', 'modern', 'energetic'],
  cat: ['display_bold', 'chapter_heading', 'title_page'],
  notes: 'Very tall condensed sans. High-impact for action manga chapter titles where space is limited.'
},
{
  name: 'Fjalla One',
  source: 'google',
  embed: buildGoogleFontUrl('Fjalla+One', '400'),
  url: 'https://fonts.google.com/specimen/Fjalla+One',
  tags: ['condensed', 'display', 'bold', 'title', 'strong'],
  emo: ['strong', 'bold', 'serious'],
  cat: ['display_bold', 'chapter_heading', 'title_page'],
  notes: 'Condensed bold display sans. Clean and impactful for chapter headings and subtitle lettering.'
},
{
  name: 'Anton',
  source: 'google',
  embed: buildGoogleFontUrl('Anton', '400'),
  url: 'https://fonts.google.com/specimen/Anton',
  tags: ['display', 'bold', 'condensed', 'title', 'impact', 'strong'],
  emo: ['powerful', 'loud', 'intense'],
  cat: ['display_bold', 'sfx_loud', 'title_page'],
  notes: 'Bold condensed grotesque. Very high visual weight — excellent for impactful chapter titles and cover text.'
},
{
  name: 'Squada One',
  source: 'google',
  embed: buildGoogleFontUrl('Squada+One', '400'),
  url: 'https://fonts.google.com/specimen/Squada+One',
  tags: ['display', 'bold', 'square', 'title', 'modern', 'action'],
  emo: ['strong', 'modern', 'energetic'],
  cat: ['display_bold', 'sfx_impact', 'title_page'],
  notes: 'Square, condensed display with an athletic feel. Works for sports manga or action chapter titles.'
},
{
  name: 'Russo One',
  source: 'google',
  embed: buildGoogleFontUrl('Russo+One', '400'),
  url: 'https://fonts.google.com/specimen/Russo+One',
  tags: ['display', 'bold', 'strong', 'title', 'military', 'sci-fi'],
  emo: ['powerful', 'serious', 'intense'],
  cat: ['display_bold', 'display_scifi', 'title_page'],
  notes: 'Heavy, bold, military-industrial display. Great for military manga, cold war settings, or intense action titles.'
},
{
  name: 'Monoton',
  source: 'google',
  embed: buildGoogleFontUrl('Monoton', '400'),
  url: 'https://fonts.google.com/specimen/Monoton',
  tags: ['display', 'retro', 'neon', 'title', 'groovy', 'outline'],
  emo: ['nostalgic', 'energetic', 'cool'],
  cat: ['display_comic', 'title_page', 'sfx_special'],
  notes: 'Double-line retro/neon display font. Excellent for 80s or arcade-themed manga titles and flashback panels.'
},
{
  name: 'Audiowide',
  source: 'google',
  embed: buildGoogleFontUrl('Audiowide', '400'),
  url: 'https://fonts.google.com/specimen/Audiowide',
  tags: ['sci-fi', 'display', 'futuristic', 'title', 'tech', 'modern'],
  emo: ['techy', 'cool', 'confident'],
  cat: ['display_scifi', 'title_page', 'tech_effect'],
  notes: 'Wide-spaced futuristic sans. Good for spaceship UI labels, tech overlays, or action sci-fi titles in manga.'
},
{
  name: 'Bree Serif',
  source: 'google',
  embed: buildGoogleFontUrl('Bree+Serif', '400'),
  url: 'https://fonts.google.com/specimen/Bree+Serif',
  tags: ['serif', 'display', 'friendly', 'bold', 'title', 'warm'],
  emo: ['warm', 'friendly', 'confident'],
  cat: ['display_serif', 'title_page', 'chapter_heading'],
  notes: 'A friendly, bold slab serif. Works for warm, feel-good Shounen or Shoujo manga title pages.'
},
{
  name: 'Patua One',
  source: 'google',
  embed: buildGoogleFontUrl('Patua+One', '400'),
  url: 'https://fonts.google.com/specimen/Patua+One',
  tags: ['display', 'bold', 'retro', 'serif', 'title', 'vintage'],
  emo: ['bold', 'nostalgic', 'warm'],
  cat: ['display_serif', 'title_page', 'vintage_comic'],
  notes: 'Retro Clarendon-style slab serif. Good for vintage-themed manga panels or old-school comic aesthetics.'
},
{
  name: 'Lobster',
  source: 'google',
  embed: buildGoogleFontUrl('Lobster', '400'),
  url: 'https://fonts.google.com/specimen/Lobster',
  tags: ['script', 'retro', 'display', 'title', 'fun', 'casual'],
  emo: ['casual', 'warm', 'retro'],
  cat: ['display_script', 'title_page', 'vintage_comic'],
  notes: 'Classic retro script. Good for slice-of-life scene titles, restaurant/shop signs, or 50s-era background text.'
},
{
  name: 'Lobster Two',
  source: 'google',
  embed: buildGoogleFontUrl('Lobster+Two', '400;700'),
  url: 'https://fonts.google.com/specimen/Lobster+Two',
  tags: ['script', 'retro', 'display', 'title', 'elegant', 'casual'],
  emo: ['warm', 'casual', 'elegant'],
  cat: ['display_script', 'title_page', 'shoujo_style'],
  notes: 'Slightly more refined version of Lobster. Better for chapter-title headers where Lobster feels too casual.'
},
{
  name: 'Kaushan Script',
  source: 'google',
  embed: buildGoogleFontUrl('Kaushan+Script', '400'),
  url: 'https://fonts.google.com/specimen/Kaushan+Script',
  tags: ['script', 'brush', 'display', 'title', 'expressive', 'artistic'],
  emo: ['energetic', 'expressive', 'warm'],
  cat: ['brush_script', 'display_script', 'title_page'],
  notes: 'Brush-style script with energy. Used for anime-opening credit-style text, expressive titles, or emotional flashback headings.'
},
{
  name: 'Parisienne',
  source: 'google',
  embed: buildGoogleFontUrl('Parisienne', '400'),
  url: 'https://fonts.google.com/specimen/Parisienne',
  tags: ['script', 'elegant', 'romantic', 'shoujo', 'title', 'fancy'],
  emo: ['romantic', 'elegant', 'warm'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Feminine French-style calligraphy script. Perfect for Josei or Shoujo romance chapter titles and love-letter overlays.'
},
{
  name: 'Alex Brush',
  source: 'google',
  embed: buildGoogleFontUrl('Alex+Brush', '400'),
  url: 'https://fonts.google.com/specimen/Alex+Brush',
  tags: ['script', 'elegant', 'thin', 'romance', 'title', 'fancy'],
  emo: ['elegant', 'romantic', 'gentle'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Delicate thin brush script. Best at large sizes for single-word overlay text or anime credits-style lettering.'
},
{
  name: 'Tangerine',
  source: 'google',
  embed: buildGoogleFontUrl('Tangerine', '400;700'),
  url: 'https://fonts.google.com/specimen/Tangerine',
  tags: ['script', 'calligraphy', 'elegant', 'thin', 'title', 'romantic'],
  emo: ['elegant', 'calm', 'romantic'],
  cat: ['display_script', 'title_page', 'shoujo_style'],
  notes: 'Classic calligraphy script. For single display words only — too thin for body text, but stunning at hero size for titles.'
},
{
  name: 'Courgette',
  source: 'google',
  embed: buildGoogleFontUrl('Courgette', '400'),
  url: 'https://fonts.google.com/specimen/Courgette',
  tags: ['script', 'casual', 'friendly', 'title', 'warm', 'display'],
  emo: ['warm', 'friendly', 'casual'],
  cat: ['display_script', 'title_page', 'informal'],
  notes: 'A casual, balanced script. More readable than Pacifico at smaller display sizes. Good for chapter sub-titles.'
},
{
  name: 'Cookie',
  source: 'google',
  embed: buildGoogleFontUrl('Cookie', '400'),
  url: 'https://fonts.google.com/specimen/Cookie',
  tags: ['script', 'cute', 'playful', 'title', 'shoujo', 'romantic'],
  emo: ['cheerful', 'warm', 'playful'],
  cat: ['display_script', 'shoujo_style', 'title_page'],
  notes: 'Friendly, rounded script. Works for Shoujo-style title cards, dessert/cafe scene labels, or cute character name plates.'
},
{
  name: 'Yellowtail',
  source: 'google',
  embed: buildGoogleFontUrl('Yellowtail', '400'),
  url: 'https://fonts.google.com/specimen/Yellowtail',
  tags: ['script', 'retro', 'brush', 'title', 'casual', 'fun'],
  emo: ['casual', 'retro', 'energetic'],
  cat: ['brush_script', 'display_script', 'title_page'],
  notes: 'Flowing retro brush script. Great for manga taking place in retro settings, or energetic summer/beach arc titles.'
},
{
  name: 'Rye',
  source: 'google',
  embed: buildGoogleFontUrl('Rye', '400'),
  url: 'https://fonts.google.com/specimen/Rye',
  tags: ['display', 'western', 'vintage', 'serif', 'title', 'retro'],
  emo: ['bold', 'nostalgic', 'adventurous'],
  cat: ['display_serif', 'title_page', 'vintage_comic'],
  notes: 'Wild West decorative display. Perfect for western-themed manga, adventure arcs, or frontier settings.'
},
{
  name: 'Butcherman',
  source: 'google',
  embed: buildGoogleFontUrl('Butcherman', '400'),
  url: 'https://fonts.google.com/specimen/Butcherman',
  tags: ['horror', 'dark', 'display', 'gothic', 'grunge', 'vintage'],
  emo: ['dark', 'uneasy', 'aggressive'],
  cat: ['horror_effect', 'display_distressed', 'title_page'],
  notes: 'Rough, zombie-inspired horror display. Great for post-apocalyptic, undead, or dark survival manga titles.'
},
{
  name: 'Syne Mono',
  source: 'google',
  embed: buildGoogleFontUrl('Syne+Mono', '400'),
  url: 'https://fonts.google.com/specimen/Syne+Mono',
  tags: ['monospace', 'tech', 'display', 'sci-fi', 'experimental'],
  emo: ['techy', 'calm', 'quirky'],
  cat: ['tech_effect', 'display_scifi', 'speech_special'],
  notes: 'Unique monospace with irregular letter shapes. Good for AI dialogue, experimental narration, or digital-world display text.'
},
{
  name: 'Major Mono Display',
  source: 'google',
  embed: buildGoogleFontUrl('Major+Mono+Display', '400'),
  url: 'https://fonts.google.com/specimen/Major+Mono+Display',
  tags: ['monospace', 'display', 'sci-fi', 'experimental', 'geometric'],
  emo: ['techy', 'cold', 'quirky'],
  cat: ['tech_effect', 'display_scifi', 'experimental'],
  notes: 'Wide geometric monospace display. Excellent for chapter titles in cyberpunk or dystopian manga settings.'
},
{
  name: 'Silkscreen',
  source: 'google',
  embed: buildGoogleFontUrl('Silkscreen', '400;700'),
  url: 'https://fonts.google.com/specimen/Silkscreen',
  tags: ['pixel', 'retro', 'game', 'digital', 'display', 'tech'],
  emo: ['nostalgic', 'techy', 'energetic'],
  cat: ['display_scifi', 'tech_effect', 'sfx_special'],
  notes: 'Retro pixel font inspired by screen-printed lettering. Cleaner than Press Start 2P but equally retro — use for game-world panels.'
},
{
  name: 'DotGothic16',
  source: 'google',
  embed: buildGoogleFontUrl('DotGothic16', '400'),
  url: 'https://fonts.google.com/specimen/DotGothic16',
  tags: ['pixel', 'japanese', 'retro', 'game', 'digital', 'display'],
  emo: ['nostalgic', 'techy', 'neutral'],
  cat: ['display_scifi', 'tech_effect', 'webtoon_style'],
  notes: 'Japanese dot-matrix pixel font. Authentic retro game feel with Japanese character support — perfect for isekai game menus.'
},
{
  name: 'Tourney',
  source: 'google',
  embed: buildGoogleFontUrl('Tourney', '400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Tourney',
  tags: ['display', 'bold', 'sports', 'condensed', 'title', 'action'],
  emo: ['energetic', 'competitive', 'strong'],
  cat: ['display_bold', 'title_page', 'sfx_impact'],
  notes: 'Athletic, collegiate condensed display. Excellent for sports manga chapter titles and tournament arc headers.'
},
{
  name: 'Chakra Petch',
  source: 'google',
  embed: buildGoogleFontUrl('Chakra+Petch', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Chakra+Petch',
  tags: ['display', 'sci-fi', 'military', 'title', 'modern', 'angular'],
  emo: ['strong', 'techy', 'serious'],
  cat: ['display_scifi', 'display_bold', 'chapter_heading'],
  notes: 'Military/motorsport inspired font. Works for mecha pilot dialogue, military manga, or action game-style UI.'
},
{
  name: 'Wallpoet',
  source: 'google',
  embed: buildGoogleFontUrl('Wallpoet', '400'),
  url: 'https://fonts.google.com/specimen/Wallpoet',
  tags: ['display', 'stencil', 'urban', 'graffiti', 'bold', 'title'],
  emo: ['rough', 'urban', 'confident'],
  cat: ['display_bold', 'sfx_casual', 'title_page'],
  notes: 'Stencil/spray-paint display font. Great for urban, street-level, or dystopian manga environments.'
},
{
  name: 'Rammetto One',
  source: 'google',
  embed: buildGoogleFontUrl('Rammetto+One', '400'),
  url: 'https://fonts.google.com/specimen/Rammetto+One',
  tags: ['display', 'bold', 'round', 'fun', 'title', 'comic'],
  emo: ['joyful', 'energetic', 'playful'],
  cat: ['display_comic', 'bold_exaggerated', 'title_page'],
  notes: 'Very bold, rounded comic display. Ideal for comedy manga, gag panels, or whimsical chapter titles.'
},
{
  name: 'Fugaz One',
  source: 'google',
  embed: buildGoogleFontUrl('Fugaz+One', '400'),
  url: 'https://fonts.google.com/specimen/Fugaz+One',
  tags: ['display', 'italic', 'action', 'bold', 'title', 'speed'],
  emo: ['energetic', 'fast', 'intense'],
  cat: ['display_comic', 'sfx_speed', 'title_page'],
  notes: 'Slanted bold italic display. The built-in slant conveys speed and momentum — ideal for action or sports manga headers.'
},
{
  name: 'Poppins',
  source: 'google',
  embed: buildGoogleFontUrl('Poppins', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Poppins',
  tags: ['sans-serif', 'clean', 'modern', 'dialogue', 'webtoon', 'friendly'],
  emo: ['neutral', 'friendly', 'modern'],
  cat: ['comic_standard', 'speech_bubble', 'webtoon_style'],
  notes: 'Geometric rounded sans with excellent weight range. One of the most popular webtoon/manhwa dialogue fonts for modern productions.'
},
{
  name: 'Nunito',
  source: 'google',
  embed: buildGoogleFontUrl('Nunito', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Nunito',
  tags: ['sans-serif', 'round', 'friendly', 'dialogue', 'webtoon', 'cute'],
  emo: ['friendly', 'warm', 'casual'],
  cat: ['speech_bubble', 'webtoon_style', 'informal'],
  notes: 'Rounded sans with great legibility. Popular for warm, friendly Shoujo or slice-of-life webtoon dialogue.'
},
{
  name: 'Quicksand',
  source: 'google',
  embed: buildGoogleFontUrl('Quicksand', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Quicksand',
  tags: ['sans-serif', 'round', 'clean', 'dialogue', 'modern', 'webtoon'],
  emo: ['calm', 'friendly', 'modern'],
  cat: ['speech_bubble', 'webtoon_style', 'informal'],
  notes: 'Smooth rounded sans with a light, modern feel. Works well for calm character dialogue or slice-of-life captions.'
},
{
  name: 'Varela Round',
  source: 'google',
  embed: buildGoogleFontUrl('Varela+Round', '400'),
  url: 'https://fonts.google.com/specimen/Varela+Round',
  tags: ['sans-serif', 'round', 'clean', 'dialogue', 'friendly'],
  emo: ['friendly', 'calm', 'neutral'],
  cat: ['speech_bubble', 'informal', 'comic_standard'],
  notes: 'Simple rounded single-weight sans. Good as a clean secondary dialogue or caption font.'
},
{
  name: 'Comfortaa',
  source: 'google',
  embed: buildGoogleFontUrl('Comfortaa', '300;400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Comfortaa',
  tags: ['round', 'cute', 'friendly', 'dialogue', 'soft', 'webtoon'],
  emo: ['warm', 'cheerful', 'gentle'],
  cat: ['speech_bubble', 'youthful', 'webtoon_style'],
  notes: 'Very round, geometric soft font. Extremely popular for cute webtoons and Shoujo-style dialogue.'
},
{
  name: 'Baloo 2',
  source: 'google',
  embed: buildGoogleFontUrl('Baloo+2', '400;500;600;700;800'),
  url: 'https://fonts.google.com/specimen/Baloo+2',
  tags: ['round', 'bold', 'display', 'title', 'friendly', 'fun'],
  emo: ['joyful', 'energetic', 'friendly'],
  cat: ['display_comic', 'title_page', 'youthful'],
  notes: 'Bubbly, bold display with multiple weights. Versatile for Shounen/comedy manga titles and chapter markers.'
},
{
  name: 'Chewy',
  source: 'google',
  embed: buildGoogleFontUrl('Chewy', '400'),
  url: 'https://fonts.google.com/specimen/Chewy',
  tags: ['display', 'cartoon', 'fun', 'title', 'bold', 'round'],
  emo: ['joyful', 'playful', 'energetic'],
  cat: ['display_comic', 'bold_exaggerated', 'sfx_casual'],
  notes: 'Chunky cartoon display font. Ideal for children-oriented manga, comedy SFX, or fun chapter heading titles.'
},
{
  name: 'Shrikhand',
  source: 'google',
  embed: buildGoogleFontUrl('Shrikhand', '400'),
  url: 'https://fonts.google.com/specimen/Shrikhand',
  tags: ['display', 'bold', 'poster', 'title', 'impact', 'decorative'],
  emo: ['powerful', 'bold', 'confident'],
  cat: ['display_bold', 'title_page', 'sfx_impact'],
  notes: 'Highly decorative display font with strong impact. Great for chapter covers and dramatic manga title cards.'
},
{
  name: 'Yeseva One',
  source: 'google',
  embed: buildGoogleFontUrl('Yeseva+One', '400'),
  url: 'https://fonts.google.com/specimen/Yeseva+One',
  tags: ['serif', 'display', 'elegant', 'title', 'dramatic', 'bold'],
  emo: ['dramatic', 'elegant', 'confident'],
  cat: ['display_serif', 'title_page', 'chapter_heading'],
  notes: 'Bold, expressive serif display. Works for dramatic manga title pages with a literary or cinematic feel.'
},
{
  name: 'Cardo',
  source: 'google',
  embed: buildGoogleFontUrl('Cardo', '400;700'),
  url: 'https://fonts.google.com/specimen/Cardo',
  tags: ['serif', 'classical', 'elegant', 'narration', 'literary', 'historical'],
  emo: ['calm', 'serious', 'formal'],
  cat: ['narration_box', 'display_serif', 'fantasy_style'],
  notes: 'Classical humanist serif. Best for lengthy narration boxes, ancient text inscriptions, or historical/fantasy captions.'
},
{
  name: 'Cinzel Decorative',
  source: 'google',
  embed: buildGoogleFontUrl('Cinzel+Decorative', '400;700;900'),
  url: 'https://fonts.google.com/specimen/Cinzel+Decorative',
  tags: ['serif', 'elegant', 'fantasy', 'ornate', 'title', 'epic'],
  emo: ['epic', 'elegant', 'dramatic'],
  cat: ['display_serif', 'title_page', 'fantasy_style'],
  notes: 'Ornate Roman-capitals serif. Use for epic fantasy arc names, climax chapter titles, or world-map labels.'
},
{
  name: 'Liu Jian Mao Cao',
  source: 'google',
  embed: buildGoogleFontUrl('Liu+Jian+Mao+Cao', '400'),
  url: 'https://fonts.google.com/specimen/Liu+Jian+Mao+Cao',
  tags: ['calligraphy', 'chinese', 'brush', 'artistic', 'display', 'historical'],
  emo: ['artistic', 'calm', 'elegant'],
  cat: ['brush_script', 'display_artistic', 'fantasy_style'],
  notes: 'Chinese cursive calligraphy (cursive script). Excellent for wuxia, xianxia, or Chinese-themed manga chapter headers.'
},
{
  name: 'Long Cang',
  source: 'google',
  embed: buildGoogleFontUrl('Long+Cang', '400'),
  url: 'https://fonts.google.com/specimen/Long+Cang',
  tags: ['calligraphy', 'chinese', 'handwritten', 'casual', 'artistic'],
  emo: ['casual', 'artistic', 'personal'],
  cat: ['handwriting_script', 'brush_script', 'informal'],
  notes: 'Casual Chinese handwriting style. Works for everyday dialogue or notes in Chinese-themed manga settings.'
},
{
  name: 'Hachi Maru Pop',
  source: 'google',
  embed: buildGoogleFontUrl('Hachi+Maru+Pop', '400'),
  url: 'https://fonts.google.com/specimen/Hachi+Maru+Pop',
  tags: ['japanese', 'cute', 'round', 'handwritten', 'webtoon', 'kawaii'],
  emo: ['joyful', 'cheerful', 'playful'],
  cat: ['handwriting_script', 'youthful', 'webtoon_style'],
  notes: 'Kawaii-style rounded Japanese handwriting font. Perfect for cute characters, moe manga, and child character speech.'
},
{
  name: 'Yomogi',
  source: 'google',
  embed: buildGoogleFontUrl('Yomogi', '400'),
  url: 'https://fonts.google.com/specimen/Yomogi',
  tags: ['japanese', 'handwritten', 'cute', 'casual', 'dialogue', 'webtoon'],
  emo: ['warm', 'casual', 'friendly'],
  cat: ['handwriting_script', 'speech_bubble', 'webtoon_style'],
  notes: 'Natural Japanese handwriting font. Great for casual dialogue in slice-of-life or school-setting manga.'
},
{
  name: 'Stick',
  source: 'google',
  embed: buildGoogleFontUrl('Stick', '400'),
  url: 'https://fonts.google.com/specimen/Stick',
  tags: ['japanese', 'thin', 'minimal', 'sci-fi', 'display'],
  emo: ['cold', 'calm', 'minimal'],
  cat: ['display_scifi', 'tech_effect', 'speech_special'],
  notes: 'Ultra-thin Japanese Gothic. Works for minimalist UI panels, cold AI speech, or atmospheric title overlays.'
},
{
  name: 'Zen Antique',
  source: 'google',
  embed: buildGoogleFontUrl('Zen+Antique', '400'),
  url: 'https://fonts.google.com/specimen/Zen+Antique',
  tags: ['japanese', 'serif', 'antique', 'historical', 'elegant', 'display'],
  emo: ['calm', 'nostalgic', 'elegant'],
  cat: ['display_serif', 'fantasy_style', 'title_page'],
  notes: 'Antique-style Japanese-Latin serif. Excellent for historical Japanese settings or literary manga narration.'
},
{
  name: 'Benne',
  source: 'google',
  embed: buildGoogleFontUrl('Benne', '400'),
  url: 'https://fonts.google.com/specimen/Benne',
  tags: ['serif', 'readable', 'narration', 'body', 'neutral'],
  emo: ['calm', 'neutral', 'clear'],
  cat: ['narration_box', 'comic_standard', 'display_serif'],
  notes: 'Clean, wide-spaced serif designed for readability. Good for narration captions or flashback text in manga.'
},
{
  name: 'Lora',
  source: 'google',
  embed: buildGoogleFontUrl('Lora', '400;500;600;700'),
  url: 'https://fonts.google.com/specimen/Lora',
  tags: ['serif', 'literary', 'narration', 'elegant', 'readable', 'body'],
  emo: ['calm', 'serious', 'elegant'],
  cat: ['narration_box', 'display_serif', 'title_page'],
  notes: 'Brushed-stroke literary serif. Excellent for philosophical narration, lengthy flashback text, or literary manga.'
},
{
  name: 'Bitter',
  source: 'google',
  embed: buildGoogleFontUrl('Bitter', '300;400;500;600;700;800;900'),
  url: 'https://fonts.google.com/specimen/Bitter',
  tags: ['slab', 'serif', 'narration', 'readable', 'body', 'strong'],
  emo: ['neutral', 'serious', 'strong'],
  cat: ['narration_box', 'display_serif', 'comic_standard'],
  notes: 'Heavy slab serif designed for screens. One of the most readable narration box fonts available on Google Fonts.'
},
{
  name: 'Lilita One',
  source: 'google',
  embed: buildGoogleFontUrl('Lilita+One', '400'),
  url: 'https://fonts.google.com/specimen/Lilita+One',
  tags: ['display', 'bold', 'impact', 'title', 'sfx', 'heavy'],
  emo: ['powerful', 'loud', 'energetic'],
  cat: ['display_bold', 'sfx_loud', 'title_page'],
  notes: 'Very heavy, condensed display font. Great for high-impact title pages and loud SFX.'
},
{
  name: 'Secular One',
  source: 'google',
  embed: buildGoogleFontUrl('Secular+One', '400'),
  url: 'https://fonts.google.com/specimen/Secular+One',
  tags: ['sans-serif', 'bold', 'display', 'title', 'clean', 'strong'],
  emo: ['strong', 'modern', 'confident'],
  cat: ['display_bold', 'chapter_heading', 'title_page'],
  notes: 'Heavy weight sans with great legibility. Solid choice for chapter titles in modern action or seinen manga.'
},
{
  name: 'Graduate',
  source: 'google',
  embed: buildGoogleFontUrl('Graduate', '400'),
  url: 'https://fonts.google.com/specimen/Graduate',
  tags: ['display', 'collegiate', 'sports', 'vintage', 'title', 'strong'],
  emo: ['confident', 'nostalgic', 'strong'],
  cat: ['display_bold', 'title_page', 'vintage_comic'],
  notes: 'Collegiate/varsity sports font. Perfect for school-setting manga, sports arc chapter titles, or club name banners.'
},
{
  name: 'Stint Ultra Expanded',
  source: 'google',
  embed: buildGoogleFontUrl('Stint+Ultra+Expanded', '400'),
  url: 'https://fonts.google.com/specimen/Stint+Ultra+Expanded',
  tags: ['display', 'expanded', 'wide', 'elegant', 'title', 'dramatic'],
  emo: ['dramatic', 'elegant', 'serious'],
  cat: ['display_serif', 'title_page', 'chapter_heading'],
  notes: 'Ultra-wide spaced serif display. Creates a dramatic, cinematic feel. Use for single-word arc title overlays.'
},


];

// ── UTILITIES ────────────────────────────────────────────────────

/**
 * Returns the <link> tag string(s) needed to embed a font in a browser.
 * Returns null for non-google fonts with no embed URL.
 */
function getFontEmbedTag(font) {
  if (font.source === 'google' && font.embed) {
    return `<link rel="stylesheet" href="${font.embed}">`;
  }
  if (font.source !== 'google' && font.embed) {
    return `@font-face { font-family: '${font.name}'; src: url('${font.embed}'); }`;
  }
  return null;
}

/**
 * Get Google Fonts batch URL — combine up to ~15 fonts in a single request
 * for optimal loading performance.
 * @param {string[]} familyNames - Array of exact Google Font family names
 */
function getGoogleFontsBatchUrl(familyNames) {
  const params = familyNames
    .map(name => `family=${name.replace(/ /g, '+')}`)
    .join('&');
  return `https://fonts.googleapis.com/css2?${params}&display=swap`;
}

/**
 * Filter fonts by use case.
 * @param {string} useCase - 'dialogue' | 'sfx' | 'narration' | 'title' | 'horror' | 'romance' | 'scifi' | 'fantasy' | 'handwritten'
 */
function getFontsByUseCase(useCase) {
  const mapping = {
    dialogue:    f => f.tags.includes('dialogue') || f.cat.includes('speech_bubble'),
    sfx:         f => f.tags.includes('sfx') || f.cat.some(c => c.startsWith('sfx_')),
    narration:   f => f.tags.includes('narration') || f.cat.includes('narration_box'),
    title:       f => f.tags.includes('title') || f.cat.includes('title_page') || f.cat.includes('chapter_heading'),
    horror:      f => f.tags.includes('horror') || f.cat.includes('horror_effect'),
    romance:     f => f.tags.includes('romance') || f.cat.includes('shoujo_style'),
    scifi:       f => f.tags.includes('sci-fi') || f.cat.includes('display_scifi') || f.cat.includes('tech_effect'),
    fantasy:     f => f.tags.includes('fantasy') || f.cat.includes('fantasy_style'),
    handwritten: f => f.tags.includes('handwritten') || f.cat.includes('handwriting_script'),
    thought:     f => f.tags.includes('thought_bubble') || f.tags.includes('thought'),
    webtoon:     f => f.tags.includes('webtoon'),
  };
  return FONTS.filter(mapping[useCase] || (() => false));
}

/**
 * Get all Google Fonts from the dataset (for cloud embed).
 */
function getGoogleFonts() {
  return FONTS.filter(f => f.source === 'google');
}

/**
 * Generate a combined Google Fonts stylesheet URL for all Google fonts.
 * Split into chunks of 15 for URL length safety.
 */
function getAllGoogleFontsUrls(chunkSize = 15) {
  const gFonts = getGoogleFonts();
  const urls = [];
  for (let i = 0; i < gFonts.length; i += chunkSize) {
    const chunk = gFonts.slice(i, i + chunkSize);
    const params = chunk.map(f => {
      const name = f.name.replace(/ /g, '+');
      return `family=${name}`;
    }).join('&');
    urls.push(`https://fonts.googleapis.com/css2?${params}&display=swap`);
  }
  return urls;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FONTS, buildGoogleFontUrl, getFontEmbedTag, getGoogleFontsBatchUrl, getFontsByUseCase, getGoogleFonts, getAllGoogleFontsUrls };
}
