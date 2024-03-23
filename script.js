function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function evaluateEquivalence() {
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);

    // Використання простого умовного виразу для визначення еквівалентності
    // та передача результату через сигмоїдну функцію для імітації виводу нейронної мережі.
    const output = sigmoid(input1 === input2 ? 10 : -10); // Великі значення для більшої впевненості

    // Виведення результату, округленого до двох знаків після коми
    document.getElementById("output").innerText = output.toFixed(2) >= 0.5 ? "Еквівалентні" : "Не еквівалентні";
}

// Додавання події "Enter" для поліпшення користувацького досвіду
document.getElementById("input1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        evaluateEquivalence();
    }
});

document.getElementById("input2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        evaluateEquivalence();
    }
});
