const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 2,
  },
  wordsPerSentence: {
    max: 32,
    min: 4,
  },
});

console.log(lorem.generateWords(1));
console.log(lorem.generateSentences(5));
console.log(lorem.generateParagraphs(7));
