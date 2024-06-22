// Elements
const passwordEl = document.getElementById('password') as HTMLInputElement;
const lengthEl = document.getElementById('length') as HTMLInputElement;
const uppercaseEl = document.getElementById('uppercase') as HTMLInputElement;
const lowercaseEl = document.getElementById('lowercase') as HTMLInputElement;
const numbersEl = document.getElementById('numbers') as HTMLInputElement;
const symbolsEl = document.getElementById('symbols') as HTMLInputElement;

const uppercaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';
const lowercaseChars: string = 'abcdefghijklmnopqrstuvxyz';
const numbersChars: string = '0123456789';
const symbolsChars: string = '!@#$%&^*()';

let generatedPassword: string;

function generateRondomPassword(): string {
  let password: string = '';
  let length = Number(lengthEl.value);
  let chars: string = '';

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

function updateUiPassword(data: string) {
  passwordEl.value = data;
}

// BUttons

const getPasswordBtn = document.getElementById('generate') as HTMLButtonElement;
const generateAnotherWay = document.getElementById(
  'generateAnotherWay'
) as HTMLBRElement;

// Alternative way

let allChars: string[];

allChars = [
  ...uppercaseChars,
  ...lowercaseChars,
  ...numbersChars,
  ...symbolsChars,
];
function getRandomIndex(arr: string[]): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword(array: string[], lengthValue: number): string[] {
  const randomItems: string[] = [];
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

generateAnotherWay?.addEventListener('click', displayPasswortUi);
