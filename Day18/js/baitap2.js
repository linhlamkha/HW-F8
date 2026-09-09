// Hàm 1: createCalculator()
const calculator = createCalculator();
function createCalculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => (b === 0 ? "Lỗi: chia cho 0" : a / b),
    };
}

console.log(calculator.add(2, 3)); // 5
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 5)); // 15
console.log(calculator.divide(10, 2)); // 5
console.log(calculator.divide(10, 0)); // "Lỗi: chia cho 0"

// Hàm 2: average(...numbers)

function average(...numbers) {
    let average = 0;
    for (let number of numbers) {
        average += number;
    }
    if (numbers.length === 0) return 0;
    return average / numbers.length;
}

console.log(average(10, 20, 30)); // 20
console.log(average(5)); // 5
console.log(average()); // 0
console.log(average(1, 2, 3, 4, 5)); // 3

// Hàm 3: applyDiscount(price, discountPercent = 10)
function applyDiscount(price, discountPercent = 10) {
    if (typeof price !== "number" || isNaN(price)) return "Giá không hợp lệ";
    return price - (price * discountPercent) / 100;
}
console.log(applyDiscount(100000)); // 90000  (giảm 10% mặc định)
console.log(applyDiscount(100000, 20)); // 80000
console.log(applyDiscount(100000, 0)); // 100000
console.log(applyDiscount("abc", 10)); // "Giá không hợp lệ"
console.log(applyDiscount(NaN, 10)); // "Giá không hợp lệ"

// Hàm 4: safeCalculate(operation, ...numbers)
function safeCalculate(operation, ...numbers) {
    let total = 0;

    const operations = {
        add: () =>
            numbers.reduce((total, number) => {
                return total + number;
            }, 0),
        subtract: () =>
            numbers.reduce((result, number) => {
                return result - number;
            }),
        multiply: () =>
            numbers.reduce((result, number) => {
                return result * number;
            }, 1),
        average: () => {
            const average = numbers.reduce((total, number) => {
                return total + number;
            }, 0);
            return average / numbers.length;
        },
    };
    const action = operations[operation];
    if (!action)
        return "Phép tính không được hỗ trợ";
    const result = action();
    
    if (typeof result !== "number" || Number.isNaN(result)) return "Kết quả không hợp lệ";
    return result;
}
console.log(safeCalculate("add", 1, 2, 3)); // 6
console.log(safeCalculate("multiply", 2, 3, 4)); // 24
console.log(safeCalculate("average", 10, 20)); // 15
console.log(safeCalculate("divide", 10, 2)); // "Phép tính không được hỗ trợ"
console.log(safeCalculate("add", 1, "abc", 3)); // "Kết quả không hợp lệ"
