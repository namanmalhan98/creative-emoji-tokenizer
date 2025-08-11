// My Creative Emoji Mood Coder - Not just numbers, but meaningful codes!
// Converts emojis to mood-based codes that actually make sense

// I created meaningful codes based on what each emoji represents
const emojiMoods = {
  // Happy and positive emotions
  "😀": "HAPPY", "😂": "LAUGH", "😍": "LOVE", "😎": "COOL",
  
  // Heart and love feelings
  "❤": "HEART", "💕": "SWEET", "💔": "SAD", "💖": "SPARKLE",
  
  // Food cravings and tastes
  "🍕": "PIZZA", "🍔": "BURGER", "🍦": "SWEET", "🍺": "PARTY",
  
  // Nature and beauty
  "🌺": "FLOWER", "🌙": "NIGHT", "⭐": "STAR", "🌈": "COLOR",
  
  // Unknown emoji gets a mysterious code
  "UNKNOWN": "MYSTERY"
};

// Main class that converts emojis to mood codes
class EmojiMoodCoder {
  
  constructor() {
    this.emojiToMood = emojiMoods;
    // Create reverse lookup for decoding
    this.moodToEmoji = {};
    for (let emoji in emojiMoods) {
      this.moodToEmoji[emojiMoods[emoji]] = emoji;
    }
  }
  
  // Convert emojis to mood codes (the creative part!)
  toMoodCodes(emojiText) {
    let moodStory = [];
    let chars = Array.from(emojiText);
    
    for (let i = 0; i < chars.length; i++) {
      let emoji = chars[i];
      if (this.emojiToMood[emoji]) {
        moodStory.push(this.emojiToMood[emoji]);
      } else {
        moodStory.push(this.emojiToMood["UNKNOWN"]);
      }
    }
    
    return moodStory;
  }
  
  // Convert mood codes back to emojis
  toEmojis(moodArray) {
    let emojiStory = "";
    
    for (let i = 0; i < moodArray.length; i++) {
      let mood = moodArray[i];
      if (this.moodToEmoji[mood]) {
        emojiStory += this.moodToEmoji[mood];
      } else {
        emojiStory += "UNKNOWN";
      }
    }
    
    return emojiStory;
  }
  
  // Bonus: Create a mood story from emojis!
  createMoodStory(emojiText) {
    let moods = this.toMoodCodes(emojiText);
    return "Mood: " + moods.join(" + ") + " = " + this.describeMood(moods);
  }
  
  // Describe what the mood combination means
  describeMood(moodArray) {
    if (moodArray.includes("HAPPY") && moodArray.includes("PIZZA")) {
      return "Happy person enjoying pizza! 🍕";
    } else if (moodArray.includes("LOVE") && moodArray.includes("HEART")) {
      return "Double love! 💕";
    } else if (moodArray.includes("SAD") && moodArray.includes("PARTY")) {
      return "Sad but trying to party! 🍺";
    } else {
      return "Mixed emotions! " + moodArray.join(" ");
    }
  }
}

module.exports = EmojiMoodCoder;
