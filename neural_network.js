// Випадкова ініціалізація ваг
function initializeWeights(size) {
    return Array.from({ length: size }, () => Math.random() - 0.5);
}

// Сигмоїдна функція активації та її похідна
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function sigmoidDerivative(x) {
    return x * (1 - x);
}

// Пряме поширення
function forward(inputs, weights) {
    return sigmoid(inputs.reduce((sum, input, i) => sum + input * weights[i], 0));
}

// Зворотне поширення
function train(X, y, weights, epochs = 10000, learningRate = 0.1) {
    for (let epoch = 0; epoch < epochs; epoch++) {
        for (let i = 0; i < X.length; i++) {
            const input = X[i];
            const expected = y[i];

            // Пряме поширення
            const output = forward(input, weights);

            // Вирахування помилки
            const error = expected - output;

            // Зворотне поширення
            for (let j = 0; j < weights.length; j++) {
                weights[j] += learningRate * error * sigmoidDerivative(output) * input[j];
            }
        }
    }
}

// Основна функція
function main() {
    // Навчальні дані
    const X = [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
    ];
    const y = [1, 0, 0, 1]; // Виходи для XNOR

    // Ініціалізація ваг
    const weights = initializeWeights(X[0].length);

    // Навчання нейромережі
    train(X, y, weights);

    return weights;
}

const trainedWeights = main();

// Функція для прогнозування
function predict() {
    const input1 = parseInt(document.getElementById('input1').value);
    const input2 = parseInt(document.getElementById('input2').value);
    const output = forward([input1, input2], trainedWeights);
    document.getElementById('output').innerText = output >= 0.5 ? 1 : 0;
}
