const text =
    "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

// Hàm 1
function getWords(text) {
    return text.split(" ");
}
console.log(getWords(text));
// ["javascript", "là", "ngôn", "ngữ", "lập", "trình", "phổ", "biến", "javascript", "chạy", "trên", "trình", "duyệt", "và", "javascript", "cũng", "chạy", "trên", "server"]

// Hàm 2
function countWord(text, word) {
    let count = 0;
    const words = getWords(text);
    for (let currentWord of words) {
        if (currentWord === word) {
            count++;
        }
    }
    return count;
}
console.log(countWord(text, "javascript")); // 3
console.log(countWord(text, "chạy")); // 2
console.log(countWord(text, "python")); // 0

// Hàm 3
function getUniqueWords(text) {
    const words = getWords(text);
    const uniqueWords = words.filter((word, index) => {
        return words.indexOf(word) === index;
    });
    return uniqueWords.sort();
}
console.log(getUniqueWords(text));
// ["và", "biến", "chạy", "cũng", "duyệt", "javascript", "là", "lập", "ngôn", "ngữ", "phổ", "server", "trên", "trình"]
// (sắp xếp alphabet, không trùng)

// Hàm 4
function getTopWords(text, n) {
    const words = getWords(text);
    const result = words.map(word => {
        const count = words.filter(item => item === word).length;
        return {
            word: word,
            count: count
        };
    });
    const uniqueObject = result.filter((item, index) => {
        return result.findIndex(otherItem => otherItem.word === item.word) === index;
    });
    return uniqueObject.sort((a, b) => b.count - a.count).slice(0, n);
}
console.log(getTopWords(text, 3));
// [
//   { word: "javascript", count: 3 },
//   { word: "chạy", count: 2 },
//   { word: "trên", count: 2 },
// ]

// Hàm 5
function highlight(text, word) {
    const words = text.split(" ");
    const result = [];
    for (let currentWord of words) {
        if (currentWord === word) {
            result.push(`**${currentWord}**`);
        } else {
            result.push(currentWord);
        }
    }
    return result.join(" ");
}

console.log(highlight(text, "javascript"));
// "**javascript** là ngôn ngữ lập trình phổ biến **javascript** chạy trên trình duyệt và **javascript** cũng chạy trên server"
