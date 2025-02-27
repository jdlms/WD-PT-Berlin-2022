// to check if an array method changes the original array
// https://doesitmutate.xyz/

const countWordOccurences = (agg, val) => ({
  ...agg,
  [val]: agg[val] ? agg[val] + 1 : 1,
});
const toLowerCase = (str) => str.toLowerCase();

const firstHarryPotterChapter = `Mr. and Mrs. Dursley of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange or mysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere. The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn't think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley's sister, but they hadn't met for several years; in fact, Mrs. Dursley pretended she didn't have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn't want Dudley mixing with a child like that. When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our story starts, there was nothing about the cloudy sky outside to suggest that strange and mysterious things would soon be happening all over the country. Mr. Dursley hummed as he picked out his most boring tie for work, and Mrs. Dursley gossiped away happily as she wrestled a screaming Dudley into his high chair. None of them noticed a large, tawny owl flutter past the window. At half past eight, Mr. Dursley picked up his briefcase, pecked Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but missed, because Dudley was now having a tantrum and throwing his cereal at the walls. 'Little tyke,' chortled Mr. Dursley as he left the house. He got into his car and backed out of number four's drive. It was on the corner of the street that he noticed the first sign of something peculiar a cat reading a map. For a second, Mr. Dursley didn't realize what he had seen then he jerked his head around to look again. There was a tabby cat standing on the corner of Privet Drive, but there wasn't a map in sight. What could he have been thinking of? It must have been a trick of the light. Mr. Dursley blinked and stared at the cat. It stared back. As Mr. Dursley drove around the corner and up the road, he watched the cat in his mirror. It was now reading the sign that said Privet Drive no, looking at the sign; cats couldn't read maps or signs. Mr. Dursley gave himself a little shake and put the cat out of his mind. As he drove toward town he thought of nothing except a large order of drills he was hoping to get that day. But on the edge of town, drills were driven out of his mind by something else. As he sat in the usual morning traffic jam, he couldn't help noticing that there seemed to be a lot of strangely dressed people about. People in cloaks. Mr. Dursley couldn't bear people who dressed in funny clothes the getups you saw on young people!`;

const harryPotterWords = firstHarryPotterChapter
  .replace(/[,.;]/g, "")
  .split(" ");
const wordOccurences = harryPotterWords
  .map(toLowerCase)
  .reduce(countWordOccurences, {});

console.log(wordOccurences);

const uniqueWords = Object.keys(wordOccurences);
console.log(uniqueWords);

const regularWords = uniqueWords.filter((word) => wordOccurences[word] > 1);
console.log(regularWords);
console.log(regularWords.length);
console.log(uniqueWords.length);

const wordsThatAppearExactlyOnce = uniqueWords.filter(
  (word) => wordOccurences[word] === 1
);
console.log(wordsThatAppearExactlyOnce.length);

const byOccurence = (w1, w2) => wordOccurences[w2] - wordOccurences[w1];

const sortedByOccurence = uniqueWords.sort(byOccurence);
console.log(sortedByOccurence);

const regularWordsSorted = regularWords.sort(byOccurence);
console.log("Regular Words Sorted by Frequency:", regularWordsSorted);

const sortedWordsWithOccurence = regularWordsSorted.map((word) => {
  return { word, occurences: wordOccurences[word] };
});

console.log(sortedWordsWithOccurence);
const onlyOver10 = sortedWordsWithOccurence.filter((elementFromArray) => {
  return elementFromArray.occurences >= 10;
});

console.log("onlyOver10:", onlyOver10.reverse());

const sorted = harryPotterWords.sort((a, b) => b.length - a.length);
console.log(sorted);
