// Testing my creative emoji mood coder
const EmojiMoodCoder = require('./emoji-tokenizer');

// Create an instance
const coder = new EmojiMoodCoder();

console.log("🎭 My Creative Emoji Mood Coder!");
console.log("Not just numbers - meaningful mood codes!\n");

// Test 1: Basic mood conversion
console.log("Test 1: Happy emotions");
let emojis = "😀😍";
let moods = coder.toMoodCodes(emojis);
let backToEmojis = coder.toEmojis(moods);
console.log(emojis, "→", moods);
console.log(moods, "→", backToEmojis);
console.log("Mood story:", coder.createMoodStory(emojis), "\n");

// Test 2: Food and party moods
console.log("Test 2: Food and party moods");
emojis = "🍕🍔🍺";
moods = coder.toMoodCodes(emojis);
backToEmojis = coder.toEmojis(moods);
console.log(emojis, "→", moods);
console.log(moods, "→", backToEmojis);
console.log("Mood story:", coder.createMoodStory(emojis), "\n");

// Test 3: Mixed emotions
console.log("Test 3: Mixed emotions");
emojis = "😀❤🍕";
moods = coder.toMoodCodes(emojis);
backToEmojis = coder.toEmojis(moods);
console.log(emojis, "→", moods);
console.log(moods, "→", backToEmojis);
console.log("Mood story:", coder.createMoodStory(emojis), "\n");

// Test 4: Unknown emojis
console.log("Test 4: Unknown emojis");
emojis = "🚀🎯";
moods = coder.toMoodCodes(emojis);
backToEmojis = coder.toEmojis(moods);
console.log(emojis, "→", moods);
console.log(moods, "→", backToEmojis);
console.log("Mood story:", coder.createMoodStory(emojis), "\n");

// Test 5: Special mood combinations
console.log("Test 5: Special mood combinations");
emojis = "😂💔🍺";
moods = coder.toMoodCodes(emojis);
console.log(emojis, "→", moods);
console.log("Mood story:", coder.createMoodStory(emojis), "\n");

console.log("🎉 Amazing! This is way more creative than boring numbers!");
console.log("Total mood codes I know:", Object.keys(coder.emojiToMood).length - 1);
console.log("Now emojis tell stories, not just random codes!");
