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
    url: 'https://fonts.google.com/specimen/Bangers',
    tags: ['sfx', 'comic', 'loud', 'impact'],
    emo: ['energetic', 'intense', 'shouting'],
    cat: ['display_comic', 'sfx_loud', 'bold_exaggerated'],
    notes: 'Classic comic-style action font for loud SFX or impact words.'
  },
  {
    name: 'Rubik Glitch',
    source: 'google',
    url: 'https://fonts.google.com/specimen/Rubik+Glitch',
    tags: ['sfx', 'glitch', 'digital', 'distorted'],
    emo: ['chaotic', 'intense', 'techy'],
    cat: ['display_distorted', 'tech_effect', 'experimental'],
    notes: 'Glitchy, distorted style suitable for digital effects or visual dissonance.'
  },
  {
    name: 'Shadows Into Light',
    source: 'google',
    url: 'https://fonts.google.com/specimen/Shadows+Into+Light',
    tags: ['handwritten', 'casual', 'friendly', 'cute'],
    emo: ['warm', 'cheerful', 'sincere'],
    cat: ['handwriting_script', 'informal', 'lighthearted'],
    notes: 'A clean and flowing handwritten script; great for cheerful or sincere tone.'
  },
  {
    name: 'Caveat Brush',
    source: 'google',
    url: 'https://fonts.google.com/specimen/Caveat+Brush',
    tags: ['handwritten', 'playful', 'childlike', 'friendly'],
    emo: ['joyful', 'casual', 'honest'],
    cat: ['brush_script', 'informal_handwriting', 'youthful'],
    notes: 'Free-flowing brush handwriting with a youthful, playful energy.'
  },
  {
    name: 'Rubik Wet Paint',
    source: 'google',
    url: 'https://fonts.google.com/specimen/Rubik+Wet+Paint',
    tags: ['distressed', 'horror', 'grunge', 'artistic'],
    emo: ['uneasy', 'edgy', 'aggressive'],
    cat: ['display_distressed', 'horror_effect', 'experimental_artistic'],
    notes: 'Wet-paint dripping effect; ideal for horror, edgy or intense emotion scenes.'
  }
];