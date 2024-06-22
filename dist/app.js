"use strict";
// Elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvxyz';
const numbersChars = '0123456789';
const symbolsChars = '!@#$%&^*()';
let generatedPassword;
function generateRondomPassword() {
    let password = '';
    let length = Number(lengthEl.value);
    let chars = '';
    chars += uppercaseEl.checked ? uppercaseChars : '';
    chars += lowercaseEl.checked ? lowercaseChars : '';
    chars += numbersEl.checked ? numbersChars : '';
    chars += symbolsEl.checked ? symbolsChars : '';
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand + 1);
    }
    return password;
}
function updateUiPassword(data) {
    passwordEl.value = data;
}
// BUttons
const getPasswordBtn = document.getElementById('generate');
const generateAnotherWay = document.getElementById('generateAnotherWay');
// Alternative way
let allChars;
allChars = [
    ...uppercaseChars,
    ...lowercaseChars,
    ...numbersChars,
    ...symbolsChars,
];
function getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function generatePassword(array, lengthValue) {
    const randomItems = [];
    for (let i = 0; i < lengthValue; i++) {
        const randomIndex = getRandomIndex(array);
        randomItems.push(randomIndex);
    }
    return randomItems;
}
function displayPasswortUi() {
    const konacno = generatePassword(allChars, Number(lengthEl.value));
    const packed = konacno.join('');
    passwordEl.value = packed;
}
// execution
getPasswordBtn.addEventListener('click', () => {
    generatedPassword = generateRondomPassword();
    updateUiPassword(generatedPassword);
});
generateAnotherWay === null || generateAnotherWay === void 0 ? void 0 : generateAnotherWay.addEventListener('click', displayPasswortUi);
