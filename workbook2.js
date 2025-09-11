console.log("Задание 1");
let songName = "I'm a barbie girl";
console.log("Now playing: " + songName);

console.log("Задание 2");
let catMood = "angry";
console.log("Your cat is " + catMood);

console.log("Задание 3");
let isImpostor = true;
console.log("Red is impostor? " + isImpostor);

console.log("Задание 4");
let wow = "wow";
let soJS = "so JavaScript";
let muchCode = "much code";
console.log(wow + " " + soJS + " " + muchCode);

console.log("Задание 5");
let likes = 77;
let verified = false;
console.log("Тип likes:", typeof likes);
console.log("Тип verified:", typeof verified);

console.log("Задание 6");
let isOnion = true;
console.log("Тип isOnion:", typeof isOnion);

console.log("Задание 7");
let year = 2077;
let hero = "V";
let isBuggy = true;
console.log("Тип year:", typeof year);
console.log("Тип hero:", typeof hero);
console.log("Тип isBuggy:", typeof isBuggy);

console.log("Задание 8");
let prize = 1000000;
console.log("Тип prize:", typeof prize);

console.log("Задание 9");
let situation = "fire";
let reaction = "this is fine";
console.log("Тип situation:", typeof situation);
console.log("Тип reaction:", typeof reaction);

console.log("Задание 10");
let nickname = "Player123";
console.log("Добро пожаловать на сервер, " + nickname);

console.log("Задание 11");
let show = "Breaking Bad";
console.log("Сегодня смотрим: " + show);

console.log("Задание 12");
let wantDocs = true;
if (wantDocs) {
    console.log("Never gonna give you up");
}

console.log("Задание 13");
let hours = "5";
console.log("Бро, это " + hours + " часов... иди потрогай траву");

console.log("Задание 14");
let bitcoinPrice = "50000";
let convertedPrice = Number(bitcoinPrice) + 1000;
console.log("Новая цена: " + convertedPrice);

console.log("Задание 15");
let n = "3";
let numN = Number(n);
console.log("Skibidi ".repeat(numN));

console.log("Задание 16");
let coffees = "2";
let totalCoffees = Number(coffees) + 1;
console.log("Всего кофе: " + totalCoffees);

console.log("Задание 17");
let karma = "50";
let totalKarma = Number(karma) + 10;
console.log("Общая карма: " + totalKarma);

console.log("Задание 18");
let likesCount = "100";
let totalLikes = Number(likesCount) + 420;
console.log("Всего лайков: " + totalLikes);

console.log("Задание 19");
let money = 1000;
money += 250;
console.log("Деньги: " + money);

console.log("Задание 20");
let coins = 350;
let boosters = 5;
let totalScore = coins + boosters * 100;
console.log("Общий счет: " + totalScore);

console.log("Задание 21");
let pikachuHP = 100;
let attack = 35;
pikachuHP -= attack;
console.log("HP Пикачу: " + pikachuHP);

console.log("Задание 22");
let players = 456;
let eliminated = 100;
let remainingPlayers = players - eliminated;
console.log("Осталось игроков: " + remainingPlayers);

console.log("Задание 23");
let a = 10;
let b = 3;
console.log("Деление: " + (a / b));
console.log("Остаток: " + (a % b));

console.log("Задание 1 (сложные)");
let radius = 10;
let circumference = 2 * Math.PI * radius;
console.log("Длина окружности: " + circumference.toFixed(2));

console.log("Задание 2 (сложные)");
let side = 15;
let squareArea = side * side;
console.log("Площадь квадрата: " + squareArea);

console.log("Задание 3");
let side1 = 8;
let side2 = 12;
console.log("Площадь прямоугольника: " + (side1 * side2));

console.log("Задание 4 (сложные)");
let triangleSide1 = 7;
let triangleSide2 = 9;
let triangleSide3 = 13;
let trianglePerimeter = triangleSide1 + triangleSide2 + triangleSide3;
console.log("Периметр треугольника: " + trianglePerimeter);

console.log("Задание 5 (сложные)");
let number = 81;
let squareRoot = Math.sqrt(number);
console.log("Квадратный корень из 81: " + squareRoot);

console.log("Задание 6 (сложные)");
let expressionResult = (12 + 7) * 3;
console.log("(12 + 7) * 3 = " + expressionResult);

console.log("Задание 7 (сложные)");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("17 простое число? " + isPrime(17));

console.log("Задание 8 (сложные)");
let maxNumber = Math.max(45, 12, 78);
console.log("Максимальное число: " + maxNumber);

console.log("Задание 9 (сложные)");
let userNumbers = "10,20,5,30,15";
let numbersArray = userNumbers.split(',').map(Number);
let minNumber = Math.min(...numbersArray);
console.log("Минимальное число: " + minNumber);

console.log("Задание 10 (сложные)");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Случайное число (1-100): " + randomNumber);

console.log("Задание 11 (сложные)");
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Бросок кубика: " + diceRoll);

console.log("Задание 12 (сложные)");
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Факториал 6: " + factorial(6));

console.log("Задание 13 (сложные)");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Сумма чисел от 1 до 100: " + sum);

console.log("Задание 14 (сложные)");
let userNumbersAvg = "10,20,30,40";
let numbersArrayAvg = userNumbersAvg.split(',').map(Number);
let average = numbersArrayAvg.reduce((a, b) => a + b, 0) / numbersArrayAvg.length;
console.log("Среднее арифметическое: " + average);

console.log("Задание 15 (сложные)");
let bigNumber = 123456789;
let digitCount = bigNumber.toString().length;
console.log("Количество цифр в числе: " + digitCount);

console.log("Задание 16 (сложные)");
let palindromeNumber = 121;
let isPalindrome = palindromeNumber.toString() === palindromeNumber.toString().split('').reverse().join('');
console.log("121 палиндром? " + isPalindrome);

console.log("Задание 17 (сложные)");
console.log("Таблица умножения на 7:");
for (let i = 1; i <= 10; i++) {
    console.log("7 × " + i + " = " + (7 * i));
}

console.log("Задание 18 (сложные)");
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log("НОД 56 и 98: " + gcd(56, 98));

console.log("Задание 19 (сложные)");
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
console.log("НОК 12 и 18: " + lcm(12, 18));

console.log("Задание 20 (сложные)");
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("10-е число Фибоначчи: " + fibonacci(10));