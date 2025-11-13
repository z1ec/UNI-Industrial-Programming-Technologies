function immediatePromise() {
    return new Promise((resolve) => {
        setImmediate(() => {
            resolve();
        });
    });
}


function nextTickPromise() {
    return new Promise((resolve) => {
        process.nextTick(() => {
            resolve();
        });
    });
}

function nextTickPromiseWithValue(value) {
    return new Promise((resolve) => {
        process.nextTick(() => {
            resolve(value);
        });
    });
}

function immediatePromiseWithValue(value) {
    return new Promise((resolve) => {
        setImmediate(() => {
            resolve(value);
        });
    });
}

async function exampleWithValues() {
    console.log('\n--- Пример с возвратом значений ---');

    const nextTickResult = await nextTickPromiseWithValue('Данные из nextTick');
    console.log(nextTickResult);

    const immediateResult = await immediatePromiseWithValue('Данные из immediate');
    console.log(immediateResult);
}

exampleWithValues();

//Вывод из консоли:
// --- Пример с возвратом значений ---
// Данные из nextTick
// Данные из immediate
// (base) vav3538@MacBook-Air-Vladimir KR-3 % 