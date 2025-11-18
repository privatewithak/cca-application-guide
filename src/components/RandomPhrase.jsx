


export default function RandomPhrase() {
const PHRASES = [
  "Stay consistent. Improvement follows clarity.",
  "Every strong writer starts with a single clean sentence.",
  "Precision is a habit, not a talent.",
  "Small steps in wording create big steps in quality.",
  "Clarity today becomes confidence tomorrow.",
  "Write with intention, not pressure.",
  "Controlled tone is stronger than complex phrasing.",
  "Progress grows from steady discipline.",
  "Your ideas matter more when expressed clearly.",
  "Keep refining. Every edit makes you better."
];

const FOOTER_PHRASE =
  PHRASES[Math.floor(Math.random() * PHRASES.length)];
    
    return FOOTER_PHRASE;
}