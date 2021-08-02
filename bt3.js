let vowel = ["a", "o", "e", "u", "i"];
let countVowe = null;
function countCharacters(str) {
    countVowe = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (str[1] == vowel[j]) {
                countVowel++;
            }
        }
    }
    return countVowel;
}
let str = prompt("nhập vào chuỗi bất kỳ");
let result = countCharacters(str);
alert("Tổng số ký tự tìm được trong chuỗi: " + result);